import { style } from "@vanilla-extract/css";

export const playlistGalleryDiv = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gridGap: "0 1rem",
});

export const youtubeVideoFigure = style({
  margin: 0,
});

export const youtubeVideoImage = style({
  width: "100%",
  cursor: "pointer",
});

export const youtubeVideoCaption = style({
  paddingBottom: "2.2rem",
  textAlign: "left",
  fontWeight: 600,
  color: "inherit",
  "@media": {
    /* For tablets and desktops: */
    "only screen and (min-width: 600px)": {
      paddingBottom: "2.5rem",
    },
  },
});
