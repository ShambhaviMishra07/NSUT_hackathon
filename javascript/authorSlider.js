const writers = [
  {
    img: "../photos/munshipremchand.jpeg",
    name: "मुंशी प्रेमचंद",
    dob: "31 जुलाई 1880",
    birthPlace: "लमही, वाराणसी, उत्तर प्रदेश",
    books: "गोदान, गबन, निर्मला, ईदगाह"
  },
  {
    img: "../photos/amritapritam.jpeg",
    name: "अमृता प्रीतम",
    dob: "31 अगस्त 1919",
    birthPlace: "गुजरांवाला, पंजाब, भारत (अब पाकिस्तान)",
    books: "रसीदी टिकट, पिंजर, अज्ञात का आकाश"
  },
  {
    img: "../photos/bhishamsahni.jpeg",
    name: "भीष्म साहनी",
    dob: "8 अगस्त 1915",
    birthPlace: "रावलपिंडी, पाकिस्तान",
    books: "तमस, बसंती, माधवी"
  },
  {
    img: "../photos/dharmvirbharti.jpeg",
    name: "धर्मवीर भारती",
    dob: "25 दिसंबर 1926",
    birthPlace: "इलाहाबाद, उत्तर प्रदेश",
    books: "गुनाहों का देवता, सूरज का सातवाँ घोड़ा"
  },
  {
    img: "../photos/dinkar.jpeg",
    name: "रामधारी सिंह दिनकर",
    dob: "23 सितंबर 1908",
    birthPlace: "सिमरिया, बिहार",
    books: "रश्मिरथी, उर्वशी, कुरुक्षेत्र"
  },
  {
    img: "../photos/hrbachhan.jpeg",
    name: "हरिवंश राय बच्चन",
    dob: "27 नवंबर 1907",
    birthPlace: "प्रतापगढ़, उत्तर प्रदेश",
    books: "मधुशाला, मधुबाला, निशा निमंत्रण"
  },
  {
    img: "../photos/jaishankarprasad.jpeg",
    name: "जयशंकर प्रसाद",
    dob: "30 जनवरी 1889",
    birthPlace: "वाराणसी, उत्तर प्रदेश",
    books: "कामायनी, आँसू, तितली"
  },
  {
    img: "../photos/mahadeviverma.jpeg",
    name: "महादेवी वर्मा",
    dob: "26 मार्च 1907",
    birthPlace: "फ़र्रुख़ाबाद, उत्तर प्रदेश",
    books: "नीहार, यामा, दीपशिखा"
  },
  {
    img: "../photos/mannubhandari.jpeg",
    name: "मन्नू भंडारी",
    dob: "3 अप्रैल 1931",
    birthPlace: "भानपुर, मध्य प्रदेश",
    books: "आपका बंटी, महाभोज"
  },
  {
    img: "../photos/nirala.jpeg",
    name: "सूर्यकांत त्रिपाठी 'निराला'",
    dob: "21 फरवरी 1896",
    birthPlace: "मेदिनीपुर, पश्चिम बंगाल",
    books: "राम की शक्ति पूजा, परिमल, कुकुरमुत्ता"
  },
  {
    img: "../photos/sumitranandanpant.jpeg",
    name: "सुमित्रानंदन पंत",
    dob: "20 मई 1900",
    birthPlace: "कौसानी, उत्तराखंड",
    books: "चिदंबरा, वीणा, ग्रंथि"
  }
];

let index = 0;
const gallery = document.getElementById("gallery");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function displayWriters() {
  gallery.innerHTML = "";
  
  for (let i = index; i < index + 4 && i < writers.length; i++) {
    const writer = writers[i];

    // Create writer card container
    const writerCard = document.createElement("div");
    writerCard.classList.add("writer-card");

    // Create image element
    const img = document.createElement("img");
    img.src = writer.img;
    img.alt = writer.name;

    // Create info box
    const infoBox = document.createElement("div");
    infoBox.classList.add("writer-info");
    infoBox.innerHTML = `
      <h3>${writer.name}</h3>
      <p><strong>जन्म:</strong> ${writer.dob}</p>
      <p><strong>जन्म स्थान:</strong> ${writer.birthPlace}</p>
      <p><strong>लोकप्रिय पुस्तकें:</strong> ${writer.books}</p>
    `;

    // Append image and info box to writer card
    writerCard.appendChild(img);
    writerCard.appendChild(infoBox);

    // Append writer card to gallery
    gallery.appendChild(writerCard);
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

