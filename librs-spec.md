---
title: LIBRS Specifications
layout: default
permalink: /librs-spec
---

# LIBRS Specifications Documentation
This document contains information about the Segments, Data Elements, Requirements, Errors, and Warnings that LIBRS uses in the validation of Incident Data.

<br>

## Submission Header (00)
___

**\*\*\* Indicated Cells are either New or Modified Data Elements beginning with LIBRS Spec 2.5 \*\*\***

  Data Element Number             |         Description of Data Element       |  Position(s)  |  Length  |  Format  
  :--------------------------------:|-------------------------------------------|:-------------:|:--------:|:--------:
  [C1](#segment-descriptor-c1)    |   Segment Descriptor - **00**             |    1-2        |   2      |    N     
  [C3](#submission-date-c3)       |   Submission Date                         |    23-30      |   8      |    D     
  [C2](#submitting-agency-c2)     |   Submitting Agency                       |    3-22       |   20     |    A     
  [C4](#reporting-period-c4)      |   Reporting Period                        |    31-36      |   6      |    D     
  [C10](#software-id-c10)         |   Software ID                             |    37-41      |   5      |   A/N    
  [C11](#software-version-c11)    |   Software Version                        |    42-51      |   10     |   A/N    
  [C12](#librs-spec-indicator-c12)|   LIBRS Spec Indicator **\*\*\*New\*\*\***|    52-54      |   3      |   A/N    
  \*\*                            |   Future Expansion Buffer                 |    55-56      |   2      |    A     
  [C8](#end-of-segment-marker-c8) |   End of Segment Marker                   |    57-58      |   2      |    A     
  [C9](#padding-c9)               |   Padding                                 |    59-150     |   \*\*   |  **A/N** 

<br>

`IMPORTANT: The LIBRS Spec Indicator, C12, is new to LIBRS 2.5, and indicates which LIBRS Specification is to be used by WinLIBRS when validating a data submission. Only two values are accepted: “2.5” or “2.2” indicating the data being submitted conforms to LIBRS Spec 2.5 or 2.2.`

<br>

### Errors and Explanations


Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["10090"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc00}}
{% assign error = site.data.error["10091"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc00}}
{% assign error = site.data.error["10093"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc00}}
{% assign error = site.data.error["10094"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc00}}
{% assign error = site.data.error["90038"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc00}}

___

<br>

## Administrative (10)
___

  |           Data Element Number                  |Description of Data Element                     |Position(s)|Length|Format|
  |:------------------------------------------------:|------------------------------------------------|:-----------:|:------:|:------:|
  |[C1](#segment-descriptor-c1)                    |Segment Descriptor - **10**                     |   1-2     |  2   |  N  |
  |[C5](#action-type-c5)                           |Action Type                                     |    3      |  1   |  A      |
  |[1](#ori-number-1)                              |ORI Number                                      |   4-12    |  9   |  A      |
  |[2](#incident-number-2)                         |Incident Number                                 |  13-24    |  12  |  A      |
  |[L53](#location-of-incident-l53)                |Location of Incident (Geographical Coordinates) |  25-36    |  12  |  **A/N**|
  |[L54](#stationdivisionprecinct-identifier-l54)  |Station/Division/Precinct Identifier            |  37-42    |  6   |  A      |
  |[3](#incident-datehour-3)                       |Incident Date/Hour                              |  43-53    |  11  |  A      |
  |[4](#cleared-exceptionally-4)                   |Cleared Exceptionally                           |    54     |  1   |  A      |
  |[5](#exceptional-cleared-date-5)                |Exceptional Clearance Date                      |  55-62    |  8   |  D      |
  |\*\*                                            |Future Expansion Buffer                         |  63-82    |  20  |  A      |
  |[C8](#end-of-segment-marker-c8)                 |End of Segment Marker                           |  83-84    |  2   |  A      |
  |[C9](#padding-c9)                               |Padding                                         |  85-150   | \*\* |  **A/N**|

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["10055"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc10}}
{% assign error = site.data.error["10075"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc10}}

___

<br>


## Administrative Modification (11)
___

*For Time-Window Submissions, ONLY.*

   Data Element Number                 |Description of Data Element       | Position(s)   | Length   | Format
  :-----------------------------------:|----------------------------------|:-------------:|:--------:|:---------:
   [C1](#segment-descriptor-c1)        |Segment Descriptor -- **11**      | 1-2           | 2        | N
   [C5](#action-type-c5)               |Action Type                       | 3             | 1        | A
   [1](#ori-number-1)                  |ORI Number                        | 4-12          | 9        | A
   [2](#incident-number-2)             |Incident Number                   | 13-24         | 12       | A
   [6](#louisiana-revised-statute-6)   |Louisiana Revised Statute Number  | 25-36         | 12       | A
   \*\*                                |Future Expansion Buffer           | 37-56         | 20       | A
   [C8](#end-of-segment-marker-c8)     |End of Segment Marker             | 57-58         | 2        | A
   [C9](#padding-c9)                   |Padding                           | 59-150        | \*\*     | **A/N**


<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["11060"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc11}}
{% assign error = site.data.error["11069"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc11}}

___

<br>

## Offense (20) 
___
**\*\*\* Indicated Cells are either New or Modified Data Elements beginning with LIBRS Spec 2.5 \*\*\***

   Data Element Number                                                  | Description of Data Element                            | Position(s)   | Length   | Format
  :--------------------------------------------------------------------:|--------------------------------------------------------|:-------------:|:--------:|:---------:
   [C1](#segment-descriptor-c1)                                         | Segment Descriptor - **20**                            | 1-2           | 2        | N
   [C5](#action-type-c5)                                                | Action Type                                            | 3             | 1        | A
   [1](#ori-number-1)                                                   | ORI Number                                             | 4-12          | 9        | A
   [2](#submitting-agency-c2)                                           | Incident Number                                        | 13-24         | 12       | A
   [L6](#offense-sequence-number-l6)                                    | Offense Sequence Number                                | 25-27         | 3        | N
   [6](#louisiana-revised-statute-6)                                    | Louisiana Revised Statute Number                       | 28-39         | 12       | A
   [7](#offense-attemptedcompleted-7)                                   | Offense Attempted/Completed                            | 40            | 1        | A
   [24](#victim-sequence-number-24)                                     | Offense Connected to Victim Sequence Number            | 41-43         | 3        | N
   [9](#location-type-9)                                                | Location Type                                          | 44-45         | 2        | N
   [10](#number-of-premises-entered-10)                                 | Number of Premises Entered                             | 46-47         | 2        | A/N
   [11](#method-of-entry-11)                                            | Method of Entry                                        | 48            | 1        | A
   [12](#type-of-criminal-activitygang-information-nos.-1-2-and-3-12)   | Type of Criminal Activity/Gang Information No. 1       | 49            | 1        | A
   [12](#type-of-criminal-activitygang-information-nos.-1-2-and-3-12)   | Type of Criminal Activity/Gang Information No. 2       | 50            | 1        | A
   [12](#type-of-criminal-activitygang-information-nos.-1-2-and-3-12)   | Type of Criminal Activity No. 3                        | 51            | 1        | A
   [13](#type-of-weaponforce-involved-nos.-1-2-and-3-13)                | Type of Weapon/Force Involved No. 1                    | 52-54         | 3        | A
   [13](#type-of-weaponforce-involved-nos.-1-2-and-3-13)                | Type of Weapon/Force Involved No. 2                    | 55-57         | 3        | A
   [13](#type-of-weaponforce-involved-nos.-1-2-and-3-13)                | Type of Weapon/Force Involved No. 3                    | 58-60         | 3        | A
   **[N6](#agency-supplied-nibrs-code-n6)**                             | **Agency Supplied NIBRS Code** **\*\*\*New\*\*\***     | **61-63**     | **3**    | **A**
   **70**                                                               | **Inchoate** **\*\*\*New\*\*\***                       | **64**        | **1**    | **A**
   \*\*                                                                 | Future Expansion Buffer                                | 65-80         | 16       | A
   [C8](#end-of-segment-marker-c8)                                      | End of Segment Marker                                  | 81-82         | 2        | A
   [C9](#padding-c9)                                                    | Padding                                                | 83-150        | \*\*     | **A/N**

<br>

`Note: Submit one Offense Segment for *each* LRS Code, and one for *each* Victim in an Incident.`

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["22075"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc20}}
{% assign error = site.data.error["90026"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc20}}

___

<br>

## Property (30)

___


   Data Element Number                            | Description of Data Element          | Position(s)   | Length   | Format
  :----------------------------------------------:|--------------------------------------|:-------------:|:--------:|:---------:
   [C1](#segment-descriptor-c1)                   | Segment Descriptor - **30**          | 1-2           | 2        | N
   [C5](#action-type-c5)                          | Action Type                          | 3             | 1        | A
   [1](#ori-number-1)                             | ORI Number                           | 4-12          | 9        | A
   [2](#incident-number-2)                        | Incident Number                      | 13-24         | 12       | A
   [18](#number-of-stolen-vehicles-18)            | Number of Stolen Motor Vehicles      | 25-26         | 2        | A/N
   [19](#number-of-recovered-motor-vehicles-19)   | Number of Recovered Motor Vehicles   | 27-28         | 2        | A/N
   \*\*                                           | Future Expansion Buffer              | 29-48         | 20       | A
   [C8](#end-of-segment-marker-c8)                | End of Segment Marker                | 49-50         | 2        | A
   [C9](#padding-c9)                              | Padding                              | 51-150        | \*\*     | A/N

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["10074"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc30}}
{% assign error = site.data.error["10076"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc30}}

___

<br>

## Property Description (31)
___

   Data Element Number                  | Description of Data Element    | Position(s)   | Length   | Format
  :------------------------------------:|--------------------------------|:-------------:|:--------:|:---------:
   [C1](#segment-descriptor-c1)         | Segment Descriptor - **31**    | 1-2           | 2        | N
   [C5](#action-type-c5)                | Action Type                    | 3             | 1        | A
   [1](#ori-number-1)                   | ORI Number                     | 4-12          | 9        | A
   [2](#incident-number-2)              | Incident Number                | 13-24         | 12       | A
   [14](#type-of-property-loss-14)      | Type of Property Loss / Etc.   | 25            | 1        | N
   [15](#property-description-15)       | Property Description Type      | 26-27         | 2        | A/N
   [16](#value-of-property-16)          | Value of Property              | 28-36         | 9        | N
   [17](#date-recovered-17)             | Date Recovered                 | 37-44         | 8        | D
   [20](#suspected-drug-type-20)        | Suspected Drug Type            | 45-46         | 2        | A
   [21](#estimated-drug-quantity-21)    | Estimated Drug Quantity        | 47-59         | 13       | A/N
   [22](#type-drug-measurement-22)      | Type Drug Measurement          | 60-61         | 2        | A
   [P1](#property-sequence-number-p1)   | Property Sequence Number       | 62-64         | 3        | N
   \*\*                                 | Future Expansion Buffer        | 65-81         | 17       | A
   [C8](#end-of-segment-marker-c8)      | End of Segment Marker          | 82-83         | 2        | A
   [C9](#padding-c9)                    | Padding                        | 84-150        | \*\*     | A/N

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["13043"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc31}}
{% assign error = site.data.error["90018"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc31}}

___

<br>

## Property Modification (32)
___

*For Time-Window Submissions, ONLY.*

   Data Element Number                 | Description of Data Element        | Position(s)   | Length   | Format
  :-----------------------------------:|------------------------------------|:-------------:|:--------:|:---------:
   [C1](#segment-descriptor-c1)        | Segment Descriptor - **32**        | 1-2           | 2        | N
   [C5](#action-type-c5)               | Action Type ("W" or "M", only)     | 3             | 1        | A
   [1](#ori-number-1)                  | ORI Number                         | 4-12          | 9        | A
   [2](#incident-number-2)             | Incident Number                    | 13-24         | 12       | A
   [6](#louisiana-revised-statute-6)   | Louisiana Revised Statute Number   | 25-36         | 12       | A
   \*\*                                | Future Expansion Buffer            | 37-56         | 20       | A
   [C8](#end-of-segment-marker-c8)     | End of Segment Marker              | 57-58         | 2        | A
   [C9](#padding-c9)                   | Padding                            | 59-150        | \*\*     | A/N

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["13071"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc32}}
{% assign error = site.data.error["13077"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc32}}

___

<br>

## Property/Offense (33)

**\*\*\* Indicated Cells are either New or Modified Data Elements beginning with LIBRS Spec 2.5 \*\*\***

   Data Element Number                                  | Description of Data Element                                       | Position(s)       | Length       | Format
  :----------------------------------------------------:|-------------------------------------------------------------------|:-----------------:|:------------:|:---------:
   [C1](#segment-descriptor-c1)                         | Segment Descriptor - **33**                                       | 1-2               | 2            | N
   [C5](#action-type-c5)                                | Action Type                                                       | 3                 | 1            | A
   [1](#ori-number-1)                                   | ORI Number                                                        | 4-12              | 9            | A
   [2](#incident-number-2)                              | Incident Number                                                   | 13-24             | 12           | A
   **[P1R](#property-sequence-number-reference-p1r)**   | **Property Sequence Number Reference \*\*\*Modified\*\*\***       | **25-27**         | **3**        | **A**
   **[L6R](#offense-sequence-number-reference-l6r)**    | **Offense Sequence Number Reference \*\*\*Modified\*\*\***        | **28-30**         | **3**        | **A**
   \*\*                                                 | Future Expansion Buffer                                           | 31-50             | 20           | A
   [C8](#end-of-segment-marker-c8)                      | End of Segment Marker                                             | 51-52             | 2            | A
   [C9](#padding-c9)                                    | Padding                                                           | 53-150            | \*\*         | **A/N**

<br>

`The Property/Offense Segment is used to connect incident property (stolen, retrieved, etc.) to an offense. This connection, or relationship, is established using the Property Sequence Number (Data Element P1) and the Offense Sequence Number (Data Element L6).`

`This Segment *is optional* in the sense that if it is missing LIBRS will interpret properties to offenses automatically using a cross product (EG all offenses are associated with all properties). Depending on the Offenses in the Incident, this can cause LIBRS to infer properties to incompatible Offenses. `

`LIBRS uses the NIBRS Code of the Offenses to determine if it should apply properties to them to minimize the cases that this happens in. However, there are some NIBRS Codes that include both 'Crimes Against People' and 'Crimes Against Property' Offenses (EG: 13B Contains both LRS 14:35 (Simple Battery - Crime Against Person) as well as LRS 14:60 (Aggravated Burglary - Crime Against Property)) that break this assumption.`

#### Successful Segment 33 Inference Example
An incident is submitted with a NIBRS 23H 'Crime Against Property' Offense, as well as a NIBRS 11A 'Crime Against Person' Offense, along with one or more properties that are intended to be linked to the 23H Offense. Since NIBRS 11A has no related Offenses that are a 'Crime Against Property', if Segment 33 is missing LIBRS knows that it should not apply the properties to the 11A Offense. As a result, LIBRS will only infer the properties to be related to the 23H Offense, successfully validating the Incident submission.

#### Unsuccessful Segment 33 Inference Example
An incident is submitted with a NIBRS 23H 'Crime Against Property' Offense, as well as a NIBRS 13B 'Crime Against Person' Offense, along with one or more properties that are intended to be linked to the 23H Offense. Since 13B has some offenses that are 'Crime Against Property', if Segment 33 is missing LIBRS cannot know that it shouldn't apply the properties to the 13B Offense. As a result, LIBRS will interpret all properties to be related to all offenses, which in this case will throw validation errors. 

**Therefore it is always recommended to submit a Segment 33 with the Incident ir order to more accurately report the Offenses**

<br>

### Errors and Explanations

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["90023"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc33}}

<br>

#### INVALID Combinations of NIBRS Offense Codes and Property Descriptions
There are a number of illogical combinations for various NIBRS Offense Codes (Data Element 6) having certain Property Descriptions (Data Element 15). For example, it is illogical for Purse Snatching (NIBRS Code 23B) to be connected to property having a Property Description data value of Aircraft (01) or Livestock (18). The table below shows invalid combinations of NIBRS Offense Codes and Property Descriptions. X's on this table represent that the combination of the Property Description and NIBRS Code are incompatible and should **NOT** be used together. 

   Invalid Property Descriptions       | 220               |     23A   |     23B   |     23C   |     23D   |     23E   |     23F   |     23G   |     23H   |   240
  :-----------------------------------:|:-----------------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:
   01                                  |                   | **X**     | **X**     | **X**     |           |           |           |           |           | 
   03                                  |                   | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | 
   04                                  |                   | **X**     | **X**     |           |           |           |           |           |           | 
   05                                  |                   | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | 
   12                                  |                   | **X**     | **X**     | **X**     |           |           |           |           |           | 
   15                                  |                   | **X**     | **X**     | **X**     |           |           |           |           |           | 
   18                                  |                   | **X**     | **X**     | **X**     |           |           |           |           |           | 
   24                                  |                   | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | 
   28                                  |                   | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | 
   29                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   30                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   31                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   32                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   33                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   34                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   35                                  | **X**             | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     |           | **X**
   37                                  |                   | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | **X**     | 
   39                                  |                   | **X**     | **X**     | **X**     |           |           |           |           |           | 
   78                                  |                   | **X**     | **X**     |           |           |           |           |           |           | 
   
___