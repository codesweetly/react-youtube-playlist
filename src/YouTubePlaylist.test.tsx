import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { YouTubePlaylist } from "./YouTubePlaylist";

test("youtube playlist renders correctly", () => {
  render(<YouTubePlaylist apiKey="" playlistId="" />);
});

test("youtube playlist renders correctly with custom styles", () => {
  const videoContainerStyle: React.CSSProperties = {
    margin: `0 0 0`,
    position: "relative",
  };
  render(
    <YouTubePlaylist
      apiKey=""
      playlistId=""
      customStyles={{ videoContainerStyle }}
    />
  );
});
