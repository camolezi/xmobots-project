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
  const dmsRegex = /\d{6}([,.]\d{2})?S\/0?\d{6}([,.]\d{2})?W/i;
  const result = dmsRegex.exec(input);

  return result[0];
}

//This function converts a DMS coordinate string to DD format [latitude,longitude]
export function ConvertDMSToDD(dms) {
  //This regex captures the first part of the DMS coordinates, and separates the minutes,seconds,and degrees
  const latitudeRegex = /0?(\d{2})(\d{2})(\d{2}([,.]\d{2})?)([SN])/i;
  const latitudeResult = latitudeRegex.exec(dms);
  if (!latitudeResult) {
    return null;
  }
  let latitudeValue = AbsoluteDMSToDD(
    latitudeResult[1],
    latitudeResult[2],
    latitudeResult[3].replace(",", ".")
  );
  latitudeValue = latitudeResult[5] === "S" ? -latitudeValue : latitudeValue;

  const longitudeRegex = /0?(\d{2})(\d{2})(\d{2}([,.]\d{2})?)([WE])/i;
  const longitudeResult = longitudeRegex.exec(dms);
  if (!longitudeResult) {
    return null;
  }
  let longitudeValue = AbsoluteDMSToDD(
    longitudeResult[1],
    longitudeResult[2],
    longitudeResult[3].replace(",", ".")
  );
  longitudeValue =
    longitudeResult[5] === "W" ? -longitudeValue : longitudeValue;

  return [latitudeValue, longitudeValue];
}

function AbsoluteDMSToDD(str_degrees, str_minutes, str_seconds) {
  const degress = Number(str_degrees);
  const minutes = Number(str_minutes);
  const seconds = Number(str_seconds);

  const decimalDegrees = degress + minutes / 60 + seconds / 3600;

  return decimalDegrees;
}
