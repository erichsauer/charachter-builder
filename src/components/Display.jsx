import React from 'react'

export const Display = ({head, middle, bottom, shoes, catchphrases, handleCatchphraseRemove}) => {
  return (
    <article>
      <div >{head}</div>
      <div >{middle}</div>
      <div >{bottom}</div>
      <div >{shoes}</div>
      {catchphrases.map((catchphrase, i) => <div onClick={() => handleCatchphraseRemove(catchphrase)} key={catchphrase + i}>{catchphrase}</div>)}
    </article>
  )
}
