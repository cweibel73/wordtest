import './App.css';
import { React, useState } from 'react'

function App() {
    const [word, setWord] = useState('')
    const [result, setResult] = useState('')

    function handleChange(e) {
        setWord(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(res => res.json())
            .then(data => setResult(data[0] ?
                "Yes, it is a word: " + data[0].meanings[0].definitions[0].definition :
                "Nope,not a word."))

    }
    function reset() {
        setWord('')
        setResult('')
    }
    return (
        <div className="App">
            <h1>Is it a word?</h1>
            {result}<br />
            <form onSubmit={handleSubmit}>
                Enter a word:<input type="text" onChange={handleChange} value={word} />
                <button type="submit">Submit</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    );

}

export default App;
