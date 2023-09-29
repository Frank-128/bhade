import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";
import { useBhadeContext } from "../context/BhadeContext";

export default function DialogWithForm({ open, setOpen }) {
  const [name,setName] = useState("")
  const [task_time,setTaskTime] = useState(null)
  const {fetchData} = useBhadeContext()

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = async()=>{
    const res = await axios.post('/addTask',{name,task_time});
    await fetchData()
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Todo Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new to do task so as to keep track of your 
            todo list 
          </DialogContentText>
        <div className="space-y-5">
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Todo message"
            onChange={(e)=>setName(e.target.value)}
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date and Time"
            type="datetime-local"
            fullWidth
            variant="standard"
            InputLabelProps={{
                shrink:true
            }}
            onChange={(e)=>setTaskTime(e.target.value)}
          />
        
            </div> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
