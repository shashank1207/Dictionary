import React, {useState} from 'react';
import './App.css';
import Word from './word';
import Nav from './Nav'
import search from './search.png';

function App() {

  const[words, setWords] = useState();
  // const[isSelected, setIsSelected] = useState();

  const getApi = (query) =>{
    var Owlbot = require('owlbot-js');
  
    var client = Owlbot('52f0faa6d4b3cd8f9cca6b441ab176dc26dbb921');
  
    client.define(query).then(function(result){
      setWords(result);
    });
  }

  return (
    <div className='App'>
      <Nav getApi={getApi} find={search}/>

      {!words?<div class="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>:
      <Word words = {words} />
      }
    </div>
  );
}

export default App;
