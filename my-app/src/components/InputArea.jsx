import React from "react";
import { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Fab } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';

function InputArea(props){

    const [note,setNote]=useState({
        title:"",
        content:""
    });

function handleChange(event){
//destructuring
const {name,value}=event.target;
console.log(name);
console.log(value);

 setNote(prevNote => {
    console.log(prevNote);
   return{
    ...prevNote,
    [name]:value
   };
 });

}
  function submittedNote(event){
    props.onAdd(note);
    setNote({
        title:"",
        content:""
    });
      event.preventDefault();
      
  }
  
    return(
        <div> 
         <form>
        <input onChange={handleChange}  placeholder="Title" name="title" value={note.title}></input>
        <textarea onChange={handleChange}  placeholder="Take a note..." name="content" value={note.content} rows="3"></textarea>
       <Zoom in="true">
       <Fab onClick={submittedNote}><AddCircleIcon/> </Fab>
       </Zoom>
       </form>
        </div> 
    );
}

export default InputArea;