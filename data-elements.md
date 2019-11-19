---
title: Data Elements
layout: default
permalink: /data-elements
---

# LIBRS Data Elements
____

# Data Element Definitions
____

## ORI Number (1)
____

<br>

**Description:** NCIC originating agency identifier number.

**Data Characteristics:** 9 Character Numeric/Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["10001"] -%}
1 | {{error.desc_de1}} | {{error.err_no}}, 11001, 12001, 13001, 14001, 15001, 16001 | {{ error.err_message }} 
{% assign error = site.data.error["10052"] -%}
2 | {{error.desc_de1}} | {{error.err_no}}, 10086, 11004, 12004, 13004, 14004, 15004, 16004 | {{ error.err_message }} 
{% assign error = site.data.error["10059"] -%}
3 | {{error.desc_de1}} | {{error.err_no}} | {{ error.err_message }} 

___

<br>

## Incident Number (2)
___

<br>

**Description:** Agency unique, in-house assigned case number. The Incident Number should contain the current year as part of it when possible to prevent duplication/reuse of incident numbers across different years. 

**Data Characteristics:** 12 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["10001"] -%}
1 | {{error.desc_de2}} | {{error.err_no}}, 11001, 12001, 13001, 14001, 15001, 16001 | {{ error.err_message }} 
{% assign error = site.data.error["10092"] -%}
2 | {{error.desc_de2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["10016"] -%}
3 | {{error.desc_de2}} | {{error.err_no}}, 11016, 12016, 13016, 14016, 15016, 16016 | {{ error.err_message }} 
{% assign error = site.data.error["11017"] -%}
4 | {{error.desc_de2}} | {{error.err_no}}, 11017, 12017, 13017, 14017, 15017, 16017 | {{ error.err_message }} 
{% assign error = site.data.error["10015"] -%}
5 | {{error.desc_de2}} | {{error.err_no}}, 11015, 12015, 13015, 14015, 15015, 16015 | {{ error.err_message }} 
{% assign error = site.data.error["10056"] -%}
6 | {{error.desc_de2}} | {{error.err_no}}, 11015, 12015, 13015, 14015, 15015, 16015 | {{ error.err_message }} 
{% assign error = site.data.error["10087"] -%}
7 | {{error.desc_de2}} | {{error.err_no}}, 11015, 12015, 13015, 14015, 15015, 16015 | {{ error.err_message }} 

___

<br>

**Definitions:** 

**Concept of time and place provides:** If more than one crime was committed by the same person or group of persons and the time and space intervals separating them were insignificant, all of the crimes make up a single incident.

**An incident is considered as one or more offenses committed by the same offender or group of offenders acting in concert at the same time and place.**

Acting in concert requires that the offenders actually commit or assist in the commission of the crime(s). The offenders must be aware of, and consent to, the commission of the crime(s); or, even if non-consenting, their actions assist in the commission of the offense(s). This is important because all of the offenders in an incident are considered to have committed all of the offenses in the incident. If one or more of the offenders did not act in concert, then there is more than one incident involved.

**Same time and place means that the time interval between the offenses and the distancebetween the offenses and the distance between the locations where they occurred were insignificant.**

Normally, the offenses must have occurred during an unbroken time duration and at the same or adjourning location(s). However, incidents can also be comprised of offenses which by their nature involve continuing criminal activity by the same offender(s) at different times and places, as long as the activity is deemed to constitute a single criminal transaction. Regarding these situations, the reporting agency will have to use its best judgment.

___

<br>

## Incident Date/Hour (3)
___

<br>

**Description:** Date and Time when the incident occurred or started, or at the beginning of the time period in which it occurred, or date of report if unknown. If an incident occurred before the agency’s “Base Date” but was NOT reported to LIBRS until after the “Base Date” has been implemented, THIS INCIDENT WILL BE REJECTED. These type of incidents (that is, NOT reported until after your Agency’s “Base Date” was implemented) may require your agency to submit an adjusted UCR Summary form to capture these offenses. 

**Data Characteristics:** 11 Character Alpha

**Format:** MMDDYYYYXHH

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["11001"] -%}
1 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11005"] -%}
2 | {{error.desc_de3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["11018"] -%}
3 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11072"] -%}
4 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11073"] -%}
5 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11070"] -%}
6 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11075"] -%}
7 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["10018"] -%}
8 | Administrative Segments (10) submitted with an Action Type of 'W' (Time-Window Submission) CANNOT have a date in 'Incident Date/Hour' (DE 3) that would be a valid date for an Incident occurring since the agency's Base Date. This is also true for any Administrative Segments (10) subsequently submitted with. ||

