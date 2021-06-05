
//Menu
function menuClose(delay, menuIcon, menuBody) {
    body_lock(delay);
    menuIcon.classList.remove("_active");
    menuBody.classList.remove("_active");
}

const main = document.querySelector("main");
const headerRight = document.querySelector(".header__right");
const subscribeForm = document.querySelector(".subscribe-form");
const footer = document.querySelector(".footer");
let unlock = true;
let iconMenu = document.querySelector(".burger-menu__icon");
let menuOverlay = document.querySelector(".burger-menu__overlay");
let menuBody = document.querySelector(".burger-menu__body");
if (iconMenu != null) {
    let delay = 500;
    let menuBody = document.querySelector(".burger-menu__body");
    iconMenu.addEventListener("click", function (e) {
        if (unlock) {
            if (iconCart.classList.contains("_active")) {
                iconCart.classList.remove("_active");
                cartBody.classList.remove("_active");
                main.classList.remove("_filter");
                headerRight.classList.remove("_filter");
                subscribeForm.classList.remove("_filter");
                footer.classList.remove("_filter");
                removeLockPadding();
            }
                body_lock(delay);
                iconMenu.classList.toggle("_active");
                menuBody.classList.toggle("_active");
        }
    });
    menuOverlay.addEventListener("click", function (e) {
        if (unlock) {
            menuClose(delay, iconMenu, menuBody);
        }
    });
};

//=================

// Cart
const iconCart = document.querySelector(".cart");
const cartBody = document.querySelector(".cart__body");
const cartOverlay = document.querySelector(".cart__overlay");
const closeCartBtn = document.querySelector(".close-cart");
if (iconCart != null) {
    let delay = 500;
    let cartBody = document.querySelector(".cart__body");
    [iconCart, closeCartBtn].forEach(el => {
        el.addEventListener("click", function (e) {
            if (unlock) {
                if (iconMenu.classList.contains("_active")) {
                    iconMenu.classList.remove("_active");
                    menuBody.classList.remove("_active");
                    removeLockPadding();
                }
                body_lock(delay);
                iconCart.classList.toggle("_active");
                cartBody.classList.toggle("_active");
                main.classList.toggle("_filter");
                headerRight.classList.toggle("_filter");
                subscribeForm.classList.toggle("_filter");
                footer.classList.toggle("_filter");
            }
        });
    });
    cartOverlay.addEventListener("click", function (e) {
        if (unlock) {
            menuClose(delay, iconCart, cartBody);
            main.classList.remove("_filter");
            headerRight.classList.remove("_filter");
            subscribeForm.classList.remove("_filter");
            footer.classList.remove("_filter");
        }
    });
};

//=================

//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function removeLockPadding() {
    let body = document.querySelector("body");
    let lock_padding = document.querySelectorAll("._lp");
    for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove("_lock");
}
function body_lock_remove(delay) {
    if (unlock) {
        setTimeout(() => {
            removeLockPadding();
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

//=================
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('_webp');
    } else {
        document.querySelector('body').classList.add('_no-webp');
    }
});
function ibg() {
    if (isIE()) {
        let ibg = document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}
ibg();

if (document.querySelector('.wrapper')) {
    document.querySelector('.wrapper').classList.add('_loaded');
}

// let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
    const hsh = location.hash.replace('#', '');
    if (document.querySelector('.popup_' + hsh)) {
        popup_open(hsh);
    } else if (document.querySelector('div.' + hsh)) {
        _goto(document.querySelector('.' + hsh), 500, '');
    }
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
    for (let index = 0; index < title.length; index++) {
        let el = title[index];
        let txt = el.innerHTML;
        let txt_words = txt.replace('  ', ' ').split(' ');
        let new_title = '';
        for (let index = 0; index < txt_words.length; index++) {
            let txt_word = txt_words[index];
            let len = txt_word.length;
            new_title = new_title + '<p>';
            for (let index = 0; index < len; index++) {
                let it = txt_word.substr(index, 1);
                if (it == ' ') {
                    it = '&nbsp;';
                }
                new_title = new_title + '<span>' + it + '</span>';
            }
            el.innerHTML = new_title;
            new_title = new_title + '&nbsp;</p>';
        }
    }
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll("._tabs-item");
    let tabs_blocks = tab.querySelectorAll("._tabs-block");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}
//=================

//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
    gallery_init();
}
function gallery_init() {
    for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
            counter: false,
            selector: 'a',
            download: false
        });
    }
}
//=================
//SearchInList
function search_in_list(input) {
    let ul = input.parentNode.querySelector('ul')
    let li = ul.querySelectorAll('li');
    let filter = input.value.toUpperCase();

    for (i = 0; i < li.length; i++) {
        let el = li[i];
        let item = el;
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            el.style.display = "";
        } else {
            el.style.display = "none";
        }
    }
}
//=================
//DigiFormat
function digi(str) {
    var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
    if (digi_animate.length > 0) {
        for (let index = 0; index < digi_animate.length; index++) {
            const el = digi_animate[index];
            const el_to = parseInt(el.innerHTML.replace(' ', ''));
            if (!el.classList.contains('_done')) {
                digi_animate_value(el, 0, el_to, 1500);
            }
        }
    }
}
function digi_animate_value(el, start, end, duration) {
    var obj = el;
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = digi(value);
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();

    el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
    const el = popup_link[index];
    el.addEventListener('click', function (e) {
        if (unlock) {
            let item = el.getAttribute('href').replace('#', '');
            let video = el.getAttribute('data-video');
            popup_open(item, video);
        }
        e.preventDefault();
    })
}
for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}
function popup_open(item, video = '') {
    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}
