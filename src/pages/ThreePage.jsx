import React from 'react'
import Hello3 from '../components/Hello3'

export const ThreePage = () => {
  return (
    // prettier-ignore
    <div>
    <Hello3 name="홍길동" color="red" isSpecial={true} isName={true}></Hello3>
    <Hello3 name="홍길동" color="red" isSpecial={false} isName={false}></Hello3> <br/>
  </div>
  )
}

export default ThreePage
