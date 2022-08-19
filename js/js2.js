$(".button-menu").click(function () {
    // реакция на переключение левого меню:
    $(".main-menu").delay(900).toggleClass('open');
    // уменьшение layout на ширину левого меню:(в css)
    // сокрытие текста пунктов меню
    $(".nav-text").delay(100).toggleClass('close');
    // сдвиг поиска
    $(".search").delay(100).toggleClass('open');
    // сокрытие текстовой части лого
    // $(".title").delay(100).toggleClass('open');
    $(".card-header").toggleClass('open-menu');
    $(".card-body").toggleClass('open-menu');
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
    $(".card-body").toggleClass('open-menu');
};


function loadContent(viewUrl) {
    $('#layout').load(viewUrl);

}
$('.button-menu').click(function(){
    $('.icon-menu')
        .toggleClass('arrow-left')
        .toggleClass('arrow-right');
})

// let mymenu;
// mymenu = $('.main-menu');
// let mycontent;
// mycontent = $('.card-body');
// let filters;
// filters = $('.filters');
// $(window, mymenu, mycontent, filters ).bind("resize", function(){
//     let menuWidth;
//     let filterWidth;
//     let contentWidth;
//     let browserWidth;
//     contentWidth = $('.card-body').width();
//     browserWidth = $(document).width();
//     menuWidth = $('.main-menu').width();
//     filterWidth = $('.filters').width();
//     console.log("ширина меню:", menuWidth);
//     console.log("ширина фильтров:", filterWidth);
//     console.log("ширина окна: ", browserWidth);
//     console.log("ширина card-body: ", contentWidth);
//     contentWidth.width(browserWidth - menuWidth - filterWidth);
// });

var pageWidth;
pageWidth = document.documentElement.scrollWidth
var menu;
menu = document.querySelector('.main-menu'); //resizer
var mycontent;
mycontent = document.querySelector('.card-body').style; //observer
var filters;
filters = document.querySelector('.filters');//resizer
var callback = function() {
    requestAnimationFrame(function() {
        var menuWidth = menu.offsetWidth;
        var filtersWidth = filters.offsetWidth;
        mycontent.width = pageWidth - (menuWidth + filtersWidth) + 'px';
        console.log(mycontent.width)
    });
};

let MutationObserver = window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver

let observer = new MutationObserver(callback)

observer.observe(element, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
})
