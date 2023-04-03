---
sidebarDepth: 3
---

# DriverInfo

Description of DriverInfo

[[toc]]

## DriverCarSLShiftRPM

Description of DriverCarSLShiftRPM

## DriverPitTrkPct

## DriverCarSLLastRPM

## DriverHeadPosZ

## DriverCarFuelMaxLtr

## DriverCarIdleRPM

## DriverCarEstLapTime

## DriverSetupPassedTech

## DriverHeadPosX

## DriverCarIdx

## DriverSetupIsModified

## DriverCarSLBlinkRPM

## DriverSetupLoadTypeName

## DriverCarRedLine

## DriverCarFuelKgPerLtr

## DriverCarSLFirstRPM

## DriverSetupName

## DriverIncidentCount

## DriverUserID

## DriverHeadPosY

## PaceCarIdx

## DriverCarMaxFuelPct

## Drivers <Badge text="Array" />

Each driver/team in the event has an entry in this Array. Their position in this Array is referred to elsewhere in parameters using the Idx suffix.

* [PaceCarIdx](#pacecaridx) gives the array position of the Pace Car entry
* [DriverCarIdx](#drivercaridx) and [PlayerCarIdx](/telemetry/playercaridx.md) gives the array position of the client entry

### AbbrevName

### CarClassColor

### CarClassID

### CarClassLicenseLevel

### CarClassMaxFuelPct

### CarClassRelSpeed

### CarClassShortName

### CarClassWeightPenalty

### CarDesignStr

### CarID

### CarIdx

### CarIsAI

### CarIsPaceCar

### CarNumber

### CarNumberDesignStr

### CarNumberRaw

Useful for using the [CamSwitchNum](/telemetry/camswitchnum.md) broadcast command. Car numbers can be prefixed with zero's and you can pass CarNumberRaw to the command as a parameter.

::: tip Developer Post
Internally a car number is padded so that leading zeros are encoded in the upper bits of the number. So something like 1001 is really 01... I suppose I could output the raw car number to telemetry along with the string representation.

[Source](https://members.iracing.com/jforum/posts/list/1175/1470675.page#8242093)
:::

::: tip Developer Post
Ok, I added a 'carNumRaw:' param to the yaml string that just shows the number without decoding the leading zeros. I will try to get that pushed out in the next maintenance build. 
 
[Source](https://members.iracing.com/jforum/posts/list/1200/1470675.page#8242111)
:::

### CarPath

### CarScreenName

### CarScreenNameShort

### CarSponsor_1

### CarSponsor_2

### ClubName

### CurDriverIncidentCount

### DivisionName

### HelmetDesignStr

### IRating

### Initials

### IsSpectator

### LicColor

### LicLevel

### LicString

### LicSubLevel

### SuitDesignStr

### TeamID

### TeamIncidentCount

### TeamName

### UserID

### UserName
