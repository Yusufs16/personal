// script.js
document.querySelectorAll('.animated-img').forEach(image => {
   let timeoutId; // Menyimpan ID timeout untuk pembersihan
 
   image.addEventListener('click', function() {
     // Hapus class animate dari gambar lain
     document.querySelectorAll('.animated-img').forEach(img => {
       if (img !== this) {
         img.classList.remove('animate');
       }
     });
 
     // Tambah atau hapus class animate pada gambar yang diklik
     this.classList.toggle('animate');
 
     // Jika gambar dalam keadaan animasi, set timeout untuk menghapus class setelah beberapa detik
     if (this.classList.contains('animate')) {
       clearTimeout(timeoutId); // Hapus timeout sebelumnya
       timeoutId = setTimeout(() => {
         this.classList.remove('animate');
       }, 1000); // Gambar akan kembali ke ukuran semula setelah 1 detik
     }
   });
 });
 