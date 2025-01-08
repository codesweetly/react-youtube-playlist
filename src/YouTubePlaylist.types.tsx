export interface YouTubePlaylistStylesType {
  loaderContainerStyle?: React.CSSProperties;
  galleryContainerStyle?: React.CSSProperties;
  imageBtnStyle?: React.CSSProperties;
  videoContainerStyle?: React.CSSProperties;
  videoImageStyle?: React.CSSProperties;
  videoCaptionStyle?: React.CSSProperties;
  modalContainerStyle?: React.CSSProperties;
  modalSlideNumberStyle?: React.CSSProperties;
  modalToolbarStyle?: React.CSSProperties;
  modalToolbarBtnStyle?: React.CSSProperties;
  modalSlideShowSectionStyle?: React.CSSProperties;
  modalIFrameStyle?: React.CSSProperties;
  modalSlideBtnStyle?: React.CSSProperties;
}

export interface YouTubePlaylistPropsType {
  apiKey: string;
  playlistId: string;
  customStyles?: YouTubePlaylistStylesType;
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
