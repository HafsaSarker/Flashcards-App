import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BiShuffle } from 'react-icons/bi'
import studySet from './studySet'
import Card from './components/Card'
import './App.css'

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const[randIndex, setRandIndex] = useState(0);
  const [isNotFlipped, setIsNotFlip] = useState(true);
  const [question, setQuestion] = useState(studySet[0].question);
  const [answer, setAnswer] = useState(studySet[0].answer)
  const [categColor, setcategColor] = useState('blue');
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState("neutral");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState([]);
  //style for user's answer result
  const styles = {
    color: isCorrect === "right" ? "green" : "red"
  }

  const resetInput = () => {
    setInput("");
    setIsCorrect("neutral");
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    // console.log({input});
   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submitted input: ", input);
    const submittedInout = input.toLowerCase();
    setIsCorrect(submittedInout === answer ? "right" : "wrong");
    // console.log({isCorrect})
    //streakStats();
  }
  console.log({streak});
  const streakStats = () => {
    setStreak(prevStreak => {
        if(isCorrect === "neutral"){
          prevStreak;
        }
        else if(isCorrect === "right"){
          prevStreak+1;
        }
        else{
          0;
        }
    });
    setLongestStreak(
      [
        ...longestStreak,
        {streak}
      ]
    )
    console.log({streak});
    console.log(longestStreak);
  }

  const showRandomCard = () =>{
    resetInput();
    const randNum = Math.floor(Math.random() * studySet.length);
    setRandIndex(randNum);
    // console.log({randIndex});
    setIsShuffling(true);
    showCard(randNum);
  }
  
  function forward(){
    if(cardIndex >= 23){
      return;
    }
    resetInput();
    setIsShuffling(false);
    setCardIndex(cardIndex + 1);
    // console.log({cardIndex});
    showCard(cardIndex+1)
  }
  function backward(){
    if(cardIndex <= 0){
      return;
    }
    resetInput();
    setIsShuffling(false);
    setCardIndex(cardIndex - 1);
    showCard(cardIndex-1);
  }

  const showCard = (index) => {
    // console.log({index})

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
        {/* <div className="stats">
          <h3>Current streak: {streak}</h3>
          <h3>Longest streak: {Math.max(longestStreak)}</h3>
        </div> */}
        <Card 
          img = {question}
          categColor = {categColor}
          cardText = {isNotFlipped ? question : answer}
        />
      </div>
      <h4>Current Card: {!isShuffling ? cardIndex+1 : randIndex+1}/24</h4>
      {isNotFlipped && 
        <form onSubmit={handleSubmit}>
        <label>
          Guess the answer:  
          <input 
            id={isCorrect}
            type="text" 
            placeholder="Place answer here"
            value={input}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      }

      {!isNotFlipped && <h3 style={styles}>Your guess: {input}</h3>}

      <div className="btn-container">
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
