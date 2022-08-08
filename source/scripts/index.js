const btnRu = document.getElementById('btn-ru');
const btnEng = document.getElementById('btn-eng');

function theSameLanguage () {
    alert('Данный язык уже выбран / This language is already chosen');
}

function notTranslated () {
    alert('Перевод на данный язык еще не готов / Translation is not ready');
}

btnRu.addEventListener('click', theSameLanguage);
btnEng.addEventListener('click', notTranslated);