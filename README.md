# React YouTube Playlist

A simple, easy-to-use, and responsive playlist component with a lightbox for displaying a beautiful gallery of YouTube videos in React apps.

![npm](https://img.shields.io/npm/v/@codesweetly/react-youtube-playlist) ![NPM](https://img.shields.io/npm/l/@codesweetly/react-youtube-playlist)

## Features

- SEO friendly
- Fullscreen support
- Keyboard accessible
- Mobile responsive
- Lightbox with translucent background
- Set column numbers dynamically or manually
- Customizable styles

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
    />
  );
}
```

## Props

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
<td>

[`columnCount`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-count-property)

</td>
<td>number or keyword (string)</td>
<td><code>"auto"</code></td>
<td>

(**Optional**) The number of columns.

</td>
</tr>
<tr>
<td>

[`columnWidth`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-width-property)

</td>
<td>number or keyword (string)</td>
<td><code>230</code></td>
<td>

(**Optional**) The minimum width of the gallery's columns.

</td>
</tr>
<tr>
<td>

[`gapSize`](https://codesweetly.com/css-gap-property)

</td>
<td>number</td>
<td><code>24</code></td>
<td>

(**Optional**) The gallery's gap size.

</td>
</tr>
<tr>
<td>

`customStyles`

</td>
<td>ImageGalleryStylesType</td>
<td><code>{}</code></td>
<td>

(**Optional**) Custom styles to override the following element's default styles:

- Loader container: `loaderContainer`
- Gallery container: `galleryContainerStyle`
- Gallery image button: `imageBtnStyle`
- Gallery video container: `videoContainerStyle`
- Gallery image element: `videoImageStyle`
- Gallery video caption: `videoCaptionStyle`
- Modal container: `modalContainerStyle`
- Modal slide number: `modalSlideNumberStyle`
- Modal toolbar: `modalToolbarStyle`
- Modal toolbar button: `modalToolbarBtnStyle`
- Modal slideshow section: `modalSlideShowSectionStyle`
- Modal iframe element: `modalIFrameStyle`
- Modal slide button: `modalSlideBtnStyle`

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
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
import { ImageGallery } from "react-image-grid-gallery";
```

The `"use client"` directive tells NextJS to consider all modules imported into the page as part of the Client Component module graph.

The `YouTubePlaylist` package works _only_ as a Client Component because it uses React's State and Lifecycle effects, such as `useState()` and `useEffect()`.

## Build

```diff
npm run build
```

## Demo

https://codesweetly.com/react-youtube-playlist

## Support

🍵 [Buy me a coffee](https://www.buymeacoffee.com/codesweetly)
