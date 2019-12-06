---
title: LIBRS Mandatories
layout: default
permalink: /mandatories
---

# LIBRS Data Elements
____

# Mandatories
____

## Section (1) Error Message for: Initial Incident Reports

Each incident MUST have the following data elements, or the ENTIRE incident will be REJECTED:

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["81000"] -%}
0 | {{error.desc_md1}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["81100"] -%}
1 | {{error.desc_md1}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["81200a"] -%}
2 | {{error.desc_md1}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["81200b"] -%}
3 | {{error.desc_md1}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["81400"] -%}
4 | {{error.desc_md1}} | {{error.err_no}}| {{ error.err_message }} 

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

## SECTION (2) Error Message for: Initial Incident Reports Containing Arrestee Segments

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["82000"] -%}
0 | {{error.desc_md2}} | {{error.err_no}}| {{ error.err_message }} 
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

## SECTION (3) Error Message for: Subsequent Updates (ADD ARRESTs, MODIFYs, and DELETEs) to Previously Submitted Incidents

____

#### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["83100"] -%}
0 | {{error.desc_md3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["83200"] -%}
1 | {{error.desc_md3}} | {{error.err_no}} | {{ error.err_message }} 

___

#### Notes:

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

## SECTION (4) Data Element MANDATORY Edits 

___

### Subsection 01:  ARSON (200)

___

#### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["84001"] -%}
0 | {{error.desc_md4s1}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84101"] -%}
1 | {{error.desc_md4s1}} | {{error.err_no}} | {{ error.err_message }} 

___

#### Notes:

**For Error Message :** 


<br>