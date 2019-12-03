# Contexts

The iRacing Simulator is complex and has a varitey of modes or contexts which can affect how variables or items in the SDK act. Where the values of a variable may vary or act differently from a standard Test Session, Open Practice or Race Session we hope to note in the description page for that variable.

[[toc]]

## Simulator Modes

iRacing provides offline or demonstrator simulators to companies (such as the Nascar Hall of Fame) that may differ from the consumer version provided with the subscription. Unless you are developing for these then iRacing should be running in *consumer* mode.

You can verify using [WeekendInfo](/yaml/weekendinfo.md) -> [WeekendOptions](/yaml/weekendinfo.md#weekendoption) -> [CommercialMode](/yaml/weekendinfo.md#commercialmode)

## Simulator States

In addition to the normal state (user connected to session as driver), there are several other options

### Replay from disk

Replays (Documents/iRacing/replays/*.rpy) will provide basic SDK access, some variables may not be available or will be returning incorrect values.

You can verify using [WeekendInfo](/yaml/weekendinfo.md) -> [SimMode](/yaml/weekendinfo.md#simmode)

### Spectator & Ghost Driving

Spectators act like normal clients except they will not appear in any results or standings information. The client will still have an entry under the [DriverInfo](/yaml/driverinfo.md) section and with Ghost Driving will be able to drive on track but no race control features will be available (such as lap timing).

### Spotting

Spotters acts like a Team session but a spotter will be unable to take over control of the car or ghost drive.

### TestDrive

During maintenance periods iRacing enables access to their [TestDrive](https://testdrive.iracing.com/) portal which allows members to launch offline test sessions, this currently includes the ability to lauch test sessions using content members have downloaded but not purchased.

In a session launched from TestDrive no identity information (including name, customer id...) will be available during these sessions, instead only placeholder or zero values will be available.

## Race Modes

### Team Racing

Team Racing allows multiple usesr to share a car during a session if enabled.

[WeekendInfo](/yaml/weekendinfo.md) -> [TeamRacing](/yaml/weekendinfo.md#teamracing)

During a Team Racing session the entry information under [DriverInfo](/yaml/driverinfo.md) -> [Drivers](/yaml/driverinfo.md#Drivers) will change when drivers are swapped. Any parameters pertaining to the driver and not the car will change (e.g. [UserName](/yaml/driverinfo.md#UserName) or [UserID](/yaml/driverinfo.md#UserID))

### Heat Racing

Heat Racing allows multiple race sessions in a single event if enabled.

[WeekendInfo](/yaml/weekendinfo.md) -> [HeatRacing](/yaml/weekendinfo.md#heatracing)

During a Heat Racing session

* In practice sessions drivers may be split into run groups. Seperate run groups will not see each other on track
* CONSOLATION races may be skipped
* Not all drivers may race in the final or consolation races

## Session Type

### Offline Testing

### Open Practice

### Open Qualifying

### Lone Qualifying

### Indy 500 Qualifying

### Race

### Time Trial

### Time Attack
