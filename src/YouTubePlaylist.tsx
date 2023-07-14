import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import FsLightbox from "fslightbox-react";
import getPlaylistData from "./getPlaylistData";
import "../index.css";

interface YouTubePlaylistPropsType {
  apiKey: string;
  playlistId: string;
  uniqueName: string;
}

interface PlaylistData {
  id: string;
  title: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  resourceId: { videoId: string };
  nextPageToken: string;
  totalVideosAvailable: number;
}

function YouTubePlaylist({
  apiKey,
  playlistId,
  uniqueName,
}: YouTubePlaylistPropsType): React.JSX.Element {
  const [urls, setUrls] = useState([]);
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

  let youtubeVideoFiguresArray = null;

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function saveSubsequentPlaylistAndURLDataArrayToState(): void {
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

  function handleScroll(): void {
    if (playlistDataArray && youtubeVideoFiguresArray) {
      const playlistGalleryDiv = document.getElementById(uniqueNameParsed);
      const galleryHeight = playlistGalleryDiv.clientHeight;
      const viewportHeight = window.document.documentElement.clientHeight;
      const viewportLengthScrolled = window.document.documentElement.scrollTop;
      const galleryHeightIsGreaterThanViewport = galleryHeight > viewportHeight;
      const heightAboveGallery = playlistGalleryDiv.offsetTop;
      const totalGalleryScrollableHeight = galleryHeightIsGreaterThanViewport
        ? galleryHeight - viewportHeight + heightAboveGallery
        : 0;
      const remainingGalleryScrollableHeight =
        totalGalleryScrollableHeight - viewportLengthScrolled;
      const scrolledToGalleryBottom = remainingGalleryScrollableHeight <= 0;
      const moreVideosAvailable =
        playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;

      // console.log(e.target);
      // console.log(e.currentTarget);
      // console.log(e.currentTarget.document.documentElement);
      // console.log(e.currentTarget.clientHeight);
      // console.log(e.currentTarget.scrollTop);
      // console.log({ testHeight: window.document.documentElement.clientHeight });
      // console.log({ testTop: window.document.documentElement.scrollTop });
      console.log({ viewportHeight, viewportLengthScrolled });

      if (scrolledToGalleryBottom && moreVideosAvailable && isNotFetchingData) {
        setIsNotFetchingData(false);
        saveSubsequentPlaylistAndURLDataArrayToState();
      }
    }
  }

  if (playlistDataArray) {
    youtubeVideoFiguresArray = playlistDataArray.map((item, index) => {
      if (item.title !== "Deleted video") {
        return (
          <figure className="youtube-video-figure" key={item.id}>
            <img
              alt={`Video ${index + 1} of ${playlistDataArray.length}`}
              src={item.thumbnails.high.url}
              className="youtube-video-image"
              onClick={() => openLightboxOnSlide(index + 1)}
            />
            <figcaption>{item.title}</figcaption>
          </figure>
        );
      } else {
        return "";
      }
    });
  }

  useEffect(() => {
    function saveInitialPlaylistAndURLDataArrayToState(): void {
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
    <div id={uniqueNameParsed} className="playlist-gallery-div">
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
