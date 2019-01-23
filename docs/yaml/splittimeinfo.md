---
sidebarDepth: 3
---

# SplitTimeInfo

SplitTimeInfo contains the [Sectors](#sectors) array of track sectors for the track

## Sectors

Sectors contains an array of sectors for the current track (see [TrackID](/yaml/weekendinfo.md#trackid)) with the following parameters. The number of sectors will vary depending on the track but longer tracks will tend to have more sectors.

### SectorNum

Sector order number

### SectorStartPct

The percentage of the track before the start of this sector (and therefore the end of the previous). See [LapDistPct](/telemetry/lapdistpct.md) and [LapDist](/telemetry/lapdist.md).
