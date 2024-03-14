import{_ as i,r as t,o,c as l,a as e,b as r,d as a,e as c}from"./app-jq5QALbz.js";const d={},h={id:"carleftright",tabindex:"-1"},u={class:"header-anchor",href:"#carleftright"},m={class:"custom-container tip"},_=c(`<p class="custom-container-title">Developer Post</p><p>I&#39;m adding in a new telemetry variable called &quot;CarLeftRight&quot; that tracks the spotters current thoughts on car low/high status. It outputs the following enum:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>enum irsdk_CarLeftRight
{
irsdk_LROff,
irsdk_LRClear, // no cars around us.
irsdk_LRCarLeft, // there is a car to our left.
irsdk_LRCarRight, // there is a car to our right.
irsdk_LRCarLeftRight, // there are cars on each side.
irsdk_LR2CarsLeft, // there are two cars to our left.
irsdk_LR2CarsRight // there are two cars to our right.
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I changed the name from high/low to left/right since high/low only makes sense on an oval, This does mean on a reversed oval you will need to detect that low means right not left. To help that out I added a new TrackDirection: parameter to the session string that is either left, right or neutral</p>`,4),v={href:"https://members.iracing.com/jforum/posts/list/2700/1470675.page#10672145",target:"_blank",rel:"noopener noreferrer"};function g(f,p){const n=t("Badge"),s=t("ExternalLinkIcon");return o(),l("div",null,[e("h1",h,[e("a",u,[e("span",null,[r("CarLeftRight "),a(n,{text:"enum"})])])]),e("div",m,[_,e("p",null,[e("a",v,[r("Source"),a(s)])])])])}const k=i(d,[["render",g],["__file","carleftright.html.vue"]]);export{k as default};
