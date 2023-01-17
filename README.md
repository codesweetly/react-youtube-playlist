# React YouTube Playlist

An easy-to-use and responsive React component for displaying YouTube playlists on a web app. Create a beautiful gallery of YouTube videos.

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
<td><code>apiKey</code></td>
<td>

The `apiKey` props is a string value that specifies your project's YouTube API key. ([Learn how to get an API key](https://youtu.be/N18czV5tj5o))

</td>
</tr>
<tr>
<td><code>playlistId</code></td>
<td>

The `playlistId` props is a string value that specifies the ID of the YouTube playlist you wish to display.

**Note:** A playlist's ID is the list of characters after the **"list="** in the [URL](https://codesweetly.com/web-address-url)—for instance, `https://www.youtube.com/playlist?list=playlistID`.

</td>
</tr>
<tr>
<td><code>uniqueName</code></td>
<td>

The `uniqueName` props is a string value that specifies a unique name for the `<YouTubePlaylist>` instance.

**Note:**

- No two `<YouTubePlaylist>` on a single page must have the same name.
- Use the [HTML `id` attribute's naming convention](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) for the `uniqueName` props.

</td>
</tr>
</tbody>
</table>
