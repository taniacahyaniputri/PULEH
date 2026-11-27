/* ======================================
   DATA HALAMAN PULEH
====================================== */

const pages = {

reach: {
    title: "PULEH REACH",
    intro: "Menjangkau penyintas melalui komunitas dan pemetaan kebutuhan wilayah.",
    cards: [
        ["Tujuan Penjangkauan",
        "Mengidentifikasi warga terdampak yang membutuhkan dukungan psikososial melalui relawan, tokoh masyarakat, perangkat desa, dan kunjungan langsung."],

        ["Cara Kerja",
        "Konselor bekerja bersama relawan untuk menemukan kebutuhan masyarakat. Pendataan dapat dilakukan secara luring lalu direkap ketika jaringan tersedia."]
    ],
    form: "reach"
},

assess: {
    title: "PULEH ASSESS",
    intro: "Memahami kondisi dan kebutuhan penyintas untuk menentukan tindak lanjut yang sesuai.",
    cards: [
        ["Fokus Asesmen",
        "Memperhatikan keselamatan, kebutuhan emosional, dukungan keluarga, kebutuhan dasar, dan fungsi sehari-hari."],

        ["Prinsip Asesmen",
        "Asesmen bukan diagnosis otomatis. Penilaian dilakukan oleh konselor sesuai kompetensi dengan persetujuan penyintas."]
    ],
    form: "assess"
},

care: {
    title: "PULEH CARE",
    intro: "Memberikan pendampingan psikososial sesuai kebutuhan dan kelompok usia.",
    cards: [
        ["Psychological First Aid",
        "Gunakan prinsip Look, Listen, Link: amati kebutuhan dan keselamatan, dengarkan dengan empati, lalu hubungkan dengan dukungan praktis."],

        ["Pendampingan Anak",
        "Menggambar Pulau Aman, permainan kerja sama, aktivitas ekspresi, dan kegiatan menyenangkan yang dipandu fasilitator."],

        ["Pendampingan Remaja",
        "Aktivitas pengenalan kekuatan diri, peta dukungan sosial, dan refleksi harapan."],

        ["Pendampingan Dewasa dan Lansia",
        "Grounding sederhana jika sesuai, ruang cerita sukarela, aktivitas sosial, serta penguatan dukungan keluarga."]
    ],
    form: "care"
},

hybrid: {
    title: "PULEH HYBRID",
    intro: "Kolaborasi konselor atau psikolog daring dengan pendamping komunitas yang hadir langsung bersama penyintas.",
    cards: [
        ["Pendampingan Tatap Muka",
        "Konselor atau psikolog hadir langsung di lokasi penyintas untuk memberikan pendampingan."],

        ["Pendampingan Daring",
        "Psikolog atau konselor melakukan sesi melalui Zoom, sementara relawan atau pendamping komunitas hadir secara fisik bersama penyintas."],

        ["Pendampingan Hybrid",
        "Layanan dapat menggabungkan pertemuan langsung dan daring berdasarkan kebutuhan, persetujuan, akses internet, serta kondisi lapangan."],

        ["Prinsip Keselamatan",
        "Jaga privasi sesi, persetujuan penyintas, dan prosedur jika koneksi terputus. Kondisi darurat memerlukan penanganan langsung dan rujukan yang sesuai."]
    ],
    form: "hybrid"
},

connect: {
    title: "PULEH CONNECT",
    intro: "Menghubungkan penyintas dengan layanan profesional dan stakeholder komunitas.",
    cards: [
        ["Mitra Profesional",
        "Psikolog, psikiater, Puskesmas, rumah sakit, pekerja sosial, dan layanan perlindungan."],

        ["Mitra Komunitas",
        "Relawan terlatih, tokoh masyarakat, perangkat desa, BPBD, dan posko."],

        ["Pencatatan Rujukan",
        "Catat jenis mitra, kebutuhan rujukan, status koordinasi, dan tindak lanjut."]
    ],
    form: "connect"
},

continue: {
    title: "PULEH CONTINUE",
    intro: "Menjaga kesinambungan dukungan setelah pendampingan awal.",
    cards: [
        ["Tindak Lanjut",
        "Sepakati jadwal dan cara menghubungi penyintas yang aman dan disetujui."],

        ["Pemantauan",
        "Tinjau rasa aman, dukungan sosial, kebutuhan sehari-hari, dan apakah rujukan sudah diterima."],

        ["Keberlanjutan",
        "Hubungkan penyintas dengan keluarga, kelompok dukungan, komunitas, dan layanan lokal."]
    ],
    form: "continue"
},

map: {
    title: "PETA JANGKAUAN ACEH",
    intro: "Peta referensi wilayah untuk membantu konselor merencanakan koordinasi dan verifikasi lapangan.",
    cards: [
        ["Informasi Peta",
        "Titik peta menunjukkan referensi pusat administratif kabupaten/kota, bukan lokasi rumah penyintas, genangan, posko, atau konselor."],

        ["Validasi Wilayah",
        "Status kejadian dan kebutuhan psikososial harus diverifikasi melalui BPBA, BPBD, dan mitra lokal."]
    ],
    form: null
},

library: {
    title: "PUSTAKA LAYANAN",
    intro: "Panduan aktivitas psikososial yang dapat dilakukan secara digital maupun menggunakan kartu cetak.",
    cards: [
        ["Anak",
        "Pulau Aman: menggambar tempat aman dan orang yang dipercaya."],

        ["Remaja",
        "Kebun Harapan: aktivitas mengenali kekuatan diri dan dukungan sosial."],

        ["Dewasa",
        "Jeda 5 Indra: latihan grounding sederhana jika sesuai kondisi."],

        ["Lansia",
        "Ruang Cerita: aktivitas sosial dan percakapan sukarela."]
    ],
    form: null
},

reports: {
    title: "LAPORAN & EVALUASI",
    intro: "Memantau jangkauan, layanan, rujukan, dan kesinambungan pemulihan.",
    cards: [
        ["Jangkauan",
        "Jumlah wilayah yang dikunjungi, kegiatan komunitas, dan kelompok yang dijangkau."],

        ["Layanan",
        "Asesmen yang ditindaklanjuti, pendampingan berjalan, dan rujukan terkoordinasi."],

        ["Evaluasi",
        "Pemantauan keberlanjutan layanan serta hambatan yang ditemukan di lapangan."]
    ],
    form: null
},

government: {
    title: "REKOMENDASI PEMERINTAH",
    intro: "Mengubah temuan layanan menjadi rekomendasi program pemulihan psikososial pascabencana.",
    cards: [
        ["Rekomendasi Berbasis Data",
        "Konselor menyusun rekomendasi berdasarkan data agregat penjangkauan, asesmen, hambatan layanan, dan hasil tindak lanjut."],

        ["Kolaborasi Pemerintah",
        "Rekomendasi dapat disampaikan kepada Pemerintah Daerah, BPBD, Dinas Kesehatan, Dinas Sosial, Puskesmas, dan Dinas Pendidikan."],

        ["Evaluasi Kebijakan",
        "Setiap rekomendasi perlu memiliki alasan, kelompok sasaran, wilayah prioritas, pelaksana yang diusulkan, dan indikator keberhasilan."]
    ],
    form: "government"
},

about: {
    title: "TENTANG PULEH",
    intro: "Mengenal PULEH (Psychosocial Unity through Linkage, Empathy and Healing), sistem dukungan konselor untuk layanan konseling krisis berbasis komunitas di Aceh.",
    cards: [
        ["Apa Itu PULEH?",
        "PULEH merupakan platform yang menghubungkan konselor, psikolog, relawan, komunitas, dan pemerintah untuk mendukung pemulihan psikososial masyarakat terdampak bencana."],

        ["Latar Belakang",
        "Dampak bencana tidak hanya berupa kerusakan fisik dan material, tetapi juga dapat memengaruhi kondisi emosional dan psikososial masyarakat. Keterbatasan tenaga profesional dan akses layanan menjadi tantangan dalam proses pemulihan."],

        ["Tujuan PULEH",
        "Mendukung penjangkauan, asesmen kebutuhan, pendampingan psikososial, koordinasi rujukan, serta pemantauan keberlanjutan layanan."],

        ["Konsep Layanan",
        "PULEH mengintegrasikan REACH, ASSESS, CARE, HYBRID, CONNECT, dan CONTINUE dalam satu alur dukungan konselor."],

        ["Kolaborasi",
        "Mendorong kerja sama psikolog, konselor, relawan lokal, komunitas, fasilitas kesehatan, pemerintah daerah, dan lembaga penanggulangan bencana."],

        ["Prinsip Layanan",
        "Mengutamakan empati, keselamatan, persetujuan penyintas, perlindungan privasi, dan keberlanjutan pendampingan."]
    ],
    form: null
},

howto: {
    title: "CARA MENGGUNAKAN PULEH",
    intro: "Panduan penggunaan PULEH bagi konselor dan pendamping komunitas.",
    cards: [
        ["01. Beranda",
        "Buka Beranda untuk melihat ringkasan layanan, tahapan pendampingan, informasi wilayah, dan akses cepat."],

        ["02. REACH – Penjangkauan",
        "Catat wilayah yang dijangkau, sumber informasi, kelompok masyarakat, dan kegiatan penjangkauan."],

        ["03. ASSESS – Asesmen",
        "Catat kebutuhan utama penyintas menggunakan kode anonim dan tentukan prioritas tindak lanjut sesuai kompetensi petugas."],

        ["04. CARE – Pendampingan",
        "Pilih aktivitas psikososial sesuai kelompok usia dan kebutuhan penyintas."],

        ["05. HYBRID – Sesi Pendampingan",
        "Atur sesi daring melalui Zoom dengan psikolog atau konselor. Pendamping lokal tetap hadir secara langsung bersama penyintas."],

        ["06. CONNECT – Rujukan",
        "Catat koordinasi dan hubungkan penyintas dengan psikolog, Puskesmas, rumah sakit, atau layanan terkait."],

        ["07. CONTINUE – Tindak Lanjut",
        "Catat jadwal pemantauan, perkembangan pendampingan, dan kebutuhan layanan lanjutan."],

        ["08. Peta dan Pustaka",
        "Gunakan Peta Jangkauan untuk melihat referensi wilayah dan Pustaka Aktivitas untuk mendapatkan panduan kegiatan."],

        ["09. Laporan dan Progres",
        "Tinjau catatan penjangkauan, asesmen, pendampingan, sesi hybrid, dan rujukan."],

        ["10. Rekomendasi Pemerintah",
        "Susun usulan program berdasarkan temuan dan kebutuhan lapangan yang sudah diverifikasi."],

        ["Catatan Penggunaan",
        "Gunakan kode anonim, minta persetujuan penyintas, dan jaga kerahasiaan informasi. Data prototype tersimpan di browser yang digunakan."]
    ],
    form: null
}

};

