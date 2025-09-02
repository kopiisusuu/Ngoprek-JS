const materi = [
  {
    title: "Fundamental",
    type: "page",
    link: "materi/fundamental.html"
  },
  {
    title: "Try Catch",
    type: "page",
    link: "materi/trycatch.html"
  },
  {
    title: "ForEach, Find, Some, Every, Includes",
    type: "page",
    link: "materi/forEach.html"
  },
  {
    title: "try catch, switch,Casey, looping",
    type: "page",
    link: "materi/looping.html"
  },
  {
    title: "spread, rest operator, destructuring",
    type: "page",
    link: "materi/spread.html"
  },
  {
    title: "Modern (ES6+)",
    type: "page",
    link: "materi/es6.html"
  },
  {
    title: "jQuery (alert, interactive box, click counter)",
    type: "page",
    link: "materi/jquery.html"
  },
  {
    title: "Function",
    type: "page",
    link: "materi/function.html"
  },
  {
    title: "Ajax",
    type: "page",
    link: "materi/ajax.html"
  }
];

// --- ambil elemen dari HTML ---
const materiList   = document.getElementById("materi-list");
const materiModal  = document.getElementById("materi-modal");
const modalTitle   = document.getElementById("materi-title");   // <- disesuaikan
const modalContent = document.getElementById("materi-content"); // <- disesuaikan
const closeModal   = document.getElementById("close-modal");

// --- render daftar card materi ---
materi.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "bg-blue-900/40 p-6 rounded-xl shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${item.title}</h3>
    <p class="text-gray-300">Klik untuk lihat detail</p>
  `;

  // event klik tiap card
  if (item.type === "modal") {
    card.addEventListener("click", () => openMateri(index));
  } else if (item.type === "page") {
    card.addEventListener("click", () => window.location.href = item.link);
  }

  materiList.appendChild(card);
});

// --- fungsi untuk buka modal ---
function openMateri(index) {
  const item = materi[index];
  modalTitle.textContent = item.title;
  modalContent.innerHTML = item.content;
  materiModal.classList.remove("hidden");
}

// --- tombol close modal ---
closeModal.addEventListener("click", () => {
  materiModal.classList.add("hidden");
});
