const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");let n=null;t.addEventListener("click",(function(){n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2c7ffb9d.js.map
