import React, { useEffect } from "react";

const App = () => {
  const [data,setData] = React.useState<boolean>(false);
  const [name,setName] = React.useState<string>("")
  useEffect(() => {
    setTimeout(() => {
     setData(true)
    },500)
  }, []);


  return (
    <div>
      <h3>findBy and findAllBy</h3>
      {data ? <h4>hello</h4> : <h4>bye</h4>}
      {/* this is for user event test case  */}
      <p>{name}</p>
      <button onClick={() => setName("Waseem")}>Click Me</button>
    </div>
  );
};

export default App;
