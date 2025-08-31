// Data materi
const materi = [
  {
    title: "JavaScript Fundamental",
    content: `
      <p>Materi dasar JavaScript mencakup:</p>
      <ul class="list-disc pl-5">
        <li>Variabel (let, const, var)</li>
        <li>Tipe data</li>
        <li>Operator</li>
        <li>Fungsi dasar</li>
      </ul>
    `
  },
  {
    title: "Array",
    content: `
      <p>Array di JavaScript digunakan untuk menyimpan banyak data.</p>
      <pre><code>let buah = ["apel", "mangga", "pisang"];</code></pre>
    `
  },
  {
    title: "forEach, find, some, every, includes",
    content: `
      <ul class="list-disc pl-5">
        <li><b>forEach</b>: Loop tiap elemen array</li>
        <li><b>find</b>: Cari satu elemen sesuai kondisi</li>
        <li><b>some</b>: True jika ada 1 elemen sesuai</li>
        <li><b>every</b>: True jika semua sesuai</li>
        <li><b>includes</b>: Cek apakah array mengandung nilai</li>
      </ul>
    `
  },
  {
    title: "Try Catch",
    content: `
      <p>Try-Catch digunakan untuk menangani error:</p>
      <pre><code>
try {
  let hasil = JSON.parse("salah-format");
} catch (error) {
  console.error("Terjadi error:", error.message);
}
      </code></pre>
    `
  }
];

// Render card ke halaman
const materiList = document.getElementById("materi-list");
materi.forEach((m, index) => {
  const card = document.createElement("div");
  card.className = "bg-blue-900/40 p-6 rounded-xl shadow-md hover:scale-105 transition cursor-pointer";
  card.innerHTML = `<h3 class="text-xl font-bold mb-2">${m.title}</h3>
                    <p class="text-gray-300">Klik untuk lihat detail</p>`;
  card.addEventListener("click", () => openMateri(index));
  materiList.appendChild(card);
});

// Modal logic
const modal = document.getElementById("materi-modal");
const title = document.getElementById("materi-title");
const content = document.getElementById("materi-content");
const closeBtn = document.getElementById("close-modal");

function openMateri(index) {
  title.textContent = materi[index].title;
  content.innerHTML = materi[index].content;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
