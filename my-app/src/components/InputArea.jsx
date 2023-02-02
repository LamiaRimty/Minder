import React from "react";
import { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Fab } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';

function InputArea(props){
  const [isExpand,setExpand]=useState(false);

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
  
  function expand(){
    setExpand(true);
  }
    return(
        <div> 
         <form>
          { isExpand && ( 
             <input onChange={handleChange}  placeholder="Title" name="title" value={note.title}></input>
        )}
      <textarea onClick={expand} 
                 onChange={handleChange}  
                 placeholder="Take a note..." 
                 name="content" 
                 value={note.content}
                 row={ isExpand? 3 : 1}
       />

       <Zoom in="true">
       <Fab onClick={submittedNote} style={{ color: "#674188" }}><AddCircleIcon /></Fab>
       </Zoom>
       </form>
        </div> 
    );
}

export default InputArea;