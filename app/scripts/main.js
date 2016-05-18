/* jshint devel:true */
(function (win, doc, $) {
    'use strict';
    
    // if (!win.addEventListener || window.innerWidth > 1100) {
    if (!win.addEventListener) {
        return;
    }
    
    var linkclassNav = 'ec-menu-toggle-nav',
        linkclassSettings = 'ec-menu-toggle-settings',
        activeclassNav = 'active-nav',
        activeclassSettings = 'active-settings',
        enhanceclass = 'cutsthemustard',
        
        toggleClassName = function (element, toggleClass) {
            var reg = new RegExp('(\\s|^)' + toggleClass + '(\\s|$)');
            if (!element.className.match(reg)) {
                element.className += ' ' + toggleClass;
            } else {
                element.className = element.className.replace(reg, '');
            }
        },
        
        navListener = function (ev) {
            ev = ev || win.event;
            var target = ev.target || ev.srcElement;
            if (target.className.indexOf(linkclassNav) !== -1) {
                ev.preventDefault();
                toggleClassName(doc.body, activeclassNav);
            }
            else if (target.className.indexOf(linkclassSettings) !== -1) {
                ev.preventDefault();
                toggleClassName(doc.body, activeclassSettings);
            }
        };
        
    doc.documentElement.className += ' ' + enhanceclass;
    doc.addEventListener('click', navListener, false);
    
    $('.ec-nav-navigation__next').hover(
        function(){
            $('html').addClass('ec-show-next-title');
        },
        function(){
            $('html').removeClass('ec-show-next-title');
        }
    );
    
    $('.ec-nav-navigation__previous').hover(
        function(){
            $('html').addClass('ec-show-previous-title');
        },
        function(){
            $('html').removeClass('ec-show-previous-title');
        }
    );
    
}(this, this.document, $));