# React YouTube Playlist

> **⚠ WARNING: Use with caution!**  
> This package is not stable. It still contains bugs!
> The stable version will start at 1.0.0
> Working on releasing the stable version soon...

A React component for displaying YouTube video playlists on a web app. Create a beautiful gallery of YouTube videos.

![npm](https://img.shields.io/npm/v/@codesweetly/react-youtube-playlist) ![NPM](https://img.shields.io/npm/l/@codesweetly/react-youtube-playlist)

## Live Demo and Tutorial

Available at: https://codesweetly.com/react-youtube-playlist

## Installation

Using npm:

```
npm install @codesweetly/react-youtube-playlist
```

Using yarn:

```
yarn add @codesweetly/react-youtube-playlist
```

## Usage

```js
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

function App() {
  return (
    <YouTubePlaylist
      apiKey="YOUR_YOUTUBE_API_KEY"
      playlistId="YOUR_YOUTUBE_PLAYLIST_ID"
    />
  );
}
```

## Required Props

| Props        | Description                                                                                                                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`     | The `apiKey` props is a string value that specifies your project's YouTube API key. ([Learn how to get an API key](https://youtu.be/N18czV5tj5o))                                                                                                                                      |
| `playlistId` | The `playlistId` props is a string value that specifies the ID of the YouTube playlist you wish to display. **Note:** A playlist's ID is the list of characters after the **"list="** in the [URL](/web-address-url)—for instance, `https://www.youtube.com/playlist?list=playlistID`. |
