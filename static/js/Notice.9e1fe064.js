(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Notice"],{"3dfe":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c={class:"notice-list"},o={class:"notice-item_title"},a=["innerHTML"],s={class:"notice-item_time"};function l(t,e,n,l,r,u){return Object(i["openBlock"])(),Object(i["createElementBlock"])("ul",c,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(u.noticeList,(function(e,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("li",{class:"notice-item",key:n},[Object(i["createElementVNode"])("h3",o,Object(i["toDisplayString"])(e.titleC),1),Object(i["createElementVNode"])("div",{class:"notice-item_content",innerHTML:e.contentC},null,8,a),Object(i["createElementVNode"])("div",s,Object(i["toDisplayString"])(t.$f.formatDate(e.time,"YYYY-MM-DD HH:mm")),1)])})),128))])}var r=n("5530"),u=(n("d81d"),{name:"Notice",data:function(){return{}},computed:{language:function(){return this.$store.getters.language},noticeList:function(){var t={"zh-cn":"","zh-tw":"zh_tw",en:"en"},e="title_"+t[this.language],n="title_"+t[this.language];return(this.$store.state.noticeList||[]).map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{titleC:(null===t||void 0===t?void 0:t[e])||(null===t||void 0===t?void 0:t.title)||"",contentC:(null===t||void 0===t?void 0:t[n])||(null===t||void 0===t?void 0:t.content)||""})}))}},activated:function(){this.init()},methods:{init:function(){var t=this;"h5"!==this.$store.state.app.platform?this.$store.dispatch("getNoticeList"):this.$store.dispatch("getAppInfo").then((function(){t.$store.dispatch("getNoticeList")}))}}}),d=(n("e08a"),n("6b0d")),m=n.n(d);const p=m()(u,[["render",l],["__scopeId","data-v-36f52359"]]);e["default"]=p},5851:function(t,e,n){},e08a:function(t,e,n){"use strict";n("5851")}}]);