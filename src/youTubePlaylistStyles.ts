import { YouTubePlaylistStylesType } from "./YouTubePlaylist.types";

export function youTubePlaylistStyles(
  columnCount?: string | number,
  columnWidth?: string | number,
  gapSize?: number
): YouTubePlaylistStylesType {
  const loaderContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  };
  const galleryContainerStyle: React.CSSProperties = {
    columnCount,
    columnWidth: `${columnWidth}px`,
    columnGap: `${gapSize}px`,
    textAlign: "center",
  };
  const imageBtnStyle: React.CSSProperties = {
    border: "none",
    background: "none",
    margin: 0,
    padding: 0,
  };
  const videoContainerStyle: React.CSSProperties = {
    margin: `0 0 ${gapSize}px`,
    position: "relative",
  };
  const videoImageStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    cursor: "pointer",
  };
  const videoCaptionStyle: React.CSSProperties = {
    paddingBottom: "2.2rem",
    textAlign: "left",
    fontWeight: 600,
    color: "inherit",
  };
  const modalContainerStyle: React.CSSProperties = {
    outline: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.73)",
    WebkitBackdropFilter: "blur(5px)",
    backdropFilter: "blur(5px)",
  };
  const modalSlideNumberStyle: React.CSSProperties = {
    zIndex: 1,
    position: "absolute",
    left: 0,
    padding: "13px",
    backgroundColor: "rgba(35, 35, 35, 0.73)",
    color: "#fff",
    fontSize: "0.93rem",
    transition: "opacity 1s ease-in-out",
    userSelect: "none",
    WebkitUserSelect: "none",
  };
  const modalToolbarStyle: React.CSSProperties = {
    zIndex: 1,
    display: "flex",
    position: "absolute",
    right: 0,
    alignItems: "center",
    backgroundColor: "rgba(35, 35, 35, 0.73)",
    transition: "opacity 1s ease-in-out",
    cursor: "pointer",
  };
  const modalToolbarBtnStyle: React.CSSProperties = {
    margin: 0,
    border: "none",
    background: "none",
    padding: "13px",
    color: "#fff",
    cursor: "pointer",
  };
  const modalSlideShowSectionStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "inherit",
    height: "inherit",
  };
  const modalIFrameStyle: React.CSSProperties = {
    margin: "auto",
    width: "80%",
    aspectRatio: "16/9",
    border: "none",
  };
  const modalSlideBtnStyle: React.CSSProperties = {
    position: "absolute",
    border: "none",
    marginInline: "7px",
    padding: "10px 15px",
    backgroundColor: "rgba(35, 35, 35, 0.73)",
    color: "#fff",
    transition: "opacity 1s ease-in-out",
    cursor: "pointer",
    userSelect: "none",
    WebkitUserSelect: "none",
  };
  return {
    loaderContainerStyle,
    galleryContainerStyle,
    imageBtnStyle,
    videoContainerStyle,
    videoImageStyle,
    videoCaptionStyle,
    modalContainerStyle,
    modalSlideNumberStyle,
    modalToolbarStyle,
    modalToolbarBtnStyle,
    modalSlideShowSectionStyle,
    modalIFrameStyle,
    modalSlideBtnStyle,
  };
}
