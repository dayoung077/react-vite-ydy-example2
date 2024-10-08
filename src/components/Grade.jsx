import React, { useState } from 'react'

const Grade = () => {
  // let text = ''
  const [text, setText] = useState('')

  const [kor, setKor] = useState(0)
  const [eng, setEng] = useState(0)
  const [math, setMath] = useState(0)
  const [name, setName] = useState('')

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onkorChange = (event) => {
    setKor(event.target.value)
  }

  const onengChange = (event) => {
    setEng(event.target.value)
  }

  const onmathChange = (event) => {
    setMath(event.target.value)
  }

  // prettier-ignore
  return (
    <div>
      이름 : <input name="name" onChange={onNameChange} value={name} /> <br />
      국어 : <input name="kor" onChange={onkorChange} value={kor} /> <br />
      영어 : <input name="eng" onChange={onengChange} value={eng} /> <br />
      수학 : <input name="math" onChange={onmathChange} value={math} /> <br />

      <div>
        <div>총점 : {Number(kor) + Number(eng) + Number(math)}</div>
        <div>평균 : {(Number(kor) + Number(eng) + Number(math)) / 3.0}</div>
      </div>
    </div>
  )
}

export default Grade