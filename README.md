# React YouTube Playlist

> **⚠ WARNING: Use with caution!**  
> This package is not stable. It still contains bugs!
> The stable version will start at 1.0.0
> Working on releasing the stable version soon...

A React component for displaying YouTube video playlists on a web app. Create a beautiful gallery of YouTube videos that play with a lightbox.

![npm](https://img.shields.io/npm/v/@codesweetly/react-youtube-playlist) ![NPM](https://img.shields.io/npm/l/@codesweetly/react-youtube-playlist)

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
      youtubeAPI="YOUR_YOUTUBE_API_KEY"
      playlistId="YOUR_YOUTUBE_PLAYLIST_ID"
    />
  );
}
```
