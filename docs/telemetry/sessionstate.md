# SessionState <Badge text="bitfield" />

## irsdk_SessionState

| Name                | Value      | Description |
|---------------------|------------|-------------|
| irsdk_StateInvalid     | 0x00000001 | Session is in an invalid state |
| irsdk_StateGetInCar    | 0x00000002 | Session gridding |
| irsdk_StateWarmup      | 0x00000004 | Session warmup |
| irsdk_StateParadeLaps  | 0x00000008 | Session pace lap(s) |
| irsdk_StateRacing      | 0x00000010 | Session racing (Green Flag)            |
| irsdk_StateCheckered   | 0x00000010 | Session racing complete (Checkered Flag)            |
| irsdk_StateCoolDown    | 0x00000010 | Session complete, no cars on track            |
