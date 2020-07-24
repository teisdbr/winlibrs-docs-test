---
title: LIBRS Frequently Asked Questions
layout: default
permalink: /faq
---

# LIBRS FAQ

This page contains the questions and responses we've gotten from vendors and users over the years about LIBRS. This is an ever-growing list, so if you don't see an answer you need feel free to reach out. 

<br>

## Questions from Vendors

### Offenses (Segment 20)

For Segment 20 (Offense), there is a Victim Sequence Number. Does that mean there can be multiple Segment 20's per incident and that each victim (Segment 50) needs to have a Segment 20 associated with them?

* Yes, because each Offender (Segment 40) can be implicated in multiple Offenses and can be related to multiple Victims, each Offense (Segment 20) must be tied to one (1) Victim Sequence Number. This means if you have three (3) Victims of the same offense in your RMS, you will require three Offense Segments. (Segment 20)

____

### Properties (Segments 30, 31, 32, and 33)

* Since there is not a limit to how many Segment 31's that can be entered, can there be duplicate property description types allowed for same incident? Example, if in the same incident three (3) TV's were damaged, Would there be 3 Segment 31's with same Property Description Type and Property Loss Type?
  * Yes, since they are three distinct properties you will need to include three distinct Segment 31's (Property Description). You can handle that in your RMS however you want, so long as LIBRS gets sent the three segments (EG: If your RMS wants to store the property once and list it three times in the Incident, so long as we get those three segments to say that there are three TV's then it doesn't matter to us if you use the same property in the RMS or make three different ones.)

____

### Offenders (Segments 40 and 41)

* Can there be up to four (4) Segment 41's for each Segment 40?
  * Correct, you can include as many Segment 41's (up to four) as are relevant with each offense. 
    * One thing to note is that 'G - Gaming Activity Motivate for Crime' is not a NIBRS Reportable code. 
      * If more than one Motivation Type is supplied and one of them is 'G', then it will simply be left off the NIBRS Submission Data. 
      * If 'G' is the only Motivation Type supplied, then it will be converted to 'N - Not Applicable' when the data is sent to the FBI. 

____

### Victims (Segments 50, 51, and 52)

* If there are multiple injuries, does that mean there will be multiple Segment 51's for each Segment 50?

  * Yes, you can include up to five (5) Segment 51's (Victim Injury) as needed. However, the selected Injury types will need to be valid for the NIBRS Offense Code. 
    * For example, the two of the valid Injury Types for NIBRS 13A are 'O - Other Major Injury', and 'U - Unconsciousness', while 'M - Apparent Minor Injury' is not. 
      * If you were to send us two Segment 51's for the same Victim Sequence number where the Injury Types are 'O' and 'U', we **would not reject the incident**. 
      * However, if one of those Segment 51's were to have an Injury Type of 'M', instead, then we would reject it because that's not a valid Injury Type for the NIBRS 13A, even though the other Injury Type is valid.  

  

* If there are multiple Victim/Offender Relationships, will there be multiple Segment 52's for each Segment 50?

  * Yes, You'll need to add a Segment 52 for each Victim/Offender Relationship. 

    * For example, if there are two Victims, and three Offenders, you would have the following Segment 52's:

      ```
      52ILAXXXXXXX20-000000-01001001%%                    ZZ
      52ILAXXXXXXX20-000000-01001002%%                    ZZ
      52ILAXXXXXXX20-000000-01001003%%                    ZZ
      52ILAXXXXXXX20-000000-01002001%%                    ZZ
      52ILAXXXXXXX20-000000-01002002%%                    ZZ
      52ILAXXXXXXX20-000000-01002003%%                    ZZ
      ```

      Where LAXXXXXXXX is the Agency's ORI Number, and %% is the Victim/Offender Relationship Type. The first three Segments relate Victim 001 to each of the Offenders, and the last three Segments related Victim 002 to each of the Offenders. 

