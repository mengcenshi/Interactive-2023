function printDate(){
  let today = new Date();
  document.getElementById('date').innerHTML = today;

  let hour = today.getHours();
  document.getElementById('hour').innerHTML = hour;

  let minutes = today.getMinutes();
  minutes = checkTime(minutes);
  document.getElementById('minutes').innerHTML = minutes;

  let seconds = today.getSeconds();
  seconds = checkTime(seconds);
  document.getElementById('seconds').innerHTML = seconds;

}
function checkTime(i){
  if(i < 10){
      i = "0"+i;

  }
         return i;
}

setInterval(printDate,1000);