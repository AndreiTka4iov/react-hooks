import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

function Hover() {
    const ref = useRef()
    const isHovering = useHover(ref)

  return (
    <div ref={ref} style={{width: 300, height: 300,  background: isHovering ? 'red' : 'green'}}>
        <button onClick={() => console.log(ref.current)}>Click me</button>
    </div>
  )
}

export default Hover