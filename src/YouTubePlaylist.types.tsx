export interface YouTubePlaylistPropsType {
  apiKey: string;
  playlistId: string;
  uniqueName: string;
}

export interface PlaylistData {
  id: string;
  title: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  resourceId: { videoId: string };
  nextPageToken: string;
  totalVideosAvailable: number;
}
