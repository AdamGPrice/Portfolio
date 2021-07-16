(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{31:function(e,t,r){},32:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var c=r(1),i=r.n(c),n=r(20),s=r.n(n),a=(r(31),r(21)),o=r(22),l=r(26),h=r(25),d=(r(32),r(3)),j=r(5),b=r(0),u=function(e){var t=Object(d.f)().pathname;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col s12 m4",children:[Object(b.jsx)("h1",{className:"name",onClick:function(){return e.incrementRickRoll()},children:"Adam Price"}),Object(b.jsx)("p",{className:"sub-heading name-title",children:"Software Developer"}),Object(b.jsxs)("div",{className:"nav-btns-mobile left",children:[Object(b.jsx)(j.b,{className:"link",to:"/",children:Object(b.jsx)("div",{className:"/"!==t?"custom-btn":"custom-btn-selected",children:"About Me"})}),Object(b.jsx)(j.b,{className:"link",to:"/projects",children:Object(b.jsx)("div",{className:"/projects"!==t?"custom-btn":"custom-btn-selected",children:"Projects"})})]})]}),Object(b.jsx)("div",{className:"col s8",children:Object(b.jsxs)("div",{className:"nav-btns right",children:[Object(b.jsx)(j.b,{className:"link",to:"/",children:Object(b.jsx)("div",{className:"/"!==t?"custom-btn":"custom-btn-selected",children:"About Me"})}),Object(b.jsx)(j.b,{className:"link",to:"/projects",children:Object(b.jsx)("div",{className:"/projects"!==t?"custom-btn":"custom-btn-selected",children:"Projects"})})]})})]})},m=r(10),p=r(9),x=(r(40),function(){return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col s12 m8",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsxs)("p",{children:["Hello, My name is Adam. I'm a Software Developer who studied Computer Science graduate from ",Object(b.jsx)("a",{href:"https://www.derby.ac.uk/",target:"_blank",rel:"noreferrer",children:"The University of Derby"}),"."]}),Object(b.jsx)("p",{children:"My main interests include problem solving, mathematics, machine learning and web development. I have experience with various programming languages and technologies from working on a range of projects from embedded systems to distributed web applications."}),Object(b.jsxs)("p",{children:["Check out my ",Object(b.jsx)(j.b,{to:"/projects",children:"Projects"})," page to find out about previous projects I have worked on and what I am working on next."]}),Object(b.jsx)("h2",{children:"Contact"}),Object(b.jsx)("p",{children:"Feel free to reach out if you want a to build something together, have a question, or just want to connect."}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"mailto:adamprice.dev@gmail.com",rel:"noreferrer",children:"adamprice.dev@gmail.com"})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("a",{href:"https://github.com/AdamGPrice",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(m.a,{className:"social-link",icon:p.a})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/adamgprice",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(m.a,{className:"social-link",icon:p.b})})]})]})})}),f=(r(41),function(e){return Object(b.jsx)("p",{className:"techbadge",children:e.tech})}),O=function(e){var t=e.project.tech.map((function(e,t){return Object(b.jsx)(f,{tech:e},e+t)}));return e.isShowcase?Object(b.jsx)(j.b,{to:"".concat(e.project.dir),children:Object(b.jsxs)("div",{className:"projectcard-box col s12 m6 l4",children:[Object(b.jsxs)("div",{className:"projectcard-innerbox",children:[Object(b.jsx)("p",{className:"sub-heading showcase-heading",children:e.project.title}),Object(b.jsx)("i",{className:"material-icons open-icon",children:"read_more"}),Object(b.jsx)("p",{children:e.project.desc})]}),t]})}):Object(b.jsxs)("div",{onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(e.project.git)},className:"projectcard-box col s12 m6 l4",children:[Object(b.jsxs)("div",{className:"projectcard-innerbox",children:[Object(b.jsx)("p",{className:"sub-heading",children:e.project.title}),Object(b.jsx)(m.a,{className:"github-icon",icon:p.a}),Object(b.jsx)("i",{className:"material-icons open-icon",children:"open_in_new"}),Object(b.jsx)("p",{children:e.project.desc})]}),t]})},g={showcase:[{title:"Software Graphics Renderer",desc:"A 3D Software renderer built in C++ from the ground up without the use of modern graphic APIs.",shortdesc:"3D Renderer built from the ground up.",tech:["C","C++"],techlong:["C","C++","Renderer","Rasteriser"],git:"https://github.com/AdamGPrice/Software-Graphics-Renderer",dir:"/software-renderer",body:"SoftwareRenderer"},{title:"Generative Adversarial Network Evaluation",desc:"Evaluating the performance of GANs with and without the aid of transfer learning.",shortdesc:"Evaluating the performance of GANs.",tech:["Python","Machine Learning"],techlong:["Python","Tensorflow","Machine Learning","Image Synthesis"],git:"https://github.com/AdamGPrice/Generative-Adversarial-Network",dir:"/generative-adversarial-networks-evaluation",body:"Dissertation"}],simple:[{title:"x86 Bootloader",desc:"Bootloader written in x86 Assembly with some functionality to draw primitives to the screen.",tech:["Assembly"],git:"https://github.com/AdamGPrice/x86-Graphics"},{title:"Table Booking App",desc:"Scalable table booking web application for bars/pubs using Docker containers and kubernetes.",tech:["JS","Node","Docker","MySQL"],techlong:["JavaScript","Node","Express","Docker","Kubernetes","MySQL"],git:"https://github.com/AdamGPrice/Table-Booking-Application",dir:"/table-booking-app",body:"TableBookingApp"},{title:"Interpreter Language, SIMP",desc:"SIMP is a simple interpreter language built with JavaCC.",tech:["Java"],git:"https://github.com/AdamGPrice/SIMP-Language-Interpreter"},{title:"Extending Xv6 Operating System",desc:"Adding extra functionality to the Xv6 Operating System through system calls.",tech:["C","Linux","OS"],git:"https://github.com/AdamGPrice/Xv6-Operating-System"},{title:"JS Neural Network Library",desc:"Fully connected neural network library built in JavaScript for fun.",tech:["JS","Machine Learning"],git:"https://github.com/AdamGPrice/JavaScript-Neural-Network"}]},w=function(){var e=g.showcase.map((function(e,t){return Object(b.jsx)(O,{project:e,isShowcase:!0},e.title+t)})),t=g.simple.map((function(e,t){return Object(b.jsx)(O,{project:e,isShowcase:!1},e.title+t)}));return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col s12",children:[Object(b.jsx)("h2",{children:"Projects"}),Object(b.jsx)("p",{children:"Here are some cool projects I have worked on!"}),Object(b.jsx)("div",{className:"row",children:e}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"More on Github"}),Object(b.jsx)("div",{className:"row",children:t})]})})},v=function(){return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col s12 m8",children:[Object(b.jsx)("h1",{children:"404 PAGE NOT FOUND"}),Object(b.jsxs)("p",{className:"sub-heading",children:["What are you looking for... \ud83d\udc40. click ",Object(b.jsx)(j.b,{to:"/",children:"here"})," to find my home page."]})]})})},k=(r(42),r.p+"static/media/Software_Renderer.0666280b.gif"),N=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"This is a 3D renderer built in C++ from the ground up without the use of modern graphics APIs and GPU hardware acceleration. It's a real-time software renderer so all of the graphics calculation are done on the cpu and the final result of each frame is displayed on screen using the Win32 GDI to plot pixels."}),Object(b.jsx)("h3",{children:"Example Model (Marvin the Martian)"}),Object(b.jsx)("img",{src:k,alt:"3D Renderer showcase"}),Object(b.jsxs)("p",{children:["The render can load models which are formatted using ",Object(b.jsx)("a",{href:"http://tfc.duke.free.fr/coding/md2-specs-en.html",target:"_blank",rel:"noreferrer",children:".MD2"}),"\xa0(Quake 2 model format) with or without the models associated texture and render it to the screen. This project taught me a lot about C++ and the core funamentals of graphics programming because i had to write all of the graphics algorithms myself, Starting with the matrix operations to transform 3D objects around in world space, the lighiting calculation for the model and finally translating the 3D image to the 2D screen with rasterisation to set each pixel colour depending on textures and light sources."]}),Object(b.jsx)("h3",{children:"Renderer Features"}),Object(b.jsxs)("ul",{className:"browser-default",children:[Object(b.jsx)("li",{children:"Wireframe model view"}),Object(b.jsx)("li",{children:"Object transformations"}),Object(b.jsxs)("ul",{className:"browser-default",children:[Object(b.jsx)("li",{children:"Translation"}),Object(b.jsx)("li",{children:"Rotation"}),Object(b.jsx)("li",{children:"Scaling"})]}),Object(b.jsx)("li",{children:"Backface culling"}),Object(b.jsx)("li",{children:"Solid flat shading"}),Object(b.jsx)("li",{children:"Lighting sources"}),Object(b.jsxs)("ul",{className:"browser-default",children:[Object(b.jsx)("li",{children:"Ambient light"}),Object(b.jsx)("li",{children:"Directional light"}),Object(b.jsx)("li",{children:"Point light"}),Object(b.jsx)("li",{children:"Spot light"})]}),Object(b.jsx)("li",{children:"Diffuse/Specular reflection"}),Object(b.jsx)("ul",{className:"browser-default",children:Object(b.jsx)("li",{children:"Phong lighting model"})}),Object(b.jsx)("li",{children:"Rasteriser (triangle algorithm)"}),Object(b.jsx)("li",{children:"Object Textures (with perspective correction)"})]})]})},y=r.p+"static/media/Generative_Adversarial_Network_Dissertation.4b4e39f6.pdf",S={SoftwareRenderer:N,Dissertation:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"'Performance Evaluation of Generative Adversarial Networks with Transfer Learning' is the result of a research project at university for my independent studies where i evaluate the performance GANs, one with transfer learning and one without and then compare the differences with a classifier network trained on the same dataset."}),Object(b.jsx)("h3",{children:"Paper"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("a",{href:"/Generative_Adversarial_Network_Dissertation.pdf",target:"_blank",rel:"noreferrer",children:"Click here"})," to open the pdf in fullscreen"]}),Object(b.jsx)("iframe",{src:y,title:"Dissertatopm PDF"})]})},TableBookingApp:function(){return Object(b.jsx)("div",{})}},A=function(e){return Object(b.jsxs)("span",{children:[Object(b.jsx)("p",{className:"techbadge-page",children:e.tech})," "]})},P=function(){var e=function(e){return g.showcase.filter((function(t){return t.dir===e}))[0]}(Object(d.f)().pathname),t=e.techlong.map((function(e,t){return Object(b.jsx)(A,{tech:e},e+t)})),r=function(e){var t=S[e.body];return Object(b.jsx)(t,{})}(e);return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col s12 m12 l8",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("div",{children:t}),r,Object(b.jsx)("h3",{children:"Check out the code"}),Object(b.jsx)("a",{href:e.git,target:"_blank",rel:"noreferrer",children:Object(b.jsx)(m.a,{className:"social-link",icon:p.a})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})},D=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var c;return Object(a.a)(this,r),(c=t.call(this,e)).state={rickroll:0},c}return Object(o.a)(r,[{key:"incrementRickRoll",value:function(){this.setState({rickroll:this.state.rickroll+1}),this.state.rickroll>20&&window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}},{key:"render",value:function(){var e=this,t=g.showcase.map((function(e,t){return Object(b.jsx)(d.a,{exact:!0,path:e.dir,component:P},e.title+t)}));return Object(b.jsxs)("div",{className:"App container",children:[Object(b.jsx)(u,{incrementRickRoll:function(t){return e.incrementRickRoll(t)}}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(d.a,{exact:!0,path:"/projects",component:w}),t,Object(b.jsx)(d.a,{exact:!0,path:"*",component:v})]})]})}}]),r}(i.a.Component),G=r(24);r.n(G).a.config(),console.log("You shouldn't be looking here \ud83e\udd13"),console.log("Check out this hilarious video.","https://www.youtube.com/watch?v=dQw4w9WgXcQ"),s.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(D,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4668b352.chunk.js.map