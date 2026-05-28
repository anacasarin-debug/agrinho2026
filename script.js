const slider = document.getElementById('balanceSlider');
const message = document.getElementById('statusMessage');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    
    if (value >= 45 && value <= 55) {
        message.innerText = "Equilíbrio Perfeito: Futuro Sustentável garantido! 🌿🚜";
        message.style.color = "#2ecc71";
    } else if (value < 45) {
        message.innerText = "Foco apenas na produção? Precisamos cuidar do meio ambiente! ⚠️";
        message.style.color = "#e67e22";
    } else {
        message.innerText = "Preservação sem produção? O agro alimenta o mundo! 🌾";
        message.style.color = "#3498db";
    }
});