function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        })
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}
//========================================

//Spollers
let spollers = document.querySelectorAll("._spoller");
spollers.forEach((el, i)=> {
    if (i === 0) {
        el.classList.add('_active');
    } else {
        el.classList.add('_collapsed');
    }
});


let spollersGo = true;
if (spollers.length > 0) {
    _slideToggle(spollers[0].nextElementSibling);
    for (let index = 0; index < spollers.length; index++) {
        const spoller = spollers[index];
        spoller.addEventListener("click", function (e) {
            if (spollersGo) {
                spollersGo = false;
                if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
                    return false;
                }
                if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
                    return false;
                }
                if (spoller.closest('._spollers').classList.contains('_one')) {
                    let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
                    for (let i = 0; i < curent_spollers.length; i++) {
                        let el = curent_spollers[i];
                        if (el != spoller) {
                            el.classList.remove('_active');
                            el.classList.add('_collapsed');
                            _slideUp(el.nextElementSibling);
                        }
                    }
                }
                spoller.classList.toggle('_active');
                spoller.classList.toggle('_collapsed');
                _slideToggle(spoller.nextElementSibling);

                setTimeout(function () {
                    spollersGo = true;
                }, 500);
            }
        });
    }
}

const nextButtons = document.querySelectorAll("._spoller-next");

nextButtons.forEach(el => {
    el.addEventListener('click', () => {
        // const inputs = document.querySelectorAll("input");
        if (spollersGo) {
            spollersGo = false;
            for (let i = 0; i < spollers.length; i++) {
                let spoller = spollers[i];

                if (spoller.classList.contains('_active')) {
                    spoller.classList.remove('_active');
                    spoller.classList.add('_collapsed');
                    _slideUp(spoller.nextElementSibling);

                    const nextSpoller = spollers[i + 1];

                    nextSpoller.classList.toggle('_active');
                    nextSpoller.classList.toggle('_collapsed');
                    _slideToggle(nextSpoller.nextElementSibling);

                    setTimeout(function () {
                        spollersGo = true;
                    }, 500);

                    break;
                }
            }
        }
    });
});

let inputGroups = [];
const dataElements = [];
for (let i = 0; i < spollers.length; i++) {
    inputGroups.push(spollers[i].nextElementSibling.querySelectorAll("input"));
    dataElements.push(spollers[i].querySelector(".spollers-block__data"));
    if (i === 2) {
        inputGroups[i].forEach(el => {
            el.addEventListener('change', (e) => {
                if (e.target.checked) {
                    spollers[i].classList.add('_filled');
                    dataElements[i].innerHTML = `<div>${el.nextElementSibling.innerText}</div>`;
                }
                let formIsFilled = false;
                for (let j = 0; j < spollers.length; j++) {
                    if (!spollers[j].classList.contains('_filled')) {
                        formIsFilled = false;
                        break
                    }
                    formIsFilled = true;
                }
                if (formIsFilled) {
                    document.querySelector('.checkout__btn').disabled = false;
                }
            });
        });
    } else {
        inputGroups[i].forEach(el => {
            el.addEventListener('change', (e) => {
                let isFilled = false;
                for (let j = 0; j < inputGroups[i].length; j++) {
                    const el = inputGroups[i][j];
                    if (el.value === '') {
                        spollers[i].classList.remove('_filled');
                        isFilled = false;
                        break;
                    }
                    isFilled = true;
                }
                if (isFilled) {
                    spollers[i].classList.add('_filled');
                    for (let j = 0; j < inputGroups[i].length; j++) {
                        const el = inputGroups[i][j];
                        dataElements[i].innerHTML += `<div>${el.value}</div>`;
                    }
                }
                let formIsFilled = false;
                for (let j = 0; j < spollers.length; j++) {
                    if (!spollers[j].classList.contains('_filled')) {
                        formIsFilled = false;
                        break
                    }
                    formIsFilled = true;
                }
                if (formIsFilled) {
                    document.querySelector('.checkout__btn').disabled = false;
                }
            });
        });
    }
}

// console.log(inputGroups);

//=================
//Wrap
function _wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(class_name);
    }
}
//========================================
//IsHidden
function _is_hidden(el) {
    return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}
function makeEaseInOut(timing) {
    return function (timeFraction) {
        if (timeFraction < .5)
            return timing(2 * timeFraction) / 2;
        else
            return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
}
function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();