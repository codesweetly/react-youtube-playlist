import logo from "./logo.svg";
import "./App.css";
import YouTubePlaylist from "./components/YouTubePlaylist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <YouTubePlaylist
        youtubeAPI="YOUR_YOUTUBE_API_KEY"
        playlistId="YOUR_YOUTUBE_PLAYLIST_ID"
      />
    </div>
  );
}

export default App;
