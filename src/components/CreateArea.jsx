import React, {useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

const[note, setNote]=useState({
    title: "",
    content: ""
})
const[isExpanded, setExpanded]=useState(false)

function handleChange(e){
   const {value, name} = e.target
   
setNote(prevNote => {
    return{
        ...prevNote,
        [name]: value
       }}
)}

function submitNote(e){
    props.onAdd(note)
    setNote(
        {
            title: "",
            content: ""
        }  )
    e.preventDefault()
    }


    function expand(){
     setExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded &&( <input 
        autoComplete="off" 
        onChange={handleChange} 
        name="title" 
        value={note.title} 
        placeholder="Title" />)
        }
        <textarea         
        onClick={expand}
        onChange={handleChange} 
        name="content" 
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1 } />
        <Zoom in={isExpanded ? true : false}>
        <Fab onClick={submitNote}>
        <NoteAddIcon />
        </Fab>
        </Zoom>
      </form>
      
    </div>
  );
}

export default CreateArea;
