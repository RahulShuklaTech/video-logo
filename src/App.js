import ReactPlayer from 'react-player';
import React from 'react';
import './App.css';

function App() {

  const [showLogo, setShowLogo] = React.useState(false);
  const [logo, setLogo] = React.useState(null);


  const handleClick = (selectedLogo) => { 
    showLogo ? setShowLogo(true) : setShowLogo(true);
    setLogo(selectedLogo);

  }

  return (
    <div className="App">
      <h1>Display Logo on Video</h1>
      <div className="container">
        
        <div className="video-container">
          <div className= "show-logo">
            {showLogo ? <img src = {logo} alt = "logo" /> : null}
          </div>
          <ReactPlayer
            url="assets/video.mp4"
            controls={true} />
        </div>
        <div className="thumbs-container">
          <div className = "logo one" onClick = {() => handleClick("assets/amazon.jpg")}>
            <img src="assets/amazon.jpg" alt="logo" />
          </div>
          <div className = "logo two" onClick = {() => handleClick("assets/Facebook-logo.png")} >
            <img src="assets/Facebook-logo.png" alt="logo" />
          </div>
          <div className = "logo three" onClick = {() => handleClick("assets/google-logo.png")}>
            <img src="assets/google-logo.png" alt="logo" />
          </div>
          <div className = "logo four" alt="remove logo" onClick = {() => setShowLogo(false) }>
            <img src="assets/remove.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