**Incident Date/Hour (3)**


9\) Administrative Segments (10) submitted with an Action Type of \"M\"
(Modify) CANNOT change the Incident Date/Hour (3) previously submitted
in the original Incident Report (Action Type of \"I\"). **Error 11061\
**

10\) Administrative Segments (10) submitted with an Action Type of \"M\"
(Modify) CANNOT change the Report Date Indicator (position 51 of the
segment) of Segments which were previously submitted with an Action Type
of \"I\" (Incident Report). **Error 11062**

11\) Administrative Segments (Segment 10) submitted with an Action Type
of \"M\" (Modify) CANNOT change the hour part of Incident Date/Hour (3)
of incidents previously submitted with in the original Incident Report
(Action Type of \"I"). **Error 11063**

> 12\) If HOUR is entered it must be \"00\" through \"23.\" **Error
> 11052**\
> *Note: If the Incident Date occurred at exactly midnight, enter the
> Incident Date as if the time was 1 minute past midnight. (Example: If
> the incident occurred at exactly midnight on Thursday, enter Friday\'s
> date) and 00 for the hour.*
>
> 13\) If the Incident Date is unknown, use the Report Date. Indicate a
> Report Date with an \"R\" in the space before the hour. If this is the
> Incident Date, then leave the \"Report\" indicator blank. **Error
> 11051**














# Control Data Elements
___


## Segment Descriptor (C1)
___

