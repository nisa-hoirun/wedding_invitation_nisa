document.addEventListener("DOMContentLoaded", () => {

  const $ = id => document.getElementById(id);

  const openBtn = $('open-invitation');
  const cover = $('cover-section');
  const invitation = $('invitation-content');

  const bgMusic = $('bg-music');
  bgMusic.volume = 0.6;

  const musicToggle = $('music-toggle');
  let isPlaying = false;

  function playMusic() {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggle.textContent = '❚❚';
    }).catch(()=>{});
  }

  function pauseMusic() {
    bgMusic.pause();
    isPlaying = false;
    musicToggle.textContent = '▶';
  }

  if(openBtn){
    openBtn.addEventListener("click", () => {
      cover.style.display = "none";
      invitation.classList.remove("hidden");
      playMusic();
      window.scrollTo({ top: 0 });
    });
  }

  if(musicToggle){
    musicToggle.addEventListener("click", () => {
      isPlaying ? pauseMusic() : playMusic();
    });
  }

  /* =========================
     SCROLL ANIMATION
  ========================= */
  const sections = document.querySelectorAll(".scroll-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));

  /* =========================
     BUNGA JATUH
  ========================= */
  const container = document.getElementById("flower-container");
  if(container){
    container.className = "falling-flowers";

    function createFlower(){
      const f = document.createElement("div");
      f.className = "flower";

      const sizes = ["small","medium","large"];
      f.classList.add(sizes[Math.floor(Math.random()*3)]);

      f.textContent = "🌻";
      f.style.left = Math.random()*100+"vw";

      container.appendChild(f);
      setTimeout(()=>f.remove(),20000);
    }

    setInterval(createFlower, 700);
  }

  /* =========================
     FOTO MEMPELAI TAP EFFECT
  ========================= */
  document.querySelectorAll('.bride-photo')
  .forEach(p=>{
    p.addEventListener('click',()=>{
      p.classList.toggle('active');
    });
  });

});


/* =========================
   COPY REKENING — QR AMPLOP
========================= */
function copyToClipboard(text){
navigator.clipboard.writeText(text);

const toast=document.getElementById('copy-toast');
if(toast){
toast.classList.remove('opacity-0');
setTimeout(()=>toast.classList.add('opacity-0'),2000);
}
}
