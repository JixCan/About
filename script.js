async function getChessComStats() {
    try {
        const response = await fetch("https://api.chess.com/pub/player/JixCanOfficial");
        if (response.ok) {
            const data = await response.json();
            const { avatar, joined, last_online } = data;

            // Находим соответствующие элементы DOM
            const avatarElement = document.querySelector('.chess-com-profile-picture');
            const nicknameElement = document.querySelector('.chess-com-nickname');
            const joinedElement = document.querySelector('.chess-com-joined');
            const lastOnlineElement = document.querySelector('.chess-com-last-online');

            // Вставляем данные в элементы DOM
            avatarElement.innerHTML = `<img src="${avatar}" alt="Аватар">`;
            nicknameElement.textContent = `Никнейм: ${data.username}`;
            joinedElement.textContent = `Дата регистрации: ${new Date(joined * 1000).toLocaleDateString()}`;
            lastOnlineElement.textContent = `Последний онлайн: ${new Date(last_online * 1000).toLocaleString()}`;
        } else {
            console.error("Ошибка при получении данных:", response.status);
        }
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', getChessComStats);
