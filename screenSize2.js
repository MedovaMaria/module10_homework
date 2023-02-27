const btn = document.querySelector('.j-btn-test');
//Размер экрана
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

//Размер окна браузера с учётом полосы прокрутки
const WidthScroll = window.innerWidth;
const HeightScroll = window.innerHeight;

//Размер окна браузера без учёта полосы прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

//Размер веб-страницы
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;



btn.addEventListener('click', () => {

alert(`Размер экрана: ${screenWidth}px x ${screenHeight}px. 
Размер окна браузера с полосой прокрутки: ${WidthScroll}px x ${HeightScroll}px.
Размер окна браузера без полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.
Размер веб-страницы: ${pageWidth}px x ${pageHeight}px.`);

});