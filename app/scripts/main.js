/* jshint devel:true */
(function (win, doc) {
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
    
}(this, this.document));