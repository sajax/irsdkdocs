import{_ as r,r as t,o as c,c as l,a as e,b as a,d as n}from"./app-DuzLYwnF.js";const i={},p={id:"lapcompleted",tabindex:"-1"},d={class:"header-anchor",href:"#lapcompleted"},h={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"Release Notes",-1),m=e("p",null,`A new telemetry item "LapCompleted" has been added which contains the number of laps completed by your car (Similar to "Lap" which contains your car's currently started lap). At a circuit event, "CarIdxLapCompleted" will always be 1 less than "CarIdxLap", since the finish line both finishes one lap and starts the next. But at the Nürburgring Tourist config, where the start and finish are separate, completing a lap does not start the next one.`,-1),u={href:"https://members.iracing.com/jforum/posts/list/1900/1470675.page#9303688",target:"_blank",rel:"noopener noreferrer"};function f(x,b){const o=t("Badge"),s=t("ExternalLinkIcon");return c(),l("div",null,[e("h1",p,[e("a",d,[e("span",null,[a("LapCompleted "),n(o,{text:"int"})])])]),e("div",h,[_,m,e("p",null,[e("a",u,[a("Source"),n(s)])])])])}const L=r(i,[["render",f],["__file","lapcompleted.html.vue"]]);export{L as default};