**Data Characteristics:** 2 Character Numeric

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20002"] -%}
2 | {{error.descc1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20015"] -%}
3 | {{error.descc1}} | {{error.err_no}} | {{ error.err_message }} 

<br>

**Allowed Entries for Data Element C1:**

  ||               Segment Descriptors           ||      
  |:--------------------:|:-----------------------------|
  |00                    | Submission Header            |
  |01                    | Zero Records                 |
  |10                    | Administration               |
  |11                    | Administration Modification  |
  |20                    | Offense                      |
  |30                    | Property                     |
  |31                    | Property Description         |
  |32                    | Property Modification        |
  |33                    | Property/Offense             |
  |40                    | Offender                     |
  |41                    | Offender Using               |
  |50                    | Victim                       |
  |51                    | Victim Injury                |
  |52                    | Victim/Offender Relation     |
  |60                    | Arrestee                     |
  |61                    | Arrestee Armed               |
  |62                    | Arrestee Statute             |
  |63                    | Arrestee Modification        |
  |99                    | Submission Trailer           |

<br>

## Submitting Agency (C2)
___

**Data Characteristics:** 20 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20010"] -%}
1 | {{error.descc2}} | {{error.err_no}} | {{ error.err_message }} 

___

<br>

## Submission Date (C3)
___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20025"] -%}
2 | {{error.descc3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20026"] -%}
3 | {{error.descc3}} | {{error.err_no}} | {{ error.err_message }} 

___

<br>

### Reporting Period (C4)
___

**Data Characteristics:** 6 Character Date

**Format:** MMYYYY

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20025"] -%}
2 | {{error.descc4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20026"] -%}
3 | {{error.descc4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20060"] -%}
4 | {{error.descc4}} | {{error.err_no}} | {{ error.err_message }} 

____

<br>

## Action Type (C5)
___

**Data Characteristics:** 1 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc5}} | {{error.err_no}} | {{ error.err_message }} 

<br>

**Allowed Entries for Data Element C5:**

| Action Type                       | Action Performed by LIBRS/NIBRS   
|:---------------------------------:|----------------------------------
 I                                  |**Incident Report** <br>Incident Reports submitted with an Action Type of "I" are new incidents that are being reported to the LIBRS/NIBRS databases for the first time)     
 A                                  | **Add Arrest** <br>Action Type "A" submissions are used to add an arrest to an incident that has previously been reported with an Action Type of "I". Action Type "A" can only be used if incident has already been submitted and there are no changes in other segments of the incident, that is, the agency is simply adding an arrest segment to the already submitted incident      
 M                                  | **Modify** <br>Action Type "M" segments are used for Time-Window Submission correction for an Exceptional Clearance, Recovered Property or Arrests). It can alsobe used to modify exceptional clearance indicator and/or exceptional clearance date when incident has already been submitted.                        
 D                                  | **Delete Action** <br>Type "D" segments are used to delete previously submitted incidents. It is often used when updates or changes are reported to a previously submitted incident. An Action Type "D" segment will delete all existing incident data, allowing the reporting agency to re-submit the incident containing the updated information
 W                                  | **Time-Window Submission** <br>Action Type "W" is used only when reporting an incident that occurred prior to the reporting agency's "base date" as defined in the Guidelines. An agency's base date is usually the date when the agency first started reporting incident-based data to LIBRS/NIBRS. The Time-Window Submission can report one of the following:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Exceptional Clearance<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Exceptional Clearance Date<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Recovered Property<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - An Arrest                  

___

<br>

##  Clearance Indicator (C6)
___

*For Time Window Submissions, ONLY*

**Data Characteristics:** 1 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20002"] -%}
2 | {{error.descc6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["16058"] -%}
3 | {{error.descc6}} | {{error.err_no}} | {{ error.err_message }} 

<br>

**Allowed Entries for Data Element C6:**

  ||Clearance Indicator |  
  ||--------------------- |
  |Y                     |Yes - Submit "Y", if this is the first Arrestee Segment (60) submitted for an Incident. By submitting a "Y", the Arrest clears an Incident that happened prior to the date the agency began submitting Incident-Based Data to the LIBRS/NIBRS system (that is, a Time-Window case that is not on the :LIBRS/NIBRS database).
  |N                     |No - Submit 'N', if a previous Arrest Segment (60) was already submitted for an Incident. (That is, the case has already been cleared for an Incident that occurred since the agency's base data, and is in the LIBRS/NIBRS database).

___

<br>

## Number of Segments Transferred (C7)
___

**Data Characteristics:** 6 Character Numeric

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20030"] -%}
2 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20031"] -%}
3 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 

<br>

**Allowed Entries:** Any integer greater than or equal to 3.

___

<br>

## End of Segment Marker (C8)
___

**Data Characteristics:** 2 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20029"] -%}
2 | {{error.descc8}} | {{error.err_no}} | {{ error.err_message }} 

<br>

**Allowed Entries:** "ZZ" only.

___

<br>

## Padding (C9)

___

**Data Characteristics**: Character Alpha/Numeric

**Requirements:**

Requirement  | Requirement Description | 
:-----------:|-------------------------|
1 | Must be Blank (G) if fixed length records are submitted. MUST be one newline character (ASCII 13; CR, LF, or CRLF) if variable length records are submitted.
2 | If Fixed-Length records are used, add padding from the End of Segment Marker (C8) to exactly column 150.
3 | Segment 00 MUST have both Padding to column 150 and a new line charachter (ASCII 13; CR, LF, or CRLF)

<br>

**Allowed Entries:** Blank spaces or the newline character (ASCII 13).

___

<br>

## Software ID (C10)

___

**Data Characteristics**: 5 Characters Alpha/Numeric

**Requirements:** 

Requirement  | Requirement Description | 
:-----------:|-------------------------|
1 | Contains Identification of software used to generate the LIBRS data submission

___

<br>

## Software Version (C11)
___

**Data Characteristics**: 10 Characters Alpha/Numeric

**Requirements:** 

Requirement  | Requirement Description | 
:-----------:|-------------------------|
1 | Contains Version of software used to generate the LIBRS data submission

___

<br>

## LIBRS Spec Indicator (C12)

___

**\*\*\* New Data Element \*\*\***

**Data Characteristics**: 3 Characters Alpha/Numeric

**Requirements:** 

Requirement  | Requirement Description | 
:-----------:|-------------------------|
1 | Indicates the LIBRS Spec is to be used by WinLIBRS when validating a data submission

___