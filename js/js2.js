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
    $(".title").toggleClass('open');
});
$(".nav-item").click(function () {
    $(".nav-item").removeClass('active');
    $(this).delay(500).addClass('active');
});

// изменения правой стороны с фильтрами
function toggleFilters() {
    $(".filters").toggleClass('open');
    setTimeout(startObserver, 300);
}
function staticFilters() {
    $(".filters").addClass('open');
    startObserver();
}
function loadContent(viewUrl) {
    $('#layout').load(viewUrl);
    startObserver();
}
function closeMobileMenu() {
    $('.mobile-menu').toggleClass('open');
    $('.mobile-menu-content').toggleClass('open');
}
$('.button-menu').click(function () {
    $('.icon-menu')
        .toggleClass('arrow-left')
        .toggleClass('arrow-right');
    setTimeout(startObserver, 300);
})

// setInterval(function() {
//     const menu = document.querySelector(".main-menu")
//     const filters = document.querySelector(".filters")
//     const layout = document.querySelector(".layout")
//     const body = document.querySelector(".bodyId")
//
//     const observer = new ResizeObserver((entries, observer) => {
//         for(let entry of entries){
//             console.log(entries);
//             let bodyWidth = entries[0].contentRect.width;
//             let menuWidth = entries[1].contentRect.width;
//             let filtersWidth = entries[2].contentRect.width;
//             let layoutWidth = bodyWidth - (menuWidth + filtersWidth);
//             layout.style.width = layoutWidth + "px";
//             console.log("ширина меню: ", menuWidth);
//             console.log("ширина боди: ", bodyWidth);
//             console.log("ширина фильтров: ", filtersWidth);
//             console.log("установить ширину лейаута в: ", layoutWidth);
//         }
//
//     });
//     observer.observe(body);
//     observer.observe(menu);
//     observer.observe(filters);
// }, 1000);

function startObserver() {
    var observer = new ResizeObserver(entries => {
        console.log(entries);
        const menu = entries[0];
        const filters = entries[1];
        const body = entries[2];
        const layout = entries[3];
        if (layout.contentRect.width < 400) {
            console.log(layout.contentRect.width);
            console.log("тут надо назначить ширину layout")
        }
        else {
            layout.target.style.width = body.contentBoxSize[0].inlineSize - filters.contentBoxSize[0].inlineSize - menu.contentBoxSize[0].inlineSize + "px";
        }
    });
    observer.observe(document.querySelector(".main-menu"));
    observer.observe(document.querySelector(".filters"));
    observer.observe(document.querySelector(".bodyId"));
    observer.observe(document.querySelector(".layout"));
}

$(window).ready(startObserver);
