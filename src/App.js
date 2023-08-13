import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import LikeButton from './components/LikeButton/LikeButton'; 
import FreeChampions from './components/FreeChampions/FreeChampions';

function App() {

  const[summonerName, setsearchText] = useState("");
  const [playerData, setPLayerData] = useState("");


  console.log(summonerName);
  const API_KEY = "RGAPI-6143788a-2eb2-4732-98a7-5d60319247b2";
   /* Change API key*/
    
function searchPlayer(event) {

  var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + API_KEY
   {/* API endpoint*/}

  axios.get(APICallString).then(function ( response ){ 

    setPLayerData(response.data); {/* This sets the data to the function*/}

  }).catch(function ( error ) {

    console.log("Error", error); {/* Is an error occurs look in the console in localhost*/}

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
      <button onClick={searchPlayer}>Search for player</button> {/* This gives the function the text the user inputted */}

      {Object.keys(playerData).length !== 0 ? ( 
        <>
          <p>{playerData.name}</p>
          <img width="100" height="100" src={"https://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/" + playerData.profileIconId +".png"} /> 
          {/* Look at this website and update the version per patch: https://ddragon.leagueoflegends.com/api/versions.json*/}
          <p>Summoner Level {playerData.summonerLevel}</p>
        <LikeButton />
        </>
        ) : (
        <p>No Player Data</p>
        )}

        {/* ChatGPT helped with the above Object. */}
        <FreeChampions />
        <header className="App-header"></header>
    </div>
  );
}

export default App;

