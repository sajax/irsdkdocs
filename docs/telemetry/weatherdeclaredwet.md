# WeatherDeclaredWet <Badge text="boolean" />

::: tip Developer Post
Ok, I checked in my new weather fix, here are the release notes:

Removed irsdk_WeatherDynamics and irsdk_weatherVersion enum defines.

Removed "WeatherType" and "WeatherVersion" variables, these are already encapsolated in the session string WeekendInfo:TrackWeatherType:
That can be set to one of:

- "Classic Specified / Dynamic Sky"
- "Classic Generated / Dynamic Sky"
- "Classic Specified / Static Sky"
- "Classic Generated / Static Sky"
- "Realistic"
- "Static"
- "Timeline"
- "Unknown"

Added irsdk_TrackWetness enum and attached it to the live variable "TrackWetness", this gives you an estimate of overall track wetness.

Added "WeatherDeclaredWet" telemetry variable, this is set to true when the marshal allows use of rain tires

[Source](https://forums.iracing.com/discussion/comment/495059/#Comment_495059)
:::
