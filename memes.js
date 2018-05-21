const memeBox = document.getElementById("memeBox");
const urlInput = document.getElementById("input1");
const topInput = document.getElementById("input2");
const bottomInput = document.getElementById("input3");
const form = document.getElementById("form");

function buildMeme() {
  const memeDiv = document.createElement("div");
  const img = document.createElement("div");
  const top = document.createElement("div");
  const bot = document.createElement("div");
  const remove = document.createElement("button");

  const imgURL = document.getElementById("input1").value;
  img.style.backgroundImage = `url("${imgURL}")`;

  top.textContent = document.getElementById("input2").value;
  bot.textContent = document.getElementById("input3").value;

  top.classList.add("memeText", "highText");
  bot.classList.add("memeText", "lowText");
  img.classList.add("meme-img");
  memeDiv.classList.add("meme-div");
  remove.classList.add("remove-btn");
  remove.textContent = "Y";

  memeDiv.append(img);
  memeDiv.append(top);
  memeDiv.append(bot);
  memeDiv.append(remove);
  memeBox.append(memeDiv);

  remove.addEventListener("click", function() {
    memeBox.removeChild(memeDiv);
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  buildMeme();
  form.reset();
});
