import logo from './logo.svg';

import './App.css';
import React, { Component, useState, useEffect } from "react";





////////




function App() {

  const [bestScore, setBestScore] = useState(0);
  const [cardsList, setCardsList] = useState(["/gokussj.png", "/17.png", "/chuck.jpeg", "/cloudy.jpeg", "/gohan.png", "/songoku.png", "/sunny.jpeg", "/vegetassb.png", "/Yoshi.png"]);
  const [seenCards, setSeenCards] = useState([])

  const changeBestScore = (e) => {
    if (e.target.closest("img") === null) {
      return ("ok")
    }
    const element = (e.target.closest("img").src).slice(21);

    if (seenCards.includes(element)) {
      setBestScore(bestScore)
    } else if (seenCards.length >= bestScore) {
      setBestScore(seenCards.length + 1);

    };





  };


  const updateSeenCards = (e) => {
    if (e.target.closest("img") === null) {
      return ("ok")
    }
    const element = (e.target.closest("img").src).slice(21)
    if (seenCards.includes(element)) {
      setSeenCards([])

    } else {
      setSeenCards([...seenCards, element]);
    }

    console.log(seenCards)
  };

  const randomImages = (e) => {
    if (e.target.closest("img") === null) {
      return ("ok")
    }
    let random1 = Math.floor((Math.random()) * 9); ///6
    let element1 = cardsList[random1]; ///sunny.jpeg
    let random2;

    do {
      random2 = Math.floor((Math.random()) * 9)
    } while (random1 === random2);



    let element2 = cardsList[random2]; /// gohan


    const newCardsList = [...cardsList];
    newCardsList.splice(random1, 1);

    if (random1 < random2) {
      newCardsList.splice(random2 - 1, 1);
    } else {
      newCardsList.splice(random2, 1)
    }

    newCardsList.unshift(element1);
    newCardsList.push(element2);

    setCardsList(newCardsList);
  };

  return (
    <>
      <div className="cardBoard">
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[0]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[1]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[2]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[3]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[4]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[5]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[6]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[7]} /></div>
        <div onClick={(e) => { randomImages(e); updateSeenCards(e); changeBestScore(e) }}><img alt="ftg" src={cardsList[8]} /></div>
      </div>
      <div id="current" >Current score : {seenCards.length}</div>
      <div id="best">Best Score: {bestScore}</div>
    </>
  )
};

export default App;
