export class YouTubePlaylistStyles {
  galleryContainerStyle: React.CSSProperties;
  videoContainerStyle: React.CSSProperties;
  videoImageStyle: React.CSSProperties;
  videoCaptionStyle: React.CSSProperties;

  constructor() {
    this.galleryContainerStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gridGap: "0 1rem",
    };
    this.videoContainerStyle = {
      margin: 0,
    };
    this.videoImageStyle = {
      width: "100%",
      cursor: "pointer",
    };
    this.videoCaptionStyle = {
      paddingBottom: "2.2rem",
      textAlign: "left",
      fontWeight: 600,
      color: "inherit",
    };
  }
}
