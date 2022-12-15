import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import Loader from "./Loader";
import getPlaylistData from "../getPlaylistData";
import "../css/VideoGallery.css";

function VideoGallery({ youtubeAPI, playlistId }) {
  const [URLs, setURLs] = useState([]);
  const [playlistDataArray, setPlaylistDataArray] = useState(null);
  const [isNotFetchingData, setIsNotFetchingData] = useState(true);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  let imgElementArray = null;

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function saveSubsequentPlaylistAndURLDataArrayToState() {
    const lastGalleryItem = playlistDataArray[playlistDataArray.length - 1];
    getPlaylistData(youtubeAPI, playlistId, lastGalleryItem.nextPageToken)
      .then((newData) => {
        const newURLs = newData.map((data) => {
          return `https://www.youtube.com/watch?v=${data.resourceId.videoId}`;
        });
        setURLs([...URLs, ...newURLs]);
        setPlaylistDataArray([...playlistDataArray, ...newData]);
      })
      .catch((e) =>
        console.error(`Error getting next page playlist data: ${e}`)
      );
    setIsNotFetchingData(true);
  }

  function handleScroll(e) {
    if (playlistDataArray && imgElementArray) {
      const playlistGalleryDiv = document.getElementById(
        "playlist-gallery-div"
      );
      const galleryHeight = playlistGalleryDiv.clientHeight;
      const viewportHeight = e.target.documentElement.clientHeight;
      const lengthScrolled = e.target.documentElement.scrollTop;
      const galleryHeightIsGreaterThanViewport = galleryHeight > viewportHeight;
      const heightAboveGallery = playlistGalleryDiv.offsetTop; //0.55 * viewportHeight;
      const totalGalleryScrollableHeight = galleryHeightIsGreaterThanViewport
        ? galleryHeight - viewportHeight - heightAboveGallery
        : 0;
      const remainingGalleryScrollableHeight =
        totalGalleryScrollableHeight - lengthScrolled;
      const scrolledToGalleryBottom = remainingGalleryScrollableHeight <= 0;
      const moreVideosAvailable =
        playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;

      if (scrolledToGalleryBottom && moreVideosAvailable && isNotFetchingData) {
        setIsNotFetchingData(false);
        saveSubsequentPlaylistAndURLDataArrayToState();
      }
    }
  }

  if (playlistDataArray) {
    imgElementArray = playlistDataArray.map((item, index) => {
      if (item.title !== "Deleted video") {
        return (
          <div key={item.id}>
            <img
              alt={item.title}
              src={item.thumbnails.high.url}
              className="youtube-video-image"
              onClick={() => openLightboxOnSlide(index + 1)}
            />
            <figcaption>{item.title}</figcaption>
          </div>
        );
      } else {
        return "";
      }
    });
  }

  useEffect(() => {
    function saveInitialPlaylistAndURLDataArrayToState() {
      getPlaylistData(youtubeAPI, playlistId)
        .then((items) => {
          const URLs = items.map((item) => {
            return `https://www.youtube.com/watch?v=${item.resourceId.videoId}`;
          });
          setURLs(URLs);
          setPlaylistDataArray(items);
        })
        .catch((e) => console.error(`Error getting playlist data: ${e}`));
    }
    saveInitialPlaylistAndURLDataArrayToState();
  }, [youtubeAPI, playlistId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="playlist-gallery-div" className="youtube-videos-div">
      {playlistDataArray ? imgElementArray : Loader()}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={URLs}
        slide={lightboxController.slide}
      />
    </div>
  );
}

export default VideoGallery;
