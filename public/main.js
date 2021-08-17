function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentTime = (hours<10?'0'+hours:hours) + ':' + (minutes<10?'0'+minutes:minutes) + ':' + (seconds<10?'0'+seconds:seconds);
    document.querySelector(".header__date .header__link").innerHTML = currentTime; 
    setTimeout("displayTime()",1000);
}

displayTime();