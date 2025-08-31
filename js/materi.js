const materi = [
  {
    title: "Fundamental",
    type: "modal", // kecil -> pakai modal
    content: `
      <h2 class="text-2xl font-bold mb-4">Fundamental JS</h2>
      <p>Fundamental JavaScript mencakup variabel, tipe data, operator, dan dasar pemrograman lainnya.</p>
    `
  },
  {
    title: "Array",
    type: "modal",
    content: `
      <h2 class="text-2xl font-bold mb-4">Array</h2>
      <p>Array adalah struktur data yang dapat menyimpan banyak nilai dalam satu variabel.</p>
    `
  },
  {
    title: "Try Catch",
    type: "page", // gede -> halaman penuh
    link: "materi/trycatch.html"
  }
];

// ambil elemen
const materiList = document.getElementById("materi-list");
const materiModal = document.getElementById("materi-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

// render card
materi.forEach((m, index) => {
  const card = document.createElement("div");
  card.className = "bg-blue-900/40 p-6 rounded-xl shadow-md hover:scale-105 transition cursor-pointer";

  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${m.title}</h3>
    <p class="text-gray-300">Klik untuk lihat detail</p>
  `;

  if (m.type === "modal") {
    card.addEventListener("click", () => openMateri(index));
  } else if (m.type === "page") {
    // langsung jadi link ke halaman baru
    card.addEventListener("click", () => {
      window.location.href = m.link;
    });
  }

  materiList.appendChild(card);
});

// fungsi buka modal
function openMateri(index) {
  const m = materi[index];
  modalTitle.textContent = m.title;
  modalContent.innerHTML = m.content;
  materiModal.classList.remove("hidden");
}

// tutup modal
closeModal.addEventListener("click", () => {
  materiModal.classList.add("hidden");
});
