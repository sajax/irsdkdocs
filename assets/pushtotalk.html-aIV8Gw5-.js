import{_ as r,r as t,o as c,c as l,a as e,b as o,d as s}from"./app-DuzLYwnF.js";const i={},h={id:"pushtotalk",tabindex:"-1"},u={class:"header-anchor",href:"#pushtotalk"},_=e("p",null,"This variable is true when you hit the push-to-talk voice chat button. This does not mean that others can hear you, just that you attempted to send voice chat data to the server. The server still has the power to prioritize who is talking or apply restrictions on your voice chat.",-1),d={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"Developer Post",-1),m=e("p",null,"I will add in a new telemetry value 'PushToTalk'. This won't correspond to anyone else hearing you, the server is the one that controls who is actually talking. However at least you can still mute your speakers when the button is pressed.",-1),k={href:"https://forums.iracing.com/discussion/comment/328947/#Comment_328947",target:"_blank",rel:"noopener noreferrer"};function v(f,y){const n=t("Badge"),a=t("ExternalLinkIcon");return c(),l("div",null,[e("h1",h,[e("a",u,[e("span",null,[o("PushToTalk "),s(n,{text:"boolean"})])])]),_,e("div",d,[p,m,e("p",null,[e("a",k,[o("Source"),s(a)])])])])}const T=r(i,[["render",v],["__file","pushtotalk.html.vue"]]);export{T as default};