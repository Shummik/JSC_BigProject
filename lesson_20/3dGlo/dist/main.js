!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict"},function(e,t,o){"use strict";o.r(t);var n=function(){let e=document.querySelector("#timer-hours"),t=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),n=setInterval((function(){let i=function(){let e=new Date("10 october 2019 07:51:00"),t=(e-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,dateStop:e,hours:Math.floor(t/60/60),minutes:n,second:o}}();i.timeRemaining>0&&(e.textContent=i.hours<10?"0"+i.hours:i.hours,t.textContent=i.minutes<10?"0"+i.minutes:i.minutes,o.textContent=i.second<10?"0"+i.second:i.second),i.timeRemaining<=0&&(e.nextElementSibling.style.color="red",t.nextElementSibling.style.color="red",e.style.color="red",t.style.color="red",o.style.color="red",e.textContent="00",t.textContent="00",o.textContent="00",clearInterval(n))}),1e3)};var i=()=>{let e=document.querySelector("menu");document.querySelector("body").addEventListener("click",t=>{let o=t.target;o.closest(".menu")?e.classList.add("active-menu"):o.closest("menu")||e.classList.remove("active-menu"),o.closest("a")&&e.classList.remove("active-menu")})};var s=()=>{let e=document.querySelector("menu").querySelectorAll("ul>li>a"),t=document.querySelector('a[href="#service-block"]'),o=document.querySelectorAll("#service-block, #portfolio, #calc, #companies, #command, #connect"),n=document.documentElement.scrollTop;function i(){let e=requestAnimationFrame(i);(n+=10)<=o[0].offsetTop?document.documentElement.scrollTop=n:cancelAnimationFrame(e)}e.forEach(e=>{e.addEventListener("click",e=>{let t=[...e.target.hash];t.shift(),t=t.join(""),requestAnimationFrame((function e(){let i=requestAnimationFrame(e);n+=23.5,o.forEach(e=>{t===e.id&&(n<=e.offsetTop?document.documentElement.scrollTop=n:cancelAnimationFrame(i))})})),n=document.documentElement.scrollTop})}),t.addEventListener("click",()=>{requestAnimationFrame(i),n=document.documentElement.scrollTop})};var r=()=>{let e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn"),n=20;function i(){let e=requestAnimationFrame(i);--n>=0&&document.documentElement.clientWidth>=600?(t.style.transform=`translateY(-${n}%)`,t.style.opacity="1",t.style.transition="opacity .5s"):cancelAnimationFrame(e),n>=0&&document.documentElement.clientWidth<=600&&(t.style.opacity="1",t.style.transform=`translateY(-${n})`,t.style.transform="translateX(-15%)",t.style.transition="opacity .5s",cancelAnimationFrame(e))}t.style.transform="translateY(-100%)",t.style.opacity="0",e.addEventListener("click",o=>{let i=o.target;i.classList.contains("popup-close")?(e.style.display="none",t.style.transform="translateY(-100%)",t.style.opacity="0",n=20):(i=i.closest(".popup-content"))||(e.style.display="none",t.style.opacity="0",t.style.transform="translateY(-100%)",n=20)}),o.forEach(t=>t.addEventListener("click",()=>{e.style.display="block",requestAnimationFrame(i)}))};var l=()=>{let e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab"))&&t.forEach((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))})})};var a=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");let o,n=document.querySelectorAll(".dot"),i=0;(()=>{let t,o=document.querySelector(".portfolio-dots");for(let n=0;n<=e.length-1;n++)(t=document.createElement("li")).classList.add("dot"),0===n&&t.classList.add("dot-active"),o.appendChild(t);n=document.querySelectorAll(".dot")})();const s=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},l=()=>{s(e,i,"portfolio-item-active"),s(n,i,"dot-active"),++i>=e.length&&(i=0),r(e,i,"portfolio-item-active"),r(n,i,"dot-active")};t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches("#arrow-right, #arrow-left, .dot")&&(s(e,i,"portfolio-item-active"),s(n,i,"dot-active"),o.matches("#arrow-right")?i++:o.matches("#arrow-left")?i--:o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(i=t)}),i>=e.length?i=0:i<0&&(i=e.length-1),r(e,i,"portfolio-item-active"),r(n,i,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c()}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&a()});const a=(e=3e3)=>{o=setInterval(l,e)};a(1500);const c=()=>{clearInterval(o)}};var c=()=>{new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:i=!1,slidesToShow:s=3,position:r=0,responsive:l=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(n),this.slidesToShow=s,this.options={position:r,infinity:i,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),document.head.appendChild(e),e.textContent=`\n          .glo-slider{\n              overflow: hidden !important; \n          }\n          .glo-slider__wrap {\n              display: flex  !important; \n              transition: transform 0.5s  !important; \n              will-change: transform  !important; \n          }\n          .glo-slider__item{\n              flex: 0 0 ${this.options.widthSlide}% !important; \n              margin: auto 0  !important; \n          }\n          \n          `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n          .glo-slider__prev,\n          .glo-slider__next{\n              margin: 0 10px;\n              border: 20px solid transparent;\n              background: transparent;\n          }\n          .glo-slider__next {\n              border-left-color: #19b5fe;\n          }\n          .glo-slider__prev {\n              border-right-color: #19b5fe;\n          }",document.head.appendChild(e)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),o=Math.max(...t),n=()=>{const n=document.documentElement.clientWidth;if(n<o)for(let e=0;e<t.length;e++)n<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};n(),window.addEventListener("resize",n)}}({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()};var d=e=>{const t=document.querySelectorAll('input[type="number"]'),o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),i=document.querySelector("#total");t.forEach(e=>{e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[A-Za-z./,'"!&?*%]+/,"")})});o.addEventListener("change",o=>{const s=o.target;(s.matches("select")||s.matches("input"))&&(()=>{let o=0,s=1,r=1;const l=n.options[n.selectedIndex].value,a=+t[0].value;if(t[1].value>1&&(s+=(t[1].value-1)/10),t[2].value&&t[2].value<5?r*=2:t[2].value&&t[2].value<10&&(r*=1.5),l&&a&&(o=Math.floor(e*l*a*s*r)),o>0){let e=0,t=setInterval(()=>{i.textContent=e+=50,e>=o&&(i.textContent=e-(e-o),clearInterval(t))},1)}})()})};var m=()=>{document.querySelectorAll(".command__photo").forEach(e=>{let t=e.src;e.addEventListener("mouseenter",e=>{e.target.src=e.target.dataset.img}),e.addEventListener("mouseleave",e=>{e.target.src=t})})};var u=e=>{const t=document.querySelector(e);document.querySelectorAll('input[type="text"], .mess').forEach(e=>{e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[A-Za-z0-9./,'"!&?*%]+/,"")})});const o=document.createElement("div");t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(o),o.style.color="#fff",o.innerHTML="<img style='width: 50px; height: 50px;' src='./images/imgs/loading.gif'>";const i=new FormData(t);let s={};i.forEach((e,t)=>{s[t]=e}),n(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");o.innerHTML="<img style='width: 50px; height: 50px;' src='./images/imgs/okey.png'>"}).catch(e=>{o.innerHTML="<img style='width: 50px; height: 50px;' src='./images/imgs/error.png>",console.error(e)});for(let e of t.elements)"submit"!=e.type&&(e.value="")});const n=e=>fetch("./server.php",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})};o(0);n(),i(),s(),r(),l(),a(),c(),d(),m(),u()}]);