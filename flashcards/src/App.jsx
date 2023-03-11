import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BiShuffle } from 'react-icons/bi'
import studySet from './studySet'
import Card from './components/Card'
import './App.css'

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [isNotFlipped, setIsNotFlip] = useState(true);
  const [question, setQuestion] = useState(studySet[0].question);
  const [answer, setAnswer] = useState(studySet[0].answer)
  const [categColor, setcategColor] = useState('blue');

  const showRandomCard = () =>{
    const randNum = Math.floor(Math.random() * studySet.length);
    showCard(randNum);
  }
  
  function forward(){
    if(cardIndex >= 23){
      return;
    }
    setCardIndex(cardIndex + 1);
    console.log({cardIndex});
    showCard(cardIndex+1)
  }
  function backward(){
    if(cardIndex <= 0){
      return;
    }
    setCardIndex(cardIndex - 1);
    showCard(cardIndex-1);
  }
  // const forward = () => {
  //   //edge case
  //   if(cardIndex > 23){
  //     return;
  //   }else{
  //     setCardIndex(cardIndex + 1);
  //     console.log("forward: ",{cardIndex});
  //   }

  //   showCard(cardIndex);
  // }

  // const backward = () =>{
  //   //edge case
  //   if(cardIndex < 0){
  //     console.log("negative", cardIndex);
  //     return;
  //   }else{
  //     setCardIndex(prevState => prevState - 1);
  //   }

  //   console.log("back: ",{cardIndex});

  //   showCard(cardIndex);
  // }

  const showCard = (index) => {
    console.log({index})

    setQuestion(studySet[index].question);
    setAnswer(studySet[index].answer);
    setcategColor(studySet[index].categColor);
    setIsNotFlip(true);
  }
  const showBack = () => {
      setIsNotFlip(prevState => !prevState);
  }

  return (
    <div className="App">
      <header>
        <h1>Food Items But Say It In French!</h1>
        <h3>How much of these food terms in French do you know? Except for "baguette" and "croissant"? Let's put your knowledge on the test</h3>
        <h4>Number of Cards: 24</h4>
      </header>

      <div className="card-component" onClick={showBack}>
        <Card 
          img = {question}
          categColor = {categColor}
          cardText = {isNotFlipped ? question : answer}
        />
      </div>

      <div className="btn-container">
        <h1>{cardIndex}</h1>
        <button onClick={backward}  ><span><AiOutlineArrowLeft /></span>
        </button>
        <button onClick={forward}>
        <span><AiOutlineArrowRight /></span>
        </button>
        <button onClick={showRandomCard}  ><span><BiShuffle /></span></button>
      </div>
    </div>
  )
}

export default App
