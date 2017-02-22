import axios from 'axios';
export const FETCH_COORDS = 'FETCH_COORDS';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY =  'AIzaSyA_r9tq-Httvzvqtg5mnRDFIvyn0Sjx15o';

function formatAddress(addr){
  var stringarray = addr.split(" ");
  var str = '';
  console.log(stringarray);
  for(var i =0; i<stringarray.length; i++){
    if(i===stringarray.length-1){
      str += stringarray[i];
    }else{
      str += stringarray[i]+"+";
    }
  }
  return str;
}

export function fetchCoords(address){
  // var addr = '1600+Amphitheatre+Parkway,+Mountain+View,+CA&';
  console.log("IN ACTION:"+formatAddress(address));
  const request = axios.get(`${ROOT_URL}address=${address}&key=${API_KEY}`);
  return{
      type: FETCH_COORDS,
      term: address,
      payload: request
  };
}
