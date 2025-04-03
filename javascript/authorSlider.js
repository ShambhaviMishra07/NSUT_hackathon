const writers = [
  "../photos/munshipremchand.jpeg",
  "../photos/amritapritam.jpeg",
  "../photos/bhishamsahni.jpeg",
  "../photos/dharmvirbharti.jpeg",
  "../photos/dinkar.jpeg",
  "../photos/hrbachhan.jpeg",
  "../photos/jaishankarprasad.jpeg",
  "../photos/mahadeviverma.jpeg",
  "../photos/mannubhandari.jpeg",
  "../photos/nirala.jpeg",
  "../photos/sumitranandanpant.jpeg"
];



let index = 0;
const gallery = document.getElementById("gallery");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function displayWriters() {
  gallery.innerHTML = "";
  for (let i = index; i < index + 4 && i < writers.length; i++) {
      const img = document.createElement("img");
      img.src = writers[i];

      console.log("Image added:", img.src);

      gallery.appendChild(img);
  }
}

displayWriters();

next.addEventListener("click", () => {
  if (index + 4 < writers.length) {
      index += 4;
      displayWriters();
  }
});

prev.addEventListener("click", () => {
  if (index - 4 >= 0) {
      index -= 4;
      displayWriters();
  }
});
