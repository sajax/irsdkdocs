# Throttle <Badge text="float" />

Throttle is a float value determined by the percentage of throttle application being applied in-sim after any throttle shaping or automatic lifts/cuts are taken into consideration, with 0 being a closed throttle and 1 being fully open.

For the pedal position please see [ThrottleRaw](throttleraw.md)

::: tip Developer Post
ThrottleRaw, BrakeRaw - These show your raw throttle brake inputs before any throttle shaping, brake force curve, or any lift/cuts from the transmission. So you can think of Throttle being a sensor on the throttle body and throttle raw being a sensor on the pedal. This is handy for the Williams since there are so many lifts and cuts you never can tell what is going on. 

[Source](http://members.iracing.com/jforum/posts/list/1000/1470675.page#7487892)
:::

### Related

* [ThrottleRaw](throttleraw.md)
* [Brake](brake.md)
* [BrakeRaw](brakeraw.md)
* [Clutch](clutch.md)
* [HandBrake](handbrake.md)
* [HandBrakeRaw](handbrakeraw.md)
* [SteeringWheelAngle](steeringwheelangle.md)
* [Gear](gear.md)
