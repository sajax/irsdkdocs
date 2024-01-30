# EngineWarnings <Badge text="bitfield" />

| Name                        | Value      | Description |
|-----------------------------|------------|-------------|
| irsdk_waterTempWarning      | 0x0001     |             |
| irsdk_fuelPressureWarning   | 0x0002     |             |
| irsdk_oilPressureWarning    | 0x0004     |             |
| irsdk_engineStalled         | 0x0008     |             |
| irsdk_pitSpeedLimiter       | 0x0010     |             |
| irsdk_revLimiterActive      | 0x0010     |             |
| irsdk_oilTempWarning        | 0x0010     |             |

::: tip Developer Post

The irsdk_waterTempWarning is probably not something you want to use, I have it set to >110 C, but each car sets its own threshold somewhere between 110 C and 130 C. It is good enough if you don't want to be accurate.

I'm going to go ahead and add in a irsdk_oilTempWarning = 0x040 value, that will trigger at 125 C, with all current cars triggering somewhere between 125 C and 140 C.

There is not currently a clean way for me to pull the actual lamp bit, or the temperature limit. But I will put this on the back burner and try to think up a better way to get the data. 

[Source](https://members.iracing.com/jforum/posts/list/3675/1470675.page#12383105)
:::


