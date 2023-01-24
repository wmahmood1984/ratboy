import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import spinner from "./Img/spinner.gif"



function ResponsiveDialog({open,setOpen,title}) {




    return (
        <div>
          <Dialog
        open={open}

        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: "white"
          },
        }}
      

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         {title? title : "Transaction in process..."}
         <div style={{textAlign:"center"}}>

            
         <img style={{marginLeft:"33%"}} width="100px" src={spinner}></img>
          
            </div>
         
        </DialogTitle>

        <DialogActions>
  
  
        </DialogActions>
      </Dialog>
          
        </div>
     
    );
  }


  export default ResponsiveDialog