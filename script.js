const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸ Pause Music";
    playing = true;
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
    playing = false;
  }
});
