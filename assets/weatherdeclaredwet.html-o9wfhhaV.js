import{_ as i,r as t,o as r,c,a as e,b as a,d as o,e as l}from"./app-DuzLYwnF.js";const d={},u={id:"weatherdeclaredwet",tabindex:"-1"},h={class:"header-anchor",href:"#weatherdeclaredwet"},_={class:"custom-container tip"},p=l('<p class="custom-container-title">Developer Post</p><p>Ok, I checked in my new weather fix, here are the release notes:</p><p>Removed irsdk_WeatherDynamics and irsdk_weatherVersion enum defines.</p><p>Removed &quot;WeatherType&quot; and &quot;WeatherVersion&quot; variables, these are already encapsolated in the session string WeekendInfo:TrackWeatherType: That can be set to one of:</p><ul><li>&quot;Classic Specified / Dynamic Sky&quot;</li><li>&quot;Classic Generated / Dynamic Sky&quot;</li><li>&quot;Classic Specified / Static Sky&quot;</li><li>&quot;Classic Generated / Static Sky&quot;</li><li>&quot;Realistic&quot;</li><li>&quot;Static&quot;</li><li>&quot;Timeline&quot;</li><li>&quot;Unknown&quot;</li></ul><p>Added irsdk_TrackWetness enum and attached it to the live variable &quot;TrackWetness&quot;, this gives you an estimate of overall track wetness.</p><p>Added &quot;WeatherDeclaredWet&quot; telemetry variable, this is set to true when the marshal allows use of rain tires</p>',7),m={href:"https://forums.iracing.com/discussion/comment/495059/#Comment_495059",target:"_blank",rel:"noopener noreferrer"};function q(k,f){const s=t("Badge"),n=t("ExternalLinkIcon");return r(),c("div",null,[e("h1",u,[e("a",h,[e("span",null,[a("WeatherDeclaredWet "),o(s,{text:"boolean"})])])]),e("div",_,[p,e("p",null,[e("a",m,[a("Source"),o(n)])])])])}const v=i(d,[["render",q],["__file","weatherdeclaredwet.html.vue"]]);export{v as default};
