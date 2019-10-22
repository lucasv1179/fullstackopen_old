import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(getRandomNum(0, 6));
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function getRandomNum(num1, num2) {
    const min = Math.ceil(num1);
    const max = Math.floor(num2);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getMostVoted = () => {
    if(votes.some(vote => vote > 0)) {
      const index = votes.reduce((max, vote, index, votes) => vote > votes[max] ? index : max, 0);
      return anecdotes[index];
    }
    return "No votes yet";    
  };

  const handleClick = () => {
    let randomNum;  

    do {
      randomNum = getRandomNum(0, 6);
    } while(randomNum === selected);
    setSelected(randomNum);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <Fragment>
      <div>
        <h1>Anecdote of the Day</h1>
        <p>{props.anecdotes[selected]}<span><b> ({votes[selected]} votes)</b></span></p>
        <button onClick={handleClick}>New anecdote</button>
        <button onClick={handleVote}>Vote up</button>
      </div>
      <div>
        <h3>Most Voted Anecdote</h3>
        <p>{getMostVoted()}</p>
      </div>
    </Fragment>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
