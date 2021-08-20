function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentTime =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  document.querySelector(".header__date").innerHTML = currentTime;
  setTimeout("displayTime()", 1000);
}

function sleep(fun, time) {
  setTimeout(fun, time);
}
function typer(currText, tag) {
  let str = "";
  tag.setAttribute('data-after','|')
  for (let i = 0; i < currText.length; i++) {
    setTimeout(() => {
      str += currText[i];
      tag.innerHTML = str;
      scrollTerminalMain();
    }, 60 * (i + 1));
  }
  setTimeout(()=>{
    tag.setAttribute('data-after','');
  },60*currText.length);
}

let prevLength = 100;

function typerDriver(data) {
  const tags = [data.querySelector("p"), data.querySelector("pre")];
  tags.forEach((textD, idx) => {
    if (!textD) return;
    if (idx === 0) {
      let text = textD.textContent;
      textD.innerHTML = "";
      setTimeout(() => {
        typer(text, textD);
      }, 60);
    } else {
      let text = textD.textContent;
      textD.innerHTML = "";
      setTimeout(() => {
        typer(text, textD);
      }, (idx + 1) * 300);
    }
  });
}

const terminal_command_divs = document.querySelectorAll(".terminal-commands");

function timeCalc(data, i) {
  let time = 0;
  const tags = [data.querySelector("p"), data.querySelector("pre")];
  tags.forEach((txt, idx) => {
    if (txt) time += txt.textContent.length * 61.5;
  });
  return time;
}

let prevTime = 60;
const terminal = document.querySelector(".terminal-main");
terminal_command_divs.forEach((data, index) => {
  if (index === 0) {
    setTimeout(() => {
      data.classList.remove("none");
      typerDriver(data);
    }, 40);
    prevTime = 40;
  } else {
    prevTime += timeCalc(terminal_command_divs[index - 1], index);
    setTimeout(() => {
      data.classList.remove("none");
      typerDriver(data);
    }, prevTime);
  }
});
setTimeout(()=>{
  terminal_command_divs[terminal_command_divs.length-1].querySelector('p').setAttribute('data-after','|');
  terminal_command_divs[terminal_command_divs.length-1].querySelector('p').classList.add('blinker');
},prevTime+1500);

displayTime();

function scrollTerminalMain() {
  terminal.scrollTop = terminal.clientHeight;
}
