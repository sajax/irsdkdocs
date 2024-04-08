import{_ as p,r as o,o as r,c,a as s,b as a,d as n,e}from"./app-DuzLYwnF.js";const l={},d=s("h1",{id:"sessioninfo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sessioninfo"},[s("span",null,"SessionInfo")])],-1),u=s("p",null,[a("SessionInfo contains a single child paramter of "),s("a",{href:"#sessions"},"Sessions"),a(". Sessions contains an Array of all the sessions to be run during the duration of the server.")],-1),h={id:"sessions",tabindex:"-1"},b={class:"header-anchor",href:"#sessions"},k=e('<p>Each session in the array can have the following paramters. Some parameters may not calculate until the session has concluded.</p><h3 id="resultsaveragelaptime" tabindex="-1"><a class="header-anchor" href="#resultsaveragelaptime"><span>ResultsAverageLapTime</span></a></h3><h3 id="resultsfastestlap" tabindex="-1"><a class="header-anchor" href="#resultsfastestlap"><span>ResultsFastestLap</span></a></h3><h3 id="resultslapscomplete" tabindex="-1"><a class="header-anchor" href="#resultslapscomplete"><span>ResultsLapsComplete</span></a></h3><h3 id="resultsnumcautionflags" tabindex="-1"><a class="header-anchor" href="#resultsnumcautionflags"><span>ResultsNumCautionFlags</span></a></h3><h3 id="resultsnumcautionlaps" tabindex="-1"><a class="header-anchor" href="#resultsnumcautionlaps"><span>ResultsNumCautionLaps</span></a></h3><h3 id="resultsnumleadchanges" tabindex="-1"><a class="header-anchor" href="#resultsnumleadchanges"><span>ResultsNumLeadChanges</span></a></h3><h3 id="resultsofficial" tabindex="-1"><a class="header-anchor" href="#resultsofficial"><span>ResultsOfficial</span></a></h3><h3 id="sessionlaps" tabindex="-1"><a class="header-anchor" href="#sessionlaps"><span>SessionLaps</span></a></h3><h3 id="sessionname" tabindex="-1"><a class="header-anchor" href="#sessionname"><span>SessionName</span></a></h3><h3 id="sessionnum" tabindex="-1"><a class="header-anchor" href="#sessionnum"><span>SessionNum</span></a></h3><h3 id="sessionnumlapstoavg" tabindex="-1"><a class="header-anchor" href="#sessionnumlapstoavg"><span>SessionNumLapsToAvg</span></a></h3><h3 id="sessionrungroupsused" tabindex="-1"><a class="header-anchor" href="#sessionrungroupsused"><span>SessionRunGroupsUsed</span></a></h3><h3 id="sessionskipped" tabindex="-1"><a class="header-anchor" href="#sessionskipped"><span>SessionSkipped</span></a></h3><h3 id="sessionsubtype" tabindex="-1"><a class="header-anchor" href="#sessionsubtype"><span>SessionSubType</span></a></h3><h3 id="sessiontime" tabindex="-1"><a class="header-anchor" href="#sessiontime"><span>SessionTime</span></a></h3><h3 id="sessiontrackrubberstate" tabindex="-1"><a class="header-anchor" href="#sessiontrackrubberstate"><span>SessionTrackRubberState</span></a></h3>',17),m={class:"custom-container tip"},f=e(`<p class="custom-container-title">Developer Post</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;clean&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">15</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;slight usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">28</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;low usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">42</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;moderately low usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;moderate usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">71</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;moderately high usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">84</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;high usage&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>baseRubberPct <span class="token operator">&lt;=</span> <span class="token number">95</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;extensive usage&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//if(baseRubberPct &gt;95)</span>
  <span class="token keyword">return</span> <span class="token string">&quot;maximum usage&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"https://members.iracing.com/jforum/posts/list/2025/1470675.page#9450524",target:"_blank",rel:"noopener noreferrer"},x=s("h3",{id:"sessiontype",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sessiontype"},[s("span",null,"SessionType")])],-1),g={id:"resultspositions",tabindex:"-1"},_={class:"header-anchor",href:"#resultspositions"},y=e('<h4 id="caridx" tabindex="-1"><a class="header-anchor" href="#caridx"><span>CarIdx</span></a></h4><h4 id="classposition" tabindex="-1"><a class="header-anchor" href="#classposition"><span>ClassPosition</span></a></h4><h4 id="fastestlap" tabindex="-1"><a class="header-anchor" href="#fastestlap"><span>FastestLap</span></a></h4><h4 id="fastesttime" tabindex="-1"><a class="header-anchor" href="#fastesttime"><span>FastestTime</span></a></h4><h4 id="incidents" tabindex="-1"><a class="header-anchor" href="#incidents"><span>Incidents</span></a></h4><h4 id="jokerlapscomplete" tabindex="-1"><a class="header-anchor" href="#jokerlapscomplete"><span>JokerLapsComplete</span></a></h4><h4 id="lap" tabindex="-1"><a class="header-anchor" href="#lap"><span>Lap</span></a></h4><h4 id="lapscomplete" tabindex="-1"><a class="header-anchor" href="#lapscomplete"><span>LapsComplete</span></a></h4><h4 id="lapsdriven" tabindex="-1"><a class="header-anchor" href="#lapsdriven"><span>LapsDriven</span></a></h4><h4 id="lapsled" tabindex="-1"><a class="header-anchor" href="#lapsled"><span>LapsLed</span></a></h4><h4 id="lasttime" tabindex="-1"><a class="header-anchor" href="#lasttime"><span>LastTime</span></a></h4><h4 id="position" tabindex="-1"><a class="header-anchor" href="#position"><span>Position</span></a></h4><h4 id="reasonoutid" tabindex="-1"><a class="header-anchor" href="#reasonoutid"><span>ReasonOutId</span></a></h4><h4 id="reasonoutstr" tabindex="-1"><a class="header-anchor" href="#reasonoutstr"><span>ReasonOutStr</span></a></h4><h4 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>Time</span></a></h4>',15);function S(R,w){const t=o("Badge"),i=o("ExternalLinkIcon");return r(),c("div",null,[d,u,s("h2",h,[s("a",b,[s("span",null,[a("Sessions "),n(t,{text:"Array"})])])]),k,s("div",m,[f,s("p",null,[s("a",v,[a("Source"),n(i)])])]),x,s("h3",g,[s("a",_,[s("span",null,[a("ResultsPositions "),n(t,{text:"Array"})])])]),y])}const L=p(l,[["render",S],["__file","sessioninfo.html.vue"]]);export{L as default};
