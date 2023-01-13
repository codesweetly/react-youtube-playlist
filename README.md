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
      uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
    />
  );
}
```

## Required Props

<table>
<thead>
<tr>
<th>Props</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`apiKey`

</td>
<td>

The `apiKey` props is a string value that specifies your project's YouTube API key. ([Learn how to get an API key](https://youtu.be/N18czV5tj5o))

</td>
</tr>
<tr>
<td>

`playlistId`

</td>
<td>

The `playlistId` props is a string value that specifies the ID of the YouTube playlist you wish to display.

**Note:** A playlist's ID is the list of characters after the **"list="** in the [URL](/web-address-url)—for instance, `https://www.youtube.com/playlist?list=playlistID`.

</td>
</tr>
<tr>
<td>

`uniqueName`

</td>
<td>

Give the `<YouTubePlaylist>` instance a unique name.

**Note:**

- No two `<YouTubePlaylist>` on a single page must have the same name.
- Use the [HTML `id` attribute's naming convention](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) for the `uniqueName` prop.

</td>
</tr>
</tbody>
</table>
