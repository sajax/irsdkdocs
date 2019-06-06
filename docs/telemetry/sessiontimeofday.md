# SessionTimeOfDay <Badge text="int" />

SessionTimeOfDay is the number of seconds that have passed since midnight, this value already adjusts for the [EarthRotationSpeedupFactor](/yaml/weekendinfo.md#earthrotationspeedupfactor) value.

The value will revert back to 0 at midnight but the [Date](/yaml/weekendinfo.md#date) string will not update to reflect the change in date.