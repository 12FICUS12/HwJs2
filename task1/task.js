document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    // Открытие / закрытие выпадающего списка
    dropdownValue.addEventListener('click', (event) => {
        event.stopPropagation(); 
        dropdownList.classList.toggle('dropdown__list_active');
    });

    // Обработка выбора элемента
    dropdown.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 
            dropdownValue.textContent = item.textContent; 
            dropdownList.classList.remove('dropdown__list_active'); 
        });
    });

    // Закрытие выпадающего списка при клике вне
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});