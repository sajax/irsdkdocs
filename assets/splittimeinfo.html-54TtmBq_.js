import{_ as s,r as n,o as c,c as i,a as e,b as t,d as a,w as o,e as l}from"./app-DuzLYwnF.js";const h={},d=l('<h1 id="splittimeinfo" tabindex="-1"><a class="header-anchor" href="#splittimeinfo"><span>SplitTimeInfo</span></a></h1><p>SplitTimeInfo contains the <a href="#sectors">Sectors</a> array of track sectors for the track</p><h2 id="sectors" tabindex="-1"><a class="header-anchor" href="#sectors"><span>Sectors</span></a></h2>',3),p=e("h3",{id:"sectornum",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sectornum"},[e("span",null,"SectorNum")])],-1),f=e("p",null,"Sector order number",-1),m=e("h3",{id:"sectorstartpct",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sectorstartpct"},[e("span",null,"SectorStartPct")])],-1);function _(u,k){const r=n("RouterLink");return c(),i("div",null,[d,e("p",null,[t("Sectors contains an array of sectors for the current track (see "),a(r,{to:"/yaml/weekendinfo.html#trackid"},{default:o(()=>[t("TrackID")]),_:1}),t(") with the following parameters. The number of sectors will vary depending on the track but longer tracks will tend to have more sectors.")]),p,f,m,e("p",null,[t("The percentage of the track before the start of this sector (and therefore the end of the previous). See "),a(r,{to:"/telemetry/lapdistpct.html"},{default:o(()=>[t("LapDistPct")]),_:1}),t(" and "),a(r,{to:"/telemetry/lapdist.html"},{default:o(()=>[t("LapDist")]),_:1}),t(".")])])}const b=s(h,[["render",_],["__file","splittimeinfo.html.vue"]]);export{b as default};