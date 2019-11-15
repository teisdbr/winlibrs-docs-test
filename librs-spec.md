---
title: LIBRS Specifications
layout: default
permalink: /librs-spec
---

# LIBRS Specifications Documentation
This document contains information about the Segments, Data Elements, Requirements, Errors, and Warnings that LIBRS uses in the validation of Incident Data.

## Submission Header (00)
----------------------

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

_____________________________________________________________________________________________________________________
`IMPORTANT: The LIBRS Spec Indicator, C12, is new to LIBRS 2.5, and indicates which LIBRS Specification is to be used by WinLIBRS when validating a data submission. Only two values are accepted: “2.5” or “2.2” indicating the data being submitted conforms to LIBRS Spec 2.5 or 2.2.`

**Errors and Explanations**

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

**Errors and Explanations**

Error Number  | Error Message | Explaination of Error
------------------|-------------------|--------------------------
{% assign error = site.data.error["10055"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc10}}
{% assign error = site.data.error["10075"] -%}
{{error.err_no}} | {{ error.err_message }} | {{error.desc10}}

Administrative Modification (11)
--------------------------------

*For Time-Window Submissions, ONLY.*

  Data Element Number                 Description of Data Element        Position(s)   Length   Format
  ----------------------------------- ---------------------------------- ------------- -------- ---------
  [C1](#segment-descriptor-c1)        Segment Descriptor -- **11**       1-2           2        N
  [C5](#action-type-c5)               Action Type                        3             1        A
  [1](#ori-number-1)                  ORI Number                         4-12          9        A
  [2](#incident-number-2)             Incident Number                    13-24         12       A
  [6](#louisiana-revised-statute-6)   Louisiana Revised Statute Number   25-36         12       A
  \*\*                                Future Expansion Buffer            37-56         20       A
  [C8](#end-of-segment-marker-c8)     End of Segment Marker              57-58         2        A
  [C9](#padding-c9)                   Padding                            59-150        \*\*     **A/N**

Error

**[Number\_\_\_]{.underline} [Error and
Explanation\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_]{.underline}**

**11060 Incident not on File. Administrative Segment (10 and 11)
submitted with an Action Type of \"M\" (MODIFY) must already be on file
with *ORI Number* (Data Element No. 1) and Incident Number (Data Element
No. 2.**

**11069 Time-Window (Segment 11) being modified must have Louisiana
Revised Statute Number (LRS No.).**

**\
**
