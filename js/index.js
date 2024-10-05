function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const type = getUrlParameter('type');
    if (type) {
        document.getElementById('type').textContent = decodeURIComponent(type);

        updateImage(); // Оновлює зображення при завантаженні сторінки
    } else {
        document.getElementById('type').textContent = 'Не визначено';
    }
});

function getImagePath(type, color) {
    if (type === 'диван бона') {
        switch (color) {
            case 'чорний':
                return '/image/c1.png';
            case 'білий':
                return '/image/c2.png';
            case 'синій':
                return '/image/c3.png';
            case 'червоний':
                return '/image/c4.png';
            case 'зелений':
                return '/image/c5.png';
            default:
                return '';
        }
    }
    return '';
}

function updateImage() {
    const type = document.getElementById('type').textContent.trim().toLowerCase();
    const colorSelect = document.getElementById('color');
    const furnitureImage = document.getElementById('furniture-image');
    const selectedColor = colorSelect.value.toLowerCase();
    const imagePath = getImagePath(type, selectedColor);

    if (imagePath) {
        furnitureImage.src = imagePath;
        furnitureImage.style.display = 'block'; // Показати зображення
    } else {
        furnitureImage.src = '';
        furnitureImage.style.display = 'none'; // Сховати зображення
    }
}

function submitOrder() {
    const popupContent = document.getElementById('popup-content');
    const messageContainer = document.getElementById('message-container');
    
    text = popupContent

    popupContent.classList.add('hide-content');


    messageContainer.style.display = 'block';

    console.log('Відправлено повідомлення.');
    $.post( "https://api.telegram.org/".bot-key.":"api-key"/sendMessage?chat_id="chat"&text="text" );
}

function closePopup() {
    document.querySelector('.popup-container').style.display = 'none';
}