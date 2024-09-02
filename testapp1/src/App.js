import "./App.css";
import Navbar from "./Navbar";
import TableUI from "./TableUI";
import { useState, useEffect } from "react";

function App() {
  const [src, setSrc] = useState("");
  const [tblData , setTblData] = useState("");
  const submitMethod=(e)=>{
    // console.log(e);
    // console.log("Method call");
setTblData(src);
  }

  useEffect(()=>{
    // console.log("src change : "+src);
  },[src]);

  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container p-2 w-100">
        <div className="container border rounded p-1 d-flex">
          <div className="input-group mb-3">
            {/* Takes input string and is mapped to state=src. Input string in the form xx-yy-zz-aa */}
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setSrc(e.target.value);
              }}
              placeholder="xx-yy-zz"
              aria-label="Input String"
              value={src}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-clear"
              onClick={e=>{
                setSrc("");
              }}
            >
              Clear
            </button>
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-add"
              onClick={(e)=>{submitMethod(e)}}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <br />
      <div>
        {/* <h5> {src} </h5> */}
        <TableUI userInput={tblData}/>
      </div>
    </div>
  );
}

export default App;
