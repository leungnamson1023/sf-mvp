import React from 'react';
import CharacterSelect from './CharacterSelect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      showStartGame: false,
    };
    this.startGameOnClick = this.startGameOnClick.bind(this);
  }

  startGameOnClick(e) {
    this.setState({
      showStartGame: true,
    });
    window.scrollBy(0, 600);
  }

  render() {
    return (
      <div>
        <div>
          <img className="test" src="./sfStart.jpg" alt="startScreen" />
          <button className="start" onClick={() => this.startGameOnClick()} > Start Game! </button>
          <div className="startContainer">
            {this.state.showStartGame ? <CharacterSelect test={this.loading} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  id: 0,
};

export default App;
