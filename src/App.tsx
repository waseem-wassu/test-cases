import React, { useEffect } from "react";
import User from "./User";

const App = () => {
  const [name,setName] = React.useState<string>("")

  const [status,setStatus] = React.useState<boolean>(false)

  const changeStatus = () => {
    setStatus(!status)
  }
  
  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" />
      <User name={name} status={status} changeStatus={changeStatus} />        
    </div>
  )
  
};

export default App;
