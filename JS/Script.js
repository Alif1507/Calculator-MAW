const hasil = document.getElementById("hasil");

function tampil(input) {
  if (hasil.textContent === '0') {
    hasil.textContent = input;
  } else {
    hasil.textContent += input;
  }
}

function clearDisplay() {
  hasil.textContent = '0';
}

function kalkulasi() {
  try {
    hasil.textContent = eval(hasil.textContent);
  } catch (error) {
    hasil.textContent = 'Error';
  }
}
