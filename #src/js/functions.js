
//Menu
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
                // menuArrow.style.transform = 'rotate(-180deg)';
            });
        }
    }
    
} else {
    document.body.classList.add('_pc');
}

// Burger
const iconMenu = document.querySelector('.burger-menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuHeader = document.querySelector('.header__blur')
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuHeader.classList.toggle('header__blur_menu-open');
    });
}

//=================

// Scroll after clicking
const menuLinks = document.querySelectorAll('.scroll-down-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
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


//Tabs
let tabs = document.querySelectorAll("._tabs");
const tabSlider = document.querySelector(".tab-slider");
const tabSliderNav = document.querySelector(".tabs-block__nav");
let sliderWidth = 170;
if (tabSlider && tabSliderNav) {
    sliderWidth =  tabSliderNav.offsetWidth / 2 - 5;
    tabSlider.style.width =  sliderWidth + 'px';
}

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
            tabSlider.style.left = (sliderWidth * index + 5) + 'px';
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
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
        target.style.display = 'none';
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
    // if (i === 0) {
    //     el.classList.add('_active');
    // } else {
    //     el.classList.add('_collapsed');
    // }
    el.nextElementSibling.style.display = 'block';
});


let spollersGo = true;
if (spollers.length > 0 && window.innerWidth < 993) {
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

//Ad Products Tabs Control
const navItems = document.querySelectorAll('.ad-products-tabs__item');
const bodyItems = document.querySelectorAll('.ad-products-tabs__body-item');
const navWrapper = document.querySelector('.ad-products-tabs__nav');
const bodyWrapper = document.querySelector('.ad-products-tabs__body');
const menuButton = document.querySelector('.ad-products-tabs__button');
let headerIsOpen = false;
let visibleItems;

const updateVisibleItems = () => {
    visibleItems = document.querySelectorAll('.ad-products-tabs__item_visible');
}

const closeMenu = () => {
    visibleItems && visibleItems.forEach((elem) => elem.style.top = '0px');
    navItems.forEach((elem) => elem.classList.remove('ad-products-tabs__item_visible'));
    headerIsOpen = false;
}

const changeTabsHeader = (elem) => {
    visibleItems.forEach((elem, i) => elem.style.top = '0px');
    navItems.forEach((elem) => elem.classList.remove('ad-products-tabs__item_header', 'ad-products-tabs__item_active'));
    elem.classList.add('ad-products-tabs__item_header', 'ad-products-tabs__item_active');
}

const changeTabsBorder = (visibleItems) => {
    const items = Array.from(visibleItems);
    items.forEach((elem, i) => {
        switch (i) {
            case 0:
                elem.style.borderBottomLeftRadius = "0";
                elem.style.borderBottomRightRadius = "0";
                break;
            case items.length - 1:
                elem.style.borderTopLeftRadius = "0";
                elem.style.borderTopRightRadius = "0";
                break;
            default:
                elem.style.borderRadius = "0";
        }
    })
}

const changeTabsHeaderBorder = (elem) => {
    elem.style.borderRadius = "19px";
}

(function () {
    navItems.forEach((elem, i) => elem.addEventListener('click', (e) => selectTab(e, i)));
    menuButton && menuButton.addEventListener('click', (e) => selectTab(e, 0));

    const itemIsHeader = (e) => {
        return e.target.classList === 'ad-products-tabs__item_header' || e.target.closest('.ad-products-tabs__item_header')
    }
    
    const itemIsNav = (e) => {
        if (itemIsHeader(e)) return false
        return e.target.classList === 'ad-products-tabs__item' || e.target.closest('.ad-products-tabs__item')
    }
    
    const selectTab = (e, i) => {
        const currentBodyItemHeight = bodyItems[i].offsetHeight;
        
        if (window.innerWidth > 1100) {
            e.preventDefault();
            navItems.forEach((elem) => elem.classList.remove('ad-products-tabs__item_active', 'ad-products-tabs__item_header'))
            bodyItems.forEach((elem) => elem.classList.remove('ad-products-tabs__body-item_active'))
            if (e.target.classList === 'ad-products-tabs__item') {
                e.target.classList.add('ad-products-tabs__item_active', 'ad-products-tabs__item_header');
                changeTabsHeaderBorder(e.target);
            } else {
                e.target.closest('.ad-products-tabs__item').classList.add('ad-products-tabs__item_active', 'ad-products-tabs__item_header');
                changeTabsHeaderBorder(e.target.closest('.ad-products-tabs__item'));
            }
            
            bodyWrapper.style.height = `${currentBodyItemHeight}px`;
            bodyItems[i].classList.add('ad-products-tabs__body-item_active');
        } else {
            if (itemIsHeader(e) || e.target.classList.contains('ad-products-tabs__button')) {
                navItems.forEach((elem) => {
                    if (!elem.classList.contains('ad-products-tabs__item_header') || !elem.closest('.ad-products-tabs__item_header')) {
                        elem.classList.toggle('ad-products-tabs__item_visible');
                    }
                });
                updateVisibleItems()
                if (headerIsOpen) {
                    closeMenu();
                } else {
                    visibleItems.forEach((elem, i) => elem.style.top = `${elem.offsetHeight * (i + 1)}px`);
                    headerIsOpen = !headerIsOpen;
                }
                changeTabsBorder(visibleItems);
            } else if (itemIsNav(e)) {
                updateVisibleItems();
                
                if (e.target.classList.contains('ad-products-tabs__item')) {
                    changeTabsHeader(e.target);
                    changeTabsHeaderBorder(e.target);
                } else {
                    changeTabsHeader(e.target.closest('.ad-products-tabs__item'));
                    changeTabsHeaderBorder(e.target.closest('.ad-products-tabs__item'));
                }
                
                navItems.forEach((elem) => elem.classList.remove('ad-products-tabs__item_visible'));
                bodyItems.forEach((elem) => elem.classList.remove('ad-products-tabs__body-item_active'));
                bodyWrapper.style.height = `${currentBodyItemHeight}px`
                bodyItems[i].classList.add('ad-products-tabs__body-item_active');
                headerIsOpen = !headerIsOpen;
            }
        }
    }
    
})();

//Ad Products Change Body Height Onresize
(function () {
    const bodyWrapper = document.querySelector('.ad-products-tabs__body');
    const activeTab = document.querySelector('.ad-products-tabs__body-item_active');

    if (bodyWrapper) {
        window.addEventListener('resize', function(event) {
            bodyWrapper.style.height = `${activeTab.offsetHeight}px`;
            closeMenu();
        }, true)
    }
})();

//Ad Products Tabs Init Body Height
(function () {
    const bodyWrapper = document.querySelector('.ad-products-tabs__body');
    
    if (bodyWrapper) {
        const currentFirstItemHeight = document.querySelector('.ad-products-tabs__body-item').offsetHeight;
        bodyWrapper.style.height = `${currentFirstItemHeight}px`;
    }
})();

//Ad Products Selector Close On Click Outside
(function () {
    document.addEventListener('click', (e) => checkOutsideClick(e))
    
    const checkOutsideClick = ({ target }) => {
        const isTabs = target === navWrapper || navWrapper && navWrapper.contains(target);
        if (!isTabs && headerIsOpen) {
            closeMenu();
        }
    }
})();

// Blog-article Share Menu
(function () {
    const shareHeader = document.querySelector('.blog-article-post__share');
    const shareCancelButton = document.querySelector('.blog-article-post__cancel');
    const shareWrapper = document.querySelector('.blog-article-post__distribute');
    const shareBody = document.querySelector('.blog-article-post__distribute-body');
    const iconGroup = document.querySelector('.blog-article-post__icon-group');
    let menuIsOpen = false;

    if (shareWrapper) shareWrapper.style.height = `${shareWrapper.offsetHeight}px`;

    const openMenu = () => {
        if (!menuIsOpen) {
            shareBody.classList.add('blog-article-post__distribute-body_active');
            shareHeader.classList.add('blog-article-post__share_disabled');
            if (shareWrapper) shareWrapper.style.height = `${shareWrapper.offsetHeight + iconGroup.offsetHeight / 2}px`;
            menuIsOpen = !menuIsOpen;
        }
    }

    const closeMenu = () => {
        if (menuIsOpen) {
            shareBody.classList.remove('blog-article-post__distribute-body_active')
            shareHeader.classList.remove('blog-article-post__share_disabled');
            if (shareWrapper) shareWrapper.style.height = `${shareWrapper.offsetHeight - iconGroup.offsetHeight / 2}px`;
            menuIsOpen = !menuIsOpen;
        }
    }


    if (shareHeader) shareHeader.addEventListener('click', (e) => openMenu(e));
    if (shareCancelButton) shareCancelButton.addEventListener('click', (e) => closeMenu(e));
})();