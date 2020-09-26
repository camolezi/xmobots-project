/*
 This file contains utility functions for helping parsing an airport json file.
 All functions here are pure functions.
*/

//Returns, if present a  DMS coordinate in the input text
export function ParseDMS(input) {
  /*
  let r1 = /\d{6}S\/\d{7}W/i;
  let r2 = /\d{6}\.\d{2}S\/\d{7}\.\d{2}W/i;
  let r3 = /\d{6},\d{2}S\/\d{7},\d{2}W/i;
  */
  const dmsRegex = /\d{6}([,.]\d{2})?S\/\d{7}([,.]\d{2})?W/i;
  const result = dmsRegex.exec(input);

  console.log(input);
  console.log(result);

  return result[0];
}
