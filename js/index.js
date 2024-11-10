$(document).ready(function() {
    // Показати попап з анімацією
    $('#popup-container').addClass('show');

    // Отримати параметр type з URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    // Встановити зображення, текст і опис меблів
    setFurnitureImage(type);
    setFurnitureType(type);
    setFurnitureDescription(type);

    // Обробник для кнопки
    $('#back-button').click(function() {
        window.location.href = 'index.html';
    });
});

// Функції для встановлення зображення, типу та опису
function setFurnitureImage(type) {
    let imageUrl;
    switch(type) {
        case 'Спальня':
            imageUrl = './image/ch.png';
            break;
        case 'Кухня':
            imageUrl = './image/sf.png';
            break;
        case 'Вітальня':
            imageUrl = './image/work_desk.png';
            break;
        case 'Кабінет':
            imageUrl = './image/office.png';
            break;
        default:
            imageUrl = './image/default.png'; // Зображення за замовчуванням
    }
    $('#furniture-image').attr('src', imageUrl);
}

function setFurnitureType(type) {
    $('#furniture-type').text(type);
}

function setFurnitureDescription(type) {
    let description;
    switch(type) {
        case 'Спальня':
            description = "Це стильні та зручні меблі для вашої спальні.";
            break;
        case 'Кухня':
            description = "Сучасні рішення для вашої кухні.";
            break;
        case 'Вітальня':
            description = "Комфортні меблі для вашої вітальні.";
            break;
        case 'Кабінет':
            description = "Ергономічні меблі для вашого офісу.";
            break;
        default:
            description = "Виберіть тип меблів, щоб дізнатися більше.";
    }
    $('#furniture-description').text(description);
}