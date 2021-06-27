
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

function rotate(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const rotatesecond = seconds / 60;
    const rotateminute = ((seconds/60) + minutes) / 60;
    const rotatehour = ((((seconds/60) + minutes) / 60) + hours) / 12;
    const rotateseconds = rotatesecond * 360;
    const rotateminutes = rotateminute * 360;
    const rotatehours = rotatehour * 360;
    second.style.transform = `rotate(${rotateseconds}deg)`;
    minute.style.transform = `rotate(${rotateminutes}deg)`;
    hour.style.transform = `rotate(${rotatehours}deg)`;
}
setInterval(rotate, 1000);
