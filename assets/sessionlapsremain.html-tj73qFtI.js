import{_ as i,r as o,o as r,c,a as e,b as t,d as s}from"./app-DuzLYwnF.js";const l={},d={id:"sessionlapsremain",tabindex:"-1"},p={class:"header-anchor",href:"#sessionlapsremain"},_={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"Developer Post",-1),u=e("p",null,"I did find a bug in SessionLapsRemaining, it is off by one. You all probably figured this out already but you have to add 1 to it to match the black box. The reason is that I accidentally used the leaders current lap and not the leaders last lap when calculating how many laps were used up. I was thinking of fixing this, but it probably would break a lot of code.",-1),m={href:"https://members.iracing.com/jforum/posts/list/1900/1470675.page#9303688",target:"_blank",rel:"noopener noreferrer"};function f(b,g){const a=o("Badge"),n=o("ExternalLinkIcon");return r(),c("div",null,[e("h1",d,[e("a",p,[e("span",null,[t("SessionLapsRemain "),s(a,{text:"Deprecated",type:"danger"}),t(),s(a,{text:"int"})])])]),e("div",_,[h,u,e("p",null,[e("a",m,[t("Source"),s(n)])])])])}const k=i(l,[["render",f],["__file","sessionlapsremain.html.vue"]]);export{k as default};
