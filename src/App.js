import React from 'react';
import Lottie from 'react-lottie'
import animationData from './assets/message-sent.json'
import animationButton from './assets/button.json'

//@ABOUT OPTIONS
// animationData - an Object with the exported animation data, in our case, the json file
// autoplay - a boolean determining if it will start playing as soon as it is ready
// loop - a boolean or number, this determines if the animation will repeat or how many times it should repeat
// rendererSettings - configuration data for the renderer

const animationOptions = {
  loop: 1,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

class App extends React.Component {
  state = { isStopped: true } 

  handleButton=()=>{
    this.setState({ isStopped: false, isPaused: false })
  }

  render() {
    const { isStopped } = this.state
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '50px' }}>
        <h1 style={{ color: '#242240' }}>Send message</h1>
        <input type="text" placeholder="Send me a message" style={{ padding: '5px 10px', width: '20%' }}/>
        <button 
          type="button"
          onClick={this.handleButton}
          style={{ 
            marginLeft: '10px', 
            padding: '7px 10px', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#242240'
            }}>
            Submit
        </button>
        </div>
        <Lottie 
          options={animationOptions}
          height={340}
          width={340}
          isStopped={isStopped}
          eventListeners={[
            {
              eventName: 'loopComplete',
              callback: () => {
                this.setState({ isStopped: true })
              }
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
