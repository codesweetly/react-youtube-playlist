export function youTubePlaylistStyles() {
  const galleryContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gridGap: "0 1rem",
  };
  const videoContainerStyle: React.CSSProperties = {
    margin: 0,
  };
  const videoImageStyle: React.CSSProperties = {
    width: "100%",
    cursor: "pointer",
  };
  const videoCaptionStyle: React.CSSProperties = {
    paddingBottom: "2.2rem",
    textAlign: "left",
    fontWeight: 600,
    color: "inherit",
  };
  return {
    galleryContainerStyle,
    videoContainerStyle,
    videoImageStyle,
    videoCaptionStyle,
  };
}
