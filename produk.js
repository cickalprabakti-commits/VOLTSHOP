// ============================================================
//  FILE INI SATU-SATUNYA YANG PERLU ANDA EDIT UNTUK MENGUBAH TOKO
// ============================================================

window.TOKO = {
    rasioFoto: "9/16",
  fotoPenuh: true,
  nama: "VOLTSHOP",
    kategori: ["Fashion", "scincare", "Aksesoris", "Furniture", "perfume"],
    logo: "https://img.sanishtech.com/u/35a641c7fc151e2a64d24e4fa90dc92b.jpg",
  slogan: "Produk pilihan dengan harga terbaik. Temukan yang Anda butuhkan, lalu pesan langsung lewat tautan resmi.",
  whatsapp: "6283171293220",
};

// Setiap produk ditulis di antara { ... }, dipisah koma.
// Foto: taruh file gambar di folder "foto", lalu tulis nama filenya di bawah.
window.PRODUK = [
  { kode: "SCR-001",kategori: "scincare", nama: "serum series 20 ml", harga: 30000, link: "https://s.shopee.co.id/AAI8BpSEOm", foto: "scr-001.jpg" },
  { kode: "SCR-002",kategori: "scincare", nama: "brightening facial wash", harga: 50000, link: "https://s.shopee.co.id/8pmkf1cwkP", foto: "scr-002.jpg" },
  { kode: "SCR-003",kategori: "scincare", nama: "perfect spray series 60ml", harga: 25000, link: "https://s.shopee.co.id/6AlzUvq00U", foto: "scr-003.jpg" },
  { kode: "SCR-004",kategori: "scincare", nama: "whitening night cream", harga: 33000, link: "https://s.shopee.co.id/8V9uHPnt36", foto: "scr-004.jpg" },
  { kode: "SCR-005",kategori: "scincare", nama: "glow bar soap", harga: 25000, link: "https://s.shopee.co.id/6fiG6tZryK", foto: "scr-005.jpg" },
  { kode: "SCR-006",kategori: "scincare", nama: "sunscreen 40g day+night", harga: 75000, link: "https://s.shopee.co.id/3g4erNZrd2", foto: "scr-006.jpg" },
  { kode: "SCR-007",kategori: "scincare", nama: "toner series", harga: 25000, link: "https://s.shopee.co.id/7fanct76sT", foto: "scr-007.jpg" },
  { kode: "SCR-008",kategori: "scincare", nama: "hydramoist gel", harga: 38000, link: "https://s.shopee.co.id/9pfIDynlP7", foto: "scr-008.jpg" },
  { kode: "SCR-009",kategori: "scincare", nama: "3-bundle scora cleanser+toner+serum", harga: 90000, link: "https://s.shopee.co.id/113tiF0TvE", foto: "scr-009.jpg" },
  { kode: "kf-001",kategori: "perfume", nama: "kahf invigorating waterfall 35 ml", harga: 65000, link: "https://s.shopee.co.id/1LglG0q5CS", foto: "kf-001.jpg" },
  { kode: "kf-002",kategori: "perfume", nama: "kahf revered oud 35 ml", harga: 65000, link: "https://s.shopee.co.id/8V9vnM2LRy", foto: "kf-002.jpg" },
  { kode: "kf-003",kategori: "perfume", nama: "kahf humbling forest 35 ml", harga: 65000, link: "https://s.shopee.co.id/2LZIRkkVQr", foto: "kf-003.jpg" },
  { kode: "kf-004",kategori: "perfume", nama: "kahf true brotherhood 35 ml", harga: 65000, link: "https://s.shopee.co.id/5q9AcKm6jB", foto: "kf-004.jpg" },
  { kode: "mch-001",kategori: "fashion", nama: "longsleeve wild hourse-mouche", harga: 230000, link: "https://s.shopee.co.id/1BNqDwX35", foto:["mch-001.jpg","mch-001-b.jpg"] },
  { kode: "vb-001",kategori: "fashion", nama: "relax shirt-vobia", harga: 250000, link: "https://s.shopee.co.id/6VOsYuUQK0", foto:["vb-001.jpg","vb-001-b.jpg","vb-001-c.jpg","vb-001-d.jpg"] },
  { kode: "ts-001",kategori: "fashion", nama: "tas Selempang wanita", harga: 25000, link: "https://s.shopee.co.id/3qO84ASYh2", foto:["ts-001.jpg","ts-001-b.jpg","ts-001-c.jpg","ts-001-d.jpg"] },











    
];
window.PRODUK.forEach(function(p){ if(!p.kategori) p.kategori = "fashion"; });
window.PRODUK.forEach(function(p){ if(!p.kategori) p.kategori = "scincare"; });
window.PRODUK.forEach(function(p){ if(!p.kategori) p.kategori = "aksesoris"; });
window.PRODUK.forEach(function(p){ if(!p.kategori) p.kategori = "furniture"; });
window.PRODUK.forEach(function(p){ if(!p.kategori) p.kategori = "perfume"; });



