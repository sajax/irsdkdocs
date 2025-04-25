# YAML Structures

> The session string represents all the details about the current state of iRacing and its current session that don’t need to be updated 60 times a second. For the most part this is a static string that does not change, however it is not guaranteed to be static and in fact will change as drivers register for the session and as the race results are posted. The string is formatted using the YAML format, a nested data format like XML but one that is easily read by a human. The key to this format is that indentation matters, and '-' denotes the start of an array entry.
