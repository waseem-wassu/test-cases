import React from 'react'
// import path from 'path';
// import Tesseract from 'tesseract.js';

// const imagePath = path.join(__dirname, 'public', 'my.png');

// Tesseract.recognize(
//   imagePath,
//   'eng', // Language code (e.g., 'eng' for English)
//   { logger: m => console.log(m) } // Optional logger function
// ).then(({ data: { text } }) => {
//   console.log('Extracted text:', text);
// }).catch(error => {
//   console.error('Error:', error);
// });


const App = () => {
  const [data,setData] = React.useState("")
  return (
    <div>
       <h2>test click event with button</h2>
       <button onClick={() => setData("heyya")}>Update1</button>
         <p>Greeting is: {data}</p>
    </div>
  )
}

export default App
