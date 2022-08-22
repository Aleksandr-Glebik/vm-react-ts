import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h1 className="text-3xl font-bold py-4">
        {count}
      </h1>
      <button className={'py-2 px-4 border'} onClick={() => {setCount(count + 1)}}>Click ++</button>
      <button className={'py-2 px-4 border'} onClick={() => {setCount(count - 1)}}>Click --</button>
    </div>
  )
}

export default App
