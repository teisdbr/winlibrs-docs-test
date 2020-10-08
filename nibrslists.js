var nibrs = {
    person: "<ul><li><b>09A, 09B</li><li>100</li><li>11A, 11B, 11C, 11D</li><li>13A, 13B, 13C</b></li></ul>",
    assault: "<ul><li><b>13A, 13B, 13C</b></li></ul>",
    homicide: "<ul><li><b>09A, 09C, 09C</b></li></ul>"

};

var weapons = {
    aggAssault: "<ul><li>11/11A Firearm or Automatic Firearm</li><li>12/12A Handgun or Automatic Handgun</li><li>13/13A Rifle or Automatic Rifle</li><li>14/14A Shotgun or Automatic Shotgun</li><li>15/15A Other Firearm or Other Automatic Firearm</li></ul>",
    simAssault: "<ul><li>Personal Weapons (40)</li><li>Other (90)</li><li>Unknown (95)</li></ul>",
    firearms: "<ul><li>11 Firearm (Type not Stated)</li><li>12 Handgun</li><li>13 Rifle</li><li>14 Shotgun</li><li>15 Other Firearm</li></ul>"
}

var derequiresnibrs = {
    de12: "<b><ul><li>250, 280</li><li>35A, 35B</li><li>370, 520, 720</b> (720 is limited to A, I, F, or S)</li><li><b>39C</li><li>90A, 90Z</b> (If 90Z is a Crime Against Property)</li></ul>",
    de12a: "<b><ul><li>09A, 09B</li><li>100, 120</li><li>11A, 11B, 11C, 11D</li><li>13A, 13B, 13C</li></b></li></ul>",
    de13: "<b><ul><li>09A, 09B, 09C</li><li>100, 120</li><li>11A, 11B, 11C, 11D</li><li>13A, 13B</li><li>210, 520</li><li>64A, 64B</b></li></ul>",
    de14: "<b><ul><li>100, 120</li><li>200, 210, 220, 240, 250, 270, 280, 290</li><li>23A, 23B, 23C, 23D, 23E, 23F, 23G, 23H</li><li>26A, 26B, 26C, 26D, 26E</li><li>35A, 35B</li><li>39A, 39B, 39C, 39D</li><li>510</li><li>90A, 90Z</li></ul></b>",
    de31: "<b><ul><li>13A</li><li>09A, 09B or 09C</li></ul></b>",
    de33: "<b><ul><li>100, 120</li><li>11A, 11B, 11C, 11D</li><li>210</li><li>13A, 13B</li><li>90Z</li></ul></b>",
    de34: "<b><ul><li>09A, 09B, 09C</li><li>100, 120</li><li>11A, 11B, 11C, 11D</li><li>13A, 13B, 13C</li><li>36A, 36B</li><li>90Z</b> (If a Crime Against Person)</li></ul>"
}