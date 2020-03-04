---
sidebarDepth: 3
---

# SessionInfo

SessionInfo contains a single child paramter of [Sessions](#sessions). Sessions contains an Array of all the sessions to be run during the duration of the server.

## Sessions <Badge text="Array" />

Each session in the array can have the following paramters. Some parameters may not calculate until the session has concluded.

### ResultsAverageLapTime

### ResultsFastestLap

### ResultsLapsComplete

### ResultsNumCautionFlags

### ResultsNumCautionLaps

### ResultsNumLeadChanges

### ResultsOfficial

### SessionLaps

### SessionName

### SessionNum

### SessionNumLapsToAvg

### SessionRunGroupsUsed

### SessionSkipped

### SessionSubType

### SessionTime

### SessionTrackRubberState

::: tip Developer Post
``` js
if(baseRubberPct <= 4)
  return "clean";
if(baseRubberPct <= 15)
  return "slight usage";
if(baseRubberPct <= 28)
  return "low usage";
if(baseRubberPct <= 42)
  return "moderately low usage";
if(baseRubberPct <= 57)
  return "moderate usage";
if(baseRubberPct <= 71)
  return "moderately high usage";
if(baseRubberPct <= 84)
  return "high usage";
if(baseRubberPct <= 95)
  return "extensive usage";
//if(baseRubberPct >95)
  return "maximum usage";
```

[Source](https://members.iracing.com/jforum/posts/list/2025/1470675.page#9450524)
:::

### SessionType

### ResultsPositions <Badge text="Array" />

#### CarIdx

#### ClassPosition

#### FastestLap

#### FastestTime

#### Incidents

#### JokerLapsComplete

#### Lap

#### LapsComplete

#### LapsDriven

#### LapsLed

#### LastTime

#### Position

#### ReasonOutId

#### ReasonOutStr

#### Time
