import React from "react";
import "../index.css";
interface YouTubePlaylistPropsType {
    apiKey: string;
    playlistId: string;
    uniqueName: string;
}
declare function YouTubePlaylist({ apiKey, playlistId, uniqueName, }: YouTubePlaylistPropsType): React.JSX.Element;
export default YouTubePlaylist;
