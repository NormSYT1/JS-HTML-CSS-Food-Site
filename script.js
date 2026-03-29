// Arama inputunu dinle, her tuşa basınca çalış
document.getElementById('searchInput').addEventListener('keyup', function() {
    
    // Yazılan metni küçük harfe çevir ve boşlukları temizle
    const searchWord = this.value.toLowerCase().trim();
    
    // 3 section'ı seç: İndirimli, Popüler, Tatlılar
    const allSections = document.querySelectorAll('.promotion, .featured, .sweets');

    // Her section'ı tek tek gez
    allSections.forEach(section => {
        
        // O section'daki tüm yemek kartlarını seç
        const allItems = section.querySelectorAll('.menu-item');
        
        // Section'ın h2 başlığını seç
        const title = section.querySelector('h2');
        
        // Eşleşen yemek var mı takip et, başlangıçta yok
        let hasMatch = false;

        // Her yemek kartını tek tek gez
        allItems.forEach(item => {
            
            // Yemeğin h3 adını küçük harfe çevir
            const foodName = item.querySelector('h3').textContent.toLowerCase();

            if (searchWord === '') {
                // Arama boşsa tüm yemekleri göster
                item.style.display = 'block';
                hasMatch = true;
            } else if (foodName.includes(searchWord)) {
                // Yemek adı aranan kelimeyi içeriyorsa göster
                item.style.display = 'block';
                hasMatch = true;
            } else {
                // Eşleşmiyorsa gizle
                item.style.display = 'none';
            }
        });

        // Eşleşen yemek varsa section'ı göster, yoksa gizle
        section.style.display = hasMatch ? 'block' : 'none';
        
        // Eşleşen yemek varsa başlığı göster, yoksa gizle
        title.style.display = hasMatch ? 'block' : 'none';
    });
});

// Ara butonuna tıklanınca keyup olayını manuel tetikle
function search() {
    document.getElementById('searchInput').dispatchEvent(new Event('keyup'));
}

// Tüm sipariş butonlarını seç ve her birine tıklama olayı ekle
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', function() {
        
        // Yeni bir div oluştur ve mesaj yaz
        const popup = document.createElement('div');
        popup.textContent = 'Siparişiniz oluşturuldu! 🎉';
        
        // Popup'ın stilini ayarla
        popup.style.cssText = `
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ff5733;
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            font-size: 18px;
            z-index: 9999;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        `;
        
        // Popup'ı sayfaya ekle
        document.body.appendChild(popup);

        // 1.5 saniye sonra popup'ı kaldır
        setTimeout(() => {
            popup.remove();
        }, 1500);
    });
});