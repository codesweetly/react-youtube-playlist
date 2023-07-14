declare function getPlaylistData(apiKey: string, playlistId: string, currNextPageToken?: string): Promise<{
    id: string;
    title: string;
    thumbnails: {
        high: {
            url: string;
        };
    };
    resourceId: {
        videoId: string;
    };
    nextPageToken: string;
    totalVideosAvailable: number;
}[]>;
export default getPlaylistData;
