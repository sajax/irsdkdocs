# Lap <Badge text="int" />

Lap is the clients lap count. Lap therefore shows the lap number of the clients current lap.

::: danger Race Session Starts
In a Race session the Lap value will act unusually during the race start.

The value will initially start at 0, it will then increment to 1 when the green flag is given. When the client crosses the timing line it will again increment to 2 despite still being the first lap, this is later corrected (around 1 second later) and the value will drop to 1 where it will act as expected from then onwards.
:::

::: tip Developer Post
 There is another bug in there, we have code in place that attempts to detect lap crossings and updates the current lap count right away, instead of waiting a second for the server to update. That code is really flakey and on the first lap it accidentally reports the lap as the second lap, for a second or two. I may try to fix it, but it was not my code and I don't fully understand it yet. Again, I'm sure you all know this I just thought I would clarify.

[Source](https://members.iracing.com/jforum/posts/list/1900/1470675.page#9303688)
:::
