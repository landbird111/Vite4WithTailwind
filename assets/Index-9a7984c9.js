import{H as g,a as i}from"./HeaderSub-1e24e6b7.js";import{i as l,j as c,l as M,d as h,o as _,c as f,b as r,w as d,e as m,t as e,a as v,u as n}from"./index-ce672f9f.js";import{a as C,d as I}from"./index-866470ec.js";import"./plugin-vueexport-helper-c27b6911.js";const $=()=>{const u=l(0),t=l(0),o=a=>{u.value=a.pageX,t.value=a.pageY};return c(()=>{document.addEventListener("mousemove",o)}),M(()=>{document.removeEventListener("mousemove",o)}),{x:u,y:t}},y=()=>{let u=l(0),t=l(0);const o=a=>{u.value=a.pageX,t.value=a.pageY};return c(()=>{document.addEventListener("mousemove",o)}),M(()=>{document.removeEventListener("mousemove",o)}),{x:u,y:t}},N={class:"mx-auto"},V={class:"mt-8 max-w-lg mx-auto"},w={class:"mt-8 max-w-lg mx-auto"},E={class:"mt-8 max-w-lg mx-auto"},b=h({__name:"Index",setup(u){const{x:t,y:o}=$(),{x:a,y:p}=y(),{x:P,y:x}=C({eventFilter:I(250)});return(s,X)=>(_(),f("div",N,[r(g,null,{default:d(()=>[m(e(s.$t("IndexPath.MouseMoveCapturePage.HeaderMaster")),1)]),_:1}),r(i,null,{default:d(()=>[m(e(s.$t("IndexPath.MouseMoveCapturePage.StandardMouseMove")),1)]),_:1}),v("div",V,e(s.$t("IndexPath.MouseMoveCapturePage.MousePosition"))+" => "+e(n(t))+" : "+e(n(o)),1),r(i,null,{default:d(()=>[m(e(s.$t("IndexPath.MouseMoveCapturePage.ReactMouseMove")),1)]),_:1}),v("div",w,e(s.$t("IndexPath.MouseMoveCapturePage.MousePosition"))+" => "+e(n(a))+" : "+e(n(p)),1),r(i,null,{default:d(()=>[m(e(s.$t("IndexPath.MouseMoveCapturePage.VueMouseMove")),1)]),_:1}),v("div",E,e(s.$t("IndexPath.MouseMoveCapturePage.MousePosition"))+" => "+e(n(P))+" : "+e(n(x)),1)]))}});export{b as default};
