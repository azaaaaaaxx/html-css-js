const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumnSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");
let audio = new Audio("tunes/a.wav");
let allKeys = [];
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => {
    playTune(key.dataset.key);
  });
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};
volumnSlider.addEventListener("change", handleVolume);

const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

keysCheckbox.addEventListener("click", showHideKeys);

const pressKey = (e) => {
  if (allKeys.includes(e.key.toLowerCase())) {
    playTune(e.key);
  }
};

document.addEventListener("keydown", (e) => {
  pressKey(e);
});
