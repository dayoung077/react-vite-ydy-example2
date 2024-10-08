import React, { useRef } from 'react'

// Dom 객체를 받아올 때
// useRef로 특정 Dom 선택하기
// getElementById, querySelector 같은 DOM Selector 함수를 사용해서 Dom을 선택한다.
// 프로젝트에서도 가끔씩 Dom을 직접 선택해야 하는 상황이 발생
// 예를 들어서 특정 엘리먼트의 크기를 가져와야 한다든지,
// 스크롤바 위치를 가져오거나 설정해야 된다든지,
// 또는 포커스를 설정해 줘야 된다든지 등 정말 다양한 상황이 있다.
// 추가적으로 Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리
// 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도
// 특정 Dom에다 적용하기 때문에 DOM 객지를 useRef()로 가져온다.

const UseRefEx2 = () => {
  const nameRef = useRef()

  // let nameRef = {
  //   current: windows.documnet.querySelector('input'),
  // }

  const handleClick = () => {
    console.log(nameRef.current)
    console.log(nameRef.current.name)
    console.log(nameRef.current.value)

    if (nameRef.current.value.length < 1) {
      nameRef.current.focus()
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <input ref={nameRef} name="name" placeholder="이름을 입력하세요" />
      <button onClick={handleClick}>입력</button>
    </div>
  )
}

export default UseRefEx2
