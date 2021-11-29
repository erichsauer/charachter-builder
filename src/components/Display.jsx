import React from 'react'

export const Display = ({head, middle, bottom, shoes, catchphrases, handleCatchphraseRemove}) => {
  return (
    <article>
      <div style={{fontSize: '3rem', height: '3rem'}}>{head}</div>
      <div style={{fontSize: '3rem', height: '3rem'}}>{middle}</div>
      <div style={{fontSize: '3rem', height: '3rem'}}>{bottom}</div>
      <div style={{fontSize: '3rem', height: '3rem'}}>{shoes}</div>
      {catchphrases.map((catchphrase, i) => <div onClick={() => handleCatchphraseRemove(catchphrase)} key={catchphrase + i}>{catchphrase}</div>)}
    </article>
  )
}
