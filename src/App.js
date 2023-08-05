import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {

  const[summonerName, setsearchText] = useState("");
  const [playerData, setPLayerData] = useState("");
  console.log(summonerName);
  const API_KEY = "YOUR_API_KEY"
  
function searchPlayer(event) {

  var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + API_KEY

  axios.get(APICallString).then(function ( response ){ 

    setPLayerData(response.data);
  }).catch(function ( error ) {
    console.log("Error", error);
  });
}

console.log(playerData);

  return (
    <div className="App">
      <div className='container'>
      <h1 className='logo'>League API app</h1>
      <Menu/>
      </div>

        <header>
          <p>

          </p>
        </header>
      <input type="text" onChange={e => setsearchText(e.target.value)}></input>
      <button onClick={searchPlayer}>Search for player</button>

      {Object.keys(playerData).length !== 0 ? (
        <>
          <p>{playerData.name}</p>
          <p>Summoner Level {playerData.summonerLevel}</p>
        </>
        ) : (
        <p>No Player Data</p>
        )}

      <header className="App-header"></header>
    </div>
  );
}

export default App;


       {/* <header className="App-header">
      <img src="https://i.imgur.com/W8xKBly.png" />
        <p>
          Don't click the link below for your own safety.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?app=desktop&v=q7jCrhETMEM"
          target="_blank"
          rel="noopener noreferrer"
        >
          DO NOT CLICK
        </a>
        <p>
          
        </p>
        <img src="https://media.tenor.com/IFqC_LNcqMwAAAAC/hello-click-here.gif" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
           Do what the image is telling you to do.
        </a>
      </header> */}

    {/*  ------------------------------------------------------------------------- */}

    /* </header>
       <header className="App-header">
      <img src="https://media.tenor.com/IFqC_LNcqMwAAAAC/hello-click-here.gif" />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
           Do what the image is telling you to do.
        </a>
      </header>*/

       {/*  ------------------------------------------------------------------------- */}

     /* <img src="https://media.tenor.com/6us3et_6HDoAAAAC/hello-there-hi-there.gif" />
        <p>
          Click the green words for magic
        </p>
        <img src="https://media.tenor.com/3eIvVsG3yPYAAAAM/the-universe-tim-and-eric-mind-blown.gif" />
      */