async function getPlaylistData(youtubeAPI, playlistId, currNextPageToken) {
  const youtubePlaylistItemsRequestEndPoint =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  const fetchedPlaylist = await fetch(
    `${youtubePlaylistItemsRequestEndPoint}?part=snippet&playlistId=${playlistId}&maxResults=50${
      currNextPageToken ? `&pageToken=${currNextPageToken}` : ""
    }&key=${youtubeAPI}`
  );

  const data = await fetchedPlaylist.json();
  const { items, nextPageToken, pageInfo } = data;
  const totalVideosAvailable = pageInfo.totalResults;
  const playlistData = items.map((i) => {
    const { id, snippet } = i;
    const { title, thumbnails, resourceId } = snippet;
    return {
      id,
      title,
      thumbnails,
      resourceId,
      nextPageToken,
      totalVideosAvailable,
    };
  });

  return playlistData;
}

export default getPlaylistData;
