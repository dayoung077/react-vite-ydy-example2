import React from 'react'

export const Hello2 = ({ name, color, age }) => {
  return (
    // prettier-ignore
    <div style={{color : color}}>
      안녕하세요. {name} <br/>
      색상 : {color} <br/>
      나이 : {age} <br/>
    </div>
  )
}

export default Hello2
