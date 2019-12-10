---
title: LIBRS Mandatories
layout: default
permalink: /mandatories
---

# LIBRS/NIBRS Mandatories
____

# Error Messages
____

## Structure for Numbering of Mandatory Error Messages

|               1st Character         |     2nd Character    |             3rd Character          |                    4th and 5th Characters                    |
|:-----------------------------------:|:--------------------:|:----------------------------------:|:------------------------------------------------------------:|
|8                                    |1                     |0                                   |00: Overall Data Element Edits all Sections (Except Section 4)|
|**Denotes Mandatory Error Message**  |Section with Mandatory| Error Message Number within Section|   01 - 21<br>Data Elemeber Specific Edits Within Section 4   |

___

## Section (1) Error Message for: Initial Incident Reports

Each incident MUST have the following data elements, or the ENTIRE incident will be REJECTED:

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["81000"] -%}
0 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["81100"] -%}
1 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["81200a"] -%}
2 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["81200b"] -%}
3 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["81400"] -%}
4 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 

___

#### Notes:

**For Error Message 81000:** 
* This edit should identify the missing data element, so the agency can determine which exact data element is missing.  This edit applies to the following Data Elements:<br>  
    * ORI Number (1)
    * Incident Number (2)
    * Incident Date/Hour (3)
    * Cleared Exceptionally (4)
    * Offense Sequence Number (L6)
    * Louisiana Revised Statute (6)
    * Agency Supplied NIBRS Code (N6)*
    * Offense Attempted/Completed (7)
    * Offender Suspected of Using/Gaming Motivation (8)
    * Bias Motivation/Bias Crime Type (8A)
    * Location Type (9)
    * Victim Sequence Number (23)
    * Offense Connected to Victim Sequence Number (24)
    * Type of Victim (25).
    * *** New data element not in previous LIBRS Specifications.**

**For Error Message 81200a:**
* This edit should identify the missing data elements(s), in order for the agency to determine the exact data element that is missing.  Applies to the following Data Elements:<br>
    * Age of Victim [At Time Incident Occurred] (26)
    * Sex of Victim (27)
    * Race of Victim (28)
    * Ethnicity of Victim (29)
    * Resident Status of Victim (30)
    * Offender Sequence Number (36)

**For Error Message 81200b:**
* This edit should identify the missing data elements(s), in order for the agency to determine the exact data element that is missing.  Applies to Data Elements:<br> 
    * Age of Offender [At Time Incident Occurred] (37)
    * Sex of Offender (38)
    * Race of Offender (39)


<br>

