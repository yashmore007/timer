console.log("yash");

let button = document.getElementById("btn");
button.addEventListener("click", () => {
  let seconds = 0;
  let minutes = 0;
  let hour = 0;
  let st=setInterval(() => {
    seconds = seconds + 1;
    if (seconds == 60) {
      minutes = minutes + 1;
      let m = document.getElementById("min");
      m.innerHTML = minutes;
      seconds = 0;
    } else if (minutes == 60) {
      hour = hour + 1;
      let h = document.getElementById("hour");
      h.innerHTML = minutes;
      minutes = 0;
    }
    let s = document.getElementById("sec");
    s.innerHTML = seconds;
  }, 1000);
  let stop=document.getElementById("btn1");
  stop.addEventListener("click",()=>{
    clearInterval(st)
})
let reset=document.getElementById("btn2");
 reset.addEventListener("click",()=>{
    seconds=0;
    minutes=0;
    hour=0;
    let s = document.getElementById("sec");
    s.innerHTML = seconds;
    let m = document.getElementById("min");
    m.innerHTML = minutes;
    let h = document.getElementById("hour");
      h.innerHTML = minutes;
      clearInterval(st)
})
});


