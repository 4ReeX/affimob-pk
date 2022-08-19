$(".button-menu").click(function () {
    // реакция на переключение левого меню:
    $(".main-menu").delay(900).toggleClass('open');
    // уменьшение layout на ширину левого меню:(в css)
    $(".layout").delay(900).toggleClass('open-menu');
    // сокрытие текста пунктов меню
    $(".nav-text").delay(100).toggleClass('close');
    // сдвиг поиска
    $(".search").delay(100).toggleClass('open');
    // сокрытие текстовой части лого
    $(".title").delay(100).toggleClass('open');
});
$(".nav-item").click(function () {
    $(".nav-item").removeClass('active');
    $(this).delay(500).addClass('active');
});

// изменения правой стороны с фильтрами
function addFilters() {
    $(".filters").addClass('hlop');
};
function hideFilters() {
    $(".filters").removeClass('hlop');
};
function staticFilters() {
    $(".filters").toggleClass('hlop');
    $(".filters").toggleClass('open');
    $(".layout").toggleClass('open');
};
$(".filters-btn").click(function () {
    $(".layout").toggleClass('open-filters');
});