## Section (2) Error Message for: Initial Incident Reports Containing Arrestee Segments

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["82000"] -%}
0 | {{error.desc_md2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["82100"] -%}
1 | {{error.desc_md2}} | {{error.err_no}} | {{ error.err_message }} 

___

#### Notes:

**For Error Message 82000:** 
* This edit should identify the missing data element(s), in order for the agency to determine which exact data element is missing. This edit applies to the following Data Elements:  
    * Arrestee Sequence Number (40)
    * Arrest Number/Local Booking Number for Arrest (41)
    * Arrest Date (42)
    * Type of Arrest (43)
    * Multiple Arrestee Segment Indicator (44)
    * Louisiana Revised Statute of Arrest (45)
    * Arrestee Armed With [At Time of Arrest] (46)
    * Age of Arrestee [At Time of Arrest] (47)
    * Sex of Arrestee (48)
    * Race of Arrestee (49)
    * Ethnicity of Arrestee (50)
    * Resident Status of Arrestee (51)

<br>

## Section (3) Error Message for: Subsequent Updates (ADD ARRESTs, MODIFYs, and DELETEs) to Previously Submitted Incidents

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["83100"] -%}
0 | {{error.desc_md3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["83200"] -%}
1 | {{error.desc_md3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["83000"] -%}
2 | {{error.desc_md3}} | {{error.err_no}} | {{ error.err_message }} 

___

#### Notes:

**For Error Message 83100 and 83200:**
*  Are for Updates (ADD ARREST/MODIFY/DELETE) of Arrestee Segments to the Initial Submission of Incident Data.

**For Error Message 83100:** 
* This edit should identify the missing data element(s), in order for the agency to determine which exact data element is missing.  This edit applies to the following Data Elements:  
    * Arrestee Sequence Number (40)
    * Arrest Number/Local Booking Number for Arrest (41)
    * Arrest Date (42)
    * Type of Arrest (43)
    * Multiple Arrestee Segment Indicator (44)
    * Louisiana Revised Statute of Arrest (45)
    * Arrestee Armed With [At Time of Arrest] (46)
    * Age of Arrestee [At Time of Arrest] (47)
    * Sex of Arrestee (48)
    * Race of Arrestee (49)
    * Ethnicity of Arrestee (50)
    * Resident Status of Arrestee (51)

<br>

___

<div class="newpage"></div>

<br>

# NIBRS Mandatories

___

### Subsection 01:  ARSON (200)

___

#### Requirements:

Incidents submitted with an ARSON (Crime Against Property) offense (NIBRS Code “200”) should receive **one** of the following two error messages, as appropriate.

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84001"] -%}
0 | {{error.desc_md4s1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84101"] -%}
1 | {{error.desc_md4s1}} | {{error.err_no}} | {{ error.err_message }} 


___

<br>

___

### Subsection 02: AGGRAVATED ASSAULT, SIMPLE ASSAULT OR INTIMIDATION (13A, 13B and 13C)

___

#### Requirements:

Incidents submitted with an AGGRAVATED ASSAULT, SIMPLE ASSAULT OR INTIMIDATION (Crime Against Person) offense (NIBRS Code 13A, 13B or 13C) should receive one of the following **six** error messages, as appropriate.

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84002"] -%}
0 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84102"] -%}
1 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84202"] -%}
2 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84302"] -%}
3 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84402"] -%}
4 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84502"] -%}
5 | {{error.desc_md4s2}} | {{error.err_no}} | {{ error.err_message }}

<br>

___

<div class="newpage"></div>

### Subsection 03:  BRIBERY (510)

___

#### Requirements:

Incidents submitted with an offense of BRIBERY (Crime Against Property) offense (NIBRS Code “510”) should receive the following **five** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84003"] -%}
0 | {{error.desc_md4s3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84103"] -%}
1 | {{error.desc_md4s3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84203"] -%}
2 | {{error.desc_md4s3}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84303"] -%}
3 | {{error.desc_md4s3}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84403"] -%}
4 | {{error.desc_md4s3}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___


### Subsection 04:  BURGLARY/BREAKING AND ENTERING (220)

___

#### Requirements:

Incidents submitted with a BURGLARY/BREAKING AND ENTERING (Crime Against Property) offense (NIBRS Code 220) should receive the following **six** error messages:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84004"] -%}
0 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84104"] -%}
1 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84204"] -%}
2 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84304"] -%}
3 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84404"] -%}
4 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84504"] -%}
5 | {{error.desc_md4s4}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 05:  COUNTERFEITING/FORGERY (250)

___

#### Requirements:

Incidents submitted with a COUNTERFEITING/FORGERY (Crime Against Property) offense (NIBRS Code 250) should receive the following **four** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84005"] -%}
0 | {{error.desc_md4s5}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84105"] -%}
1 | {{error.desc_md4s5}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84205"] -%}
2 | {{error.desc_md4s5}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84305"] -%}
3 | {{error.desc_md4s5}} | {{error.err_no}} | {{ error.err_message }}

<br>

___


### Subsection 06:  DESTRUCTION/DAMAGE/VANDALISM (290)

___

#### Requirements:

Incidents submitted with a DESTRUCTION/DAMAGE/VANDALISM (Crime Against Property) offense (NIBRS Code 290) should receive one of the following **two** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84006"] -%}
0 | {{error.desc_md4s6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84106"] -%}
1 | {{error.desc_md4s6}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___

<div class="newpage"></div>

### Subsection 07:  DRUG/NARCOTIC VIOLATION (35A) or DRUG EQUIPMENT VIOLATION (35B)

___

#### Requirements:

Incidents submitted with a DRUG/NARCOTIC VIOLATION (Crime Against Society) offense (NIBRS Code 35A) or DRUG EQUIPMENT VIOLATION (Crime Against Society) offense (NIBRS Code 35B) should receive one of the following **four** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84007"] -%}
0 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84107"] -%}
1 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84207"] -%}
2 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84307"] -%}
3 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }}

___

Incidents submitted with a DRUG/NARCOTIC VIOLATION (Crime Against Society) offense (NIBRS Code 35A) should receive the following **three** error messages:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84407"] -%}
0 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84507"] -%}
1 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84607"] -%}
2 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84707"] -%}
3 | {{error.desc_md4s7}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___

<div class="newpage"></div>

### Subsection 08:  EXTORTION/BLACKMAIL (210)

___

#### Requirements:

Incidents submitted with a EXTORTION/BLACKMAIL (Crime Against Property) offense (NIBRS Code 210) should receive the following **five** error messages:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84008"] -%}
0 | {{error.desc_md4s8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84108"] -%}
1 | {{error.desc_md4s8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84208"] -%}
2 | {{error.desc_md4s8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84308"] -%}
3 | {{error.desc_md4s8}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84408"] -%}
4 | {{error.desc_md4s8}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

### Subsection 09: FRAUD OFFENSES (26A-E)

___

#### Requirements:

Incidents submitted with FRAUD OFFENSES (Crimes Against Property) (NIBRS Codes 26A-E) should receive the following **three** error messages:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84009"] -%}
0 | {{error.desc_md4s9}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84109"] -%}
1 | {{error.desc_md4s9}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84209"] -%}
2 | {{error.desc_md4s9}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 10:  GAMBLING OFFENSES (39A-D)

___

#### Requirements:

Incidents submitted with GAMBLING OFFENSES (Crimes Against Society) (NIBRS Codes 39A-D) should receive one of the following two error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84010"] -%}
0 | {{error.desc_md4s10}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84110"] -%}
1 | {{error.desc_md4s10}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84210"] -%}
2 | {{error.desc_md4s10}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___


### Subsection 11:  HOMICIDE OFFENSES (09A, 09B or 09C)

___

#### Requirements:

Incidents submitted with HOMICIDE OFFENSES (Crimes Against Persons) (NIBRS Codes 09A, 09B and 09C) should receive one of the following **five** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84011"] -%}
0 | {{error.desc_md4s11}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84111"] -%}
1 | {{error.desc_md4s11}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84211"] -%}
2 | {{error.desc_md4s11}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84311"] -%}
3 | {{error.desc_md4s11}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84411"] -%}
4 | {{error.desc_md4s11}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 12:  KIDNAPPING/ABDUCTION (100)

___

#### Requirements:

Incidents submitted with KIDNAPPING/ABDUCTION (Crimes Against Person) (NIBRS Code 100) should receive one of the following **eight** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84012"] -%}
0 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84112"] -%}
1 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84212"] -%}
2 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84312"] -%}
3 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84412"] -%}
4 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84512"] -%}
5 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84612"] -%}
6 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84712"] -%}
7 | {{error.desc_md4s12}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___


### Subsection 13:  LARCENY/THEFT OFFENSES (23A-H)

___

#### Requirements:

Incidents submitted with LARCENY/THEFT OFFENSES (NIBRS Codes 23A-H) or EMBEZZLEMENT (NIBRS Code 270) offenses (both Crimes Against Property) should receive the following **three** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84013"] -%}
0 | {{error.desc_md4s13}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84113"] -%}
1 | {{error.desc_md4s13}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84213"] -%}
2 | {{error.desc_md4s13}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 14:  MOTOR VEHICLE THEFT (240)

___

#### Requirements:

Incidents submitted with MOTOR VEHICLE THEFT (Crimes Against Property) (NIBRS Code 240) should receive one of the following **five** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84014"] -%}
0 | {{error.desc_md4s14}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84114"] -%}
1 | {{error.desc_md4s14}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84214"] -%}
2 | {{error.desc_md4s14}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84314"] -%}
3 | {{error.desc_md4s14}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84414"] -%}
4 | {{error.desc_md4s14}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___

### Subsection 15:  PORNOGRAPHY/OBSCENE MATERIAL OFFENSES (370)

___

#### Requirements:

Incidents submitted with PORNOGRAPHY/OBSCENE MATERIAL OFFENSES (Crimes Against Society) (NIBRS Code 370) should receive the following error message, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84015"] -%}
0 | {{error.desc_md4s15}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

### Subsection 16:  PROSTITUTION OFFENSES (40A, 40B)

___

#### Requirements:

Incidents submitted with PROSTITUTION OFFENSES (Crimes Against Society) (NIBRS Codes 40A and 40B) should receive the following error message, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84016"] -%}
0 | {{error.desc_md4s16}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 17:  ROBBERY OFFENSES (120)

___

#### Requirements:

Incidents submitted with ROBBERY OFFENSES (Crimes Against Property) (NIBRS Code 120) should receive one of the following **six** error messages:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84017"] -%}
0 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84117"] -%}
1 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84217"] -%}
2 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84317"] -%}
3 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }}
{% assign error = site.data.error["84417"] -%}
4 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84517"] -%}
5 | {{error.desc_md4s17}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___


### Subsection 18:  SEX OFFENSES – FORCIBLE (11A-D)

___

#### Requirements:

Incidents submitted with SEX OFFENSES - FORCIBLE (Crimes Against Persons) (NIBRS Codes 11A-D) should receive the following **two** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84018"] -%}
0 | {{error.desc_md4s18}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84118"] -%}
1 | {{error.desc_md4s18}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___


### Subsection 19:  SEX OFFENSES – NON-FORCIBLE (36A-36B)

___

#### Requirements:

Incidents submitted with SEX OFFENSES – NON-FORCIBLE (Crimes Against Persons) (NIBRS Codes 36A or 36B) should receive the following two error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84019"] -%}
0 | {{error.desc_md4s19}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84119"] -%}
1 | {{error.desc_md4s19}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___

<div class="newpage"></div>

### Subsection 20:  STOLEN PROPERTY OFFENSES (280)

___

#### Requirements:

Incidents submitted with STOLEN PROPERTY OFFENSES (Crimes Against Property) (NIBRS Code 280) should receive one of the **four** following error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84020"] -%}
0 | {{error.desc_md4s20}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84120"] -%}
1 | {{error.desc_md4s20}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84220"] -%}
2 | {{error.desc_md4s20}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84320"] -%}
3 | {{error.desc_md4s20}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___


### Subsection 21:  WEAPONS LAW VIOLATIONS (520)

___

#### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84021"] -%}
0 | {{error.desc_md4s21}} | {{error.err_no}} | {{ error.err_message }} 


<br>

___


### Subsection 22:  ANIMAL CRUELTY OFFENSES (720)

___

#### Requirements:

When Incidents submitted with ANIMAL CRUELTY OFFENSES (720) (Crimes Against Society) should receive one of the following **two** error messages, as appropriate:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84010"] -%}
0 | {{error.desc_md4s22}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["84110"] -%}
1 | {{error.desc_md4s22}} | {{error.err_no}} | {{ error.err_message }} 

<br>

___
