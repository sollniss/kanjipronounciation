# kanjipronounciation
A script to pronounce kanji. Mainly for use in Anki.

**Only works on mobile because Anki desktop doesn't support HTML5 audio tags**

**This also uses your phones data.**

# Usage:
``
<span onClick="playAudio('{{Kanji}}','{{Hiragana}}')">{{Kanji}} - {{Hiragana}}</span>
``

Support `, `  and ` / ` as separators for multiple readings.

寒い - さむい, さぶい  
This will play さむい but not さぶい, because さぶい isn't in the database.

車 - さむい  
This will play nothing.

二重 - にじゅう / ふたえ  
This will play にじゅう and ふたえ with a 0.5s pause inbetween.
