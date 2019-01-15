# SessionFlags <Badge text="bitfield" />

SessionFlags are the SDK representation of the flags shown to the user in the user interface, the flags also include the status of the starting lights shown in the UI.

Waving flags are shown as flashing flag graphics in the iRacing Sim Interface.

## irsdk_Flags

| Name                | Value      | Description |
|---------------------|------------|-------------|
| irsdk_checkered     | 0x00000001 | Client is being shown the checkered (Race Finished) flag |
| irsdk_white         | 0x00000002 | Client is being shown the white (1 lap to go) flag |
| irsdk_green         | 0x00000004 | Client is being shown the green (start or restart) flag |
| irsdk_yellow        | 0x00000008 | Client is being shown the yellow (local yellow) flag |
| irsdk_red           | 0x00000010 |             |
| irsdk_blue          | 0x00000020 | Client is being shown the blue (lapping car behind) |
| irsdk_debris        | 0x00000040 |             |
| irsdk_crossed       | 0x00000080 |             |
| irsdk_yellowWaving  | 0x00000100 | Client is being shown the yellow (flashing local yellow) flag |
| irsdk_oneLapToGreen | 0x00000200 |             |
| irsdk_greenHeld     | 0x00000400 |             |
| irsdk_tenToGo       | 0x00000800 |             |
| irsdk_fiveToGo      | 0x00001000 |             |
| irsdk_randomWaving  | 0x00002000 |             |
| irsdk_caution       | 0x00004000 | Full Course Caution |
| irsdk_cautionWaving | 0x00008000 | Full Course Caution being established |
| irsdk_black         | 0x00010000 | Client has a black (penalty) flag |
| irsdk_disqualify    | 0x00020000 | Client has been disqualified (removed from track) |
| irsdk_servicible    | 0x00040000 |             |
| irsdk_furled        | 0x00080000 |             |
| irsdk_repair        | 0x00100000 |             |
| irsdk_startHidden   | 0x10000000 |             |
| irsdk_startReady    | 0x20000000 |             |
| irsdk_startSet      | 0x40000000 |             |
| irsdk_startGo       | 0x80000000 |             |

::: warning irsdk_white
Is not a guarantee this is the last lap. If the client passes the overall leader before the timing line the white flag will be withdrawn
:::