/* ======================================
   NAVIGASI
====================================== */

let mainMap = null;
let detailMap = null;

function go(page) {

    document.querySelectorAll(".nav-item").forEach(button => {
        button.classList.toggle("active", button.dataset.page === page);
    });

    document.getElementById("homePage").classList.toggle(
        "active", page === "home"
    );

    document.getElementById("detailPage").classList.toggle(
        "active", page !== "home"
    );

    if (page === "home") {
        setTimeout(() => {
            if (mainMap) mainMap.invalidateSize();
        }, 150);

        return;
    }

    const data = pages[page];

    if (!data) return;

    document.getElementById("detailTitle").textContent = data.title;
    document.getElementById("detailIntro").textContent = data.intro;

    const content = document.getElementById("detailContent");

    content.innerHTML = data.cards.map(card => `
        <article class="detail-card">
            <h3>${card[0]}</h3>
            <p>${card[1]}</p>
        </article>
    `).join("");

    if (data.form) {
        content.innerHTML += formMarkup(data.form);
    }

    if (page === "map") {
        content.innerHTML += `
            <article class="detail-card map-full">
                <h3>Peta Referensi Wilayah Aceh</h3>
                <div id="detailMap"></div>
            </article>
        `;

        setTimeout(() => {
            if (!detailMap) {
                detailMap = makeMap("detailMap");
            } else {
                detailMap.invalidateSize();
            }
        }, 200);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


document.addEventListener("click", event => {

    const button = event.target.closest("[data-page]");

    if (button) {
        go(button.dataset.page);
    }

});


/* ======================================
   FORMULIR
====================================== */

function formMarkup(type) {

    let fields = "";

    if (type === "reach") {
        fields = `
            <label>Wilayah / desa</label>
            <input name="area" required placeholder="Desa, kecamatan, kabupaten">

            <label>Sumber penjangkauan</label>
            <select name="source">
                <option>Relawan komunitas</option>
                <option>Posko / perangkat desa</option>
                <option>Kunjungan langsung</option>
            </select>
        `;
    }

    if (type === "assess") {
        fields = `
            <label>Kode catatan anonim</label>
            <input name="code" required placeholder="Contoh: PUL-001">

            <label>Kebutuhan utama</label>
            <select name="need">
                <option>Dukungan emosional</option>
                <option>Rasa aman / kebutuhan dasar</option>
                <option>Dukungan keluarga</option>
                <option>Perlu rujukan profesional</option>
            </select>

            <label>Prioritas tindak lanjut</label>
            <select name="priority">
                <option>Rutin</option>
                <option>Perlu ditinjau segera</option>
                <option>Koordinasi rujukan profesional</option>
            </select>
        `;
    }

    if (type === "care") {
        fields = `
            <label>Kelompok usia</label>
            <select name="age">
                <option>Anak</option>
                <option>Remaja</option>
                <option>Dewasa</option>
                <option>Lansia</option>
            </select>

            <label>Aktivitas pendampingan</label>
            <select name="activity">
                <option>Pulau Aman</option>
                <option>Kebun Harapan</option>
                <option>Jeda 5 Indra</option>
                <option>Ruang Cerita</option>
            </select>
        `;
    }

    if (type === "hybrid") {
        fields = `
            <label>Kode catatan penyintas</label>
            <input name="code" required placeholder="Contoh: PUL-001">

            <label>Wilayah pendampingan</label>
            <input name="area" required placeholder="Desa, kecamatan, kabupaten">

            <label>Metode pendampingan</label>
            <select name="mode" id="hybridMode">
                <option value="Daring dengan pendamping lokal">
                    Daring + pendamping hadir di lokasi
                </option>
                <option value="Tatap muka">Tatap muka langsung</option>
                <option value="Kombinasi hybrid">Kombinasi hybrid</option>
            </select>

            <label>Nama / kode psikolog atau konselor</label>
            <input name="professional" required placeholder="Petugas profesional">

            <label>Nama / kode pendamping lokal</label>
            <input name="helper" required placeholder="Relawan di lokasi penyintas">

            <label>Jadwal sesi</label>
            <input name="schedule" type="datetime-local" required>

            <label>Link Zoom</label>
            <input name="zoomLink" type="url" placeholder="https://zoom.us/j/...">

            <div class="form-hint">
                Pada sesi daring, pendamping komunitas tetap hadir bersama penyintas.
                Pastikan persetujuan penyintas, privasi, dan kesiapan koneksi.
            </div>
        `;
    }

    if (type === "connect") {
        fields = `
            <label>Kode catatan anonim</label>
            <input name="code" required placeholder="Kode penyintas">

            <label>Jenis mitra</label>
            <select name="partner">
                <option>Psikolog / psikiater</option>
                <option>Puskesmas / rumah sakit</option>
                <option>Relawan / komunitas</option>
                <option>BPBD / layanan sosial</option>
            </select>

            <label>Status rujukan</label>
            <select name="status">
                <option>Perlu dihubungi</option>
                <option>Sudah dikoordinasikan</option>
                <option>Rujukan diterima</option>
                <option>Perlu tindak lanjut</option>
            </select>
        `;
    }

    if (type === "continue") {
        fields = `
            <label>Kode catatan anonim</label>
            <input name="code" required placeholder="Kode penyintas">

            <label>Tanggal tindak lanjut</label>
            <input name="date" type="date" required>

            <label>Hasil pemantauan</label>
            <select name="result">
                <option>Dukungan berjalan</option>
                <option>Masih membutuhkan pendampingan</option>
                <option>Perlu rujukan lanjutan</option>
                <option>Tidak berhasil dihubungi</option>
            </select>
        `;
    }

    if (type === "government") {
        fields = `
            <label>Wilayah prioritas</label>
            <input name="area" required placeholder="Kabupaten / kecamatan">

            <label>Temuan kebutuhan psikososial</label>
            <select name="finding">
                <option>Keterbatasan tenaga psikolog dan konselor</option>
                <option>Kurangnya layanan konseling di pengungsian</option>
                <option>Anak membutuhkan ruang aman</option>
                <option>Kurangnya dukungan kelompok masyarakat</option>
                <option>Akses layanan kesehatan mental terbatas</option>
                <option>Relawan membutuhkan pelatihan PFA</option>
                <option>Tindak lanjut pascabencana belum optimal</option>
            </select>

            <label>Rekomendasi program</label>
            <select name="program">
                <option>Penambahan psikolog dan konselor lapangan</option>
                <option>Layanan konseling keliling</option>
                <option>Penyediaan ruang aman psikososial anak</option>
                <option>Program dukungan kelompok komunitas</option>
                <option>Pelatihan PFA untuk relawan</option>
                <option>Penguatan layanan rujukan Puskesmas</option>
                <option>Pemantauan psikososial jangka panjang</option>
            </select>

            <label>Instansi tujuan</label>
            <select name="agency">
                <option>Pemerintah Kabupaten / Kota</option>
                <option>Dinas Kesehatan</option>
                <option>Dinas Sosial</option>
                <option>BPBD</option>
                <option>Puskesmas / fasilitas kesehatan</option>
                <option>Dinas Pendidikan</option>
            </select>

            <label>Dasar temuan lapangan</label>
            <textarea name="evidence" rows="4" required placeholder="Tuliskan ringkasan data agregat yang mendukung rekomendasi..."></textarea>

            <label>Indikator keberhasilan</label>
            <input name="indicator" required placeholder="Contoh: peningkatan jangkauan konseling">
        `;
    }

    return `
        <article class="detail-card">
            <h3>${type === "hybrid" ? "Atur Pendampingan Hybrid" :
                type === "government" ? "Susun Rekomendasi Pemerintah" :
                "Catatan Layanan"}</h3>

            <form class="demo-form" data-form-type="${type}">
                ${fields}
                <button type="submit">
                    ${type === "hybrid" ? "Simpan Jadwal Sesi" :
                    type === "government" ? "Simpan Rekomendasi" :
                    "Simpan Catatan"}
                </button>
            </form>

            <p class="form-msg"></p>

            ${type === "hybrid" ? `
                <button type="button" class="zoom-button" id="openZoom">
                    ▶ Buka Ruang Pertemuan Zoom
                </button>
            ` : ""}

            ${type === "government" ? `
                <button type="button" id="downloadPolicy">
                    ↓ Unduh Draf Rekomendasi
                </button>
            ` : ""}
        </article>
    `;
}


/* ======================================
   PENYIMPANAN DEMO
====================================== */

document.addEventListener("submit", event => {

    const form = event.target.closest(".demo-form");

    if (!form) return;

    event.preventDefault();

    const type = form.dataset.formType;
    const data = Object.fromEntries(new FormData(form).entries());

    if (type === "hybrid") {

        if (!data.helper || !data.professional) {
            showToast("Petugas profesional dan pendamping lokal wajib diisi.");
            return;
        }

        if (data.mode !== "Tatap muka" && !data.zoomLink) {
            showToast("Masukkan link Zoom untuk sesi daring.");
            return;
        }

    }

    const key = "puleh_" + type;

    const records = JSON.parse(localStorage.getItem(key) || "[]");

    records.unshift({
        ...data,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem(key, JSON.stringify(records));

    const message = form.parentElement.querySelector(".form-msg");

    if (message) {
        message.textContent =
            "Catatan demo berhasil disimpan di browser. Belum dikirim ke server.";
    }

    showToast("Data berhasil disimpan.");
});


/* ======================================
   ZOOM DAN REKOMENDASI
====================================== */

document.addEventListener("click", event => {

    if (event.target.id === "openZoom") {

        const input = document.querySelector('[name="zoomLink"]');

        if (!input || !input.value.trim()) {
            showToast("Masukkan link Zoom terlebih dahulu.");
            return;
        }

        try {
            const url = new URL(input.value);

            if (url.protocol !== "https:" ||
                !url.hostname.endsWith("zoom.us")) {
                showToast("Masukkan link Zoom yang valid.");
                return;
            }

            window.open(url.href, "_blank", "noopener,noreferrer");

        } catch {
            showToast("Link Zoom tidak valid.");
        }
    }


    if (event.target.id === "downloadPolicy") {

        const form = document.querySelector(
            '.demo-form[data-form-type="government"]'
        );

        if (!form) return;

        const data = Object.fromEntries(new FormData(form).entries());

        if (!data.area || !data.evidence || !data.indicator) {
            showToast("Lengkapi formulir rekomendasi terlebih dahulu.");
            return;
        }

        const content = `
DRAF REKOMENDASI PEMULIHAN PSIKOSOSIAL PULEH

Wilayah:
${data.area}

Temuan:
${data.finding}

Program yang direkomendasikan:
${data.program}

Instansi tujuan:
${data.agency}

Dasar temuan:
${data.evidence}

Indikator keberhasilan:
${data.indicator}

Catatan:
Draf ini perlu diverifikasi dan dibahas bersama pemangku kepentingan
sebelum menjadi rekomendasi resmi.
`;

        const blob = new Blob([content], {
            type: "text/plain;charset=utf-8"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "Rekomendasi_PULEH.txt";
        link.click();

        URL.revokeObjectURL(url);

        showToast("Draf rekomendasi diunduh.");
    }

});


/* ======================================
   PETA ACEH
====================================== */

const places = [
    ["Gayo Lues", 4.05, 97.35, "Prioritas verifikasi"],
    ["Subulussalam", 2.65, 97.93, "Prioritas verifikasi"],
    ["Aceh Singkil", 2.35, 97.85, "Prioritas verifikasi"],
    ["Aceh Tamiang", 4.25, 98.05, "Perlu pemutakhiran"],
    ["Aceh Selatan", 3.00, 97.35, "Perlu pemutakhiran"],
    ["Aceh Utara", 5.00, 97.20, "Perlu pemutakhiran"],
    ["Bireuen", 5.20, 96.70, "Perlu pemutakhiran"],
    ["Pidie Jaya", 5.15, 96.20, "Perlu pemutakhiran"]
];


function makeMap(id) {

    const map = L.map(id, {
        scrollWheelZoom: false
    }).setView([4.45, 96.9], 7);

    L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        {
            maxZoom: 18,
            attribution: "Tiles © Esri"
        }
    ).addTo(map);

    places.forEach((place, index) => {

        const color = index < 3 ? "#cf334b" : "#ed9136";

        L.circleMarker([place[1], place[2]], {
            radius: 8,
            color: "#ffffff",
            weight: 2,
            fillColor: color,
            fillOpacity: 0.95
        })
        .addTo(map)
        .bindPopup(`
            <b>${place[0]}</b><br>
            ${place[3]}<br>
            <small>Titik referensi administratif.</small>
        `);

    });

    return map;
}


window.addEventListener("load", () => {

    if (window.L) {
        mainMap = makeMap("acehMap");
    }

});


/* ======================================
   TOAST
====================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);

}