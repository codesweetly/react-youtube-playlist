import React, { ReactElement, useRef, useEffect, useState } from "react";
import {
  YouTubePlaylistPropsType,
  PlaylistData,
} from "./YouTubePlaylist.types";
import { youTubePlaylistStyles } from "./youTubePlaylistStyles";
import getPlaylistData from "./getPlaylistData";

const loaderContainerStyle = youTubePlaylistStyles().loaderContainerStyle;
const galleryContainerStyle = youTubePlaylistStyles().galleryContainerStyle;
const imageBtnStyle = youTubePlaylistStyles().imageBtnStyle;
const videoContainerStyle = youTubePlaylistStyles().videoContainerStyle;
const videoImageStyle = youTubePlaylistStyles().videoImageStyle;
const videoCaptionStyle = youTubePlaylistStyles().videoCaptionStyle;
const modalContainerStyle = youTubePlaylistStyles().modalContainerStyle;
const modalSlideNumberStyle = youTubePlaylistStyles().modalSlideNumberStyle;
const modalToolbarStyle = youTubePlaylistStyles().modalToolbarStyle;
const modalToolbarBtnStyle = youTubePlaylistStyles().modalToolbarBtnStyle;
const modalSlideShowSectionStyle =
  youTubePlaylistStyles().modalSlideShowSectionStyle;
const modalIFrameStyle = youTubePlaylistStyles().modalIFrameStyle;
const modalSlideBtnStyle = youTubePlaylistStyles().modalSlideBtnStyle;

