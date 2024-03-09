import React from 'react'

const App = () => {
  return (
    <div>
      <h2>Testing on single and multiple elements</h2>
      <button>Click</button>
      <button>Button 2</button>
      {/* we can give custom role in order to access this in spscific element  */}
      <div role="test-role">
         hii
      </div>
      <div className="select-style">
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
      </div>
    </div>
  )
}

export default App
