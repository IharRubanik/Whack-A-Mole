let arrayImg = document.getElementsByClassName('img');
let span = document.getElementById('span');
let moleAudio = document.getElementById('mole');
let hit = document.getElementById('hit');
let rondom;
let scr = 0;

function rondomImg() {
    rondom = arrayImg[Math.floor(Math.random() * arrayImg.length)]
    rondom.addEventListener('click', function(){
        hit.play();
          span.textContent = scr ++;
            console.log(span.textContent);
            span.style.color = 'red';
    })
    rondom.style.display = "block";
    moleAudio.play();


 function none(){
    rondom.style.display = "none";
    }
setTimeout(none, 600);
};
setInterval(rondomImg, 2000);












