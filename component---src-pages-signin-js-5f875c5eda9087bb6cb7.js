(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"44PY":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("f3/d"),a("q1tI");var n=a("rClq"),r=a.n(n),l=a("qKvR");function o(e){return Object(l.a)("input",{type:e.type,placeholder:e.placeholder,className:r.a.Input,name:e.name,id:e.id?e.id:null,inputMode:e.mode?e.mode:null,required:e.required,autoComplete:e.complete?e.complete:null,minLength:e.length?e.length:null,"aria-describedby":e.ariaDescribedby?e.ariaDescribedby:null})}},Bl7J:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("q1tI"),a("xfY5");var n=a("+ZDr"),r=a.n(n),l=(a("lw3w"),a("emEt")),o=a("qKvR");l.default.enqueue;function i(){return Object(o.a)("h1",null,"Sir Lancelot's Corner")}var s=a("fcpr"),u=a.n(s),c=function(e){return Object(o.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(o.a)(r.a,{activeClassName:"activeClass",to:e.to},e.children))};function d(e){var t=e.children;return Object(o.a)("div",{className:u.a.Layout},t,Object(o.a)("header",null,Object(o.a)(r.a,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},Object(o.a)(i,null)),Object(o.a)("nav",null,Object(o.a)("ul",{className:u.a.Navbar},Object(o.a)(c,{to:"/"},"Home"),Object(o.a)(c,{to:"/signin"},"Sign In"),Object(o.a)(c,{to:"/signup"},"Sign Up")))))}},HsDK:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));a("pIFo"),a("q1tI");var n=a("Bl7J"),r=a("ZXdF"),l=a("44PY"),o=a("nyj8"),i=a.n(o),s=a("qKvR");function u(){return Object(s.a)(n.a,null,Object(s.a)("div",{id:"signin"},Object(s.a)("h1",{className:i.a.Signin},"SIGN IN"),Object(s.a)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("email-label").value;alert("Thank you for signing in. Enjoy! "+t),"undefined"!=typeof window&&window.location.replace("/")},className:"form",method:"POST"},Object(s.a)("div",{className:"form-group"},Object(s.a)("label",{htmlFor:"email-label"},Object(s.a)("span",null,"Email")," ",Object(s.a)("br",null),Object(s.a)(l.a,{id:"email-label",type:"email",name:"email",mode:"email",required:!0,placeholder:"Enter Email here"}))),Object(s.a)("div",{className:"form-group"},Object(s.a)("label",{htmlFor:"pass-label"},Object(s.a)("span",null,"Password"),Object(s.a)(r.a,{id:"toggle-password",style:{marginBottom:"10px",float:"right"},type:"button",text:"Show password"}),Object(s.a)("br",null),Object(s.a)(l.a,{type:"password",placeholder:"Enter Password here",id:"pass-label",name:"current-password",complete:"current-password",length:"8",required:!0,ariaDescribedby:"password-constraints"}),Object(s.a)("br",null),Object(s.a)("div",{id:"password-constraints",style:{color:"yellow"}},"Eight or more characters with a mix ",Object(s.a)("br",null)," of letters, numbers and symbols."))),Object(s.a)("div",null,Object(s.a)(r.a,{style:{height:"50px",fontSize:"1.2rem",width:"100%"},type:"submit",text:"Sign In"})))))}},ZXdF:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var n=a("l9sE"),r=a.n(n),l=a("qKvR");function o(e){var t=[r.a.Button,r.a.togglePassword?e.id:null];return Object(l.a)("button",{style:e.style,onClick:e.id?function(e){var t=document.getElementById("pass-label")?document.getElementById("pass-label"):document.getElementById("new-pass-label");"password"===t.type?(t.type="text",e.target.textContent="Hide password",e.target.setAttribute("aria-label","Hide password.")):(t.type="password",e.target.textContent="Show password",e.target.setAttribute("aria-label","Show password as plain text. Warning: this will display your password on the screen."))}:null,id:e.id?e.id:null,className:t.join(", "),type:e.type},e.text)}},fcpr:function(e,t,a){e.exports={Layout:"layout-module--Layout--31vZ1",Navbar:"layout-module--Navbar--14Wxq"}},l9sE:function(e,t,a){e.exports={Button:"button-module--Button--2FYKb",togglePassword:"button-module--togglePassword--3PB0W"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nyj8:function(e,t,a){e.exports={Signin:"signin-module--Signin--2D_Am"}},rClq:function(e,t,a){e.exports={Input:"input-module--Input--1KNAX"}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),l=a("LZWt"),o=a("Xbzi"),i=a("apmT"),s=a("eeVq"),u=a("kJMx").f,c=a("EemH").f,d=a("hswa").f,b=a("qncB").trim,p=n.Number,m=p,f=p.prototype,g="Number"==l(a("Kuth")(f)),h="trim"in String.prototype,y=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=h?t.trim():b(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var o,s=t.slice(2),u=0,c=s.length;u<c;u++)if((o=s.charCodeAt(u))<48||o>r)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(g?s((function(){f.valueOf.call(a)})):"Number"!=l(a))?o(new m(y(t)),a,p):y(t)};for(var w,j=a("nh4g")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;j.length>O;O++)r(m,w=j[O])&&!r(p,w)&&d(p,w,c(m,w));p.prototype=f,f.constructor=p,a("KroJ")(n,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-signin-js-5f875c5eda9087bb6cb7.js.map