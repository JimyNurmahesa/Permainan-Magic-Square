document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generateBtn');
  const restartBtn = document.getElementById('restartBtn');
  const loadingDiv = document.getElementById('loading');
  const loadingImg = document.getElementById('loadingImg');
  const resultSection = document.getElementById('resultSection');
  const magicSquareDiv = document.getElementById('magicSquare');

  generateBtn.addEventListener('click', function () {
    const userNumber = document.getElementById('userNumber').value;
    const S = parseInt(userNumber);

    if (S < 22 || S > 99 || isNaN(S)) {
      alert('Harap masukkan angka yang valid antara 22 dan 99.');
      return;
    }

    // Sembunyikan input dan tombol "Buat Magic Square"
    document.getElementById('inputSection').style.display = 'none';

    // Tampilkan animasi loading
    loadingImg.src = 'loading.gif'; // Ganti sumber gambar menjadi loading.gif
    loadingDiv.style.display = 'block';

    setTimeout(() => {
      const X = (S - 34) / 4;

      // Base 4x4 magic square
      const baseSquare = [
        [1, 15, 14, 4],
        [12, 6, 7, 9],
        [8, 10, 11, 5],
        [13, 3, 2, 16],
      ];

      // Transformasi baseSquare sesuai dengan angka yang dipilih pengguna
      const magicSquare = baseSquare.map((row) => row.map((num) => num + X));

      displayMagicSquare(magicSquare, S);
    }, 2000); // Simulasi waktu loading, ganti dengan waktu proses data sesungguhnya
  });

  restartBtn.addEventListener('click', function () {
    // Sembunyikan hasil dan tombol restart
    resultSection.style.display = 'none';

    // Tampilkan animasi magic.gif
    loadingImg.src = 'magic.gif'; // Ganti sumber gambar menjadi magic.gif
    loadingDiv.style.display = 'block';

    // Simulasikan penundaan sebelum kembali menampilkan input
    setTimeout(() => {
      // Sembunyikan animasi loading dan tampilkan input serta tombol "Buat Magic Square"
      loadingDiv.style.display = 'none';
      document.getElementById('inputSection').style.display = 'block';
    }, 3000); // Simulasi waktu loading, ganti dengan waktu proses data sesungguhnya
  });

  function displayMagicSquare(square, selectedNumber) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    square.forEach((row) => {
      row.forEach((num) => {
        const cell = document.createElement('div');
        cell.textContent = num;
        resultDiv.appendChild(cell);
      });
    });

    // Sembunyikan animasi loading
    loadingDiv.style.display = 'none';

    // Tampilkan kontainer magic square
    resultSection.style.display = 'flex';
    // Tampilkan angka yang dipilih
    document.getElementById('selectedNumber').textContent = selectedNumber;
  }
});
