(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{a0Jh:function(e,t,a){"use strict";a.r(t);a("yIC7");var n=a("ERkP"),r=a.n(n),l=a("VF98"),i=a("FhRM"),o=a("0lfv"),c=a("Wbzz"),d=a("j/s1"),m=a("9YFU"),u=d.default.ul.withConfig({displayName:"style__ModulesList",componentId:"ng4vbi-0"})(["display:grid;grid-auto-flow:row;grid-gap:var(--i-large);margin-top:var(--i-regular);"]),s=Object(d.default)(i.Flex).attrs((function(){return{direction:"column",alignment:{horizontal:"center"}}})).withConfig({displayName:"style__Module",componentId:"ng4vbi-1"})(["flex:1;padding:var(--i-regular);",";border-radius:var(--border-radius);"],m.Mixin.Style.borderAll({color:"var(--c-light)"})),g=d.default.h2.withConfig({displayName:"style__CategoryName",componentId:"ng4vbi-2"})(["margin-bottom:var(--i-large);"]),f=Object(d.default)(i.Grid).attrs((function(){return{xs:{template:"repeat(auto-fit, minmax(300px, 1fr))"}}})).withConfig({displayName:"style__ReflectionsList",componentId:"ng4vbi-3"})([""]),p=Object(d.default)(c.Link).withConfig({displayName:"style__Reflection",componentId:"ng4vbi-4"})(["position:relative;overflow:hidden;padding:var(--i-regular) var(--i-large);color:var(--c-primary);border-radius:var(--border-radius);transition:var(--transition);&:hover{&:before{background-color:var(--c-primary);}}&:active{&:before{background-color:var(--c-primary-light);}}&:focus{box-shadow:var(--neumo-shadow);}&:before{content:'';opacity:0.1;position:absolute;top:0;left:0;width:100%;height:100%;transition:var(--transition);}&:after{display:none;}"]),b=Object(o.b)({ModulesList:u,Module:s,CategoryName:g,ReflectionsList:f,Reflection:p}),h=a("VXBa");t.default=function(e){var t=e.pageContext,a=t.children.filter((function(e){return"Interface"===e.kindString})),n=t.children.filter((function(e){return"Type alias"===e.kindString}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,t.name)),r.a.createElement(h.a,null,r.a.createElement("h1",null,t.name),(a.length||n.length)&&r.a.createElement(b.ModulesList,null,Boolean(a.length)&&r.a.createElement(b.Module,null,r.a.createElement(b.CategoryName,null,"Interfaces"),r.a.createElement(b.ReflectionsList,null,a.map((function(e){return r.a.createElement(i.Cell,{key:e.id},r.a.createElement(i.Flex,{alignment:{horizontal:"center"}},r.a.createElement(b.Reflection,{to:Object(o.a)(t.name,e.name)},e.name)))})))),Boolean(n.length)&&r.a.createElement(b.Module,null,r.a.createElement(b.CategoryName,null,"Type aliases"),r.a.createElement(b.ReflectionsList,null,n.map((function(e){return r.a.createElement(i.Cell,{key:e.id},r.a.createElement(i.Flex,{alignment:{horizontal:"center"}},r.a.createElement(b.Reflection,{to:Object(o.a)(t.name,e.name)},e.name)))})))))))}}}]);
//# sourceMappingURL=component---src-components-templates-module-index-tsx-46a8249933378fba0384.js.map