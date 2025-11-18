import { useState } from "react";
import axios from "axios";
import Markdown from "react-markdown"

const App = () => {

const [code, setcode] = useState("")
const [review, setReview] = useState("")

function handleChange(e){
  setcode(e.target.value)
}

async function reviewCode(){
  if(code.trim().length==0){
    setReview("Write your Code first.");
  }
  let response = await axios.post('https://codereviewx-1.onrender.com/ai/get-response', {code});
  setReview(response.data);
}

  return (
    <div className="main">
      <div className="left">
        <h1>Write you code here to review</h1>
        <div className="code">
          <textarea onChange={handleChange} value={code} rows={24}></textarea>
        </div>
        <button onClick={reviewCode} className="review">Review Code</button>
      </div>
      <div className="right">
        <Markdown>{review}</Markdown>
      </div>
    </div>
  );
};

export default App;
