import React from "react";
import { render } from "@testing-library/react";
import YouTubePlaylist from "./index";
import { test } from "@jest/globals";

test("youtube playlist renders correctly", () => {
  render(<YouTubePlaylist apiKey="" playlistId="" uniqueName="" />);
});
