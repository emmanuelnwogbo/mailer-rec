(window.webpackJsonp=window.webpackJsonp||[]).push([[24,11],{265:function(t,e,r){t.exports=r.p+"img/sprites.348b1f5.svg"},266:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("2424fea2",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";e.a={data:function(){return{baseUrl:"https://osnoanix.com/"}}}},274:function(t,e,r){"use strict";r(266)},275:function(t,e,r){var n=r(59)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},281:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{open:!1}},methods:{toggleOpen:function(){this.open?this.open=!1:this.open=!0}}},l=(r(274),r(42)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{marketsnav:""}},[e("div",{staticClass:"markets__left",class:{open:t.open}},[e("div",{staticClass:"markets__leftburger",on:{click:t.toggleOpen}},[e("span",{staticClass:"burger"},[e("svg",[e("use",{attrs:{"xlink:href":r(265)+"#icon-align-justify"}})])])]),t._v(" "),t.open?e("div",{staticClass:"markets__left--overlay",on:{click:t.toggleOpen}}):t._e(),t._v(" "),e("div",{staticClass:"markets__leftbtns"},[e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/iposscreener"}},[t._v("IPO Screener")])],1),t._v(" "),e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/iposcalendar"}},[t._v("IPO Calender")])],1),t._v(" "),e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/iposrecent"}},[t._v("Recent IPOs")])],1),t._v(" "),e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/iposscreener"}},[t._v("IPO Screener")])],1),t._v(" "),e("div",{staticClass:"markets__leftbtn"},[e("NuxtLink",{attrs:{to:"/register"}},[t._v("Register")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("7b2d2b55",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";r(329)},361:function(t,e,r){var n=r(59)((function(i){return i[1]}));n.push([t.i,".list__header[data-v-d534011a]{position:absolute;top:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*60)}.list__header h1[data-v-d534011a]{color:orange;font-size:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*20);font-weight:500}.list__body[data-v-d534011a]{border:.5px solid hsla(0,0%,100%,.1);border-radius:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*8)}.list__right[data-v-d534011a]{width:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*1300)}@media only screen and (max-width:428px){.list__right[data-v-d534011a]{width:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*1500)}}.list__area[data-v-d534011a]{grid-gap:1px;align-items:center;color:#fff;display:grid;grid-template-columns:repeat(8,1fr);padding:0 calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*20)}@media only screen and (max-width:428px){.list__area[data-v-d534011a]{align-items:flex-start;display:flex;flex-direction:column}}.list__area--name[data-v-d534011a]{grid-column:1/span 2;text-align:left}.list__area--section[data-v-d534011a]{text-align:right}.list__nav[data-v-d534011a]{transform:translateX(calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*320))}.list__headerarea[data-v-d534011a]{color:hsla(0,0%,100%,.8);font-size:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*13);font-weight:600;padding:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*13) calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*20)}.list__tilearea[data-v-d534011a]{border-top:.5px solid hsla(0,0%,100%,.1);font-size:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*14);font-weight:300;padding:calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*17) calc((max(350px, min(100vw, 3840px))/var(--ideal-viewport-width))*20)}",""]),n.locals={},t.exports=n},404:function(t,e,r){"use strict";r.r(e);r(19);var n={mixins:[r(269).a],mounted:function(){this.getRecentIpos()},methods:{getRecentIpos:function(){var t=this;fetch("".concat(this.baseUrl,"api/recentipos"),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){t.$store.dispatch("storeRecentIpos",e)}))}},computed:{recentIpos:function(){return this.$store.getters.recentipos}}},l=(r(360),r(42)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"markets list"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"list__nav"},[e("MarketsNav")],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"list__header"},[t("h1",[this._v("Recent IPOs")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"markets__right list__right"},[e("div",{staticClass:"markets__body"},[e("div",{staticClass:"list__body"},[e("div",{staticClass:"list__area list__headerarea"},[e("div",{staticClass:"list__area--name"},[t._v("Company Name")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("IPO Date")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("IPO Price")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Current")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Return")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Market Cap")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Sector")])]),t._v(" "),e("div",{staticClass:"list__area list__tilearea"},[e("div",{staticClass:"list__area--name"},[t._v("TXO Energy Partners,L.P. TXO")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Jan 27 2023")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$20")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$22")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("10%")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$660,000,000.00")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Energy")])]),t._v(" "),e("div",{staticClass:"list__area list__tilearea"},[e("div",{staticClass:"list__area--name"},[t._v("TXO Energy Partners,L.P. TXO")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Jan 27 2023")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$20")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$22")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("10%")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("$660,000,000.00")]),t._v(" "),e("div",{staticClass:"list__area--section"},[t._v("Energy")])])])])])}],!1,null,"d534011a",null);e.default=component.exports;installComponents(component,{MarketsNav:r(281).default})}}]);