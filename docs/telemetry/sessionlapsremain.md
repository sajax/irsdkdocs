# SessionLapsRemain <Badge text="Deprecated" type="danger"/> <Badge text="int" />

::: tip Developer Post
 I did find a bug in SessionLapsRemaining, it is off by one. You all probably figured this out already but you have to add 1 to it to match the black box. The reason is that I accidentally used the leaders current lap and not the leaders last lap when calculating how many laps were used up. I was thinking of fixing this, but it probably would break a lot of code.

[Source](https://members.iracing.com/jforum/posts/list/1900/1470675.page#9303688)
:::
