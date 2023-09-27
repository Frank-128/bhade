import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogWithForm({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

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
          />
        
            </div> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
