
// Messages with absolute start and end times (in milliseconds)

const messages = [

  { text: "Zara paas tu aa mere", start: 0, end: 4000 },

  { text: "Dheere se choo ja mujhe ", start: 4000, end: 7000 },

  { text: "Kho jaaun tere pyaar mein ", start: 7000, end: 11000 },

  { text: "Baahon mein bhar le mujhe ", start: 11000, end: 14000 },

  { text: "Ooo", start: 14500, end: 18000 },

  { text: "Tere liye", start: 18000, end: 20000 },

  { text: "Jhoomu deewana ban ke", start: 20000, end: 22000 },

  { text: "Tere liye ", start: 22000, end: 23000 },

  { text: "Vaada hai mera main hoon tere liye", start: 23000, end: 27000 },

  { text: "Hona kabhi tu judaa", start: 27000, end: 30000 },

  { text: "Aaa" , start: 30000, end: 33000 }

];



const container = document.querySelector(".lyrics-container");



messages.forEach(message => {

  // Schedule each line to appear

  setTimeout(() => {

    const line = document.createElement("span");

    line.className = "line";

    line.textContent = message.text;

    container.appendChild(line);



    // Schedule removal when its time ends

    setTimeout(() => {

      line.remove();

    }, message.end - message.start);

  }, message.start);

});





// Start the lyric animation

showNextLine();



/* 💗 FLOATING HEARTS */

function createHeart() {

  if(document.querySelectorAll('.heart').length >= 6) return; // limit hearts



  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";

  heart.style.fontSize = Math.random() * 8 + 12 + "px";

  heart.style.animationDuration = Math.random() * 4 + 6 + "s"; 

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);

}

setInterval(createHeart, 1500);



/* 🌌 STARS */

const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

let stars = [];



function resizeCanvas() {

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();



function createStars() {

  stars = [];

  for (let i = 0; i < 150; i++) {

    stars.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*1.5 });

  }

}

createStars();



function drawStars() {

  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star => {

    ctx.beginPath();

    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);

    ctx.fillStyle = "white";

    ctx.fill();

  });

}



/* ☁️ CLOUD SWIPE */

const clouds = document.querySelector(".clouds");

let cloudSpeed = 140, startX = null;

function updateCloudSpeed() { clouds.style.animationDuration = cloudSpeed + "s"; }

document.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });

document.addEventListener("touchmove", e => {

  if(!startX) return;

  const diff = e.touches[0].clientX - startX;

  cloudSpeed = Math.max(60, Math.min(200, cloudSpeed - diff*0.05));

  updateCloudSpeed();

  startX = e.touches[0].clientX;

});

document.addEventListener("mousemove", e => {

  if(e.buttons !== 1) return;

  cloudSpeed = Math.max(60, Math.min(200, 140 - e.movementX));

  updateCloudSpeed();

});



/* 🎶 BACKGROUND MUSIC */

const bgMusic = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

  if(!musicStarted){

    bgMusic.volume = 0.3;

    bgMusic.play().catch(()=>console.log("Tap to start music"));

    musicStarted = true;

  }

}

document.addEventListener("click", startMusic, {once:true});

document.addEventListener("touchstart", startMusic, {once:true});



/* ⭐ ANIMATE STARS */

function animateStars() { 

  drawStars(); 

  requestAnimationFrame(animateStars); 

}

animateStars();



