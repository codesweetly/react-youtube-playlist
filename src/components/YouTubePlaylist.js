"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fslightboxReact = _interopRequireDefault(require("fslightbox-react"));
var _Loader = _interopRequireDefault(require("./Loader"));
var _getPlaylistData = _interopRequireDefault(require("../getPlaylistData"));
require("../css/YouTubePlaylist.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function YouTubePlaylist(_ref) {
  let {
    apiKey,
    playlistId
  } = _ref;
  const [URLs, setURLs] = (0, _react.useState)([]);
  const [playlistDataArray, setPlaylistDataArray] = (0, _react.useState)(null);
  const [isNotFetchingData, setIsNotFetchingData] = (0, _react.useState)(true);
  const [lightboxController, setLightboxController] = (0, _react.useState)({
    toggler: false,
    slide: 1
  });
  let imgElementArray = null;
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }
  function saveSubsequentPlaylistAndURLDataArrayToState() {
    const lastGalleryItem = playlistDataArray[playlistDataArray.length - 1];
    (0, _getPlaylistData.default)(apiKey, playlistId, lastGalleryItem.nextPageToken).then(newData => {
      const newURLs = newData.map(data => {
        return `https://www.youtube.com/watch?v=${data.resourceId.videoId}`;
      });
      setURLs([...URLs, ...newURLs]);
      setPlaylistDataArray([...playlistDataArray, ...newData]);
    }).catch(e => console.error(`Error getting next page playlist data: ${e}`));
    setIsNotFetchingData(true);
  }
  function handleScroll(e) {
    if (playlistDataArray && imgElementArray) {
      const playlistGalleryDiv = document.getElementById("playlist-gallery-div");
      const galleryHeight = playlistGalleryDiv.clientHeight;
      const viewportHeight = e.target.documentElement.clientHeight;
      const lengthScrolled = e.target.documentElement.scrollTop;
      const galleryHeightIsGreaterThanViewport = galleryHeight > viewportHeight;
      const heightAboveGallery = playlistGalleryDiv.offsetTop; //0.55 * viewportHeight;
      const totalGalleryScrollableHeight = galleryHeightIsGreaterThanViewport ? galleryHeight - viewportHeight - heightAboveGallery : 0;
      const remainingGalleryScrollableHeight = totalGalleryScrollableHeight - lengthScrolled;
      const scrolledToGalleryBottom = remainingGalleryScrollableHeight <= 0;
      const moreVideosAvailable = playlistDataArray.length < playlistDataArray[0].totalVideosAvailable;
      if (scrolledToGalleryBottom && moreVideosAvailable && isNotFetchingData) {
        setIsNotFetchingData(false);
        saveSubsequentPlaylistAndURLDataArrayToState();
      }
    }
  }
  if (playlistDataArray) {
    imgElementArray = playlistDataArray.map((item, index) => {
      if (item.title !== "Deleted video") {
        return /*#__PURE__*/_react.default.createElement("figure", {
          key: item.id
        }, /*#__PURE__*/_react.default.createElement("img", {
          alt: item.title,
          src: item.thumbnails.high.url,
          className: "youtube-video-image",
          onClick: () => openLightboxOnSlide(index + 1)
        }), /*#__PURE__*/_react.default.createElement("figcaption", null, item.title));
      } else {
        return "";
      }
    });
  }
  (0, _react.useEffect)(() => {
    function saveInitialPlaylistAndURLDataArrayToState() {
      (0, _getPlaylistData.default)(apiKey, playlistId).then(items => {
        const URLs = items.map(item => {
          return `https://www.youtube.com/watch?v=${item.resourceId.videoId}`;
        });
        setURLs(URLs);
        setPlaylistDataArray(items);
      }).catch(e => console.error(`Error getting playlist data: ${e}`));
    }
    saveInitialPlaylistAndURLDataArrayToState();
  }, [apiKey, playlistId]);
  (0, _react.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "playlist-gallery-div",
    className: "youtube-videos-div"
  }, playlistDataArray ? imgElementArray : (0, _Loader.default)(), /*#__PURE__*/_react.default.createElement(_fslightboxReact.default, {
    toggler: lightboxController.toggler,
    sources: URLs,
    slide: lightboxController.slide
  }));
}
var _default = YouTubePlaylist;
exports.default = _default;