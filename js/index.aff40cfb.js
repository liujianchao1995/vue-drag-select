(function(t){function e(e){for(var n,s,l=e[0],a=e[1],c=e[2],h=0,p=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,l=1;l<i.length;l++){var a=i[l];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={index:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("c31f")},"121a":function(t,e,i){t.exports=i.p+"img/0.205521ed.jpg"},1411:function(t,e,i){},"42b1":function(t,e,i){"use strict";var n=i("880c"),o=i.n(n);o.a},"880c":function(t,e,i){},"8f32":function(t,e,i){"use strict";var n=i("1411"),o=i.n(n);o.a},b8d3:function(t,e,i){"use strict";var n=i("de2b"),o=i.n(n);o.a},c31f:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ParentCom")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["index-page",t.mood?"":"bigger"]},[n("div",{staticClass:"tool-box"},[n("div",{staticClass:"btn",on:{click:function(e){t.mood=!t.mood}}},[t._v(t._s(t.mood?"点击变宽":"点击收缩"))]),n("div",{staticClass:"btn",on:{click:t.insertItem}},[t._v("添加item")]),t._m(0)]),n("div",{staticClass:"result-box"},[n("vue-drag-select",{ref:"dragSelect",attrs:{valueKey:"name",itemMargin:[0,10,10,0]},model:{value:t.selectedList,callback:function(e){t.selectedList=e},expression:"selectedList"}},[t._l(t.dataList,(function(t,e){return[n("drag-select-option",{key:t.id,attrs:{value:t,itemIndex:e}},[n("div",{staticClass:"item-self"},[100===e||t.lip?n("img",{attrs:{src:i("e36c")}}):n("img",{attrs:{src:i("121a")}})])])]}))],2)],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tips"},[t._v("可以尝试 "),i("code",[t._v("Ctrl")]),t._v("、"),i("code",[t._v("command")]),t._v(" 和 "),i("code",[t._v("shift")]),t._v(" 按键")])}],a={data:function(){return{mood:!0,dataList:[{id:1},{id:2},{id:3}],selectedList:[]}},created:function(){this.dataList=[];for(var t=50;t<=300;t++)this.dataList.push({id:t,name:t})},watch:{mood:function(){var t=this;clearTimeout(this.timeClick),this.timeClick=setTimeout((function(){t.$refs.dragSelect.elementLayout(200,230)}),500)}},methods:{insertItem:function(){this.dataList.splice(2,1)}}},c=a,u=(i("b8d3"),i("2877")),h=Object(u["a"])(c,s,l,!1,null,null,null),p=h.exports,d={name:"App",components:{ParentCom:p}},f=d,m=(i("42b1"),Object(u["a"])(f,o,r,!1,null,null,null)),g=m.exports,v=(i("7f7f"),i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"vueDragSelect",staticClass:"vue-drag-select"},[i("div",{staticClass:"select-wrapper",style:t.wrapperStyle,on:{mousedown:t.onMouseDown}},[t._t("default"),i("div",{directives:[{name:"show",rawName:"v-show",value:t.mouseDown,expression:"mouseDown"}],staticClass:"vue-drag-select-box",style:t.selectionBoxStyling})],2)])}),w=[],y=(i("55dd"),i("20d6"),i("6b54"),i("6762"),i("2fdb"),i("c5f6"),i("5abf"),i("804f"),i("6fb6")),S={name:"vueDragSelect",props:{value:{type:Array,default:function(){return[]}},valueKey:{type:String,default:"value"},itemWidth:{type:Number,default:100},itemHeight:{type:Number,default:105},itemMargin:{type:Array,default:function(){return[20,20,20,20]},validator:function(t){return[1,2,3,4].includes(t.length)}},warpperPadding:{type:Array,default:function(){return[20,20,20,20]},validator:function(t){return[1,2,3,4].includes(t.length)}},slowSpeed:{type:Number,default:0},fastSpeed:{type:Number,default:20}},provide:function(){return{vueDragSelect:this}},data:function(){return{clientRect:null,options:[],minHeight:100,mouseDown:!1,startPoint:null,endPoint:null,lastEndPoint:null,scrollIng:!1,autoScrollTimer:null,scrollDirection:!0,selectionBox:{left:0,top:0,width:0,height:0},selectionBoxStyling:{left:"0px",top:"0px",width:"0px",height:"0px",borderWidth:"0px"},controlKeyDown:!1,shiftKeyDown:!1,scrollSpeedSlow:Math.min(this.slowSpeed,this.fastSpeed),scrollSpeedFast:Math.max(this.slowSpeed,this.fastSpeed),scrollSpeed:Math.min(this.slowSpeed,this.fastSpeed),triggerDistance:10}},mounted:function(){this.clientRect=this.$el.getBoundingClientRect(),this.elementLayout(),this.detectKey()},computed:{currentValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},wrapperStyle:function(){var t=this.warpperPadding.map((function(t){return t+"px"})).join(" ");return{minHeight:"".concat(this.minHeight,"px"),padding:t}}},methods:{boxAutoScroll:function(){this.scrollIng=!0,this.autoScrollTimer=window.requestAnimationFrame(this.scrollFn)},scrollFn:function(){if(this.mouseDown){if(this.scrollDirection){if(this.$el.scrollTop+this.$el.offsetHeight>=this.minHeight)return void(this.scrollIng=!1);this.$el.scrollTop+=this.scrollSpeed}else{if(this.$el.scrollTop<=0)return void(this.scrollIng=!1);this.$el.scrollTop-=this.scrollSpeed}cancelAnimationFrame(this.autoScrollTimer),this.computeLastEndPoint(),this.autoScrollTimer=window.requestAnimationFrame(this.scrollFn)}else this.scrollIng=!1},computeLastEndPoint:function(){if(this.mouseDown&&this.startPoint&&this.endPoint){var t=this.clientRect;this.lastEndPoint={x:this.endPoint.x-t.left,y:this.endPoint.y-t.top+this.$el.scrollTop};var e=Math.min(this.startPoint.x,this.lastEndPoint.x),i=Math.min(this.startPoint.y,this.lastEndPoint.y),n=Math.abs(this.startPoint.x-this.lastEndPoint.x),o=Math.abs(this.startPoint.y-this.lastEndPoint.y);this.selectionBox={left:e,top:i,width:n,height:o},this.selectionBoxStyling={left:"".concat(e,"px"),top:"".concat(i,"px"),width:"".concat(n,"px"),height:"".concat(o,"px")}}},onMouseDown:function(t){if("select-wrapper"===t.target.className&&2!==t.button){var e=this.clientRect;this.mouseDown=!0,this.startPoint={x:t.pageX-e.left,y:t.pageY-e.top+this.$el.scrollTop},window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp)}},onMouseMove:function(t){if(this.mouseDown){var e=this.clientRect,i=e.top+e.height,n=this.triggerDistance,o=e.top+n,r=i-n;if(t.pageY>r&&(this.scrollDirection=!0),t.pageY<o&&(this.scrollDirection=!1),t.pageY>o&&t.pageY<r)cancelAnimationFrame(this.autoScrollTimer),this.scrollIng=!1;else{var s=this.scrollDirection&&this.$el.scrollTop+e.height<this.minHeight||!this.scrollDirection&&this.$el.scrollTop>0;!this.scrollIng&&s&&this.boxAutoScroll()}var l=this.scrollSpeed,a=this.scrollSpeedFast-this.scrollSpeedSlow;if(t.pageY<=o)if(t.pageY>e.top){var c=1-(t.pageY-e.top)/n;l=this.scrollSpeedSlow+c*a}else l=this.scrollSpeedFast;if(t.pageY>=r)if(t.pageY<i){var u=1-(i-t.pageY)/n;l=this.scrollSpeedSlow+u*a}else l=this.scrollSpeedFast;this.scrollSpeed>this.scrollSpeedFast&&(this.scrollSpeed=this.scrollSpeedFast),this.scrollSpeed=l,this.endPoint={x:t.pageX,y:t.pageY},this.scrollIng||this.computeLastEndPoint()}},onMouseUp:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.mouseDown=!1,this.computeSelectedItems(),this.startPoint=null,this.endPoint=null,this.lastEndPoint=null,this.scrollSpeed=0,this.selectionBoxStyling={left:"0px",top:"0px",width:"0px",height:"0px",borderWidth:"0px"}},computeSelectedItems:function(){var t=this,e=this;this.controlKeyDown||(this.currentValue=[]),this.$nextTick((function(){t.options.forEach((function(t){var i=t.getItemStyle(),n=e.selectionBox.left<=i.left+i.width&&e.selectionBox.left+e.selectionBox.width>=i.left&&e.selectionBox.top<=i.top+i.height&&e.selectionBox.top+e.selectionBox.height>=i.top;if(n){var o=e.currentValue.indexOf(t.value);o>-1?e.currentValue.splice(o,1):e.currentValue.push(t.value)}})),e.selectionBox={left:0,top:0,width:0,height:0}}))},clickSelect:function(t){var e=this,i=t.value,n=t.itemIndex;if(e.shiftKeyDown){var o=[],r=e.options,s=e.currentValue.length;return r.forEach((function(t){t.itemSelected&&o.push(t.itemIndex)})),e.currentValue=[],void e.$nextTick((function(){if(0===s)r.forEach((function(t,i){i<=n&&e.currentValue.push(t.value)}));else if(1===s)o[0]>n?r.forEach((function(t,i){i>=n&&i<=o[0]&&e.currentValue.push(t.value)})):r.forEach((function(t,i){i<=n&&i>=o[0]&&e.currentValue.push(t.value)}));else if(s>=2){var t=Math.max.apply(null,o),i=Math.min.apply(null,o);if(n>=t)r.forEach((function(i,o){o<=n&&o>=t&&e.currentValue.push(i.value)}));else if(n>=i&&n<t){var l=[];o.forEach((function(t){t>=i&&t<=n&&l.push(t)}));var a=Math.max.apply(null,l);r.forEach((function(t,i){i>=a&&i<=n&&e.currentValue.push(t.value)}))}else r.forEach((function(t,o){o>=n&&o<=i&&e.currentValue.push(t.value)}))}}))}if(e.controlKeyDown)if(t.itemSelected){var l=e.getIndex(e.currentValue,i);e.currentValue.splice(l,1)}else e.currentValue.push(i);else e.currentValue=[],e.$nextTick((function(){e.currentValue.push(i)}))},detectKey:function(){var t=navigator.userAgent.indexOf("Window")>0,e=navigator.userAgent.indexOf("Mac OS X")>0,i=this;window.onkeydown=function(n){var o=n||window.event;o&&16===o.keyCode&&(i.shiftKeyDown=!0),o&&17===o.keyCode&&t&&(i.controlKeyDown=!0),o&&91===o.keyCode&&e&&(i.controlKeyDown=!0)},window.onkeyup=function(n){var o=n||window.event;o&&16===o.keyCode&&(i.shiftKeyDown=!1),o&&17===o.keyCode&&t&&(i.controlKeyDown=!1),o&&91===o.keyCode&&e&&(i.controlKeyDown=!1)}},getIndex:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,i="[object object]"===Object.prototype.toString.call(e).toLowerCase(),n=this.valueKey;return t.findIndex((function(t){return i?Object(y["a"])(t,n)===Object(y["a"])(e,n):t===e}))},elementLayout:function(){var t,e,i,n,o,r=this.itemMargin.length;1===r?(t=2*this.itemMargin[0],e=2*this.itemMargin[0]):2===r?(t=2*this.itemMargin[1],e=2*this.itemMargin[0]):3===r?(t=2*this.itemMargin[1],e=this.itemMargin[0]+this.itemMargin[2]):4===r&&(t=this.itemMargin[1]+this.itemMargin[3],e=this.itemMargin[0]+this.itemMargin[2]);var s=this.warpperPadding.length;1===s?(i=this.warpperPadding[0],n=this.warpperPadding[0],o=2*this.warpperPadding[0]):2===s?(i=this.warpperPadding[1],n=this.warpperPadding[0],o=2*this.warpperPadding[0]):3===s?(i=this.warpperPadding[1],n=this.warpperPadding[0],o=this.warpperPadding[0]+this.warpperPadding[2]):4===s&&(i=this.warpperPadding[3],n=this.warpperPadding[0],o=this.warpperPadding[0]+this.warpperPadding[2]),t=parseInt(t),e=parseInt(e);var l=this.itemWidth+t,a=this.itemHeight+e,c=this.$refs.vueDragSelect.offsetWidth,u=parseInt(c/l),h=0;this.options.forEach((function(t,e){!e||e%u||(h+=1),t.$refs.vueDragSelectOption.style.top="".concat(h*a+n,"px"),t.$refs.vueDragSelectOption.style.left="".concat(e%u*l+i,"px")})),this.minHeight=(h+1)*a+o},onOptionDestroy:function(t){t>-1&&this.options.splice(t,1)}},beforeDestroy:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp)},updated:function(){var t=this;this.$nextTick((function(){t.clientRect=t.$el.getBoundingClientRect()})),this.$nextTick((function(){t.options.sort((function(t,e){return t.itemIndex-e.itemIndex})),t.elementLayout()}))}},x=S,b=(i("8f32"),Object(u["a"])(x,v,w,!1,null,null,null)),D=b.exports;D.install=function(t){t.component(D.name,D)};var P=D,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"vueDragSelectOption",staticClass:"vue-drag-select-option",class:[t.itemSelected?"selected-item":""],style:t.itemStyle,on:{click:t.clickItem}},[t._t("default")],2)},O=[],E={name:"DragSelectOption",props:{value:{required:!0},itemIndex:{required:!0}},inject:["vueDragSelect"],data:function(){return{}},created:function(){this.vueDragSelect.options.push(this)},computed:{isObject:function(){return"[object object]"===Object.prototype.toString.call(this.value).toLowerCase()},itemSelected:function(){return this.contains(this.vueDragSelect.value,this.value)},itemStyle:function(){var t=this.vueDragSelect.itemMargin.map((function(t){return t+"px"})).join(" ");return{width:"".concat(this.vueDragSelect.itemWidth,"px"),height:"".concat(this.vueDragSelect.itemHeight,"px"),margin:t}}},methods:{getItemStyle:function(){var t=this.$refs.vueDragSelectOption,e=t.offsetTop,i=t.offsetLeft,n=t.clientWidth,o=t.clientHeight;return{top:e,left:i,width:n,height:o}},contains:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(this.isObject){var i=this.vueDragSelect.valueKey;return t&&t.some((function(t){return Object(y["a"])(t,i)===Object(y["a"])(e,i)}))}return t&&t.indexOf(e)>-1},clickItem:function(){this.vueDragSelect.clickSelect(this)}},beforeDestroy:function(){var t=this.vueDragSelect.options.indexOf(this);this.vueDragSelect.onOptionDestroy(t)}},j=E,_=Object(u["a"])(j,M,O,!1,null,null,null),k=_.exports;k.install=function(t){t.component(k.name,k)};var I=k,$=[P,I],C=function(t){$.forEach((function(e){t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&C(window.Vue);var L={version:"1.0.1",install:C,vueDragSelect:P,dragSelectOption:I};n["a"].use(L),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},de2b:function(t,e,i){},e36c:function(t,e,i){t.exports=i.p+"img/prank.ca527c79.jpg"}});
//# sourceMappingURL=index.aff40cfb.js.map