
function changeTheme(){
    $('body').toggleClass('theme-dark');
    $( "span.lightMode" ).toggle();
}

$("#newUser").click(function(){
    $("#login-form").fadeOut(200);
    $("#registration-form").delay(300).fadeIn(500);
    $(".other-options").fadeOut(200);
});

$("#signup-btn,#getpass-btn").click(function(){
    $("#registration-form,#fpass-form").fadeOut(200);
    $("#login-form").delay(300).fadeIn(500);
    $(".other-options").fadeIn(300);
});

$("#fPass").click(function(){
    $("#login-form").fadeOut(200);
    $("#fpass-form").delay(300).fadeIn(500);
    $(".other-options").fadeOut(200);
});

const $home = $("#home");
const $about = $("#about");
const $graph = $("#graph");
const $news = $("#news");
const $login = $("#login");
const $all = $('#home, #about, #graph, #news, #login');
const $darkbg = $(".darkbg");


function home() {
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $home.addClass( "activeScene" );
}
function about() {
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $about.addClass( "activeScene" );
}
function graph() {
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $graph.addClass( "activeScene" );
}
function news() {
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $news.addClass( "activeScene" );
}
function login() {
    $darkbg.removeClass("hide");
    $("#registration-form").fadeOut(100);
    $("#login-form").delay(100).fadeIn(200);
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $login.addClass( "activeScene" );
}
function Registration() {
    $(".other-options").fadeOut(50);
    $darkbg.removeClass("hide");
    $("#login-form").fadeOut(100);
    $("#registration-form").delay(100).fadeIn(200);

    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $login.addClass( "activeScene" );
}

$('.read').click(function(){
    $(this).html('visibility_off');
    $(this).next('.full-article').toggleClass("hidden");
});
$(document).ready(function(){
    $(window).scrollTop(0);
});


function closeRegPop() {
    $all.removeClass( "activeScene" );
    $all.addClass( "hiddenScene" );
    $(".darkbg").addClass("hide");
}


$(document).ready(function () {
    $(".reg").hover(
        function () {
            $(this).css({'color': '#f15a24;'});
            $(this).children(".menu-text").addClass("animate__animated fadeInRight animate__faster");
            $(this).children(".menu-text").show();
        },
        function () {
            $(this).css({'color': '#fff;'});
            $(this).children(".menu-text").removeClass("animate__animated fadeInRight animate__faster");
            $(this).children(".menu-text").hide();
        }
    );
});

$(document).ready(function () {
    $(".auth").hover(
        function () {
            $(this).children(".menu-text").addClass("animate__animated fadeInRight animate__faster");
            $(this).children(".menu-text").show();
        },
        function () {
            $(this).children(".menu-text").removeClass("animate__animated fadeInRight animate__faster");
            $(this).children(".menu-text").hide();
        }
    );
});
