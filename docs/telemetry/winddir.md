# WindDir <Badge text="float" />

- **Unit:** [Radian](https://en.wikipedia.org/wiki/Radian)

Wind direction at start/finish line

## Value Range

The wind direction in iRacing is not limited to a 0 - 360 degree range (or 0 to 6.28319rad).
The wind can make full "rotations" and converted to degrees can return values greater than 360.

For example, a degree value of 540 means the wind has rotated beyond 0/360 another 180 degrees.

To calcuate the current wind angle on a 0 - 360 scale use `WindDir % 360`

### Related

- [AirDensity](airdensity.md)
- [AirPressure](airpressure.md)
- [AirTemp](airtemp.md)
- [FogLevel](foglevel.md)
- [RelativeHumidity](relativehumidity.md)
- [Precipitation](precipitation.md)
- [Skies](skies.md)
- [TrackTempCrew](tracktempcrew.md)
- [WeatherType](weathertype.md)
- [WeatherVersion](weatherversion.md)
- [WindVel](windvel.md)
