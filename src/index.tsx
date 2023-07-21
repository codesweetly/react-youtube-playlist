import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { YouTubePlaylistPropsType, PlaylistData } from "./index.types";
import FsLightbox from "fslightbox-react";
import getPlaylistData from "./getPlaylistData";
import styles from "../index.module.css";

function YouTubePlaylist({
  apiKey,
  playlistId,
  uniqueName,
}: YouTubePlaylistPropsType) {
  const [urls, setUrls] = useState<string[]>([]);
  const [playlistDataArray, setPlaylistDataArray] = useState<
    PlaylistData[] | null
  >(null);
  const [isNotFetchingData, setIsNotFetchingData] = useState(true);
  const [uniqueNameParsed] = useState(
    uniqueName.toLowerCase().replace(/\s/g, "-")
  );
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  let youtubeVideoFiguresArray: (React.JSX.Element | "")[] | null = null;

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function saveSubsequentPlaylistAndURLDataArrayToState() {
    if (playlistDataArray) {
      const lastGalleryItem = playlistDataArray[playlistDataArray.length - 1];
      getPlaylistData(apiKey, playlistId, lastGalleryItem.nextPageToken)
        .then((newData) => {
          const newUrls = newData.map((data) => {
            return `https://www.youtube.com/watch?v=${data.resourceId.videoId}`;
          });
          setUrls([...urls, ...newUrls]);
          setPlaylistDataArray([...playlistDataArray, ...newData]);
        })
        .catch((e) =>
          console.error(`Error getting next page playlist data: ${e}`)
        );
      setIsNotFetchingData(true);
    }
  }

  function handleScroll() {
    if (playlistDataArray && youtubeVideoFiguresArray) {
      const playlistGalleryDiv = document.getElementById(uniqueNameParsed);
      const galleryHeight = playlistGalleryDiv?.clientHeight;
      const viewportHeight = window.document.documentElement.clientHeight;
      const viewportLengthScrolled = window.document.documentElement.scrollTop;
      if (galleryHeight) {
        const galleryHeightIsGreaterThanViewport =
          galleryHeight > viewportHeight;
        const heightAboveGallery = playlistGalleryDiv.offsetTop;
        const totalGalleryScrollableHeight = galleryHeightIsGreaterThanViewport
          ? galleryHeight - viewportHeight + heightAboveGallery
          : 0;
        const remainingGalleryScrollableHeight =
          totalGalleryScrollableHeight - viewportLengthScrolled;
        const scrolledToGalleryBottom = remainingGalleryScrollableHeight <= 0;
        const moreVideosAvailable =
          playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;

        if (
          scrolledToGalleryBottom &&
          moreVideosAvailable &&
          isNotFetchingData
        ) {
          setIsNotFetchingData(false);
          saveSubsequentPlaylistAndURLDataArrayToState();
        }
      }
    }
  }

  if (playlistDataArray) {
    youtubeVideoFiguresArray = playlistDataArray.map((item, index) => {
      if (item.title !== "Deleted video" && item.title !== "Private video") {
        return (
          <figure className={styles.youtubeVideoFigure} key={item.id}>
            <img
              alt={`Video ${index + 1} of ${playlistDataArray.length}`}
              src={item.thumbnails.high.url}
              className={styles.youtubeVideoImage}
              onClick={() => openLightboxOnSlide(index + 1)}
            />
            <figcaption className={styles.youtubeVideoCaption}>
              {item.title}
            </figcaption>
          </figure>
        );
      } else {
        return "";
      }
    });
  }

  useEffect(() => {
    function saveInitialPlaylistAndURLDataArrayToState() {
      getPlaylistData(apiKey, playlistId)
        .then((items) => {
          const urls = items.map((item) => {
            return `https://www.youtube.com/watch?v=${item.resourceId.videoId}`;
          });
          setUrls(urls);
          setPlaylistDataArray(items);
        })
        .catch((e) => console.error(`Error getting playlist data: ${e}`));
    }
    saveInitialPlaylistAndURLDataArrayToState();
  }, [apiKey, playlistId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id={uniqueNameParsed} className={styles.playlistGalleryDiv}>
      {playlistDataArray && uniqueName ? (
        youtubeVideoFiguresArray
      ) : (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{ justifyContent: "center", paddingBlock: "90px" }}
          visible={true}
        />
      )}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={urls}
        type="youtube"
        key={urls.length}
      />
    </div>
  );
}

export default YouTubePlaylist;
