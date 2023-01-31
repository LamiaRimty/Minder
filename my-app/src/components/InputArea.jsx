import React from "react";
import { useState } from "react";

function InputArea(){
    const [inputText,setInputText]=useState("");
    //const [notes,setNotes]=useState([]);

function handleChange(event){
   const newTitle=event.target.value;
   const newContent=event.target.value;
   setInputText(newTitle,newContent);
}
    return(
        <div>
         <form>
        <input onChange={handleChange}  placeholder="Title" name="title"></input>
        <textarea onChange={handleChange}  placeholder="Add a note" name="content"></textarea>
        <button>Add+</button>
       </form>
        </div>
    );
}

export default InputArea;