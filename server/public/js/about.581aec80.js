(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{3530:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),r={id:"SECTION_PRODUCTS_LIST"},u=Object(n["e"])("tr",null,[Object(n["e"])("th",null,"Name"),Object(n["e"])("th",null,"Price")],-1),l={class:"text-uppercase"},b={class:"text-left"},o={id:"SECTION_PRODUCTS_ADD"},O=Object(n["e"])("legend",null,"NEW PRODUCT",-1),a=Object(n["e"])("label",{for:"name"},"Name",-1),i=Object(n["e"])("br",null,null,-1),d=Object(n["e"])("br",null,null,-1),j=Object(n["e"])("label",{for:"price"},"Price",-1),p=Object(n["e"])("br",null,null,-1),s=Object(n["e"])("br",null,null,-1),f=Object(n["e"])("button",{type:"submit"},"ADD",-1),m={id:"SECTION_PRODUCTS_REMOVE"},v=Object(n["e"])("legend",null,"REMOVE PRODUCT",-1),D=Object(n["e"])("label",{for:"id"},"ID",-1),P=Object(n["e"])("br",null,null,-1),h=Object(n["e"])("br",null,null,-1),g=Object(n["e"])("button",{type:"submit"},"REMOVE",-1);function w(e,t,c,w,y,E){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["e"])("section",r,[Object(n["e"])("table",null,[u,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(w.products,(function(e){return Object(n["p"])(),Object(n["d"])("tr",{key:e.name},[Object(n["e"])("td",l,Object(n["y"])(e.name),1),Object(n["e"])("td",b,Object(n["y"])(e.price),1)])})),128))])]),Object(n["e"])("section",o,[Object(n["e"])("form",{autocomplete:"off",onSubmit:t[2]||(t[2]=Object(n["E"])((function(e){return w.ProductMgr.addProduct(w.product)}),["prevent"]))},[Object(n["e"])("fieldset",null,[O,a,i,Object(n["D"])(Object(n["e"])("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return w.product.name=e}),required:""},null,512),[[n["A"],w.product.name]]),d,j,p,Object(n["D"])(Object(n["e"])("input",{type:"text",id:"price",name:"price","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.product.price=e})},null,512),[[n["A"],w.product.price]]),s,f])],32)]),Object(n["e"])("section",m,[Object(n["e"])("form",{autocomplete:"off",onSubmit:t[4]||(t[4]=Object(n["E"])((function(e){return w.ProductMgr.removeProduct(w.removeID)}),["prevent"]))},[Object(n["e"])("fieldset",null,[v,D,P,Object(n["D"])(Object(n["e"])("input",{type:"text",id:"id",name:"id","onUpdate:modelValue":t[3]||(t[3]=function(e){return w.removeID=e}),required:""},null,512),[[n["A"],w.removeID]]),h,g])],32)])])}var y=c("1da1"),E=(c("96cf"),c("5c40")),R=c("a1e9"),T={setup:function(){var e=Object(E["q"])("ProductMgr"),t=Object(R["l"])([]),c=Object(R["l"])({name:"",price:""}),n=Object(R["l"])("");return Object(E["v"])(Object(y["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,e.getAllProductsList();case 2:t.value=c.sent;case 3:case"end":return c.stop()}}),c)})))),{ProductMgr:e,product:c,removeID:n,products:t}}},x=c("6b0d"),I=c.n(x);const S=I()(T,[["render",w]]);t["default"]=S},f181:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),r=Object(n["e"])("h1",null,"Products",-1),u=Object(n["e"])("hr",null,null,-1),l=Object(n["e"])("hr",null,null,-1);function b(e,t,c,b,o,O){return Object(n["p"])(),Object(n["d"])("div",null,[r,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(b.products,(function(e){return Object(n["p"])(),Object(n["d"])("div",{key:e.id},[u,Object(n["e"])("h4",null,Object(n["y"])(e.id),1),Object(n["e"])("h4",null,Object(n["y"])(e.name),1),Object(n["e"])("h4",null,Object(n["y"])(e.price)+"€",1)])})),128)),l])}var o=c("1da1"),O=(c("96cf"),c("5c40")),a=c("a1e9"),i={setup:function(){var e=Object(O["q"])("ProductMgr"),t=Object(a["l"])([]);return Object(O["v"])(Object(o["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,e.getAllProductsList();case 2:t.value=c.sent;case 3:case"end":return c.stop()}}),c)})))),{products:t}}},d=c("6b0d"),j=c.n(d);const p=j()(i,[["render",b]]);t["default"]=p},f820:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={class:"about"},u=Object(n["e"])("h1",null,"This is an about page",-1),l=[u];function b(e,t){return Object(n["p"])(),Object(n["d"])("div",r,l)}var o=c("6b0d"),O=c.n(o);const a={},i=O()(a,[["render",b]]);t["default"]=i}}]);
//# sourceMappingURL=about.581aec80.js.map