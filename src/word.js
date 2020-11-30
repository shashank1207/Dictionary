import React from 'react';

const Word =({words}) =>{

    var i=-1;
    const wordList = words.definitions.map(word=>{
        i++;
        return(
            <div key={i} className='defi-container'>
                <div>
                    {word.emoji}
                </div>
                <div className='type'>
                    {word.type}
                </div>
                <div className='definition'>
                    {word.definition}
                </div>
                <div className='example'>
                    {word.example}
                </div>

            </div>
        )
    })
    return(
        <div className='word-container'>
            <div className='searched-word'>
                    {words.word}
            </div>
            <div className='pronunciation'>
                Pronunciation: {words.pronunciation}
            </div>
            {wordList}
        </div>
    )
}

export default Word;