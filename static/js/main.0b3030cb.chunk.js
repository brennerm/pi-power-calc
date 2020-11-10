(window["webpackJsonppi-power-calc"]=window["webpackJsonppi-power-calc"]||[]).push([[0],{30:function(e,a,t){},48:function(e,a,t){e.exports=t(63)},53:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),o=t.n(c),l=(t(53),t(45)),i=t(4),m=t(12),s=t(13),p=t(18),u=t(14),h=t(6),d=t(19),y=(t(30),{low:0,med:.5,high:1}),v={0:{name:"Raspberry Pi Zero",power_con_min:.5,power_con_max:.7},"0w":{name:"Raspberry Pi Zero W",power_con_min:.5,power_con_max:.7},"1a":{name:"Raspberry Pi 1 A",power_con_min:2.5,power_con_max:2.5},"1a+":{name:"Raspberry Pi 1 A+",power_con_min:.4,power_con_max:1.2},"1b":{name:"Raspberry Pi 1 B",power_con_min:3.5,power_con_max:3.5},"1b+":{name:"Raspberry Pi 1 B+",power_con_min:.9,power_con_max:3},"2b":{name:"Raspberry Pi 2 B",power_con_min:1.1,power_con_max:2.3},"3b":{name:"Raspberry Pi 3 B",power_con_min:1.4,power_con_max:3.7},"3b+":{name:"Raspberry Pi 3 B+",power_con_min:1.9,power_con_max:5.1},"4b":{name:"Raspberry Pi 4 B",power_con_min:3.4,power_con_max:7.6},400:{name:"Raspberry Pi 400",power_con_min:3.4,power_con_max:7.6}},b=t(23),f=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).time_intervals={daily:24,weekly:168,monthly:720,quaterly:2160,yearly:8760},t.state={cost:"",interval:t.time_intervals.yearly,kwh:"",kwh_price:"",load:.5,model:""},t.calc=t.calc.bind(Object(h.a)(t)),t.intervalChange=t.intervalChange.bind(Object(h.a)(t)),t.loadChange=t.loadChange.bind(Object(h.a)(t)),t.modelChange=t.modelChange.bind(Object(h.a)(t)),t.priceChange=t.priceChange.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"intervalChange",value:function(e){var a=parseInt(e.target.value,10);this.setState({interval:a},function(){this.calc()})}},{key:"loadChange",value:function(e){var a=parseFloat(e.target.value);this.setState({load:a},function(){this.calc()})}},{key:"modelChange",value:function(e){var a=e.target.value;this.setState({model:a},function(){this.calc()})}},{key:"priceChange",value:function(e){var a=parseFloat(e.target.value);this.setState({kwh_price:a},function(){this.calc()})}},{key:"calc",value:function(){if(""!==this.state.model){var e=v[this.state.model],a=(e.power_con_min+(e.power_con_max-e.power_con_min)*this.state.load)/1e3*this.state.interval;this.setState({kwh:a.toFixed(4)});var t=this.state.kwh_price*a||0;t=t.toFixed(2),this.setState({cost:t})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement(b.a,null,r.a.createElement("title",null,"Raspberry Pi Power Consumption Calculator"),r.a.createElement("meta",{name:"description",content:"A calculator to determine the power consumption of your Raspberry Pi model."}),r.a.createElement("meta",{itemprop:"name",content:"Raspberry Pi Power Consumption Calculator"}),r.a.createElement("meta",{itemprop:"description",content:"A calculator to determine the power consumption of your Raspberry Pi model."})),r.a.createElement("h1",null,"Raspberry Pi Power Consumption Calculator"),r.a.createElement("p",{className:"row"},"Calculate the power consumption of your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B, 400) when running it 24/7.",r.a.createElement("br",null),"If you enter your kWh price the total costs will be calculated as well."),r.a.createElement("form",null,r.a.createElement("div",{className:"row form-group"},r.a.createElement("select",{className:"form-control",value:this.state.model,onChange:this.modelChange},r.a.createElement("option",{value:"",disabled:!0},"Select your Model"),Object.keys(v).map(function(e,a){return r.a.createElement("option",{key:e,value:e},v[e].name," (~",v[e].power_con_min,"\u2013",v[e].power_con_max," W)")}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Load:"),Object.keys(y).map(function(a,t){return r.a.createElement("div",{key:a,className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"load",value:y[a],onChange:e.loadChange,checked:e.state.load===y[a]}),r.a.createElement("label",{className:"form-check-label"},a))})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Time Range:"),Object.keys(this.time_intervals).map(function(a,t){return r.a.createElement("div",{key:a,className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"interval",value:e.time_intervals[a],onChange:e.intervalChange,checked:e.state.interval===e.time_intervals[a]}),r.a.createElement("label",{className:"form-check-label"},a))})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",min:"0",step:"0.01",className:"form-control",placeholder:"0.00",value:this.state.kwh_price,onChange:this.priceChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon2"},"price/kWh")))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Total consumption:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"0.0000",value:this.state.kwh,readOnly:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"kWh")))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Total costs:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"0.00",value:this.state.cost,readOnly:!0})))))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).time_intervals={daily:24,weekly:168,monthly:720,quaterly:2160,yearly:8760},t.state={load:.5,model:"",runtime:"",capacity:0},t.calc=t.calc.bind(Object(h.a)(t)),t.loadChange=t.loadChange.bind(Object(h.a)(t)),t.modelChange=t.modelChange.bind(Object(h.a)(t)),t.runtimeChange=t.runtimeChange.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"loadChange",value:function(e){var a=parseFloat(e.target.value);this.setState({load:a},function(){this.calc()})}},{key:"modelChange",value:function(e){var a=e.target.value;this.setState({model:a},function(){this.calc()})}},{key:"runtimeChange",value:function(e){var a=parseFloat(e.target.value);this.setState({runtime:a},function(){this.calc()})}},{key:"calc",value:function(){if(""!==this.state.model){var e=v[this.state.model],a=(e.power_con_min+(e.power_con_max-e.power_con_min)*this.state.load)*this.state.runtime/5*1e3;a=a.toFixed(0),this.setState({capacity:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement(b.a,null,r.a.createElement("title",null,"Raspberry Pi Battery Capacity Calculator"),r.a.createElement("meta",{name:"description",content:"A calculator to determine the required battery capacity to power your Raspberry Pi for your desired run time."}),r.a.createElement("meta",{itemprop:"name",content:"Raspberry Pi Battery Capacity Calculator"}),r.a.createElement("meta",{itemprop:"description",content:"A calculator to determine the required battery capacity to power your Raspberry Pi for your desired run time."})),r.a.createElement("h1",null,"Raspberry Pi Battery Capacity Calculator"),r.a.createElement("p",{className:"row"},"Calculate the required battery capacity to power your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B, 400) for your desired run time."),r.a.createElement("form",null,r.a.createElement("div",{className:"row form-group"},r.a.createElement("select",{className:"form-control",value:this.state.model,onChange:this.modelChange},r.a.createElement("option",{value:"",disabled:!0},"Select your Model"),Object.keys(v).map(function(e,a){return r.a.createElement("option",{key:e,value:e},v[e].name," (~",v[e].power_con_min,"\u2013",v[e].power_con_max," W)")}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Load:"),Object.keys(y).map(function(a,t){return r.a.createElement("div",{key:a,className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"load",value:y[a],onChange:e.loadChange,checked:e.state.load===y[a]}),r.a.createElement("label",{className:"form-check-label"},a))})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Desired Runtime:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",min:"0",step:"0.1",placeholder:"12",value:this.state.runtime,onChange:this.runtimeChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"h")))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Required capacity:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"0.0000",value:this.state.capacity,readOnly:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"mAh"))))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).state={load:.5,model:"",capacity:"",runtime:0},t.calc=t.calc.bind(Object(h.a)(t)),t.loadChange=t.loadChange.bind(Object(h.a)(t)),t.modelChange=t.modelChange.bind(Object(h.a)(t)),t.capacityChange=t.capacityChange.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"loadChange",value:function(e){var a=parseFloat(e.target.value);this.setState({load:a},function(){this.calc()})}},{key:"modelChange",value:function(e){var a=e.target.value;this.setState({model:a},function(){this.calc()})}},{key:"capacityChange",value:function(e){var a=parseFloat(e.target.value);this.setState({capacity:a},function(){this.calc()})}},{key:"calc",value:function(){if(""!==this.state.model){var e=v[this.state.model],a=e.power_con_min+(e.power_con_max-e.power_con_min)*this.state.load,t=this.state.capacity/1e3*5/a;t=t.toFixed(2),this.setState({runtime:t})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement(b.a,null,r.a.createElement("title",null,"Raspberry Pi Battery Runtime Calculator"),r.a.createElement("meta",{name:"description",content:"A calculator to estimate the run time of your Raspberry Pi when powering it using a battery with a given capacity."}),r.a.createElement("meta",{itemprop:"name",content:"Raspberry Pi Battery Runtime Calculator"}),r.a.createElement("meta",{itemprop:"description",content:"A calculator to estimate the run time of your Raspberry Pi when powering it using a battery with a given capacity."})),r.a.createElement("h1",null,"Raspberry Pi Battery Runtime Calculator"),r.a.createElement("p",{className:"row"},"Calculate the run time that you can expect when powering your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B, 400) using a battery with a given capacity."),r.a.createElement("form",null,r.a.createElement("div",{className:"row form-group"},r.a.createElement("select",{className:"form-control",value:this.state.model,onChange:this.modelChange},r.a.createElement("option",{value:"",disabled:!0},"Select your Model"),Object.keys(v).map(function(e,a){return r.a.createElement("option",{key:e,value:e},v[e].name," (~",v[e].power_con_min,"\u2013",v[e].power_con_max," W)")}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Load:"),Object.keys(y).map(function(a,t){return r.a.createElement("div",{key:a,className:"form-check form-check-inline"},r.a.createElement("input",{type:"radio",className:"form-check-input",name:"load",value:y[a],onChange:e.loadChange,checked:e.state.load===y[a]}),r.a.createElement("label",{className:"form-check-label"},a))})),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Available capacity:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",placeholder:"10000",min:"0",step:"1",value:this.state.capacity,onChange:this.capacityChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"mAh")))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{className:"form-check-label"},"Resulting runtime:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"0.0000",value:this.state.runtime,readOnly:!0}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"h"))))))}}]),a}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=t(74),C=t(75),N=t(66),O=t(67),j=t(68),x=t(69),R=t(70),P=t(71),B=t(72),A=t(73),S=(t(56),function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(_.a,{id:"share-buttons"},r.a.createElement(C.a,{className:"mx-auto"},r.a.createElement(N.a,{title:this.props.title,url:this.props.url},r.a.createElement(O.a,null)),r.a.createElement(j.a,{title:this.props.title,url:this.props.url},r.a.createElement(x.a,null)),r.a.createElement(R.a,{title:this.props.title,url:this.props.url},r.a.createElement(P.a,null)),r.a.createElement(B.a,{title:this.props.title,url:this.props.url},r.a.createElement(A.a,null))))}}]),a}(r.a.Component)),W=(t(60),{"/":{name:"Power Consumption Calculator",component:f},"/capacity":{name:"Battery Capacity Calculator",component:g},"/runtime":{name:"Battery Runtime Calculator",component:w}});o.a.render(r.a.createElement(function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(_.a,{className:"fixed-top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},r.a.createElement(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto",activeKey:window.location.pathname},Object.keys(W).map(function(e,a){return r.a.createElement(C.a.Link,{key:e,href:"/pi-power-calc/#"+e},W[e].name)})))),Object.keys(W).map(function(e,a){return r.a.createElement(i.a,{key:e,exact:!0,path:e,component:W[e].component})}),r.a.createElement(S,{title:W["/"+window.location.pathname.split("/").slice(-1).pop()].name,url:window.location.href})))},null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/pi-power-calc",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/pi-power-calc","/service-worker.js");E?(!function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.0b3030cb.chunk.js.map