---
title: LIBRS Data Element Definitions
layout: default
permalink: /data-element-definitions
---

# LIBRS Data Elements
____

# Data Element Definitions
____

#### This page contains information about the specific requirements that go into each of the LIBRS Data Elements. For the short list of available values for each Data Element, go [here](./data-element-values).

<br>

## ORI Number (1)
____

**Description:** NCIC originating agency identifier number.

**Data Characteristics:** 9 Character Numeric/Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["10001"] -%}
1 | {{error.desc_de1}} | {{error.err_no}}, 11001, 12001, 13001, 14001, 15001, 16001 | {{ error.err_message }} 
{% assign error = site.data.error["10052"] -%}
2 | {{error.desc_de1}} | {{error.err_no}}, 10086, 11004, 12004, 13004, 14004, 15004, 16004 | {{ error.err_message }} 
{% assign error = site.data.error["10059"] -%}
3 | {{error.desc_de1}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes: 
* `This is the 9-character NCIC Originating Agency Identifier (ORI) assigned to every law enforcement agency in Louisiana. For state or local agency submissions, the last two positions must be "00".`

<br>

<div class="newpage"></div>

## Incident Number (2)
___

**Description:** Agency unique, in-house assigned case number. The Incident Number should contain the current year as part of it when possible to prevent duplication/reuse of incident numbers across different years. 

**Data Characteristics:** 12 Character Alpha

### Requirements:
___

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

### Notes: 
* `Incident Number is the reporting agency's UNIQUE, in-house assigned case number. It is used to link subsequent update submissions to the original submission. This number will be encrypted prior to any dissemination of data to ensure that the recipient cannot identify the actual case. `

### Definitions:

**Concept of time and place provides:** If more than one crime was committed by the same person or group of persons and the time and space intervals separating them were insignificant, all of the crimes make up a single incident.

**An incident is considered as one or more offenses committed by the same offender or group of offenders acting in concert at the same time and place.**

Acting in concert requires that the offenders actually commit or assist in the commission of the crime(s). The offenders must be aware of, and consent to, the commission of the crime(s); or, even if non-consenting, their actions assist in the commission of the offense(s). This is important because all of the offenders in an incident are considered to have committed all of the offenses in the incident. If one or more of the offenders did not act in concert, then there is more than one incident involved.

**Same time and place means that the time interval between the offenses and the distancebetween the offenses and the distance between the locations where they occurred were insignificant.**

Normally, the offenses must have occurred during an unbroken time duration and at the same or adjourning location(s). However, incidents can also be comprised of offenses which by their nature involve continuing criminal activity by the same offender(s) at different times and places, as long as the activity is deemed to constitute a single criminal transaction. Regarding these situations, the reporting agency will have to use its best judgment.

___

<br>

<div class="newpage"></div>

## Incident Date/Hour (3)
___

**Description:** Date and Time when the incident occurred or started, or at the beginning of the time period in which it occurred, or date of report if unknown. If an incident occurred before the agency’s “Base Date” but was NOT reported to LIBRS until after the “Base Date” has been implemented, THIS INCIDENT WILL BE REJECTED. These type of incidents (that is, NOT reported until after your Agency’s “Base Date” was implemented) may require your agency to submit an adjusted UCR Summary form to capture these offenses. 

**Data Characteristics:** 11 Character Alpha

**Format:** MMDDYYYYXHH

### Important Note:
* In the process to certify an agency as LIBRS-compliant, when an agency reaches the Certification and Production stages, please note the following: 
  * The “Base Date” for an agency is the date that agency starts sending actual, live “production” data that is kept on both LIBRS (state) and NIBRS (FBI) databases.
  * If an incident occurred before the agency’s “Base Date”, but was not reported to LIBRS until after your “Base Date” has been implemented; or this incident was already reported in the UCR summary reports, this incident will be REJECTED **(Error 11073)**.
  * If this happens, contact a member of the LIBRS staff at the Louisiana Commission on Law Enforcement.
  * If this incident was not reported until after your “Base Date” was implemented, your agency may have to submit an adjusted UCR summary form to capture these offenses.

### Requirements:
___

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
8 | Administrative Segments (10) submitted with an Action Type of 'W' (Time-Window Submission) CANNOT have a date in 'Incident Date/Hour' (DE 3) that would be a valid date for an Incident occurring since the agency's Base Date. This is also true for any Administrative Segments (10) subsequently submitted with. 
{% assign error = site.data.error["11061"] -%}
9 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11062"] -%}
10 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11063"] -%}
11 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11052"] -%}
12 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11051"] -%}
13 | {{error.desc_de3}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:

* `This data element is to be used to enter the month, day, year and hours when the incident occurred or started, or the beginning of the time period in which it occurred. "Military" twenty-four (24) hour time is to be used.`
* `If the incident occurred on or between midnight and 0059, enter "00" for the hour; if on or between 0100 and 0159, enter "01" for the hour if on or between 2300 and 2359, enter "23" for the hour, etc.`
* `If the incident occurred at exactly midnight, it is considered to have occurred at the beginning of the next day.  Therefore "00" should be entered for the hour, along with the next day's date.`
* `If the incident date is unknown, enter the date of the report with the indicator "R" = Report.  Otherwise leave the report column nine (9) blank.`
* `If the incident hour is unknown, leave the hour blank.`
* `When LIBRS requires a Blank (G), it must be a Blank (G), NOT A ZERO.`

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | If a robbery occurred at 9:30 p.m. on July 2, 2014, the entry should be '07022014G21' (where 'G' is a blank).
2 | If a kidnaping started at 11:30 p.m. on November 1, 2014, and ended at 6:00 p.m., on November 16, 2014, the entry should be '11012014G23' (where 'G' is a blank).
3 | If the date and hour of the incident are unknown, but the date of the report was March 15, 2014, the entry should be '03152014RGG' (where 'G' is a blank).
4 | If a burglary occurred sometime between 11:15 A.M. on June 24, 2014, and 4:30 P.M. on June 26, 2014, the entry should be 06242014G11 (where "G" is a blank).
5 | If a rape occurred on November 15, 2013, but was not reported until January 15, 2014, this incident would reject if your agency's "Base Date" is December 1, 2013. This incident would not have been reported on your Return A (or whatever other forms would be applicable) for the month of November or for the month of December of 2013.<br><br>If your agency submits this incident to LIBRS with an incident date of 11/15/2013, it would REJECT. It would reject because the Incident Date is prior to the date your agency's data is being kept by the LIBRS and NIBRS databases.<br><br>Since this incident CANNOT be accepted into LIBRS and has not been reported to UCR summary, an adjustment would have to be made on UCR Summary forms that apply.

___

<br>

<div class="newpage"></div>

## Cleared Exceptionally (4)
___

**Description:** Indicates whether the incident was cleared exceptionally. Clearance of one offense clears the entire incident. 

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["11001"] -%}
1 | {{error.desc_de4}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11004"] -%}
2 | {{error.desc_de4}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["11053"] -%}
3 | {{error.desc_de4}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11071"] -%}
4 | {{error.desc_de4}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11064"] -%}
5 | {{error.desc_de4}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11054"] -%}
6 | {{error.desc_de4}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `The Cleared Exceptionally data element indicates if the incident has been cleared by an exceptional event such as the death of the offender, and if so, the reason for the clearance.  In multiple offense incidents, the exceptional clearance of one offense clears the entire incident.  An incident CANNOT BE CLEARED EXCEPTIONALLY if it was previously, or at the same time, cleared by an arrest, (that is, if an Arrestee Segment was or is being submitted).`
* `In order to clear an offense by exceptional means, ALL of the following four conditions must be met:`
	* `The investigation must have clearly and definitely established the identity of at least one offender.`
	* `Sufficient probable cause must have been developed to support the arrest, charging, and prosecution of the offender.`
	* `The exact location of the offender must be known so that an arrest could be made.`
	* `There must be a reason outside the control of law enforcement that prevents arresting, charging, and prosecuting the offender.`
* `DO NOT report exceptional clearance information for justifiable homicide, as no crimes have occurred, in reality.`
* `The closing of a case or the clearing of it by an agency's policy does not permit exceptionally clearing an offense unless all four conditions are met.`

### Allowed Entries
___

Enter one code per incident.

<table class="de-table">
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Cleared Exceptionally Indicators</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '4' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

____

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | A kidnapper holding a hostage killed himself when the building in which he barricaded himself was surrounded by police. The kidnaping is cleared exceptionally under, 'Death of the Offender'.

___

<br>

<div class="newpage"></div>

## Exceptional Cleared Date (5)

**Data Characteristics**: 8 Character Date

**Format:** MMDDYYYY

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["11055"] -%}
1 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11056"] -%}
2 | {{error.desc_de5}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["11005"] -%}
3 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11057"] -%}
4 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11020"] -%}
5 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11066"] -%}
6 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11067"] -%}
7 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["11074"] -%}
8 | {{error.desc_de5}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `If an incident was cleared by exceptional means, then the month, day and year when the incident was cleared is to be entered into this data element.`

### Examples:
___


Example Number | Description
:-------------:|:-----------
1 | The incident was cleared on the books of the reporting agency on May 27. It was entered into the local computer on June 6, 2019, and was submitted to LIBRS sometime in July of 2019. The date '05272019' should be entered into this data element.

___

<br>

<div class="newpage"></div>

## Offense Sequence Number (L6)
___

**Data Characteristics:** 3 Character Numeric

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_del6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["15002"] -%}
2 | {{error.desc_del6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["25001"] -%}
3 | {{error.desc_del6}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `Each offense in an incident must be assigned a unique sequence number from "001" to "999".`

___

<br>

## Offense Sequence Number Reference (L6R)
___

**Data Characteristics:** 3 Character Numeric

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["90021"] -%}
1 | {{error.desc_del6r}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["90022"] -%}
2 | {{error.desc_del6r}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["90024"] -%}
3 | {{error.desc_del6r}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `There is no UNIQUE constraint for the Offense Sequence Number Reference (L6R). This allows for an Offense to relate to many properties if multiple Property/Offense segments are submitted within a single incident.`

<br>

<div class="newpage"></div>


## Louisiana Revised Statute (6)
___

**Data Characteristics**: 12 Character Alpha

**Format**: TT:SSSS.S/P-I

||Louisiana Revised Statute Format
:--------------------------------:|-----------------------------------
TT                                | Title                             
SSSS.S                            | Section                           
**PPP/I**                         | Subpart, **or**<br>Subpart with Qualifier, **or**<br>Qualifier, **or**<br>Juvenile Qualifier, **and** An Inchoate Modifier, if applicable, would be indicated<br>by a dash with a data value behind the LRS Code that defines the offense.**                        |

<br>

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_del6r}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["90022"] -%}
2 | {{error.desc_del6r}} | {{error.err_no}} | {{ error.err_message }} 

___

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | When 14:42 is submitted as a Louisiana Revised Statute LRS (6), LIBRS will need Qualifiers to determine if the offense should be classified as a forcible rape or as a forcible sodomy. If the offense is submitted as a **14:42/V**, this would translate to a forcible rape offense, whereas if this offense is submitted as a **14:42/A** this would translate to a forcible sodomy offense.<br><br>Without any Qualifiers, LIBRS has no way to determine which offense this LRS should be reported as, and the entire incident would be rejected. The agency will receive the following error message: 'This LRS Code must be submitted with a Qualifier to define offense applicable.'
2 | If an incident involved a robbery (14:64) and a forcible rape (**14:42.1/V**), two LRS offenses should be submitted. The 14:64 does not require any Qualifier, but the 14:42.1 does require a Qualifier.
3 | If two females were raped in an incident, two LRS offenses should be submitted for rape: One LRS should be reported for each victim -- in this case, both LRS codes should be submitted as 14:42.1/V for Victim 001 and **14:42.1/V** for Victim 002)
4 | 14:59/A1  --  In this example, “A1" refers to Subpart A, Paragraph 1 of the LRS, and would be reported to the FBI as being in the category of All Other Offenses (NIBRS 90Z).
5 | 14:59/A9  --  In this example, “A9" refers to the Subpart A, Paragraph 9 and would be reported to the FBI as being in the category of Weapon Law Violation (NIBRS 520).
6 | 14:228/A6  --  In this example, "A6" refers to the Subpart A, Paragraph 6 of the LRS, and with no Qualifier would be reported to the FBI as All Other Larceny (NIBRS 23H). 
7 | 14:228/A6Y  --  In this examle"A6" refers to the Subpart A, Paragraph 6 of the LRS, and with a Qualifier of "Y", would be reported to the FBI as Destruction/Damage/Vandalism of Property (NIBRS 290)
8 | 14:90/G  --  “G” refers to a Qualifier (see Qualifier List) and would be reported to the FBI as the offense of Betting/Wagering (NIBRS 39A).
9 | 14:51/U  --  “U” refers to a Qualifier (see Qualifier List) and would be reported to the FBI as the offense of Arson (NIBRS 200).
10 | If the LRS offense is Aggravated Assault (14:87.2/F) and the Offender or the Arrestee was responsible for Accessory After the Fact then the agency would submit the following: 14:87.2/F-A. This will be reported to the FBI as an Aggravated Assault, Accessory After the Fact as the offense and for LIBRS reporting this will be considered as All Other Offenses (NIBRS 90Z).


<br>

**Refer to the Master LIBRS/LRS Code Table to determine:**
- LRS Codes that are accepted
- What offense the LRS code was assigned: NIBRS Code determines offense to be reported.
- Index Class assigned to each LRS
- IBR and NIBRS rankings.

____


<div class="newpage"></div>


#### Warning Messages will be returned for the following LRS codes:

LRS Code | Description | Warning Number | Warning Message
:-------:|:------------|:--------------:|:----------------
{% assign error = site.data.error["22125"] -%}
14:30.1 | With no Qualifier will be reported to the FBI as Murder and Non-negligent Homicide (NIBRS 09A)| {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22025"] -%}
14:32.1 | With no Qualifier will be reported to the FBI as Driving Under the Influence (NIBRS 90D) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22030"] -%}
14:44.1 | With no Qualifier will be reported to the FBI as Kidnaping (NIBRS 100) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22130"] -%}
14:60 | With no Qualifier will be reported to the FBI as a Robbery (NIBRS 120) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22035"] -%}
14:65.1 | With no Qualifier will be reported to the FBI as a Purse Snatching (NIBRS 23B) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22135"] -%}
14:70.4 | With no Qualifier will be reported to the FBI as a Credit Card/Automatic Teller Machine Fraud (NIBRS 26B) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22140"] -%}
14:70.5 | With no Qualifier will be reported to the FBI as Bribery (NIBRS 510) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22040"] -%}
14:93 | With no Qualifier will be reported to the FBI as a Family Offense Nonviolent (NIBRS 90F) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22045"] -%}
14:107.1 | With no Qualifier will be reported to the FBI as All Other Offenses (NIBRS 90Z) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22050"] -%}
14:129.1 | With no Qualifier will be reported to the FBI as a Simple Assault (NIBRS 13B) | {{error.err_no}}| {{ error.err_message }} 

___

#### Hard-Coded Edits for LRS Codes Without a Property Description-Based Qualifier:

LRS Code | Description | Warning Number | Warning Message
:-------:|:------------|:--------------:|:----------------
14:67 | When submitted with no Qualifier will be reported to the FBI as All Other Larceny-Theft (NIBRS 23H)
{% assign error = site.data.error["22055"] -%}
14:67 | When submitted with no Qualifier AND Property Description (DE 15) is other than: '03', '04', '05', '24', '28', '37' or '38'  | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22060"] -%}
14:67 | When LRS 14:67 is submitted with no Qualifier AND Property Description (DE 15) is "38", the offense will be reported to the FBI as Theft of Motor Vehicle Parts (NIBRS 23G) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22065"] -%}
14:67 | When LRS 14:67 is submitted with no Qualifier AND Property Description (DE 15) is "03", "05", "24", "28", or "37", the offense will be reported to the FBI as Motor Vehicle Theft (240) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22070"] -%}
14:67 | When LRS 14:67 is submitted with no Qualifier AND Property Description (DE 15) is "04", the offense will be reported as Theft of a Bicycle | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22071"] -%}
14:68 | LRS 14:68 will be reported to the FBI as All Other Larceny-Theft (NIBRS 23H) | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22072"] -%}
14:68 | When LRS 14:68 is submitted AND Property Description (DE 15) is “03", “05", “24", “28" or “37", Motor Vehicle Theft (NIBRS 240) | {{error.err_no}}| {{ error.err_message }} 

____

#### Allowed Entries for Juvenile Qualifiers:

LIBRS accepts the following juvenile specific reportable offenses that are NOT part of the list of LRS codes. Agency should submit the following codes in this data element for juvenile specific offenses:

LRS Code | Description | NIBRS | Crime Against
:-------:|:------------|:-----:|:------------:
JU:CUR	| Juvenile Curfew Violations will be reported to the FBI as Curfew/Loitering/Vagrancy violations | 90B | Society
JU:RUN	| Juvenile Runaways will be reported to the FBI under Runaways offense | 90I | Society - Not a crime
JU:TRU	| Juvenile Truancy will be reported to the FBI as All Other Offenses | 90Z | Society - Not a Crime
JU:UNG	| Juvenile Ungovernables will be reported to the FBI under Disorderly Conduct Offense | 90C | Society

___

#### LRS Qualifiers List
 
Qualifiers must be associated with the LRS codes as shown in the LIBRS/LRS Master Code Table.  Only the combinations shown in the table below qualify as a valid entry in Data Element # 6 (LRS of Offense) and Data Element # 45 (LRS of Arrest Offense).  An agency CANNOT append these Qualifiers to any LRS Code to classify offense to be reported, unless it is a valid LRS Code combination as classified on the LIBRS/LRS Master Code Table.

Qualifier | Description | NIBRS Description | NIBRS Code | Crime Against
:--------:|:------------|:------------------|:----------:|:-------------:
AA | Vehicular Homicide with Intent to Kill  | Murder and Nonnegligent Manslaughter | 09A | Person
A | Anal penetration - Anal sexual intercourse with another person, forcibly and/or against that person's will; or not forcibly or against the persons will where the victim is incapable of giving consent because of his/her youth or because of his/her temporary or permanent mental or physical incapacity | Forcible Sodomy | 11B | Person 
B | Theft from Building - A theft from within a building which is either open to the general public or where the offender has legal access. | Theft from Building | 23D | Property
C | Theft from Coin Operated Machine - Theft from a machine or device which is operated or activated by the use of coins. | Theft from Coin Operated Machine | 23E | Property
D | Drug/Narcotic Violations - Offender unlawfully distributes or dispenses a controlled dangerous substance to a recipient or to another who subsequently distributes or dispenses such controlled dangerous substance, which is the direct cause of the death of the person who ingested or consumed the controlled dangerous substance.  | Drug/Narcotic Violations | 35A | Society 
E | Embezzlement - Unlawful misappropriation by an offender to his/her own use or purpose of money, property, or some other thing of value entrusted to his/her care, custody, or control.  |Embezzlement | 270 | Property
F | Actual Force Used Against a Victim or Threat of Force Displaying a Weapon - Might be used to determine if a purse snatching is to be reported as Strong Arm Robbery 14:65.1/F, or as Larceny Theft 14:65.1  | Aggravated Assault, Person, or Robbery | 13A or 120 | Person
FR | Fraud - False Pretense/Swindle/Confidence Game  Intentional misrepresentation of existing fact or condition, or the use of some other deceptive scheme or device, to obtain money, goods, or other things of value.  |False Pretense/Swindle/Confidence Game | 26A | Property
G | Betting and Wagering - To unlawfully stake money or something else of value on the happening of an uncertain event or on the ascertainment of a fact in dispute. |Betting/Wagering | 39A | Society
H | Inhabited Dwelling - Structure occupied as a place of settled residence or habitat lived in regularly or routinely. Arson reporting | Arson | 200 | Property
I | Immovable Structures - Fixed permanent or immovable things; include house trailer or houseboat if used as permanent dwelling. <br><br>Burglary: Unlawful entry into a building or other structure with intent to commit a felony or a theft <br><br> Trespass of Real Property: To unlawfully enter land, a dwelling, or other real property | Burglary or Trespass of Real Property | 220 or 90J | Property or Society
J | Self Inflicted Serious Bodily Injuries  | All Other Offenses | 90Z | Person
JU:CUR | Juvenile Curfew Violations - will be reported to the FBI as curfew/loitering/ vagrancy violations | Curfew/Loitering/Vagrancy Violations | 90B | Society 
JU:RUN | Juvenile Runaways - will be reported to the FBI under Runaways offense | Runaway | 90I | Society - Not a Crime
JU:TRU | Juvenile Truancy - Absent from school without permission. | All Other Offenses |90Z | Society - Not a Crime
JU:UNG | Juvenile Ungovernables - will be reported to the FBI as Disorderly Conduct |Disorderly Conduct | 90C | Society
K | Pocket Picking - Theft of articles from another person's physical possession by stealth where the victim usually does not become immediately aware of the theft |Pocket Picking | 23A | Property
L | Murder and Non Negligent Manslaughter - Willful nonnegligent killing of one human being by another human being live born not an embryo or fetus in utero |Murder and Non-Negligent Manslaughter | 09A | Person
M | Movable Structures - Tents, boats, airplanes, lawnmowers, hand tools, farm and construction equipment, etc... not permanent dwellings | Larceny Theft - All Other Larceny | 23H | Property
N | Rubbing/Touching - No actual penetration 'indecent liberties', 'child molesting', no elements of 11A, 11B or 11C were applicable | Forcible Fondling | 11D | Person
0 | Oral Intercourse - Oral sexual intercourse with another person, forcibly and/or against that person's will.  Or, not forcibly or against the persons will where the victim is incapable of giving consent because of his/her youth or because of his/her temporary or permanent mental or physical incapacity |Forcible Sodomy | 11B | Person
P | Sexual Assault With an Object - To use an object or instrument to unlawfully penetrate, however slightly, the genital or anal opening of the body of another person, forcibly and/or against that person's will.  Or, not forcibly or against the persons will where the victim is incapable of giving consent because of his/her youth or because of his/her temporary or permanent mental or physical incapacity |Sexual Assault With an Object | 11C | Person 
Q | Victim Had Offender Inflict Serious Bodily Injuries to Him/Her - Victim made the offender inflict injuries to his/her person no intent on part of the offender |Aggravated Assault | 13A | Person
R | Operating/Assisting Gambling - To unlawfully operate, promote, or assist in the operation of a game of chance |Operating/Promoting/ Assisting Gambling | 39B | Property
S | Shoplifting - The theft, by someone other than an employee of the victim, of goods or merchandise exposed for sale |Shoplifting | 23C | Property
T | Threat of Force Used Against the Victim - No weapons and no physical attack used in this threat |Intimidation | 13C | Person
U | Uninhabited Dwelling - Structures uninhabited or abandoned or not normally in use. Arson reporting |Arson | 200 | Property
V | Vaginal penetration - With force or without force where the victim is incapable of giving consent because of youth or because of temporary or permanent mental incapacity  |Forcible Rape | 11A | Person
W | Fetal Death - Human embryo or fetus in utero |All Other Offenses | 90Z | Society 
X | Falsified Records by Forgery or Counterfeiting - Altering, copying, or imitation of something, without authority or right, with the intent to deceive or defraud by passing the copy or thing altered or imitated as that which is original or genuine.  Or, the selling, buying, or possession of an altered, copied, or imitated thing with the intent to deceive or defraud |Counterfeiting/Forgery | 250 | Property
Y | Destroyed Records or Property | Destruction/Damage/Vandalism of Property | 290 | Property
Z | Theft from a Motor Vehicle - Theft of articles from motor vehicle whether locked or unlocked |Theft from a Motor Vehicle | 23F | Property

___

### Notes:
* `An LRS Code appended with "-H" indicates the offense is a Hate Crime, and the penalty will be enhanced by 14:107.2. Offenses with an Inchoate appended will be reported based on the base LRS (usually shown in the first ten digits of Louisiana Revised Statute (6) or Louisiana Revised Statute of Arrest (45).`

<br>

## Agency Supplied NIBRS Code (N6)

___

**Data Characteristics:** 3 Character AlphaNumeric

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["06001"] -%}
1 | {{error.desc_den6}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["06002"] -%}
2 | {{error.desc_den6}} | {{error.err_no}} | {{ error.err_message }} 

___

<br>


<div class="newpage"></div>

## Offense Attempted/Completed (7)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_de7}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12051"] -%}
2 | {{error.desc_de7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["10077"] -%}
3 | {{error.desc_de7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["10078"] -%}
4 | {{error.desc_de7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["12056"] -%}
5 | {{error.desc_de7}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `This element is used to indicate whether each offense in the incident was completed or merely attempted.`

### Allowed Entries

___

Enter one code per incident.

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Offense Attempted/Completed</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '7' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

____

<br>

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | During the same incident, Victim Number One (001) was raped and the Offender attempted to rape Victim Number Two (002), but had to leave the scene before the act was consummated due to the arrival of the police.<br><br>Offense 001 should be entered as Aggravated Rape (LRS 14:42/V) and have Completed ('C') entered in Offense Attempted/Completed (DE 7). Offense 002 should also be entered as Aggravated Rape (LRS 14:42/V), but will have Attempted ('A') entered in Offense Attempted/Completed (DE 7).

___

<br>

<div class="newpage"></div>

## Offender Suspected of Using/Gaming Motivation (8)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de8}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14004"] -%}
2 | {{error.desc_de8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["12006"] -%}
3 | {{error.desc_de8}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["12007"] -%}
4 | {{error.desc_de8}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `Offender Suspected of Using/Gaming Motivation (8) indicates that an Offender is suspected of consuming alcohol, or using drugs/ narcotics during, or shortly before, the incident; or, of using a computer, computer terminal, or other computer equipment to perpetrate the crime. Can also indicate if an Offender's gaming activity was a motive in the commission of a crime.`

### Allowed Entries
___

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Offender Suspected of Using/Gaming Motivation</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '8' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | Witness to an assault reported that the Victim and Offender were in a bar drinking beer when an argument broke out and the Offender attacked the Victim with a knife. Alcohol ('A') should be entered in Offender Suspected of Using/Gaming Motivation (DE 8).
2 | A computer 'hacker' used his personal computer and the Internet to gain access to a company's computer system and steal proprietary data. Computer Equipment ('C') should be entered in Offender Suspected of Using/Gaming Motivation (DE 8).
3 | Offender robbed a bank and a police officer arrested him while trying to leave the bank. Under questioning, the Offender told the officer he needed money because he lost $10,000 that morning at the river boat casino. The officer also smelled alcohol on his breath. Both Alcohol ('A') and Gaming Activity Motive for Crime ('G') should be entered into Offender Suspected of Using/Gaming Motivation (DE 8).

_____

<br>

<div class="newpage"></div>

## Bias Motivation/Bias Crime Type (8A)
___

**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de8a}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14004"] -%}
2 | {{error.desc_de8a}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes: 
* `Bias Motivation/Bias Crime Type (8) indicates an Offender’s motivation to commit an offense because of their bias against a Victim’s race, religion, ethnicity, national origin, sexual orientation, disability group, or other bias.`
* `Because of the difficulty in ascertaining the Offender's subjective motivation, bias is to be reported only when an investigation reveals sufficient objective facts to lead a reasonable and prudent person to conclude that the Offender's actions were motivated, in whole or in part, by bias.`

___

### List of Allowed Entries for DE 8A is on the following page:

<div class="newpage"></div>

### Allowed Entries:
___

Enter only one code for each Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Bias Motivation/Bias Crime Type</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '8A' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

<br>

In LIBRS, incidents not having facts that indicate biased motivation on the part of the Offender are to be coded as None (88), while incidents involving ambiguous facts (that is, where some facts are present, but not conclusive) are to be coded Unknown (99).

If any Bias Motivation/Bias Crime Type codes are used, other than None (88) or Unknown (99), then the incident will be considered a hate crime, and the Louisiana Revised Statute (DE 6) probably should be appended with the Hate Crime Penalty Enhancer (-H) to represent enhanced penalties related to hate crimes in LRS 14:107.2.

___

<br>

## Location Type (9)
___

**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_de9}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12004"] -%}
2 | {{error.desc_de9}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `This data element is to be used to report the type of location/ premises where each offense took place.  Only one (1) location can be entered for each offense.`

___

### List of Allowed Entries for DE 8A is on the following page:

<div class="newpage"></div>

### Allowed Entries:
___

Enter only one (1) code per Offense Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Location Type</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '9' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples:

Example Number | Description
:-------------:|:-----------
1 | An assault started in a bar ('03'), continued into an adjoining parking lot ('18'), and ended in the street ('13'). As the bar was the location where the offense was initiated and best describes the circumstances of the crime, Bar/Night Club ('03') should be entered.
2 | Two Offenders robbed a bar. One of the Offenders raped a female customer in the bar while the other Offender stood at the door with a gun. In this case, there is one incident, with two offenses: robbery and forcible rape. The location of the robbery would be Bar/Night Club ('03'), and the location of the forcible rape would also be Bar/Night Club ('03').

___

<br>

<div class="newpage"></div>

## Number of Premises Entered (10)
___

**Data Characteristics:** 2 Character **Alpha/Numeric**

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12057"] -%}
1 | {{error.desc_de10}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12002"] -%}
2 | {{error.desc_de10}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["12052"] -%}
3 | {{error.desc_de10}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `This data element is used only if the offense is burglary and the "Hotel Rule" is applicable.  In such cases, the number of structures (premises) entered is to be reported.  If the LRS offense (6) is not reportable as a Burglary (NIBRS 220), then this data element MUST be left blank.`
* `In the Summary UCR Reporting System, the "Hotel Rule" is only applied to temporary lodging.  It states: If a number of dwelling units under a single manager are burglarized, then the offenses are most likely to be reported to the police by the manager rather than the individual tenants. The burglary should be reported as a single offense.  The total number of individual rooms, units, storage compartments, etc. entered is to be reported into this data element.`
* `In LIBRS the "Hotel Rule" has been expanded to include rental storage facilities, i.e., "mini-storage" and "self storage" buildings.`

### Examples:

___

Example Number | Description
:-------------:|:-----------
1 | A 'self-storage' building was burglarized and 11 rented storage compartments were forcibly entered. The number '11' (for eleven compartments) should be entered into Number of Premises Entered (DE 10).

___

<br>

<div class="newpage"></div>

## Method of Entry (11)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirment   | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12004"] -%}
1 | {{error.desc_de11}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12053"] -%}
2 | {{error.desc_de11}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12054"] -%}
3 | {{error.desc_de11}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `This data element is to report whether force or no force was used by the burglar(s) to enter the structure.`
* `A forced entry is where force of any degree, or a mechanical contrivance of any kind (including a passkey or skeleton key), was used to unlawfully enter a building or other structure. `
* `An unforced entry is one where the unlawful entry was achieved without force through an unlocked door or window.`
* `If both forced and unforced entries were involved in the crime, the entry should be reported as having been accomplished through "Force".`

### Allowed Entries:
___

Enter only one (1) code per Offense Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Location Type</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '11' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples: 
___

Example Number | Description
:-------------:|:-----------
1 | Investigation of a burglary complaint disclosed that the Offender(s) entered the building through an unlocked street door, then forced a locked door to an office and stole a typewriter. Since one door was forced, the Method of Entry should be entered as Force ("F").

___

<br>

<div class="newpage"></div>

## Type of Criminal Activity/Gang Information Nos. 1, 2 and 3 (12)

This section is split into two parts. The first part details the requirements when DE 12 is used as a Type of Criminal Activity descriptor, and the second when used as a Gang Activity descriptor. 

**Data Characteristics**: 1 Character Alpha

### Requirements (Criminal Activity):
___ 

The following requirements are for **Type of Criminal Activity Only**:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12004"] -%}
1 | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12006"] -%}
2 | {{error.desc_de12}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["12019"] -%}
3 | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84005"] -%}
3A | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84007"] -%}
3B | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84015"] -%}
3C | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84020"] -%}
3D | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84021"] -%}
3E | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["84210"] -%}
3F | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["90031"] -%}
3G | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes: 
* `(Criminal Activity):  Use this data element to provide additional information on the criminal activity of Offender(s) in the incident.`

___

### List of Allowed Entries for DE 8A is on the following page:

<div class="newpage"></div>

### Allowed Entries (Criminal Activity)
___

Up to three (3) of the following **Type of Criminal Activity** Codes can be entered for offenses. These offenses can only be of NIBRS type **250, 35B, 520, 280, 39C, 90A, 35A, 370 and 90Z**. 

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Criminal Activity Codes</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '12' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title == "Criminal Activity" %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
                    {% endif %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

____

<br>

### Examples (Criminal Activity):
___

Example Number | Description
:-------------:|:-----------
1 | The Offenders published and sold pornographic photographs of children. Therefore, up to three types of Criminal Activity can be entered: Cultivating/Manufacture/Publishing ("C"), Distributing/Selling ("D"), and Exploiting Children ("E").

___

<br>

<div class="newpage"></div>

## Type of Criminal Activity/Gang Information Nos. 1, 2 and 3 (12)

___

### Requirements (Gang Activity):
___ 

The following requirements are for **Gang Information Only**:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12019"] -%}
4 | {{error.desc_de12-2}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12017"] -%}
5 | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `(Gang Information):  This data element is used to provide Gang Information on Offender(s).`
* `Definition of a Gang:  A gang must meet the following criteria in order to be considered a gang:`
	* `Be an ongoing organization, association, or group of three or more persons`
	* `Have a common interest and/or activity characterized by the commission of or involvement in a pattern of criminal or delinquent conduct.`
* `If a value of None/Unknown (“N”) is entered, codes "J" and "G" cannot to be entered.`


### Allowed Values
___

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Gang Information Codes</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '12' %}
    <tr><td>
			{% for subsection in de.subsection %}
            {% if subsection.title == "Gang Information" %}
				<table class="subtable">
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
                    {% endif %}
                    {% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples (Gang Information):
___

Example Number | Description
:-------------:|:-----------
1 | Two males, aged 19, were on bicycles riding through a neighborhood when they were approached by three males and forced to stop. Words were exchanged and one of the bicyclists was attacked. Each of the three attackers, one, aged 16 and the other two, aged 17, had identical tattoos on their upper arm. This marking was commonly associated with a local gang. The entry for Type of Criminal Activity/Gang Information should be Juvenile Gang ("J").

___

<br>

<div class="newpage"></div>

## Type of Weapon/Force Involved Nos. 1, 2 and 3 (13)

**Data Characteristics:** 3 Character Alpha

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12004"] -%}
1 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12006"] -%}
2 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12007"] -%}
3 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12019"] -%}
4 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12058"] -%}
5 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12055"] -%}
6 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12065"] -%}
7 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12067"] -%}
8 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12069"] -%}
9 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error[""] -%}
10 | For Human Trafficking Offenses (NIBRS Codes 64A, 64B and 40C), a data value for Type of Weapon/Force Involved (13) MUST be specified.||
{% assign error = site.data.error["90036"] -%}
11 | {{error.desc_de13}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `This data element is used to enter the Type of Weapon/Force Used (13) by an Offender.`
* `Append an "A" if the weapon is automatic.`
  * `Any firearm that can fire more than one shot by a single pull of the trigger without manual reloading is classified as an Automatic Firearm.`

___

### List of Allowed Entries for DE 13 is on the following page:

<div class="newpage"></div>

### Allowed Entries:

Can enter up to three (3) codes for each offense:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Types of Weapon/Force Involved</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '13' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th>{% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___


### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | Three robbers held up a bank. One was armed with a revolver, the second had a sawed-off shotgun, and the third had an automatic machine gun. The entries would be: Handgun ('12'), Shotgun ('14') and Other Automatic Firearm ('15A').

___

<br>

<div class="newpage"></div>

## Property Sequence Number (P1)

**Data Characteristics:** 3 Character Numeric

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["90019"] -%}
1 | {{error.desc_dep1}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["90020"] -%}
2 | {{error.desc_dep1}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["25001"] -%}
3 | {{error.desc_dep1}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
`Each property in an incident must be assigned a unique sequence number from "001" to "999".`

___

<br>

## Property Sequence Number Reference (P1R)

**\*\*\* New Data Element in LIBRS 2.5 \*\*\***

**Data Characteristics:** 3 Character Numeric

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["90019"] -%}
1 | {{error.desc_dep1r}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["90020"] -%}
2 | {{error.desc_dep1r}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["90024"] -%}
3 | {{error.desc_dep1r}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `There is no UNIQUE constraint for the Property Sequence Number Reference. This allows for a Property to relate to many Offenses if multiple Property/Offense segments are submitted within a single incident.`

<br>

___

<div class="newpage"></div>

## Type of Property Loss (14)

**Data Characteristics**: 1 Character Numeric

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13001"] -%}
1 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13004"] -%}
2 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13052"] -%}
3 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["84001"] -%}
3A | {{error.desc_de14}} | {{error.err_no}}, 84003, 84104, 84105, 84107, 84108, 84009, 84010, 84112, 84013, 84014, 84117, 84120 | {{ error.err_message }}
{% assign error = site.data.error["13019"] -%}
4 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10072"] -%}
5 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13072"] -%}
6 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13078"] -%}
7 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["84203"] -%}
8 | {{error.desc_de14}} | {{error.err_no}}, 84304, 84312 | {{ error.err_message }}
{% assign error = site.data.error["13087"] -%}
9 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10081"] -%}
10 | {{error.desc_de14}} | {{error.err_no}}| {{ error.err_message }}

____

### Notes:
* `Type of Property Loss (14) describes the various type(s) of property loss that can occur during an incident, such as Recovery, Seizure, etc.`
* `Every different type of property loss that occurs during an incident must be submitted in a separate Property Description Segment (31), when the incident involved one or more of the Offenses listed above.`

### Allowed Entries:
___

Enter only one (1) code for each Property Description Segment. However, as many property segments as applicable can be submitted per incident:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Types of Property Loss</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '14' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th{% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

<div class="newpage"></div>

## Property Description (15)
___

**Data Characteristics:** 2 Character **Alpha/**Numeric

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13004"] -%}
1 | {{error.desc_de15}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13006"] -%}
2 | {{error.desc_de15}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13053"] -%}
3 | {{error.desc_de15}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13075"] -%}
4 | {{error.desc_de15}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10072"] -%}
5 | {{error.desc_de15}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Property Description (DE 15) is to be used to enter descriptions of the property that was burned, counterfeited, destroyed/damaged/ vandalized, etc., during, or as a result of, the incident.`

### Allowed Entries: 
___

Enter one Property Description (DE 15) code per Property Description (31) Segment, but can enter multiple Property Description (31) Segments. Do NOT enter duplicate Property Description (DE 15) codes within an Incident, unless a different Type of Property Loss (DE 14) code is used. An exception would be if there is more than one Drug that was Seized in the Incident. However, rules found in the Mandatory Data Element Requirements must still be followed.


<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Property Descriptions</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '15' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th{% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

<br>

<div class="newpage"></div>

## Value of Property (16)

**Data Characteristics:** 9 Character Numeric

### Requirements :
___ 

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13002"] -%}
1 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13051"] -%}
2 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13091"] -%}
3 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13054"] -%}
4 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10084"] -%}
5 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13042"] -%}
6 | {{error.desc_de16}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Value of Property (16) is to be used to enter the total dollar value of property that was burned (includes damage caused in fighting the fire), counterfeited, destroyed/damaged/ vandalized, recovered, seized, stolen, etc., as a result of the incident.`
* `DO NOT INCLUDE partial dollar amounts (cents).  Round values to the nearest whole dollar amounts.  If the value is unknown, enter one dollar ($1.00), that is, "000000001".`
* `If value is known and it is between $1.00 and $2.00 the reporting agency should enter $2.00, that is, "000000002".  This is the minimum dollar value that can be entered in Value of Property (16), as "1" (or “000000001”) is used for Unknown.`

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | A man purchases a new power saw from the hardware store. Later that same day someone breaks into his truck and steals the saw. The saw was purchased for $95.73. The value of the property would be rounded to the nearest whole dollar and reported as '000000096'- $96.00.

<br>

<div class="newpage"></div>

## Date Recovered (17)
___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13007"] -%}
1 | {{error.desc_de17}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13005"] -%}
2 | {{error.desc_de17}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13056"] -%}
3 | {{error.desc_de17}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13055"] -%}
4 | {{error.desc_de17}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13020"] -%}
5 | {{error.desc_de17}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If previously stolen property is recovered, the month, day, and year (MMDDYYYY) of its recovery should be entered into this data element.`
* `If there is more than one Date Recovered (DE 17) for the same Property Description (DE 15), enter the earliest date.`
* `If the Date Recovered is unknown, enter the date of the report.`


____

<div class="newpage"></div>

## Number of Stolen Vehicles (18)

___

**Data Characteristics:** 2 Character **Alpha/Numeric**

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13002"] -%}
1 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13057"] -%}
2 | {{error.desc_de18}} | {{error.err_no}}, 13058| {{ error.err_message }}
{% assign error = site.data.error["13059"] -%}
3 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13088"] -%}
4 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22065"] -%}
5 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22071"] -%}
6 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22072"] -%}
7 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["23220"] -%}
8 | {{error.desc_de18}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Number of Stolen Vehicles (18) indicates how many motor vehicles were stolen in an incident reported as a Motor Vehicle Theft.`

____

<br>

<div class="newpage"></div>

## Number of Recovered Motor Vehicles (19)

**Data Characteristics:** 2 Character **Alpha/Numeric**

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13002"] -%}
1 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13060"] -%}
2 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10073"] -%}
3 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13061"] -%}
4 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13059"] -%}
5 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13089"] -%}
6 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["23230"] -%}
7 | {{error.desc_de19}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Number of Recovered Motor Vehicles (19) indicates how many motor vehicles were recovered in an incident that reported Motor Vehicle Thefts.`

___

<br>

<div class="newpage"></div>

## Suspected Drug Type (20)

**Data Characteristics:** 2 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13065"] -%}
1 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13006"] -%}
2 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13004"] -%}
3 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13064"] -%}
4 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13092"] -%}
5 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["23201"] -%}
6 | {{error.desc_de20}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Suspected Drug Type (20) identifies the type of drugs or narcotics Seized in a drug case.`
* `If the Suspected Drug Type (20)is a Counterfeit, append an "X" to the drug code, otherwise leave the second character Blank (G).`
* `Suspected Drug Type (20) is not to be used when drugs or narcotics were Burned, Stolen, etc., in connection with other offenses, such as Arson, Larceny/Theft, etc.`

___

### List of Allowed Entries for DE 20 is on the following page:

<div class="newpage"></div>

### Allowed Entries: 
Enter as many as apply, but do not duplicate codes.

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Suspected Drug Types</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '20' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

___

<br>

<div class="newpage"></div>

## Estimated Drug Quantity (21)

**Data Characteristics:** 13 Character **Alpha/Numeric**

**Format:** #########.###

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13002"] -%}
1 | {{error.desc_de21}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13066"] -%}
2 | {{error.desc_de21}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13065"] -%}
3 | {{error.desc_de21}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Estimated Drug Quantity (21) indicates the quantity of drugs or narcotics seized in a drug case, it is not to be used when drugs or narcotics were Burned, Stolen, etc. in connection with other Offenses, such as Arson, Burglary, Breaking and Entering, Larceny, Theft, etc.`
* `Nine (9) characters are available to enter the number of WHOLE pounds, ounces, grams, etc., and three (3) more characters are available to enter the DECIMAL amount. A DECIMAL POINT must be entered to separate the whole and decimal amounts. Zero ('0') or space fill (G) should be added to the right or left of the value **to preserve the decimal's position as the tenth character in the field.**`
* `When Estimated Drug Quantity (21) is Unknown enter '000000001.000', a value of '1', to signify that the value is not known or not reported. Also, Type Drug Measurement (22) MUST be entered as Not Reported/Unknown ('XX') and Value of Property (16) MUST be entered as Unknown (000000001).`
* `If LRS Offense (6) is not reportable as a drug violation (35A), this data element MUST BE LEFT BLANK (G).`

___

<br>

<div class="newpage"></div>

## Type Drug Measurement (22)

**Data Characteristics:** 2 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["13004"] -%}
1 | {{error.desc_de22}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13065"] -%}
2 | {{error.desc_de22}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["20003"] -%}
3 | {{error.desc_de22}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13068"] -%}
4 | {{error.desc_de22}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["13084"] -%}
5 | {{error.desc_de22}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Type Drug Measurement (22) indicates how Seized drugs and narcotics are quantified in a drug case.`

___

### Allowed Entries:

___

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type Drug Measurements</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '22' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  


___

<br>

<div class="newpage"></div>

## Victim Sequence Number (23)

**Data Characteristics:** 3 Character Numeric

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15001"] -%}
1 | {{error.desc_de23}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15002"] -%}
2 | {{error.desc_de23}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15051"] -%}
3 | {{error.desc_de23}} | {{error.err_no}}| {{ error.err_message }}

____

### Notes:
* `Each victim in an incident MUST be assigned a unique Victim Sequence Number (23) from '001' to '999'.`


___

<br>

<div class="newpage"></div>

## Offense Connected to Victim Sequence Number (24)

**Data Characteristics:** 3 Character Numeric

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15001"] -%}
1 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15004"] -%}
2 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15064"] -%}
3 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15065"] -%}
4 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15066"] -%}
5 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15079"] -%}
6 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10065"] -%}
7 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15078"] -%}
8 | {{error.desc_de24}} | {{error.err_no}}| {{ error.err_message }}

___


### Notes:

* `This data element is to be used to link each offense to each victim. That is, the offense which was perpetrated against the victim during the incident.`
* `If this data element does not match one of the values submitted in Data Element # 23 (Victim Segment Number), the submission will be returned with errors.`

___

<div class="newpage"></div>

### Offenses That Cannot Occur to the Same Victim

The following chart shows Offenses that CANNOT occur to the same victim in the same incident. Each 'X' on the chart where offenses intersect denotes that those two offenses CANNOT occur to the same victim in an incident.

<table class="special">
	<thead>
		<tr>
			<th colspan="22" style="text-align: center">Offenses That Cannot Occur to the Same Victim</th>
		</tr>
	</thead>
	<tbody>
		<tr><td style="white-space: nowrap;">09A - Murder</td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
		<tr><td style="white-space: nowrap;">09B - Negligent Manslaughter</td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
		<tr><td style="white-space: nowrap;">11A - Forcible Rape</td><td></td><td></td><td><b>X</b></td><td></td><td></td><td><b>X</b></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td></tr>
		<tr><td style="white-space: nowrap;">11B - Forcible Sodomy</td><td></td><td></td><td></td><td><b>X</b></td><td></td><td><b>X</b></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td></tr>
		<tr><td style="white-space: nowrap;">11C - Sexual Assault w/ Object</td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td></tr>
		<tr><td style="white-space: nowrap;">11D - Forcible Fondling</td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td></tr>
		<tr><td style="white-space: nowrap;">120 - Robbery</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">13A - Aggravated Assault</td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">13B - Simple Assault</td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">13C - Intimidation</td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23A - Pocket-Picking</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23B - Purse Snatching</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23C - Shoplifting</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23D - Theft from Building</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23E - Theft from Coin Machine</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23F - Theft from Motor Vehicle</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23G - Theft of Motor Vehicle Parts</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">23H - All Other Larceny</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">240 - Motor Vehicle Theft</td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">36A - Incest</td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td><td></td></tr>
  		<tr><td style="white-space: nowrap;">36B - Statutory Rape</td><td></td><td></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td><b>X</b></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>X</b></td></tr>
  		<tr style="height: 230px"><td>Space</td>
		    <td class="rotated"><div>09A - Murder</div></td>
		    <td class="rotated"><div>09B - Negligent Manslaughter</div></td>
		    <td class="rotated"><div>11A - Forcible Rape</div></td>
		    <td class="rotated"><div>11B - Forcible Sodomy</div></td>
		    <td class="rotated"><div>11C - Sexual Assault w/ Object</div></td>
		    <td class="rotated"><div>11D - Forcible Fondling</div></td>
		    <td class="rotated"><div>120 - Robbery</div></td>
		    <td class="rotated"><div>13A - Aggravated Assault</div></td>
		    <td class="rotated"><div>13B - Simple Assault</div></td>
		    <td class="rotated"><div>13C - Intimidation</div></td>
		    <td class="rotated"><div>23A - Pocket-Picking</div></td>
		    <td class="rotated"><div>23B - Purse Snatching</div></td>
		    <td class="rotated"><div>23C - Shoplifting</div></td>
		    <td class="rotated"><div>23D - Theft from Building</div></td>
		    <td class="rotated"><div>23E - Theft from Coin Machine</div></td>
		    <td class="rotated"><div>23F - Theft from Motor Vehicle</div></td>
		    <td class="rotated"><div>23G - Theft of Motor Vehicle Parts</div></td>
		    <td class="rotated"><div>23H - All Other Larceny</div></td>
		    <td class="rotated"><div>240 - Motor Vehicle Theft</div></td>
		    <td class="rotated"><div>36A - Incest</div></td>
		    <td class="rotated"><div>36B - Statutory Rape</div></td></tr>
 </tbody>
</table>

____


### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | Two victims, Victim 001 and Victim 002, were robbed, and Victim 001 was also taken hostage by the Offender with a hand gun in a parking lot. The incident's Offense Segments could be submitted as follows: {::nomarkdown}<ul><li>Offense 001 -- Aggravated Robbery (14:64) would be connected to Victim 001.</li><li>Offense 002 -- Aggravated Robbery (14:64) would be connected to Victim 002.</li><li>Offense 003 -- Second Degree Kidnaping (14:44.1) would be connected to Victim 001.</li></ul>{:/}


___

<br>

<div class="newpage"></div>

## Type of Victim (25)

**Data Characteristics:** 1 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15001"] -%}
1 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15004"] -%}
2 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15064"] -%}
3 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15065"] -%}
4 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15067"] -%}
5 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10080"] -%}
6 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22110"] -%}
7 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22251"] -%}
8 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22252"] -%}
9 | {{error.desc_de25}} | {{error.err_no}}| {{ error.err_message }}

___

Notes:
* `NO ERROR NUMBER For Human Trafficking Offenses (NIBRS Codes 64A, 64B and 40C), the data value for Type of Victim (25) must be Individual ('I').`
* `One Type of Victim (25) code MUST be entered for each victim.`
* `Definition of Law Enforcement Officer/Peace Officer: Deputy sheriffs, municipal police officers, probation and enforcement parole officers, wildlife enforcement agents, city marshals and deputies would be considered a Law Enforcement Officer if a Victim and should have a Type of Victim (25) code of "L".`
* `The Officer should be "In-the-Line-of-Duty" when victimized in order to report Type of Victim (25) as Law Enforcement Officer ("L"). The same rules that apply to the LEOKA form in UCR Summary also apply to this Type of Victim (25).`
* `This Type of Victim (25) can ONLY be used for simple assaults, aggravated assaults, negligent manslaughter, murders and non-negligent homicide offenses to a Law Enforcement Officer, that took place when the Officer was On Duty as a Law Enforcement Officer.`

___

### List of Allowed Entries for DE 25 is on the following page:

<div class="newpage"></div>

### Allowed Entries:

Enter only one (1) code per Type of Victim Segment (25):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Victim</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '25' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

<br>

### Example: 

___

Example Number | Description
:-------------:|:-----------
1 | During a bank robbery *(Crime Against Property)*, the Offender pointed a gun at a teller and demanded and received money. The robber also pistol-whipped a customer who stood in his way as he made his getaway from the bank.<br><br>Assuming the facts above, there were **3** victims: {::nomarkdown}<ul><li>Victim 001 was the bank which would be coded as a Financial Institution ('F')</li><li>Victim 002 was the teller which would be coded as Individual ('I')</li><li>Victim 003 was the customer who was pistol whipped which would be coded as an Individual ('I')</li></ul>{:/}

___

<br>

## Type of Officer Activity/Circumstance (25A)

___

***New Data Element in LIBRS 2.5***

**Data Characteristics:** 2 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de25a}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10001"] -%}
2 | {{error.desc_de25a}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10255"] -%}
3 | {{error.desc_de25a}} | {{error.err_no}}| {{ error.err_message }}


<br>

### Allowed Entries:

Enter only one (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Officer Activity/Circumstance</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '25A' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="4">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
						<td> {{values.comment}} </td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  


___

<br>

<div class="newpage"></div>

## Officer Assignment Type (25B)

___

*** New Data Element in LIBRS 2.5 ***

**Data Characteristics:** 1 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["10256"] -%}
1 | {{error.desc_de25b}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10257"] -%}
2 | {{error.desc_de25b}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10258"] -%}
3 | {{error.desc_de25b}} | {{error.err_no}}| {{ error.err_message }}

___

<br>

### Allowed Entries:

Enter only one (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Officer Assignment Types</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '25B' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="4">{{subsection.title}}</th>{% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
						<td> {{values.comment}} </td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

___

<br>

## Officer ORI, Other Jurisdiction (25C)

___

*** New Data Element in LIBRS 2.5 ***

**Data Characteristics:** 9 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["10259"] -%}
1 | {{error.desc_de25c}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10254"] -%}
2 | {{error.desc_de25c}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `This is the 9-character NCIC Agency Identifier (ORI) assigned to every law enforcement agency in Louisiana. This ORI is used to record the ORI of a victim who is an officer involved in a multijurisdictional incident.`

___

### Allowed Entries:

Enter only (1) code for each Victim Segment:

### Acceptable Data Values: 

A thru Z (Uppercase letter only), or 0 thru 9

___

<br>

<div class="newpage"></div>

## Age of Victim [At Time Incident Occurred] (26)

**Data Characteristics:** 3 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15053"] -%}
1 | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
2 | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15050"] -%}
3 | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15004"] -%}
4A | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15008"] -%}
4B | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15009"] -%}
5A | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["25010"] -%}
5B | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15022"] -%}
5C | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15081"] -%}
6 | {{error.desc_de26}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If the Type of Victim (25) is a person (that is, Individual ('I') or Law Enforcement Officer ('L')), his/her age is to be entered into Age of Victim (26) either as an Exact Age, an Estimated Age, or as Unknown.`
* `If the Type of Victim (25) is a person (that is, Individual ('I') or Law Enforcement Officer ('L')), then Age of Victim (26) is required to be entered. If Type of Victim (25) is not a person, then Age of Victim (26) MUST be left Blank (G).`
* `If the Victim's Exact Age is not known, estimate the victim's age. Use one of the codes in the above table, and append an 'E',for Estimated. If it is impossible to determine even an Estimated Age of the victim, then enter Unknown ('00').`

___

### Allowed Entries:

Enter only (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Valid Ages of Victims</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '26' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

### Example: 

___

Example Number | Description
:-------------:|:-----------
1 | If the victim was 18 years old, enter '18'.
2 | If the victim appeared 25 to 30 years old, **average the age range** to get 27.5, then **round down** and enter '27E'.

___

<br>

<div class="newpage"></div>

## Date of Birth of Victim (L26)

___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["25030"] -%}
1 | {{error.desc_del26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["25031"] -%}
2 | {{error.desc_del26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["25010"] -%}
3 | {{error.desc_del26}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
4 | {{error.desc_del26}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Type of Victim (25) is a person [(that is, Individual ('I') or Law Enforcement Officer ('L'), then his/her date of birth, if available, is to be indicated in Date of Birth of Victim (L26).`

___

<br>

## Sex of Victim (27)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de27}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15053"] -%}
2 | {{error.desc_de27}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
3 | {{error.desc_de27}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15069"] -%}
4 | {{error.desc_de27}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Type of Victim (25) is a person [(that is, Individual ('I') or Law Enforcement Officer ('L'), then his/her sex is to be indicated in Sex of Victim (27).`

___

<br>

### Allowed Entries:

Enter only (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Sex of Victim</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '27' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  


___

<br>

<div class="newpage"></div>

## Race of Victim (28)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de28}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15053"] -%}
2 | {{error.desc_de28}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
3 | {{error.desc_de28}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Type of Victim (25) is a person [(that is, Individual ('I') or Law Enforcement Officer ('L'), then, his/her race is to be indicated in Race of Victim (28).`

___

<br>

### Allowed Entries:

Enter only (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Race of Victim</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '28' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  


___

<br>

## Ethnicity of Victim (29)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de29}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
2 | {{error.desc_de29}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Victim is a person (that is, Individual ('I') or Law Enforcement Officer ('L') is entered into Type of Victim (25), then his/her ethnic origin is to be indicated in Ethnicity of Victim (29).`

<br>

### Allowed Entries:

___

Enter only (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Ethnicity of Victim</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '29' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  


___

<br>

<div class="newpage"></div>

## Resident Status of Victim (30)

**Data Characteristics:** 1 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de30}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15058"] -%}
2 | {{error.desc_de30}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes: 
* `If Type of Victim (25) is a person (that is, Individual ('I') or Law Enforcement Officer ('L'), then, whether he/she was a resident or nonresident, the Resident Status of Victim (30) is to be entered.)`
* `A 'Resident' is a person who maintains his/her permanent home for legal purposes in the locality (i.e., town, city, or community) where the crime took place.`

___

### Allowed Entries:

___

Enter only (1) code for each Victim Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Resident Status of Victim</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '30' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  



___

<br>

<div class="newpage"></div>

## Aggravated Assault/Homicide Circumstance Nos. 1 and 2 (31)

___

**Assault on Law Enforcement Officer (Shaded Brown) is a new Aggravated Assault and Non-Negligent Manslaughter Circumstance,beginning with LIBRS Spec 2.5.**

**Data Characteristics:** 2 Character Numeric

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15002"] -%}
1 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15004"] -%}
2 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15006"] -%}
3 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15019"] -%}
4 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15056a"] -%}
5 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15056b"] -%}
6 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15080"] -%}
7 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15062"] -%}
8 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}

___

<br>

***Aggravated Assault and Non-Negligent Manslaughter Circumstances***

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["31008"] -%}
9 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}

___

<br>

***Negligent Manslaughter Circumstances***

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["31009"] -%}
10 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22120"] -%}
11 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}

___

<br>

***Justifiable Homicide Circumstances***

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["31010"] -%}
12 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15055"] -%}
13 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["12066"] -%}
14 | {{error.desc_de31}} | {{error.err_no}}| {{ error.err_message }}

___

<br>

### Notes:
* `DEFINITION: A Justifiable Homicide is the killing of a perpetrator of a serious criminal offense by a peace officer in the line of duty; or the killing, during the commission of a serious criminal offense, of the perpetrator by a private individual.`
* `At MOST, TWO Assault Circumstances (31) are allowed. Beginning with LIBRS 2.5 Specifications, the third Assault Circumstance is ignored. *New Warning Message in LIBRS 2.5*`
* `Aggravated Assault/Homicide Circumstances and Law Enforcement Officers Killed/Assaulted (InLine of Duty (31) describes the circumstances of either an Aggravated Assault or Homicide.`
* `Assault on Law Enforcement Officer is a new Aggravated Assault and Non-Negligent Manslaughter Circumstance,beginning with LIBRS Spec 2.5.`
* `The crime being committed when the Justifiable Homicide took place MUST BE REPORTED AS A SEPARATE INCIDENT. These instructions are based on the definition of an "incident". Therefore, Justifiable Homicide cases involve two incidents rather than one.`
  * `For the Justifiable Homicide incident, code the police officer or the civilian who killed the criminal as the "Offender" and the criminal who was killed as the "Victim".`
    * `The Justifiable Homicide incident IS NOT CLEARED EXCEPTIONALLY, as no crime has occurred in reality.`
    * `In the second incident, report the Offense(s) that were being committed when the Justifiable Homicide occurred.`

### Allowed Entries:

___

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Aggravated Assault/Homicide Circumstances</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '31' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="4">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
						<td> {{values.comment}} </td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

___

### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | Two rival juvenile street gangs rumble over 'turf' rights to sell drugs and one of the gang members is killed. Possible entries are: {::nomarkdown}<ul><li>01 - Argument</li><li>03 - Drug Dealing</li><li>05 - Juvenile Gang</li></ul>{:/} While all three would apply, there is a *limit of two entries*. Therefore, the two most descriptive codes (as determined by the reporting agency) should be used. In this case, the reporting agency entered '03' and '05'.
 
___

<br>

<div class="newpage"></div>

## Additional Justifiable Homicide Circumstance (32)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de32}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15057"] -%}
2 | {{error.desc_de32}} | {{error.err_no}}, 13058| {{ error.err_message }}

___

### Allowed Entries for Justifiable Homicide:

___
 
Enter only (1) code for Justifiable Homicide (NIBRS 09C):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Justifiable Homicide Circumstance</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '32' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

___

<br>

### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | In resisting arrest, a fugitive pulled a gun and fired two times in the direction of two police officers who were attempting to take him into custody. Neither officer was hit, but both drew their weapons and returned fire, killing the fugitive. As this was a Justifiable Homicide (NIBRS 09C), Criminal Killed by Police Officer ('21') should be entered into *Data Element 31*.<br><br>Assuming the facts above, the possible entries for *Data Element 32* are: {::nomarkdown}<ul><li>A - Criminal Attacked Police Officer and That Officer Killed Criminal</li><li>B - Criminal Attacked Police Officer and Criminal Killed by Another Police Officer</li><li>F - Criminal Resisted Arrest</li></ul>{:/}As only one code can be entered into this Data Element (32), the most descriptive code (as determined by the reporting agency) should be used. In this case, the reporting agency entered *Criminal Attached Police Officer and That Officer Killed Criminal('A')*.

___

<br>

<div class="newpage"></div>

## Type of Injury (33)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirment   | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15004"] -%}
1 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15006"] -%}
2 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15007"] -%}
3 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15019"] -%}
4 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15079"] -%}
5 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["90029"] -%}
6 | {{error.desc_de33}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Notes: This Data Element (32) describes the type(s) of bodily injury suffered by a person.`
* `Minor injury is described as an injury not requiring immediate medical attention.`
* `Major injury is described as an injury requiring immediate medical attention.`

___

### Allowed Entries:

___
 
Enter only (1) code for each Victim Injury Segment; however, can submit as many Victim Injury Segments (51) as applicable:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Injury</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '33' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>  

___

<br>

<div class="newpage"></div>

## Offender Number to be Related (34)

___

**Data Characteristics:** 3 Character Numeric

### Requirements:
___

Requirment   | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15059"] -%}
1 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15002"] -%}
2 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15058"] -%}
3 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15006"] -%}
4 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15068"] -%}
5 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["10070"] -%}
6 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["10085"] -%}
7 | {{error.desc_de34}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B and 40C) are *known*, then data value for Offender Number to be Related (Data Element 34) MUST be supplied as well.`
* `If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B and 40C) are *unknown*, then data value for Offender Number to be Related (Data Element 34) MUST be '000' (UNKNOWN)`
* `Notes: Offender Number to be Related (34) along with Relationship of Victim to Offender (35) describe the relationship of each Victim to each Offender who has perpetrated a Crime Against Person or a Robbery against the Victim. If the Victim is related to the offender in more than one way, use the closest relationship.`
* `Enter Offender Sequence Number (36) of the Offenders for whom Victim-to-Offender relationships are going to be reported in Relationship of Victim to Offender (35).`
* `The Reporting Agency MUST report each Victim's relationship to EVERY Offender when the Offense is a Crime Against Person or a Robbery against the Victim.`

___

### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | If Victim 001's relationship to Offender 004 is to be reported, enter '004'.

___

<br>


<div class="newpage"></div>

## Relationship of Victim to Offender (35)

___

**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["15060"] -%}
1 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15004"] -%}
2 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15050"] -%}
3 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14050"] -%}
4 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14053"] -%}
5 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14054"] -%}
6 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15068"] -%}
7 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15070"] -%}
8 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15071"] -%}
9 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15074"] -%}
10 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15072"] -%}
11 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15075"] -%}
12 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15076"] -%}
13 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["15059"] -%}
14 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `Notes: If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B and 40C) are *known*, then data value for Relationship of Victim to Offender (Data Element 34) MUST be supplied as well.`
* `Relationship of Victim to Offender (35) is used ONLY with Offender Number to be Related (34), to report the relationship of a 	Victim to Offenders who have perpetrated a Crime Against Person, or a Robbery against the Victim.`
* `Relationship of Victim to Offender (35) indicates the Victim's relationship with each Offender involved in the incident.`
* `Relationship of Victim to Offender (35) is NOT required if Type of Victim (25) is equal to Society/Public ('S').`
___

### List of Allowed Entries for DE 35 is on the following page:

<div class="newpage"></div>

### Allowed Entries:

___

MUST enter **ONE** code for each Victim Segment (50). MUST enter relationship of each Victim to each Offender when Offense is a *Crime Against Person* or a Robbery against a Victim:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Relationships of Victims to Offenders</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '35' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

<br>


### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | An employee assaulted his employer (a person) with his fists. Victim was Employer (ER) should be entered.
2 | Two unknown subjects rob a male and a female couple. Victim was Stranger ('ST') should be entered to indicate the relationship of each Victim to each Offender.

___

<br>


<div class="newpage"></div>


## Offender Sequence Number (36)

___

**Data Characteristics:** 3 Character Numeric

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14002"] -%}
2 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14057"] -%}
3 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14059"] -%}
4 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14055"] -%}
5 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14051"] -%}
6 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["81400"] -%}
7 | {{error.desc_de36}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Notes: Each Offender in an incident is assigned a UNIQUE Offender Sequence Number (36) from '001' to '999'.`
* `If nothing is known about the Offender(s), enter '000' into this data element and LEAVE DATA ELEMENTS 37 THROUGH 39 BLANK (G). Also, Offender Suspected of Using (8) MUST be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) MUST be None ('88').`


### Examples: 
___

Example Number | Description
:-------------:|:-----------
1 | A corpse with five bullet holes in it was found in an abandoned warehouse. There were no witnesses to the crime, or suspects. {::nomarkdown}<ul><li>A single Offender Segment (40) should be submitted with '000' entered into Offender Sequence Number (36) and with no entries in Data Elements 37 through 39.</li><li>Offender Suspected of Using (8) must be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) must be None '88'</li></ul>{:/}
2 | Two Offenders were seen fleeing the scene of a burglary, but because they were wearing ski masks, their Age, Sex, and Race could not be determined. {::nomarkdown}<ul><li>Two Offender Segments (40) should be submitted: the first with Offender Sequence Number '001' and the second with '002'.</li><li>Applicable Unknown codes should be entered into Data Elements 37, 38 and 39.</li><li>Offender Suspected of Using (8) MUST be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) MUST be None ('88')</li></ul>{:/}

___

<br>

<div class="newpage"></div>

## Age of Offender [At Time of Incident] (37)

___

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14052"] -%}
2 | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14058"] -%}
3 | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14059"] -%}
4 | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14050"] -%}
5 | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14056"] -%}
6A | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14008"] -%}
6B | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14009"] -%}
7A | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["24010"] -%}
7B | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14022"] -%}
7C | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Age of the Offender (37) is entered either as an exact number of years, an estimated age or as unknown.`
* `If the Offender's Age is NOT KNOWN, estimate the Offender's Age and append an 'E' (Estimated).`
* `If a range is given for the Offender's Age, enter the median (average) age of the range (rounded down).`
* `If it is impossible to determine even an Estimated Age of the Offender, then enter Unknown ('00').`

### Allowed Entries

___

Enter only one code per Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Age of Offender</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '37' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples: 


Example Number | Description
:-------------:|:-----------
1 | If the Victim, or a witness, reported the Offender's Age as between 25 and 30 years old, enter '27E' (the average of 25 and 30 is 27.5, round down to get an estimated age of 27).

___

<br>


<div class="newpage"></div>

## Date of Birth of Offender (L37)

___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["24030"] -%}
1 | {{error.desc_del37}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["24031"] -%}
2 | {{error.desc_del37}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["24010"] -%}
3 | {{error.desc_del37}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `If the Date of Birth of the Offender is known, it is to be indicated in this data element.`

___

<br>

<div class="newpage"></div>

## Sex of Offender (38)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14004"] -%}
2 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14052"] -%}
3 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14058"] -%}
4 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14059"] -%}
5 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `This Data Element (38) indicates Sex of the Offender.`

___

### Allowed Entries:
___

Enter only (1) code per Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Sex of Offender</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '38' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | The witness caught only a fleeting glance of the Offender and, therefore, was unable to report the Offender's Sex. The entry should be Unknown ('U').

___

<br>


<div class="newpage"></div>


## Race of Offender (39)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de39}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14004"] -%}
2 | {{error.desc_de39}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14052"] -%}
3 | {{error.desc_de39}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14058"] -%}
4 | {{error.desc_de39}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14059"] -%}
5 | {{error.desc_de39}} | {{error.err_no}}| {{ error.err_message }} 

___
### Notes:
* `Race of an Offender is indicated in this Data Element (39).`

___

### Allowed Entries:
___

Enter only (1) code per Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Race of Offender</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '39' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>


## Arrestee Sequence Number (40)

___

**Data Characteristics:** 3 Character Numeric

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de40}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16002"] -%}
2 | {{error.desc_de40}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["26001"] -%}
3 | {{error.desc_de40}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["16056"] -%}
4 | {{error.desc_de40}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `Each Arrestee reported is assigned a UNIQUE Sequence Number from '001' to '999'.`

___

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | If two persons were arrested in connection with a previously submitted incident, two Arrestee Segments should be submitted: one with Arrestee Sequence Number '001' and the other with '002'.

_____

<br>


<div class="newpage"></div>

## Arrestee Name (L40)

___

**Data Characteristics:** 20 Character Alpha

**Format:** (Last Name)(Suffix,(First Name)(Middle Name)

Suffix includes standard suffixes used to distinguish between generations (for example, Sr, Jr, III, II). 

<span style="text-decoration: underline">Do not include titles</span> (for example, MD, M.E., Ph.D., Esq., etc.)

### Requirements:

___

None

___

### Notes:
* `If Arrestee’s full name will not fit in the field, then enter as much as possible. DO NOT put periods behind suffix abbreviations or middle initial.`

___

<br>

## Arrest Number/Local Booking Number for Arrest (41)

___

**Data Characteristics:** 12 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de41}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16016"] -%}
2 | {{error.desc_de41}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16017"] -%}
3 | {{error.desc_de41}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16015"] -%}
4 | {{error.desc_de41}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16006"] -%}
5 | {{error.desc_de41}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `This Data Element (41) is a UNIQUE, IDENTIFYING number assigned by an agency to an Arrest Report. It may be the Incident Number of a reported incident relating to the Arrest, or it may be a separate Booking Number.`

___

<br>


<div class="newpage"></div>

## Arrest Date (42)

___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de42}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16005"] -%}
2 | {{error.desc_de42}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16065"] -%}
3 | {{error.desc_de42}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16020"] -%}
4 | {{error.desc_de42}} | {{error.err_no}}| {{ error.err_message }} 

___

### Notes:
* `Arrest Date (42) is used to enter the month, day and year when the actual arrest took place.`

___

<br>


## Type of Arrest (43)

___

**Data Characteristics**: 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de43}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de43}} | {{error.err_no}}| {{ error.err_message }} 


___

### Notes:
* `Type of Arrest (43) indicates the type of apprehension.`

___

### Allowed Entries:

___

Enter only <span style="text-decoration: underline">one</span> code per Arrest Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Type of Arrest</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '43' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

<div class="newpage"></div>

## Multiple Arrestee Segment Indicator (44)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de44}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de44}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Multiple Arrestee Segment Indicator (44) ensures that an Arrestee is counted (scored) only once when the Arrestee's apprehension causes the Arresting Agency to submit two or more Arrestee Segments (60) concerning separate Incident Reports. That is, the Arrestee was involved in more than one crime incident and his/her arrest data are duplicated in each Incident Report.` 
  * `In such a situation, Count Arrestee (“C”) is to be entered into one of the Arrestee Segments (60), and Multiple (M) is to be entered into all of the remaining Arrestee Segments (60). `
  * `If the Arrestee's apprehension DOES NOT cause the Arresting Agency to submit multiple Arrestee Segments (60), enter Not Applicable (“N”).`
* `Count Arrestee (“C”) and Multiple ("M") codes are to be used in this Data Element (44) ONLYwhen the same agency submits two or more Arrestee Segments (for different incidents) relating to the same Arrestee.`

### Allowed Entries:
___

Enter only one (1) code per Arrestee Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Multiple Arrestee Segment Indicator</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '44' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | After a suspect's apprehension for robbery, it was learned that he was also responsible for five additional robberies within the jurisdiction.{::nomarkdown}<ul><li>One Arrestee Segment (60) was keyed into the local computer, along with the Incident Numbers of the six incidents</li><li>The local computer then generated six Arrestee Segments (60) which were duplicates except for their Incident Numbers</li><li>Five of the Arrestee Segments (60) had Multiple ("M") and one had Count Arrestee ("C") entered into Multiple Arrestee Segment Indicator (44)</li><li>Each of the six robberies is cleared.</li></ul>{:/}
2 | If the suspect's arrest did not clear additional incidents, the entry should be Not Applicable ("N").

<br>

<div class="newpage"></div>

## Louisiana Revised Statute Number of Arrest (45)

___

**Data Characteristics:** 12 Character Alpha

**Format**: TT:SSSS.S/P-I

||Louisiana Revised Statute Format
:--------------------------------:|-----------------------------------
TT                                | Title                             
SSSS.S                            | Section                           
**PPP/I**                         | Subpart, **or**<br>Subpart with Qualifier, **or**<br>Qualifier, **or**<br>Juvenile Qualifier, **and** An Inchoate Modifier, if applicable, would be indicated<br>by a dash with a data value behind the LRS Code that defines the offense.**                        |

<br>

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de45}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de45}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["16070"] -%}
3 | {{error.desc_de45}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["16069"] -%}
4 | {{error.desc_de45}} | {{error.err_no}} | {{ error.err_message }}

___

### Notes:
* `This Data Element records the Louisiana Revised Statute that the Arrestee was charged with.`
* `The structure of a Louisiana Revised Statute (LRS) is: Title (TT), followed by a colon, then a Section Number (SSSS.S), followed by optional Subparts, Qualifiers and Modifiers. Section and Subpart/Subpart with Qualifier/Qualifier/Juvenile Qualifier/Inchoate Modifier, should NOT be preceded by spaces or zeroes.`
  * `If there are no places after the decimal, then both the place after the decimal and the decimal point should be omitted.`
    * `For example, the LRS for Murder is 14:30 – two spaces for the Title (14), a colon, two spaces for the Section (30) before the decimal, not four spaces - 14:GG30 - and dropping the space after the decimal. `
    * `The field should be LEFT JUSTIFIED WITH NO INCLUDED SPACES. Spaces are interpreted as the End-of-Data in this data element.`
* `Subparts, Qualifiers, etc. are sometimes included for more specificity regarding those LRS codes requiring these identifiers. These parts of the field can be expanded or contracted as necessary to fill in the data.`
* `All local ordinances must be reported with the appropriate state statute as the base offense, with any Subparts, Qualifiers, etc. added when applicable.`
  * `When a parish statute does not correspond to a state LRS, the parish statute must be reported with a "P:" for the title and the parish statute following the colon.`
  * `If a city ordinance does not correspond to a state LRS, it must be reported by the police department with a "C:" substituted for the title portion of the data field, and the city ordinance following the colon. `
    * `When it is a Sheriff's Office, or any other law enforcement agency who has jurisdiction in more than one city, reporting the city ordinance, it should be reported with a "C#:" substituted for the title portion of the data field, and the city ordinance following the colon, where the "#" is replaced with a unique number for each city as decided by the agency and agreed upon by the state.`

___

<br>

## Agency Supplied NIBRS Code For Arrest (N45)

**Data Characteristics:** 3 Character AlphaNumeric

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["45001"] -%}
1 | {{error.desc_den45}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["45002"] -%}
2 | {{error.desc_den45}} | {{error.err_no}} | {{ error.err_message }}

___

<br>

<div class="newpage"></div>

## Arrest Connection to Offense (L45)

___

**Data Characteristics:** 15 Character Alpha

### Requirements:

___

**MUST be a valid Offense Sequence Number (L6). The Offense Segment (20) referred to by this Data Element (L45) MUST exist.**

___

### Notes:
* `Arrest Connection to Offense (L45) is OPTIONAL at this time.` 
* `Arrest Connection to Offense (L45) relates an Arrest with the Offense giving rise to the Arrest. Indirectly, it also relates an Offender to his Victim. All Offenses should be included if a charge was added for the particular Offense, even those from different previous incidents. `
  * `The first three characters are the Offense Sequence Number (L6) of the Offense (6).`
  * `The next twelve characters are the Incident Number (2) of the Offense.`
  * `If Multiple Arrestee Segment Indicator (44) is anything except Not Applicable ("N") then this field will be connecting an Arrest to Offenses in two or more separate incidents.`
  * `The Incident Number (2) is appended to distinguish between Offense 001 in this incident and Offense 001 in a different incident.`
    * `The combined Offense Sequence Number (L6) and the Incident Number (2) add together to give a unique identifier (15 characters) indicating which Offense gave rise to the Arrest.`
  * `The Incident Number (2) can be omitted if Multiple Arrestee Segment Indicator (44) is Not Applicable ("N"), because all Offenses will be in the same incident. And therefore, the Incident Number (2) can be assumed to be that of the incident with which the Arrestee Segment (60) was submitted.`

___

<br>

<div class="newpage"></div>

## Arrestee was Armed With [At Time of Arrest] (46)

___

**Data Characteristics:** 3 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16006"] -%}
3 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16007"] -%}
4 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16054"] -%}
5 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16055"] -%}
6 | {{error.desc_de46}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If the Arrestee was in possession of a toy or play weapon this would be reported as being Unarmed ("01").`
* `Arrestee was Armed With (46) indicates if the Arrestee was armed with a commonly known weapon at the time of his/her apprehension.`
* `If the weapon was an "automatic" firearm, an Automatic ('A') designation is added as a suffix code, (for example, Rifle Automatic ('13A').`
  * `An "Automatic Firearm" is defined as any firearm that shoots, or is designed to shoot, more than one shot at a time by a single pull of the trigger without manual reloading.`


### Allowed Entries:

___

Enter as many codes as apply. However, DO NOT enter the same code more than once for the same Arrestee:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Arrestee was Armed With</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '46' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | When a man was arrested, he had in his possession a .357-Magnum handgun and a penknife. The entry should be Handgun ('12'). Because a small pocket knife is not generally considered to be a 'weapon', it does not qualify for reporting to LIBRS.
2 | A female resisted arrest using a liquor bottle and a chair as a weapon before being subdued. The entry for LIBRS should be Unarmed ('01'). Although the subject used items as weapons, they were not commonly known weapons.

___

<br>

<div class="newpage"></div>

## Age of Arrestee [At Time of Arrest] (47)

___

**Data Characteristics:** 3 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16052"] -%}
2 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16064"] -%}
3 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16008"] -%}
4 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16041"] -%}
5 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16009"] -%}
6 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["26010"] -%}
7 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16022"] -%}
8 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["22100"] -%}
9 | {{error.desc_de47}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Age of the Arrestee (47) can be entered either as an exact number of years, an estimated age, or as unknown.`
* `Note: Age at time of Arrest.`
* `Note: (00) Unknown CANNOT have 'E' with this data value`
* `Note: When Arrestee's Age is not known, estimate the Arrestee's Age and append an 'E' (Estimated).`

### Allowed Entries

___

Enter only <span style="text-decoration: underline">one</span> code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Age of Arrestee</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '47' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | An Arrestee refused to give his Date of Birth, but he appeared to be 35 to 40 years old. Possible entries would be Unknown ('00') or an estimated 37 years old ('37E'). Use the latter when possible.

<br>

<div class="newpage"></div>

## Date of Birth of Arrestee (L47)

___

**Data Characteristics:** 8 Character Date

**Format:** MMDDYYYY

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["26010"] -%}
1 | {{error.desc_del47}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["22105"] -%}
2 | {{error.desc_del47}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `If Date of Birth of the Arrestee is Known, it should be entered into this Data Element.`

___

<br>

<div class="newpage"></div>

## Sex of Arrestee (48)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de48}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16067"] -%}
2 | {{error.desc_de48}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `This Data Element (48) indicates the sex of the Arrestee.`

___

### Allowed Entries

___

Enter only (1) code per Arrest Segment:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Age of Arrestee</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '48' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

## Race of Arrestee (49)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de49}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de49}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Notes: Race of Arrestee (49) is indicated by this Data Element.`

___

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Race of Arrestee</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '49' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

<div class="newpage"></div>

## Ethnicity of Arrestee (50)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16004"] -%}
1 | {{error.desc_de50}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `This Data Element indicates the ethnic origin of the Arrestee.`

___

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Ethnicity of Arrestee</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '50' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

## Resident Status of Arrestee (51)

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16004"] -%}
1 | {{error.desc_de51}} | {{error.err_no}}| {{ error.err_message }}

___ 

### Notes:
* `The Arrestee’s Residency Status, whether Resident ('R') or Nonresident ('N'), is entered into this Data Element.`
* `A 'Resident' is a person who maintains his/her permanent home for legal purposes in the locality (i.e., town, city, or community) where the crime took place.`

___

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Resident Status of Arrestee</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '51' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

<div class="newpage"></div>

## Disposition of Arrestee Under 17 (52)

___

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16004"] -%}
1 | {{error.desc_de52}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16052"] -%}
2 | {{error.desc_de52}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16053"] -%}
3 | {{error.desc_de52}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["16040"] -%}
4 | {{error.desc_de52}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Disposition of Arrestee Under 17 (52) is to be used ONLY if the Arrestee was 16 years of age or younger at the time of arrest.`
* `This will change to Arrestee under 18 on 01/01/2020`

___

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60) for Juveniles only:

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Disposition of Arrestee Under 17</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '52' %}
    <tr><td>
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td></tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | The Arrestee, age 13, was apprehended for vandalizing a school, then released to his parents with a warning. The entry should be Handled Within the Department and Released ('D').
2 | The Arrestee, age 16, was arrested for rape, and turned over to the Adult Court to be tried as an adult. The entry would be Referred to Criminal or Adult Court ('A').

<br>

<div class="newpage"></div>

## Location of Incident (Geographical Coordinates) (L53)

___

**Data Characteristics:** 12 Character **Alpha/Numeric**

**Format:** DDMMSSDDMMSS

{::nomarkdown}

<table>
<thead>
<th colspan=2>First Six (6) Characters in Longitude</th>
<th> </th>
<th colspan=2>First Six (6) Characters in Latitude</th>
</thead>
<tbody>
<tr><td>DD</td><td>Degress</td><td></td><td>DD</td><td>Degress</td></tr>
<tr><td>MM</td><td>Minutes</td><td></td><td>MM</td><td>Minutes</td></tr>
<tr><td>SS</td><td>Seconds</td><td></td><td>SS</td><td>Seconds</td></tr>
</tbody>
</table>

{:/}

____

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20200"] -%}
1 | {{error.desc_del53}} | {{error.err_no}}| {{ error.err_message }}

___

### Notes:
* `Location of Incident (52) reports the geographical location of the incident. This field is not required and should be left blank if the agency does not track incidents with the use of geographical coordinates.`
* `Optional: This field is not validated nor submitted to the FBI.`

___

### Allowed Entries

___

Not required for LIBRS Releases 1.0/1.1. or 2.0, unless agency uses geographical coordinates to track incidents. Entry should either be valid geographical coordinates, or Blank (G). If agencies submit zeroes, program will produce errors because zeroes are
numeric.

___

<br>

## Station/Division/Precinct Identifier (L54)

___

**Data Characteristics:** 6 Character Alpha

### Requirements: 

None

___

### Notes:
* `This field is optional and is for the reporting agency's use in locating incidents.`

___

<br>

## Arrest Transaction Number (ATN) for Louisiana (L55)

___

**Data Characteristics:** 15 Character Alpha/Numeric

### Requirements: 

MUST be present if fingerprints are submitted to the Bureau of Identification of the Louisiana State Police.

___

### Notes:
* `Arrest Transaction Number (L55) is generated by the live scan when fingerprinting an Arrestee or is a pre-assigned number generated and assigned at the time of the fingerprinting. This ATN number is defined as:`
   * `Characters 1-4 4th, 5th, 6th, and 7th characters of the ORI number of the agency that made the arrest, or where the live scan device is housed.`
   * `Character 5 live scan device number assigned to the device being used to generate this Arrestee's fingerprints.`
   * `Characters 6-7 indicates the year this Arrestee's fingerprints are being scanned into this device.`
   * `Characters 8-12 Arrest Sequence Number for this arrest event. This is a number counter that sequentially assigns a number to each arrest event`
   * `Characters 13-15 indicates the number of charges being assigned to this Arrestee at the time these fingerprints are being scanned. For instance, if an Arrestee is being charged with five counts of Aggravated Battery for this arrest, the numbers generated would be "001" through "005."`
   * `The Arrest Transaction Number (L55) is used to facilitate crime analysis. Arrest Transaction Number (L55) is the number assigned when an Arrestee is fingerprinted on the Automatic Finger Print Information System (AFIS). This data element can be sent on every Arrestee, but is only mandated if the Louisiana Revised Statute is a felony arrest or charges required fingerprints.`

 <br> 

___

<div class="newpage"></div>

# Control Data Elements
___

<br>

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

### Notes:
* `This two-digit identifier is used by LIBRS to determine the type of segment being processed.`

___

### Allowed Entries for Data Element C1:

  | Value |     Segment Descriptors      |  Value   |  Segment Descriptors         |          
  |:-----:|:-----------------------------|:--------:|:-----------------------------| 
  |00     | Submission Header            | 41       | Offender Using               |
  |01     | Zero Records                 | 50       | Victim                       |
  |10     | Administration               | 51       | Victim Injury                |
  |11     | Administration Modification  | 52       | Victim/Offender Relation     |
  |20     | Offense                      | 60       | Arrestee                     |
  |30     | Property                     | 61       | Arrestee Armed               |
  |31     | Property Description         | 62       | Arrestee Statute             |
  |32     | Property Modification        | 63       | Arrestee Modification        |
  |33     | Property/Offense             | 99       | Submission Trailer           |
  |40     | Offender                     |

<br>

## Submitting Agency (C2)
___

**Data Characteristics:** 20 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20010"] -%}
1 | {{error.descc2}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `The name of the Submitting Agency is spelled out, and often abbreviated.  This data field is found in the Header Segment, which is the first segment in all data submission files.`

___

<br>

<div class="newpage"></div>

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

### Notes:
* `This data element provides LIBRS with the date that this data submission file was generated for submission.`

___

<br>

## Reporting Period (C4)
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

___

### Notes:
* `Reporting Period identifies the month and year that the Incident-Based data in a data submission file is being reported. All data in the data submission does not have to correspond to this date (i.e., Modifications and Time-Window Submissions will be from preceding months).`

____

<br>


<div class="newpage"></div>

## Action Type (C5)
___

**Data Characteristics:** 1 Character Alpha

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20001"] -%}
1 | {{error.descc5}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `Action Type (C5) informs LIBRS of the type of action that LIBRS and NIBRS are required to take with incident data contained by the segment.`

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

<div class="newpage"></div>

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

___

### Notes:
* `Clearance Indicator (C6) is used in the Arrestee Segment (60) to indicate whether this arrest produced a clearance, or is an additional arrest on a previously cleared incident that is outside the agency's base date.`

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
{% assign error = data.data.error["20001"] -%}
1 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20030"] -%}
2 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["20031"] -%}
3 | {{error.descc7}} | {{error.err_no}} | {{ error.err_message }} 

___

### Notes:
* `This field provides LIBRS with a count of segments submitted by the agency within the data submission file, including the header and trailer segments.  This number is used as part of the data submission validation process.`

<br>

**Allowed Entries:** Any integer greater than or equal to 3.

___

<br>

<div class="newpage"></div>

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

`Note: This field is used to provide LIBRS with a way to determine where an end of record occurs. In the event of an error in record length this will allow the LIBRS system to find the start of the next record and possibly recover from the error. The "End of Segment" marker is the same for all segments, two capitol Z's.`

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

___

### Notes:
* `This field is used to pad unused fields for systems that are unable to write variable length records. This padding will lengthen all segments to 150 characters. Padding can be replaced with a newline character for those systems that can write variable length records. The newline character will mark the true End-of-Record. Variable length records are preferred by LIBRS because of the space savings they allow.`

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

<div class="newpage"></div>

## LIBRS Spec Indicator (C12)

___

**\*\*\* New Data Element \*\*\***

**Data Characteristics**: 3 Characters Alpha/Numeric

**Requirements:** 

Requirement  | Requirement Description | 
:-----------:|-------------------------|
1 | Indicates the LIBRS Spec is to be used by WinLIBRS when validating a data submission

___
