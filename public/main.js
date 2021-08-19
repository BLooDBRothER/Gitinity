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
  let index = 0;
  let str = "";
  let timeCount = 0;
  for (let i = 0; i < currText.length; i++) {
    setTimeout(() => {
      str += currText[i];
      tag.innerHTML = str;
      scrollTerminalMain();
    }, 60 * (i + 1));
  }
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
      }, (idx + 1) * 400);
    }
  });
}

const terminal_command_divs = document.querySelectorAll(".terminal-commands");

function timeCalc(data, i) {
  let time = 60;
  const tags = [data.querySelector("p"), data.querySelector("pre")];
  tags.forEach((txt, idx) => {
    if (txt) time += txt.textContent.length * 70;
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
    }, 60);
    prevTime = 60;
  } else {
    prevTime += timeCalc(terminal_command_divs[index - 1], index);
    setTimeout(() => {
      data.classList.remove("none");
      typerDriver(data);
      console.log(terminal);
    }, prevTime);
  }
});
displayTime();

function scrollTerminalMain() {
    terminal.scrollTop = terminal.clientHeight;
}

