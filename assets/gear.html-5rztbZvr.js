import{_ as s,r as n,o as d,c as u,a as e,b as t,d as l,w as r}from"./app-DuzLYwnF.js";const c={},h={id:"gear",tabindex:"-1"},_={class:"header-anchor",href:"#gear"},i=e("p",null,"Currently selected gear.",-1),m=e("ul",null,[e("li",null,"-1 = Reverse"),e("li",null,"0 = Neutral"),e("li",null,"1+ = Forward Gears")],-1),f=e("h3",{id:"related",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related"},[e("span",null,"Related")])],-1);function g(k,p){const o=n("Badge"),a=n("RouterLink");return d(),u("div",null,[e("h1",h,[e("a",_,[e("span",null,[t("Gear "),l(o,{text:"int"})])])]),i,m,f,e("ul",null,[e("li",null,[l(a,{to:"/telemetry/brake.html"},{default:r(()=>[t("Brake")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/brakeraw.html"},{default:r(()=>[t("BrakeRaw")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/throttle.html"},{default:r(()=>[t("Throttle")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/throttle.html"},{default:r(()=>[t("ThrottleRaw")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/clutch.html"},{default:r(()=>[t("Clutch")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/handbrakeraw.html"},{default:r(()=>[t("HandBrakeRaw")]),_:1})]),e("li",null,[l(a,{to:"/telemetry/steeringwheelangle.html"},{default:r(()=>[t("SteeringWheelAngle")]),_:1})])])])}const x=s(c,[["render",g],["__file","gear.html.vue"]]);export{x as default};