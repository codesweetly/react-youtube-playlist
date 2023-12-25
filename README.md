# React YouTube Playlist

An easy-to-use and responsive React component for displaying YouTube playlists on a web app. Create a beautiful gallery of YouTube videos.

![npm](https://img.shields.io/npm/v/@codesweetly/react-youtube-playlist) ![NPM](https://img.shields.io/npm/l/@codesweetly/react-youtube-playlist)

## Live Demo and Tutorial

Available at: https://codesweetly.com/react-youtube-playlist

## Installation

This section shows how to install the React YouTube Playlist package.

### Using npm

```
npm install @codesweetly/react-youtube-playlist
```

### Using yarn

```
yarn add @codesweetly/react-youtube-playlist
```

### Using pnpm

```
pnpm add @codesweetly/react-youtube-playlist
```

## Usage

```js
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

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
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>apiKey</code></td>
<td>string</td>
<td><code>undefined</code></td>
<td>

**(Required)** Your project's YouTube API key. ([Learn how to get an API key](https://youtu.be/N18czV5tj5o))

</td>
</tr>
<tr>
<td><code>playlistId</code></td>
<td>string</td>
<td><code>undefined</code></td>
<td>

**(Required)** The ID of the YouTube playlist you wish to display.

**Note:** A playlist's ID is the list of characters after the **"list="** in the [URL](https://codesweetly.com/web-address-url)—for instance, `https://www.youtube.com/playlist?list=playlistID`.

</td>
</tr>
<tr>
<td><code>uniqueName</code></td>
<td>string</td>
<td><code>undefined</code></td>
<td>

**(Required)** A unique name for the `<YouTubePlaylist>` instance.

**Note:**

- No two `<YouTubePlaylist>` on a single page must have the same name.
- Use the [HTML `id` attribute's naming convention](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) for the `uniqueName` props.

</td>
</tr>
</tbody>
</table>

## Note for Remix Users

[Remix](https://remix.run/docs/en/1.19.0) users should add `"@codesweetly/react-youtube-playlist"` to their `remix.config.js` file:

```diff
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
+ serverDependenciesToBundle: ["@codesweetly/react-youtube-playlist"],
  serverModuleFormat: "cjs",
};
```

The [`serverDependenciesToBundle`](https://remix.run/docs/en/1.19.0/file-conventions/remix-config#serverdependenciestobundle) field tells Remix to transpile and include the `"@codesweetly/react-youtube-playlist"` package in the server bundle.

## Note for NextJS users

[NextJS](https://nextjs.org/) users should declare the [`"use client"`](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) directive at the top of their file. It should sit above all other `import` statements like so:

```diff
+ "use client";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import ImageGallery from "react-image-grid-gallery";
```

The `"use client"` directive tells NextJS to consider all modules imported into the page as part of the Client Component module graph.

The `YouTubePlaylist` package works _only_ as a Client Component because it uses React's State and Lifecycle effects, such as `useState()` and `useEffect()`.

## Build

```diff
npm run build
```

## Dependencies

- [fslightbox-react](https://github.com/banthagroup/fslightbox-react)
- [prop-types](https://github.com/facebook/prop-types)
- [react](https://github.com/facebook/react)
- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)

## Demo

https://codesweetly.com/react-youtube-playlist
