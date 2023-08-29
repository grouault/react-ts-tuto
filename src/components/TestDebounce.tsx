import React, { useEffect, useRef } from 'react'

const useDebounce = (callback: () => void, time: number) => {
  const debounce = useRef(null);
  return () => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() =>{
      callback()
    }, time);
  }
}

export default function TestDebounce() {
  const onDebounce = useDebounce(() => { alert("debounce")}, 1000);
  return (
    <div>
      <input type='text' onChange={onDebounce}/>
    </div>
  )
}
