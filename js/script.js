function openPopup(fundador) {
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");

    // Defina o texto com base no fundador
    if (fundador === 1) {
        popupText.textContent = "Informações sobre o Ruan: Ruan Padilha é o Desenvolvedor Fullstack Chefe conhecido por sua visão estratégica e habilidades excepcionais em todas as camadas de desenvolvimento. Sua liderança técnica impulsiona a inovação e qualidade dos projetos, transformando desafios complexos em soluções eficientes, elevando nossa empresa a novos patamares de excelência tecnológica";
        
    } else if (fundador === 2) {
        popupText.textContent = "Informações sobre o Bruno: Bruno Tavares, Desenvolvedor Fullstack e Analista de Dados, une habilidades técnicas e analíticas para criar soluções robustas e fornecer insights valiosos. Sua capacidade de integrar dados complexos com funcionalidades de software torna-o essencial para impulsionar a inovação e a precisão em cada projeto. ";
    } else if (fundador === 3) {
        popupText.textContent = "Informações sobre a Gaby: Gabrielly Fabricio, como Chief Product Officer (CPO) e desenvolvedora fullstack auxiliar, combina visão estratégica com expertise técnica. Ela lidera a criação de produtos inovadores e garante a execução impecável dos códigos, equilibrando liderança e desenvolvimento técnico para ser a alma criativa e a engenheira do nosso sucesso.";
    }

    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}