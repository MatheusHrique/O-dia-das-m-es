document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const messageContainer = document.getElementById('message-container');
    const photoContainer = document.getElementById('photo-container');

    const windowWidth = window.innerWidth;
    const messageWidth = messageContainer.offsetWidth;
    const triggerDistance = 500; // Tempo de scroll para completar a animação

    // Interpolação:
    // Quando scrollY = 0   => translateX = -messageWidth (fora da tela à esquerda)
    // Quando scrollY = 500 => translateX = windowWidth (fora da tela à direita)
    let translateX = -messageWidth + (scrollY / triggerDistance) * (windowWidth + messageWidth);

    // Garante que a animação não extrapole os pontos extremos
    if (translateX > windowWidth) {
        translateX = windowWidth;
    }
    if (translateX < -messageWidth) {
        translateX = -messageWidth;
    }

    messageContainer.style.transform = `translateX(${translateX}px)`;

    // Exibe a foto e a legenda após 600px de scroll
    const photoThreshold = 600;
    if (scrollY > photoThreshold) {
        photoContainer.classList.add('visible');
    } else {
        photoContainer.classList.remove('visible');
    }
});