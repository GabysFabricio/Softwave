function openPopup(text) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-text').innerText = text;
    if (text === 'Fundadores') {
        // Adicione conteúdo dos fundadores aqui
        const fundadoresContainer = document.getElementById('fundadores-container');
        fundadoresContainer.innerHTML = `
            <div class="fundador">
                <img src="img/fundador1.jpg" alt="Fundador 1">
                <div class="fundador-info">
                    <h3>Ruan</h3>
                    <p>Cargo</p>
                </div>
                <div class="fundador-buttons">
                    <button class="fundador-button">Ler Sobre</button>
                    <button class="fundador-button">Instagram</button>
                    <button class="fundador-button">GitHub</button>
                </div>
            </div>


            <div class="fundador">
            <img src="img/fundador2.jpg" alt="Fundador 1">
            <div class="fundador-info">
                <h3>Bruno</h3>
                <p>Cargo</p>
            </div>
            <div class="fundador-buttons">
                <button class="fundador-button">Ler Sobre</button>
                <button class="fundador-button">Instagram</button>
                <button class="fundador-button">GitHub</button>
            </div>
        </div>

        <div class="fundador">
        <img src="img/fundador3.jpg" alt="Fundador 1">
        <div class="fundador-info">
            <h3>Gabrielly</h3>
            <p>Cargo</p>
        </div>
        <div class="fundador-buttons">
            <button class="fundador-button">Ler Sobre</button>
            <button class="fundador-button">Instagram</button>
            <button class="fundador-button">GitHub</button>
        </div>
    </div>
            `;
    } else {
        // Limpe o conteúdo do container de fundadores
        document.getElementById('fundadores-container').innerHTML = '';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

