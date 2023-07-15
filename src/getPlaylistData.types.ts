export interface FetchedData {
  items: PlaylistDataItem[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
  };
}

export interface PlaylistDataItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    resourceId: { videoId: string };
  };
}
