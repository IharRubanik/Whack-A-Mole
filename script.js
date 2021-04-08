let arrayImg = document.querySelectorAll('.img'),
  spanScore = document.querySelector('#span'),
  moleAudio = document.querySelector('#mole'),
  hitAudio = document.querySelector('#hit'),
  score = 1;

function rondomImg() {
  let random = arrayImg[Math.floor(Math.random() * arrayImg.length)];
  random.style.display = "block";
  moleAudio.play();

  function none() {
    random.style.display = "none";
  }
  setTimeout(none, 600);
};
setInterval(rondomImg, 2000);

for (let i = 0; i < arrayImg.length; i++) {
  arrayImg[i].addEventListener('click', function () {
    hitAudio.play();
    spanScore.textContent = score++;
    spanScore.style.color = 'red';
  });
};















