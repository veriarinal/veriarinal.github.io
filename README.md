# Veri Arinal — Modern Academic Portfolio

Website CV akademik multi-page dengan HTML, CSS, dan JavaScript murni. Dirancang untuk GitHub Pages dan mendukung pergantian bahasa Indonesia/Inggris.

## Struktur folder

```text
veri-arinal-academic-portfolio/
├── index.html
├── about.html
├── research.html
├── publications.html
├── teaching.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── images/
        └── (letakkan foto profil di sini)
```

## Cara menjalankan secara lokal

1. Ekstrak ZIP.
2. Buka folder proyek di Visual Studio Code.
3. Jalankan `index.html` dengan ekstensi Live Server, atau buka file tersebut langsung di browser.
4. Periksa seluruh menu, tautan, dan tampilan mobile.

## Personalisasi sebelum publikasi

Cari dan ubah bagian berikut:

- `profile.jpg`: siapkan foto profesional, lalu simpan di `assets/images/profile.jpg`. Ubah `src="profile.jpg"` pada `index.html` menjadi `src="assets/images/profile.jpg"` (atau pindahkan foto ke root proyek).
- Nama program studi S3 dan tahun masuk di `about.html`.
- Riwayat pendidikan S1 yang belum dicantumkan.
- Email profesional di `contact.html`.
- URL Google Scholar, SINTA, ORCID, Scopus, dan LinkedIn.
- Publikasi pada `publications.html`: ganti contoh `[Judul artikel ilmiah]` dengan data bibliografi yang benar.
- Daftar mata kuliah dan roadmap penelitian agar sesuai dengan data aktual.
- Tautan institusi jika alamat situs resmi berubah.

**Penting:** konten publikasi dan profil indeksasi pada versi awal adalah placeholder. Jangan biarkan tautan `#` atau data contoh tampil sebagai informasi final.

## Deploy ke GitHub Pages

1. Buat/login akun di https://github.com.
2. Buat repository baru bernama tepat `USERNAME.github.io` (ganti `USERNAME` dengan username GitHub Anda).
3. Pilih repository `Public`, lalu buat repository.
4. Unggah seluruh isi folder proyek ke root repository. Pastikan `index.html` berada langsung di root, bukan di dalam subfolder.
5. Buka **Settings → Pages**.
6. Pada **Build and deployment**, pilih **Deploy from a branch**.
7. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
8. Tunggu proses build selesai. Situs akan tersedia di `https://USERNAME.github.io`.

## Memperbarui situs

Edit file terkait, lalu lakukan commit/push ke branch `main`. GitHub Pages akan menerbitkan pembaruan secara otomatis setelah proses deployment.

## Catatan teknis

- Tidak membutuhkan backend, database, atau framework.
- Google Fonts dan Bootstrap tidak digunakan untuk komponen layout; font eksternal dimuat dari Google Fonts.
- Situs dapat dipakai pada GitHub Pages tanpa konfigurasi build.
- Untuk SEO lebih lanjut, tambahkan favicon, Open Graph metadata, sitemap, dan domain kustom jika diperlukan.
