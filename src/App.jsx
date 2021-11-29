import { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Picker } from './components/Picker';

function App()
{
  const [alertSeen, setAlertSeen] = useState(false)
  const [ head, setHead ] = useState('')
  const [ middle, setMiddle ] = useState('')
  const [ bottom, setBottom ] = useState('')
  const [ shoes, setShoes ] = useState('')
  const [ catchphrase, setCatchphrase ] = useState('')
  const [ catchphrases, setCatchphrases ] = useState([])

  const handleCatchphrases = e =>
  {
    e.preventDefault()
    if (!alertSeen)
    {
      alert('click on a catchphrase to delete')
      setAlertSeen(true)
    }
    setCatchphrases(currentCatchphrases => [ catchphrase, ...currentCatchphrases ])
    setCatchphrase('')
  }

  const handleCatchphraseRemove = catchphraseToRemove => setCatchphrases(currentCatchphrases => [...currentCatchphrases.filter(catchphrase => catchphrase !== catchphraseToRemove )])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Builder</h1>
        <Picker
          currentHead={head}
          currentMiddle={middle}
          currentBottom={bottom}
          currentShoes={shoes}
          onHeadChange={setHead}
          onMiddleChange={setMiddle}
          onBottomChange={setBottom}
          onShoesChange={setShoes}
        />
        <form onSubmit={handleCatchphrases}>
        <input type="text" placeholder='new catchphrase' value={catchphrase} onChange={({ target: { value } }) => setCatchphrase(value)} />
        <button type="submit">add</button>
        </form>
        <Display head={head} middle={middle} bottom={bottom} shoes={shoes} catchphrases={catchphrases} handleCatchphraseRemove={handleCatchphraseRemove}/>
      </header>
    </div>
  );
}

export default App;
