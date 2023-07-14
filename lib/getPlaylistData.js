"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
async function getPlaylistData(apiKey, playlistId, currNextPageToken) {
  const youtubePlaylistItemsRequestEndPoint = "https://www.googleapis.com/youtube/v3/playlistItems";
  const fetchedPlaylist = await fetch(`${youtubePlaylistItemsRequestEndPoint}?part=snippet&playlistId=${playlistId}&maxResults=50${currNextPageToken ? `&pageToken=${currNextPageToken}` : ""}&key=${apiKey}`);
  const data = await fetchedPlaylist.json();
  const {
    items,
    nextPageToken,
    pageInfo
  } = data;
  const totalVideosAvailable = pageInfo.totalResults;
  const playlistData = items.map(i => {
    const {
      id,
      snippet
    } = i;
    const {
      title,
      thumbnails,
      resourceId
    } = snippet;
    return {
      id,
      title,
      thumbnails,
      resourceId,
      nextPageToken,
      totalVideosAvailable
    };
  });
  return playlistData;
}
var _default = getPlaylistData;
exports.default = _default;