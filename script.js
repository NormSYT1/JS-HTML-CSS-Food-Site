document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchWord = this.value.toLowerCase().trim();
    const allSections = document.querySelectorAll('.promotion, .featured, .sweets');

    allSections.forEach(section => {
        const allItems = section.querySelectorAll('.menu-item');
        const title = section.querySelector('h2');
        let hasMatch = false;

        allItems.forEach(item => {
            const foodName = item.querySelector('h3').textContent.toLowerCase();

            if (searchWord === '') {
                item.style.display = 'block';
                hasMatch = true;
            } else if (foodName.includes(searchWord)) {
                item.style.display = 'block';
                hasMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        section.style.display = hasMatch ? 'block' : 'none';
        title.style.display = hasMatch ? 'block' : 'none';
    });
});

function search() {
    document.getElementById('searchInput').dispatchEvent(new Event('keyup'));
}

document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Siparişiniz oluşturuldu! 🎉');
    });
});