import{r as n,_ as w,R as s,b as R,c as g,P as o,d as j}from"./index-BYWx67qE.js";import{u as q,T as z}from"./DefaultLayout-D1y69B8p.js";var A=n.createContext({}),k=n.forwardRef(function(e,l){var u=e.children,a=e.animation,c=a===void 0?!0:a,b=e.autohide,P=b===void 0?!0:b,V=e.className,d=e.color,h=e.delay,B=h===void 0?5e3:h,r=e.index,M=e.key,y=e.visible,p=y===void 0?!1:y,T=e.onClose,N=e.onShow,F=w(e,["children","animation","autohide","className","color","delay","index","key","visible","onClose","onShow"]),x=n.useRef(),L=q(l,x),C=n.useState(!1),f=C[0],m=C[1],i=n.useRef();n.useEffect(function(){m(p)},[p]);var O={visible:f,setVisible:m};n.useEffect(function(){return function(){return clearTimeout(i.current)}},[]),n.useEffect(function(){E()},[f]);var E=function(){P&&(clearTimeout(i.current),i.current=window.setTimeout(function(){m(!1)},B))};return s.createElement(z,{in:f,nodeRef:x,onEnter:function(){return N&&N(r??null)},onExited:function(){return T&&T(r??null)},timeout:250,unmountOnExit:!0},function(v){var t;return s.createElement(A.Provider,{value:O},s.createElement("div",R({className:g("toast",(t={fade:c},t["bg-".concat(d)]=d,t["border-0"]=d,t["show showing"]=v==="entering"||v==="exiting",t.show=v==="entered",t),V),"aria-live":"assertive","aria-atomic":"true",role:"alert",onMouseEnter:function(){return clearTimeout(i.current)},onMouseLeave:function(){return E()}},F,{key:M,ref:L}),u))})});k.propTypes={animation:o.bool,autohide:o.bool,children:o.node,className:o.string,color:j,delay:o.number,index:o.number,key:o.number,onClose:o.func,onShow:o.func,visible:o.bool};k.displayName="CToast";var S=n.forwardRef(function(e,l){var u=e.children,a=e.className,c=w(e,["children","className"]);return s.createElement("div",R({className:g("toast-body",a)},c,{ref:l}),u)});S.propTypes={children:o.node,className:o.string};S.displayName="CToastBody";export{k as C,S as a,A as b};