export function YouTubePlaylist({
  apiKey,
  playlistId,
  uniqueName,
}: YouTubePlaylistPropsType) {
  const [videoId, setVideoId] = useState("");
  const [slideNumber, setSlideNumber] = useState(1);
  const [playlistDataArray, setPlaylistDataArray] = useState<
    PlaylistData[] | null
  >(null);
  const [isNotFetchingData, setIsNotFetchingData] = useState(true);
  const [uniqueNameParsed] = useState(
    uniqueName.toLowerCase().replace(/\s/g, "-")
  );
  const [showModalControls, setShowModalControls] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const lastCardRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lightboxRef = useRef<HTMLElement | null>(null);

  function openLightboxOnSlide(vId: string, number: number) {
    setVideoId(vId);
    setSlideNumber(number);
    dialogRef.current?.showModal();
  }

  function handleKeyDownOnModal(e: React.KeyboardEvent<HTMLElement>) {
    e.key === "ArrowLeft" && changeSlide(-1);
    e.key === "ArrowRight" && changeSlide(1);
    e.key === "f" && fullscreen && switchFullScreen(false);
    e.key === "f" && !fullscreen && switchFullScreen(true);
  }

  function exitFullScreenAndDialog() {
    setVideoId("");
    dialogRef.current?.close();
    fullscreen && switchFullScreen(false);
  }

  function switchFullScreen(on: boolean) {
    if (on) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(
          `Error while attempting to switch into fullscreen mode: ${error.message} (${error.name})`
        );
      });
    }
    if (!on) {
      document.exitFullscreen().catch((error) => console.error(error));
    }
  }

  function SvgElement(pathElement: ReactElement) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        {pathElement}
      </svg>
    );
  }

  function changeSlide(directionNumber: number) {
    const totalVideos = playlistDataArray?.length;
    let newSlideNumber = slideNumber + directionNumber;
    if (totalVideos) {
      newSlideNumber < 1 && (newSlideNumber = totalVideos);
      newSlideNumber > totalVideos && (newSlideNumber = 1);
      if (newSlideNumber <= totalVideos && newSlideNumber > 0) {
        setSlideNumber(newSlideNumber);
        setVideoId(playlistDataArray[newSlideNumber - 1].resourceId.videoId);
      }
    }
  }

  async function saveSubsequentPlaylistAndURLDataArrayToState() {
    if (playlistDataArray) {
      const lastGalleryItem = playlistDataArray[playlistDataArray.length - 1];
      try {
        const newPlaylistData = await getPlaylistData(
          apiKey,
          playlistId,
          lastGalleryItem.nextPageToken
        );
        setPlaylistDataArray([...playlistDataArray, ...newPlaylistData]);
      } catch (e) {
        console.error(`Error getting next page playlist data: ${e}`);
      }
      setIsNotFetchingData(true);
    }
  }

  function getVideoCardsArray() {
    return playlistDataArray?.map((item, index) => {
      if (item.title !== "Deleted video" && item.title !== "Private video") {
        return (
          <button
            type="button"
            ref={index + 1 === playlistDataArray.length ? lastCardRef : null}
            style={imageBtnStyle}
            key={crypto.randomUUID()}
          >
            <figure
              style={videoContainerStyle}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                openLightboxOnSlide(item.resourceId.videoId, index + 1)
              }
            >
              <img
                alt={`Video ${index + 1} of ${playlistDataArray.length}`}
                src={item.thumbnails.high.url}
                onClick={() =>
                  openLightboxOnSlide(item.resourceId.videoId, index + 1)
                }
                style={videoImageStyle}
              />
              <figcaption style={videoCaptionStyle}>{item.title}</figcaption>
            </figure>
          </button>
        );
      } else {
        return "";
      }
    });
  }

  useEffect(() => {
    async function saveInitialPlaylistAndURLDataArrayToState() {
      try {
        const newPlaylistData = await getPlaylistData(apiKey, playlistId);
        setPlaylistDataArray(newPlaylistData);
      } catch (e) {
        console.error(`Error getting playlist data: ${e}`);
      }
    }
    saveInitialPlaylistAndURLDataArrayToState();
  }, [apiKey, playlistId]);

  useEffect(() => {
    const videoCardObserver = new IntersectionObserver(
      (entries) => {
        const moreVideosAvailable =
          playlistDataArray &&
          playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;
        if (
          entries[0].isIntersecting &&
          moreVideosAvailable &&
          isNotFetchingData
        ) {
          setIsNotFetchingData(false);
          saveSubsequentPlaylistAndURLDataArrayToState();
          lastCardRef.current &&
            videoCardObserver.unobserve(lastCardRef.current);
        }
      },
      {
        threshold: 0.3,
      }
    );
    lastCardRef.current && videoCardObserver.observe(lastCardRef.current);
  }, [playlistDataArray]);

  useEffect(() => {
    function handleFullscreenChange() {
      setFullscreen(Boolean(document.fullscreenElement));
      lightboxRef.current?.focus();
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    dialogRef.current?.open &&
      (document.documentElement.style.overflow = "hidden");
    !dialogRef.current?.open && (document.documentElement.style.overflow = "");
  });

  const galleryElement =
    playlistDataArray && uniqueName ? (
      <div id={uniqueNameParsed} style={galleryContainerStyle}>
        {getVideoCardsArray()}
      </div>
    ) : (
      <div style={loaderContainerStyle}>Loading...</div>
    );

  const lightBoxElement = (
    <dialog ref={dialogRef} style={{ margin: "auto" }}>
      <article
        autoFocus
        tabIndex={-1}
        ref={lightboxRef}
        style={modalContainerStyle}
        onKeyDown={(e) => handleKeyDownOnModal(e)}
        onMouseEnter={() => setShowModalControls(true)}
        onMouseLeave={() => setShowModalControls(false)}
        onClick={(e) =>
          (e.target as HTMLElement).tagName === "SECTION" &&
          exitFullScreenAndDialog()
        }
      >
        <span
          style={{
            opacity: showModalControls ? 1 : 0,
            ...modalSlideNumberStyle,
          }}
        >{`${slideNumber} / ${playlistDataArray?.length}`}</span>
        <span
          style={{
            opacity: showModalControls ? 1 : 0,
            ...modalToolbarStyle,
          }}
        >
          <button
            type="button"
            aria-label="Go full screen (Keyboard shortcut f)"
            style={{
              display: fullscreen ? "none" : "block",
              ...modalToolbarBtnStyle,
            }}
            title="Go full screen (f)"
            onClick={() => switchFullScreen(true)}
          >
            {SvgElement(
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
            )}
          </button>
          <button
            type="button"
            aria-label="Exit full screen"
            style={{
              display: fullscreen ? "block" : "none",
              ...modalToolbarBtnStyle,
            }}
            title="Exit full screen"
            onClick={() => switchFullScreen(false)}
          >
            {SvgElement(
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
            )}
          </button>
          <button
            type="button"
            aria-label="Close lightbox"
            style={modalToolbarBtnStyle}
            title="Close lightbox"
            onClick={() => exitFullScreenAndDialog()}
          >
            {SvgElement(
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            )}
          </button>
        </span>
        <section style={modalSlideShowSectionStyle}>
          <button
            type="button"
            aria-label="Previous image"
            style={{
              opacity: showModalControls ? 1 : 0,
              left: 0,
              ...modalSlideBtnStyle,
            }}
            title="Previous image"
            onClick={() => changeSlide(-1)}
          >
            {SvgElement(
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            )}
          </button>
          <iframe
            style={modalIFrameStyle}
            src={`https://www.youtube.com/embed/${videoId}?v=${videoId}`}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <button
            type="button"
            aria-label="Next image"
            style={{
              opacity: showModalControls ? 1 : 0,
              right: 0,
              ...modalSlideBtnStyle,
            }}
            title="Next image"
            onClick={() => changeSlide(1)}
          >
            {SvgElement(
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            )}
          </button>
        </section>
      </article>
    </dialog>
  );

  return (
    <>
      {galleryElement}
      {lightBoxElement}
    </>
  );
}
