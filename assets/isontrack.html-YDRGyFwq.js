import{_ as c,r,o as l,c as i,a as e,b as t,d as n,w as s}from"./app-DuzLYwnF.js";const h={},d={id:"isontrack",tabindex:"-1"},_={class:"header-anchor",href:"#isontrack"},u=e("h3",{id:"related",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related"},[e("span",null,"Related")])],-1);function k(m,p){const o=r("Badge"),a=r("RouterLink");return l(),i("div",null,[e("h1",d,[e("a",_,[e("span",null,[t("IsOnTrack "),n(o,{text:"boolean"})])])]),e("p",null,[t("IsOnTrack is true only when the player is running the physics for the car and is currently in the car (i.e. not in the replay while the car is sat in the world). To determine if the car is currently in the world and the player's sim is running the physics look at "),n(a,{to:"/telemetry/isontrackcar.html"},{default:s(()=>[t("IsOnTrackCar")]),_:1})]),u,e("ul",null,[e("li",null,[n(a,{to:"/telemetry/isontrackcar.html"},{default:s(()=>[t("IsOnTrackCar")]),_:1})])])])}const y=c(h,[["render",k],["__file","isontrack.html.vue"]]);export{y as default};