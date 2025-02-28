import{r as c,j as m,L as z}from"./index-snCaLdTt.js";import{C as _,B as H}from"./Card-BHRd6NDW.js";import{I as O}from"./Input-B5KJVMJU.js";import{a1 as R}from"./handleBackend-BSn6OUT1.js";import{M as B}from"./MiniLoader-CvlbnzKt.js";let U={data:""},V=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||U,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,b=(e,t)=>{let r="",i="",n="";for(let a in e){let o=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+o+";":i+=a[1]=="f"?b(o,a):a+"{"+b(o,a[1]=="k"?"":t)+"}":typeof o=="object"?i+=b(o,t?t.replace(/([^,])+/g,s=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(a,o):a+":"+o+";")}return r+(t&&n?t+"{"+n+"}":n)+i},y={},L=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+L(e[r]);return t}return e},J=(e,t,r,i,n)=>{let a=L(e),o=y[a]||(y[a]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(a));if(!y[o]){let l=a!==e?e:(d=>{let u,p,f=[{}];for(;u=Y.exec(d.replace(Z,""));)u[4]?f.shift():u[3]?(p=u[3].replace(I," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][u[1]]=u[2].replace(I," ").trim();return f[0]})(e);y[o]=b(n?{["@keyframes "+o]:l}:l,r?"":"."+o)}let s=r&&y.g?y.g:null;return r&&(y.g=y[o]),((l,d,u,p)=>{p?d.data=d.data.replace(p,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[o],t,i,s),o},K=(e,t,r)=>e.reduce((i,n,a)=>{let o=t[a];if(o&&o.call){let s=o(r),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=l?"."+l:s&&typeof s=="object"?s.props?"":b(s,""):s===!1?"":s}return i+n+(o??"")},"");function S(e){let t=this||{},r=e.call?e(t.p):e;return J(r.unshift?r.raw?K(r,[].slice.call(arguments,1),t.p):r.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):r,V(t.target),t.g,t.o,t.k)}let F,A,P;S.bind({g:1});let x=S.bind({k:1});function W(e,t,r,i){b.p=t,F=e,A=r,P=i}function v(e,t){let r=this||{};return function(){let i=arguments;function n(a,o){let s=Object.assign({},a),l=s.className||n.className;r.p=Object.assign({theme:A&&A()},s),r.o=/ *go\d+/.test(l),s.className=S.apply(r,i)+(l?" "+l:"");let d=e;return e[0]&&(d=s.as||e,delete s.as),P&&d[0]&&P(s),F(d,s)}return n}}var X=e=>typeof e=="function",C=(e,t)=>X(e)?e(t):e,G=(()=>{let e=0;return()=>(++e).toString()})(),T=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Q=20,q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return q(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},k=[],w={toasts:[],pausedAt:void 0},j=e=>{w=q(w,e),k.forEach(t=>{t(w)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,r]=c.useState(w),i=c.useRef(w);c.useEffect(()=>(i.current!==w&&r(w),k.push(r),()=>{let a=k.indexOf(r);a>-1&&k.splice(a,1)}),[]);let n=t.toasts.map(a=>{var o,s,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((o=e[a.type])==null?void 0:o.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((s=e[a.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||ee[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},ae=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||G()}),N=e=>(t,r)=>{let i=ae(t,e,r);return j({type:2,toast:i}),i.id},g=(e,t)=>N("blank")(e,t);g.error=N("error");g.success=N("success");g.loading=N("loading");g.custom=N("custom");g.dismiss=e=>{j({type:3,toastId:e})};g.remove=e=>j({type:4,toastId:e});g.promise=(e,t,r)=>{let i=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?C(t.success,n):void 0;return a?g.success(a,{id:i,...r,...r==null?void 0:r.success}):g.dismiss(i),n}).catch(n=>{let a=t.error?C(t.error,n):void 0;a?g.error(a,{id:i,...r,...r==null?void 0:r.error}):g.dismiss(i)}),e};var re=(e,t)=>{j({type:1,toast:{id:e,height:t}})},se=()=>{j({type:5,time:Date.now()})},E=new Map,ie=1e3,oe=(e,t=ie)=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),j({type:4,toastId:e})},t);E.set(e,r)},ne=e=>{let{toasts:t,pausedAt:r}=te(e);c.useEffect(()=>{if(r)return;let a=Date.now(),o=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&g.dismiss(s.id);return}return setTimeout(()=>g.dismiss(s.id),l)});return()=>{o.forEach(s=>s&&clearTimeout(s))}},[t,r]);let i=c.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),n=c.useCallback((a,o)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=o||{},u=t.filter(h=>(h.position||d)===(a.position||d)&&h.height),p=u.findIndex(h=>h.id===a.id),f=u.filter((h,D)=>D<p&&h.visible).length;return u.filter(h=>h.visible).slice(...s?[f+1]:[0,f]).reduce((h,D)=>h+(D.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(a=>{if(a.dismissed)oe(a.id,a.removeDelay);else{let o=E.get(a.id);o&&(clearTimeout(o),E.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:re,startPause:se,endPause:i,calculateOffset:n}}},le=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ue=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,fe=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ge=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ge} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=v("div")`
  position: absolute;
`,xe=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?c.createElement(ve,null,t):t:r==="blank"?null:c.createElement(xe,null,c.createElement(me,{...i}),r!=="loading"&&c.createElement(ye,null,r==="error"?c.createElement(ue,{...i}):c.createElement(he,{...i})))},je=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ne="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",ke=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ce=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Se=(e,t)=>{let r=e.includes("top")?1:-1,[i,n]=T()?[Ne,$e]:[je(r),Ee(r)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},De=c.memo(({toast:e,position:t,style:r,children:i})=>{let n=e.height?Se(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(we,{toast:e}),o=c.createElement(Ce,{...e.ariaProps},C(e.message,e));return c.createElement(ke,{className:e.className,style:{...n,...r,...e.style}},typeof i=="function"?i({icon:a,message:o}):c.createElement(c.Fragment,null,a,o))});W(c.createElement);var Oe=({id:e,className:t,style:r,onHeightUpdate:i,children:n})=>{let a=c.useCallback(o=>{if(o){let s=()=>{let l=o.getBoundingClientRect().height;i(e,l)};s(),new MutationObserver(s).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:a,className:t,style:r},n)},Ae=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...n}},Pe=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,ze=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:n,containerStyle:a,containerClassName:o})=>{let{toasts:s,handlers:l}=ne(r);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(d=>{let u=d.position||t,p=l.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),f=Ae(u,p);return c.createElement(Oe,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Pe:"",style:f},d.type==="custom"?C(d.message,d):n?n(d):c.createElement(De,{toast:d,position:u}))}))},M=g;const qe=()=>{const[e,t]=c.useState(""),[r,i]=c.useState(""),[n,a]=c.useState(""),[o,s]=c.useState(""),[l,d]=c.useState(!1),u=async p=>{if(p.preventDefault(),!e||!r||!n){s("All fields are required");return}d(!0);const f=await R(e,r,n);console.log(f),f.success?(console.log("okoko"),M.success(f.message,{duration:5e3,position:"bottom-center"}),window.location.href="/login/signin"):(console.log("nonono"),M.error(f.message,{duration:5e3,position:"bottom-center"})),d(!1)};return m.jsxs("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:[m.jsxs(_,{className:"max-w-md w-full space-y-8 p-8",children:[m.jsx("div",{children:m.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Create your account"})}),m.jsxs("form",{className:"mt-8 space-y-6",onSubmit:u,children:[m.jsx(O,{id:"name",label:"Full Name",type:"text",required:!0,value:e,onChange:p=>t(p.target.value)}),m.jsx(O,{id:"email-address",label:"Email address",type:"email",required:!0,value:r,onChange:p=>i(p.target.value)}),m.jsx(O,{id:"password",label:"Password",type:"password",required:!0,value:n,onChange:p=>a(p.target.value)}),o&&m.jsx("div",{className:"text-red-500 text-center",children:o}),m.jsx("div",{children:m.jsx(H,{type:"submit",className:"w-full",children:l?m.jsx(B,{}):"Sign up"})})]}),m.jsx("div",{className:"text-center",children:m.jsx(z,{to:"/login/signin",className:"font-medium text-blue-500 hover:text-blue-400",children:"Already have an account? Sign in"})}),m.jsx("div",{className:"text-center mt-4",children:m.jsx(z,{to:"/login",className:"font-medium text-blue-500 hover:text-blue-400",children:"Back to options"})})]}),m.jsx(ze,{})]})};export{qe as default};
