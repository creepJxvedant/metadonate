import{r as s,j as t}from"./index-omk_cysM.js";import{c as r}from"./createLucideIcon-D97LIr_l.js";/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],d=r("Moon",n);/**
 * @license lucide-react v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],m=r("Sun",l),i=()=>{const[o,a]=s.useState(!1);s.useEffect(()=>{const e=localStorage.getItem("darkMode")==="true";a(e),document.documentElement.classList.toggle("dark",e)},[]);const c=()=>{const e=!o;a(e),localStorage.setItem("darkMode",e),document.documentElement.classList.toggle("dark",e)};return t.jsx("button",{onClick:c,className:"p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200","aria-label":"Toggle theme",children:o?t.jsx(m,{size:20}):t.jsx(d,{size:20})})};export{i as default};
