// To open full menu.
const menuButton = document.getElementsByClassName('ts_content__button')[0];
const hiddenItems = document.getElementsByClassName('hidden_item');

menuButton.addEventListener("click", () => {
    Array.from(hiddenItems).forEach(item => {
        if (item.classList.contains('active')) {
            item.style.height = item.scrollHeight + "px";

            // Перерисовка элемента для запуска анимации
            setTimeout(() => {
                item.style.height = "0";
                item.style.opacity = "0";
            }, 0);

            // После завершения анимации скрываем элемент
            setTimeout(() => {
                item.style.display = 'none';
                item.classList.remove('active');
            }, 100);
        } else {
            // Сначала делаем элемент видимым
            item.style.display = 'flex';
            item.style.height = "0";
            item.style.opacity = "0";

            // Задержка перед применением реальной высоты и анимации
            setTimeout(() => {
                item.classList.add('active');
                item.style.height = item.scrollHeight + "px";
                item.style.opacity = "1";
            }, 0);

            // После завершения анимации высоту снова в auto
            setTimeout(() => {
                item.style.height = "auto";
            }, 0);
        }
    });
});

menuButton.addEventListener('click', () => {
    if (menuButton.textContent === 'To see more...'){
        menuButton.innerText = 'To see less...';
    } else if (menuButton.textContent === 'To see less...') {
        menuButton.innerText = 'To see more...';
    }
});