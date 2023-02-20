export default function dateStringToEpoch (dateString) {
  // const date = new Date(dateString);
  // console.log(date);
  // const epoch = Math.floor(date / 1000);
  // console.log(epoch);
  // return epoch;
  return Math.floor(new Date(dateString) / 1000);
}