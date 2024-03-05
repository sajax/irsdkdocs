# WeatherVersion <Badge text="int" />

## irsdk_WeatherVersion

| Name                                | Value | Description                                                                              |
| ----------------------------------- | ----- | ---------------------------------------------------------------------------------------- |
| irsdk_WeatherVersion_Classic        | 0     | Default init in replays prior to W2 being rolled out (no rain)                           |
| irsdk_WeatherVersion_ForecastBased  | 1     | Usual way to handle realistic weather in W2                                              |
| irsdk_WeatherVersion_StaticTest_Day | 2     | W2 version of "WEATHER_DYNAMICS_GENERATED_FIXEDSKY" that adds possibility of track water |
| irsdk_WeatherVersion_TimelineBased  | 3     | A timeline of desired specific events in W2                                              |

### Related

- [WeatherType](weathertype.md)
