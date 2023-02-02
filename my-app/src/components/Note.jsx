import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return(
        <div className="note">

              <h1>{props.title}</h1>
               <p>{props.content}</p>
               <button type="submit" onClick={handleClick} style={{ color: "#674188" }}> <DeleteIcon/></button>
        </div>
      
    );
}

export default Note;