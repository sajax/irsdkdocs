# CarLeftRight <Badge text="enum" />

::: tip Developer Post
I'm adding in a new telemetry variable called "CarLeftRight" that tracks the spotters current thoughts on car low/high status. It outputs the following enum:

```
enum irsdk_CarLeftRight
{
irsdk_LROff,
irsdk_LRClear, // no cars around us.
irsdk_LRCarLeft, // there is a car to our left.
irsdk_LRCarRight, // there is a car to our right.
irsdk_LRCarLeftRight, // there are cars on each side.
irsdk_LR2CarsLeft, // there are two cars to our left.
irsdk_LR2CarsRight // there are two cars to our right.
};
```

I changed the name from high/low to left/right since high/low only makes sense on an oval, This does mean on a reversed oval you will need to detect that low means right not left. To help that out I added a new TrackDirection: parameter to the session string that is either left, right or neutral

[Source](https://members.iracing.com/jforum/posts/list/2700/1470675.page#10672145)
:::
