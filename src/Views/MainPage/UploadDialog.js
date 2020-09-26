import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

//Props- input:
//shouldOpen
function UploadDialog(props) {
  const classes = useStyles();

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="uploadfile-dialog-title"
      open={props.open}
    >
      <DialogTitle id="uploadfile-dialog-title">Upload a file</DialogTitle>
      <DialogContent>
        <Input
          type="file"
          name="file"
          inputProps={{
            accept: ".json, .txt, .pdf",
          }}
          onChange={(event) => console.log(event.target.value)}
        ></Input>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Upload
        </Button>
        <Button onClick={props.handleClose} color="secondary">
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UploadDialog;
