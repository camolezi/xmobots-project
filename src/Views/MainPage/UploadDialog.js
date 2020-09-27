import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { SetAirports } from "../../Store/Slices/airportSlice";

/*
This component handles getting a user provided airport file. And adding the content of the file to the redux store

Props- input:
  open:boolean -if true the dialog is open
  handleClose:function - this function is called when the dialog should be closed

*/
function UploadDialog(props) {
  const dispatch = useDispatch();

  const [uploadFile, setUploadFile] = useState(null);
  const [errorState, setErrorState] = useState(false);

  const changeFileHandler = (event) => {
    const inputfile = event.target.files[0];
    if (
      inputfile.type === "application/json" ||
      inputfile.type === "text/plain"
    ) {
      setUploadFile(inputfile);
      setErrorState(false);
      return;
    }

    setErrorState(true);
  };

  const uploadFileHandler = () => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const resultJson = JSON.parse(event.target.result);
      if (!resultJson.aerodromes) {
        setErrorState(true);
        return;
      }
      dispatch(SetAirports(resultJson.aerodromes));
      props.handleClose();
    };

    reader.onerror = () => {
      setErrorState(true);
    };

    reader.readAsText(uploadFile);
  };

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
            accept: ".json, .txt",
          }}
          onChange={changeFileHandler}
          error={errorState}
        ></Input>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={uploadFileHandler}
          color="primary"
          disabled={!Boolean(uploadFile) || errorState}
        >
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
