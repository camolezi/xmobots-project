import React, { useState } from "react";
import LoadingCircle from "./LoadingCircle.js";
/*
This component abstract a basic form. The form state is recorded with raect use state, and can be used to validate the form 
  Usage:
    Props:
      id - id for the form tag
      children - JSX to be renderer inside the forms- buttons and texts inputs etc.. - Basically the form content
      afterSubmit - callback called after the forms in submitted
*/
function BasicForm(props) {
  const [formState, setFormState] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setSubmitted(true);

    //here is where we would submit the form with AJAX
    //setTimeout to simulate a AJAX request
    setTimeout(() => {
      //assume since we are not sumitting ok response
      if (props.afterSubmit) props.afterSubmit(true, formState);
    }, 400);
  }

  function changedForm(e) {
    //Update state
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <form id={props.id} onChange={changedForm} onSubmit={submitForm}>
      {submitted ? <LoadingCircle /> : props.children}
    </form>
  );
}

export default BasicForm;
