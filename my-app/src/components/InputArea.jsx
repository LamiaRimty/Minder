import React from "react";
import { useState } from "react";

function InputArea(){
    //const [inputText,setInputText]=useState("");
    const [note,setNote]=useState({
        title:"",
        content:""
    });

function handleChange(event){
//    const newTitle=event.target.value;
//    const newContent=event.target.value;
//    setInputText(newTitle,newContent);
const newNote=event.target.value;
setNote(newNote);
}
    return(
        <div>
         <form>
        <input onChange={handleChange}  placeholder="Title" name="title" value={note.title}></input>
        <textarea onChange={handleChange}  placeholder="Take a note..." name="content" value={note.content}></textarea>
        <button>Add+</button>
       </form>
        </div>
    );
}

export default InputArea;