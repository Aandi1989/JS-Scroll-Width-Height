//Размер окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth)
console.log(mainElementHeight)

// -------------------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth)
console.log(windowHeight)

// Ширина и высота документа включая прокрученную часть

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
)
console.log(scrollWidth)
console.log(scrollHeight)


// Получить кол-во прокрученных пикселей 
// только для чтения
let windowScrollTop = window.pageYOffset;
let windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop) // Может не всегда выводить верное значение в консоль из-за прыжка скрола при обновлении страницы
console.log(windowScrollLeft)


// Управление прокруткой страницы 
// Мутод scrollBy(x,y) прокручивает страницу относительно её текущего положения

function setScrollBy(){
    window.scrollBy(0,50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop)
}

// Метод ScrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты (pageX, pageY).
// тоже самое что и window.scroll()

function setScrollToOptions(){
    window.scrollTo({
        top:500,
        left:0,
        //smooth, instant,
        // либо auto; по умолчанию auto
        behavior:'smooth'
    });
}
//Опции не работают в Safari
