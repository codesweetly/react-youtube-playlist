import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { YouTubePlaylist } from "./YouTubePlaylist";

test("youtube playlist renders correctly", () => {
  render(<YouTubePlaylist apiKey="" playlistId="" />);
});
