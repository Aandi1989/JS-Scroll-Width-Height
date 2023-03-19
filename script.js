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


/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
//Опции не работают в Safari



// Запретить прокрутку
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}

/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/



// Метрики элементов на странице

// Получаем объект
//const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
//const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

//console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/


/*
// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/

//========================================================================================================================================================

// Общие размеры объекта
// offsetWidth и offsetHeight
/*
// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/
// Метрики для не показываемых элементов равны нулю.

//=======================================================================================================================================================


/*
// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/