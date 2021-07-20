/*! For license information please see 11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"91":function(t,a,r){"use strict";r.r(a),r.d(a,"taro_tabbar",(function(){return c}));var n=r(29),i=r(97);function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,a){for(var r=a,n=r+1,i=t.length;n<i;r+=1,n+=1)t[r]=t[n];t.pop()}var s=function splitUrl(t){var a,r=t||"",n={"path":null,"query":null,"fragment":null};return(a=r.indexOf("#"))>-1&&(n.fragment=r.substring(a+1),r=r.substring(0,a)),(a=r.indexOf("?"))>-1&&(n.query=r.substring(a+1),r=r.substring(0,a)),n.path=r,n},b=function TabbarItem(t){var a=t.index,r=t.isSelected,s=void 0!==r&&r,b=t.textColor,l=t.iconPath,d=t.badgeText,h=t.showRedDot,c=void 0!==h&&h,u=t.text,f=t.onSelect,g=Object(i.a)("weui-tabbar__item",{"weui-bar__item_on":s});return Object(n.e)("a",{"key":a,"href":"javascript:;","class":g,"onClick":function v(){f(a)}},Object(n.e)("span",{"style":{"display":"inline-block","position":"relative"}},Object(n.e)("img",{"src":l,"alt":"","class":"weui-tabbar__icon"}),!!d&&Object(n.e)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},d),c&&Object(n.e)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),Object(n.e)("p",{"class":"weui-tabbar__label","style":{"color":b}},u))},l=r(30),d=function addLeadingSlash(t){return"/"===t[0]?t:"/"+t},h=function stripBasename(t,a){return function hasBasename(t,a){return new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(t)}(t,a)?t.substr(a.length):t},c=function(){function e(t){var a=this;Object(n.g)(this,t),this.onLongPress=Object(n.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var r=a.customRoutes.filter((function(a){var r=a[1];return s(r).path===s(t).path}));return r.length?r[0][0]:t},this.getSelectedIndex=function(t){var r=-1;return a.list.forEach((function(a,n){var i=a.pagePath;s(t).path===s(i).path&&(r=n)})),r},this.switchTab=function(t){a.selectedIndex=t,l.navigateTo({"url":a.list[t].pagePath})},this.switchTabHandler=function(t){var r=t.url,n=t.successHandler,i=t.errorHandler,s=function resolvePathname(t,a){void 0===a&&(a="");var r,n=t&&t.split("/")||[],i=a&&a.split("/")||[],s=t&&isAbsolute(t),b=a&&isAbsolute(a),l=s||b;if(t&&isAbsolute(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var d=i[i.length-1];r="."===d||".."===d||""===d}else r=!1;for(var h=0,c=i.length;c>=0;c--){var u=i[c];"."===u?spliceOne(i,c):".."===u?(spliceOne(i,c),h++):h&&(spliceOne(i,c),h--)}if(!l)for(;h--;h)i.unshift("..");!l||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var f=i.join("/");return r&&"/"!==f.substr(-1)&&(f+="/"),f}(r,a.getOriginUrl(a.getCurrentUrl()||a.homePage)),b=a.getSelectedIndex(s);b>-1?(a.switchTab(b),n({"errMsg":"switchTab:ok"})):i({"errMsg":'switchTab:fail page "'+s+'" is not found'})},this.routerChangeHandler=function(t){var r,n;if(t&&(r=t.toLocation),r&&r.path){var i=d(r.path);n="/"===i?a.homePage:i}else n=a.getCurrentUrl();a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(n))},this.setTabBarBadgeHandler=function(t){var r=t.index,n=t.text,i=t.errorHandler;r in a.list?(a.list[r].showRedDot=!1,a.list[r].badgeText=n):i({"errMsg":"setTabBarBadge:fail tabbar item not found"})},this.removeTabBarBadgeHandler=function(t){var r=t.index,n=t.successHandler,i=t.errorHandler;r in a.list?(a.list[r].badgeText=null,a.list[r].badgeText=null,n({"errMsg":"removeTabBarBadge:ok"})):i({"errMsg":"removeTabBarBadge:fail tabbar item not found"})},this.showTabBarRedDotHandler=function(t){var r=t.index,n=t.successHandler,i=t.errorHandler,s=a.list;r in s?(s[r].badgeText=null,s[r].showRedDot=!0,n({"errMsg":"showTabBarRedDot:ok"})):i({"errMsg":"showTabBarRedDot:fail tabbar item not found"})},this.hideTabBarRedDotHandler=function(t){var r=t.index,n=t.successHandler,i=t.errorHandler,s=a.list;r in s?(s[r].showRedDot=!1,n({"errMsg":"hideTabBarRedDot:ok"})):i({"errMsg":"hideTabBarRedDot:fail tabbar item not found"})},this.showTabBarHandler=function(t){var r=t.successHandler;a.status=0,r({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var r=t.animation,n=t.successHandler;a.status=r?2:1,n({"errMsg":"hideTabBar:ok"})};var r=this.conf.list,i=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(r)||r.length<2||r.length>5)throw new Error("tabBar 配置错误");for(var b in this.homePage=d(this.conf.homePage),i)this.customRoutes.push([b,i[b]]);r.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=r}return e.prototype.getCurrentUrl=function(){var t,a=this.conf.mode,r=this.conf.basename||"/";if("hash"===a){var n=window.location.href,i=n.indexOf("#");t=-1===i?"":n.substring(i+1)}else t=location.pathname;var s=d(h(t,r));return"/"===s?this.homePage:s},e.prototype.bindEvent=function(){l.eventCenter.on("__taroRouterChange",this.routerChangeHandler),l.eventCenter.on("__taroSwitchTab",this.switchTabHandler),l.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),l.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler)},e.prototype.removeEvent=function(){l.eventCenter.off("__taroRouterChange",this.routerChangeHandler),l.eventCenter.off("__taroSwitchTab",this.switchTabHandler),l.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),l.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,a,r=this,s=this.conf,l=this.tabbarPos,d=void 0===l?"bottom":l,h=this.status,c=Object(i.a)("weui-tabbar",((t={})["taro-tabbar__border-"+(s.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||1===h,f=2===h;return Object(n.e)(n.a,{"class":Object(i.a)("taro-tabbar__tabbar","taro-tabbar__tabbar-"+d,(a={},a["taro-tabbar__tabbar-hide"]=u,a["taro-tabbar__tabbar-slideout"]=f,a))},Object(n.e)("div",{"class":c,"style":{"backgroundColor":s.backgroundColor||""}},this.list.map((function(t,a){var i,l,d=r.selectedIndex===a;return d?(i=s.selectedColor,l=t.selectedIconPath):(i=s.color||"",l=t.iconPath),Object(n.e)(b,{"index":a,"onSelect":r.switchTab.bind(r),"isSelected":d,"textColor":i,"iconPath":l,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function get(){return Object(n.d)(this)},"enumerable":!1,"configurable":!0}),e}();c.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"},"97":function(t,a,r){"use strict";r.d(a,"a",(function(){return i}));var n=r(2);var i=function createCommonjsModule(t,a,r){return t(r={"path":a,"exports":{},"require":function require(t,a){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}((function(t){!function(){var a={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var s=Object(n.a)(i);if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var b=o.apply(null,i);b&&t.push(b)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var l in i)a.call(i,l)&&i[l]&&t.push(l);else t.push(i.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))}}]);