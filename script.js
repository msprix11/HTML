let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function showSecret(id) {
  document.getElementById("secret" + id).style.display = "block";
}

function firstSlideSecret() {
  document.getElementById("firstSecret").style.display = "block";
}

function lastSlideSecret() {
  document.getElementById("lastSecret").style.display = "block";
}

function yesTrigger() {
  slides[currentSlide].classList.remove('active');
  currentSlide = 4;
  slides[currentSlide].classList.add('active');
  document.getElementById("finalTitle").innerText = "YAYYY 💕🎉";
  document.getElementById("finalText").innerText =
    "You just made my heart the happiest ’s!";
}

function whyTrigger() {
  slides[currentSlide].classList.remove('active');
  currentSlide = 4;
  slides[currentSlide].classList.add('active');
  document.getElementById("finalTitle").innerText = "Because… 💌";
  document.getElementById("finalText").innerText =
    "Because you make me smile without trying,\nand that’s already everything 🧸💗";
}

/* Background animation */
const icons = ["💖","🧸","🌸","💐","❤️"];
setInterval(() => {
  const float = document.createElement("div");
  float.className = "floating";
  float.innerText = icons[Math.floor(Math.random() * icons.length)];
  float.style.left = Math.random() * 100 + "vw";
  float.style.fontSize = Math.random() * 25 + 20 + "px";
  float.style.animationDuration = Math.random() * 2 + 2 + "s";
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 12000);
}, 500);
