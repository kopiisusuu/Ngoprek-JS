const materi = [
  {
    title: "Fundamental",
    type: "modal",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fundamental JS</h2>
      <p class="mb-4">Fundamental JavaScript mencakup variabel, tipe data, operator, dan dasar pemrograman.</p>

      <h3 class="text-xl font-semibold mb-2">1. Variabel</h3>
      <p class="mb-4">Variabel digunakan untuk menyimpan data. Contoh:</p>
      <pre class="bg-gray-200 text-black p-2 rounded mb-4"><code>
      let nama = "Budi";
      const umur = 20;
      var alamat = "Jakarta";
      </code></pre>

      <h3 class="text-xl font-semibold mb-2">2. Tipe Data</h3>
      <p class="mb-4">Beberapa tipe data di JavaScript:</p>
      <ul class="list-disc list-inside mb-4">
        <li>String → "Halo"</li>
        <li>Number → 123</li>
        <li>Boolean → true / false</li>
        <li>Array → [1, 2, 3]</li>
        <li>Object → { nama: "Budi", umur: 20 }</li>
      </ul>

      <h3 class="text-xl font-semibold mb-2">3. Operator</h3>
      <p class="mb-4">Operator digunakan untuk operasi matematika & logika:</p>
      <pre class="bg-gray-200 text-black p-2 rounded"><code>
      let a = 10, b = 5;
      console.log(a + b); // 15
      console.log(a > b); // true
      </code></pre>
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
    type: "page",
    link: "materi/trycatch.html"
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
