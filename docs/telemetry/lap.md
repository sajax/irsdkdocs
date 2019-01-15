# Lap <Badge text="int" />

Lap description

::: danger Race Sessions
In a Race session the Lap value will act unusually during the race start.

The value will initially start at 0, it will then increment to 1 when the green flag is given. When the client crosses the timing line it will again increment to 2 despite still being the first lap, this is later corrected (around 1 second later) and the value will drop to 1 where it will act as expected from then onwards.
:::
