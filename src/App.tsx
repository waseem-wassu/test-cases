import React from 'react'

const App = () => {
  const [data,setData] = React.useState("")
  return (
    <div>
       <h2>test click event with button</h2>
       <button onClick={() => setData("heyya")}>Update</button>
         <p>Greeting is: {data}</p>
    </div>
  )
}

export default App
