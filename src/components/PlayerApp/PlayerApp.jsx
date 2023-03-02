import { Component } from 'react';
import { VideoList } from './components/VideoList';
import { Player } from './components/Player';
import videos from './data/videos.json';

export class PlayerApp extends Component {
  state = {
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}
