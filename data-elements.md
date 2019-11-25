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

`Note: This is the 9-character NCIC Originating Agency Identifier (ORI) assigned to every law enforcement agency in Louisiana. For state or local agency submissions, the last two positions must be "00".`

<br>

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

`Note: Incident Number is the reporting agency's UNIQUE, in-house assigned case number. It is used to link subsequent update submissions to the original submission. This number will be encrypted prior to any dissemination of data to ensure that the recipient cannot identify the actual case. `

<br>

### Definitions:

**Concept of time and place provides:** If more than one crime was committed by the same person or group of persons and the time and space intervals separating them were insignificant, all of the crimes make up a single incident.

**An incident is considered as one or more offenses committed by the same offender or group of offenders acting in concert at the same time and place.**

Acting in concert requires that the offenders actually commit or assist in the commission of the crime(s). The offenders must be aware of, and consent to, the commission of the crime(s); or, even if non-consenting, their actions assist in the commission of the offense(s). This is important because all of the offenders in an incident are considered to have committed all of the offenses in the incident. If one or more of the offenders did not act in concert, then there is more than one incident involved.

**Same time and place means that the time interval between the offenses and the distancebetween the offenses and the distance between the locations where they occurred were insignificant.**

Normally, the offenses must have occurred during an unbroken time duration and at the same or adjourning location(s). However, incidents can also be comprised of offenses which by their nature involve continuing criminal activity by the same offender(s) at different times and places, as long as the activity is deemed to constitute a single criminal transaction. Regarding these situations, the reporting agency will have to use its best judgment.

___

<br>

## Incident Date/Hour (3)
___

**Description:** Date and Time when the incident occurred or started, or at the beginning of the time period in which it occurred, or date of report if unknown. If an incident occurred before the agency’s “Base Date” but was NOT reported to LIBRS until after the “Base Date” has been implemented, THIS INCIDENT WILL BE REJECTED. These type of incidents (that is, NOT reported until after your Agency’s “Base Date” was implemented) may require your agency to submit an adjusted UCR Summary form to capture these offenses. 

**Data Characteristics:** 11 Character Alpha

**Format:** MMDDYYYYXHH

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
8 | Administrative Segments (10) submitted with an Action Type of 'W' (Time-Window Submission) CANNOT have a date in 'Incident Date/Hour' (DE 3) that would be a valid date for an Incident occurring since the agency's Base Date.<br>This is also true for any Administrative Segments (10) subsequently submitted with. ||
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

Notes
`This data element is to be used to enter the month, day, year and hours when the incident occurred or started, or the beginning of the time period in which it occurred. "Military" twenty-four (24) hour time is to be used.`
`If the incident occurred on or between midnight and 0059, enter "00" for the hour; if on or between 0100 and 0159, enter "01" for the hour if on or between 2300 and 2359, enter "23" for the hour, etc.`
`If the incident occurred at exactly midnight, it is considered to have occurred at the beginning of the next day.  Therefore "00" should be entered for the hour, along with the next day's date.`
`If the incident date is unknown, enter the date of the report with the indicator "R" = Report.  Otherwise leave the report column nine (9) blank.`
`If the incident hour is unknown, leave the hour blank.`


<br>

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

<br>

### Allowed Entries
___

Enter one code per incident.

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Cleared Exceptionally Indicators</th>
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

<br>

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | A kidnapper holding a hostage killed himself when the building in which he barricaded himself was surrounded by police. The kidnaping is cleared exceptionally under, 'Death of the Offender'.

___

<br>

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

<br>

### Examples:
___


Example Number | Description
:-------------:|:-----------
1 | The incident was cleared on the books of the reporting agency on May 27. It was entered into the local computer on June 6, 2019, and was submitted to LIBRS sometime in July of 2019. The date '05272019' should be entered into this data element.

___

<br>

## Offense Sequence Number (L6)
___

**Data Characteristics:** 3 Character Numeric

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_del6}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["15002"] -%}
2 | {{error.desc_del6}} | {{error.err_no}} | {{ error.err_message }} 
{% assign error = site.data.error["25001"] -%}
3 | {{error.desc_del6}} | {{error.err_no}}| {{ error.err_message }} 

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

<br>


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

<br>

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | When 14:42 is submitted as a Louisiana Revised Statute LRS (6), LIBRS will need Qualifiers to determine if the offense should be classified as a forcible rape or as a forcible sodomy. If the offense is submitted as a **14:42/V**, this would translate to a forcible rape offense, whereas if this offense is submitted as a **14:42/A** this would translate to a forcible sodomy offense.<br><br>Without any Qualifiers, LIBRS has no way to determine which offense this LRS should be reported as, and the entire incident would be rejected. The agency will receive the following error message: 'This LRS Code must be submitted with a Qualifier to define offense applicable.'
2 | If an incident involved a robbery (14:64) and a forcible rape (**14:42.1/V**), two LRS offenses should be submitted. The 14:64 does not require any Qualifier, but the 14:42.1 does require a Qualifier.
3 | If two females were raped in an incident, two LRS offenses should be submitted for rape: One LRS should be reported for each victim -- in this case, both LRS codes should be submitted as 14:42.1/V for Victim 001 and **14:42.1/V** for Victim 002)

<br>

**Refer to the Master LIBRS/LRS Code Table to determine:**
- LRS Codes that are accepted
- What offense the LRS code was assigned: NIBRS Code determines offense to be reported.
- Index Class assigned to each LRS
- IBR and NIBRS rankings.

**To determine definitions of Qualifiers see the list at the end of this section.**

___

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

<br>

### Allowed Entries
___

Enter one code per incident.

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Offense Attempted/Completed</th>
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

<br>

### Allowed Entries
___

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Offender Suspected of Using/Gaming Motivation</th>
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

## Bias Motivation/Bias Crime Type (8A)


**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["14001"] -%}
1 | {{error.desc_de8a}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["14004"] -%}
2 | {{error.desc_de8a}} | {{error.err_no}} | {{ error.err_message }} 

<br>

### Allowed Entries:
___

Enter only one code for each Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Bias Motivation/Bias Crime Type</th>
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

**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12001"] -%}
1 | {{error.desc_de9}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12004"] -%}
2 | {{error.desc_de9}} | {{error.err_no}} | {{ error.err_message }} 

<br>

### Allowed Entries:
___

Enter only one (1) code per Offense Segment:

<br>

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Location Type</th>
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

<br>

### Examples:

Example Number | Description
:-------------:|:-----------
1 | An assault started in a bar ('03'), continued into an adjoining parking lot ('18'), and ended in the street ('13'). As the bar was the location where the offense was initiated and best describes the circumstances of the crime, Bar/Night Club ('03') should be entered.
2 | Two Offenders robbed a bar. One of the Offenders raped a female customer in the bar while the other Offender stood at the door with a gun. In this case, there is one incident, with two offenses: robbery and forcible rape. The location of the robbery would be Bar/Night Club ('03'), and the location of the forcible rape would also be Bar/Night Club ('03').

___

<br>

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

<br>


### Examples:

Example Number | Description
:-------------:|:-----------
1 | A 'self-storage' building was burglarized and 11 rented storage compartments were forcibly entered. The number '11' (for eleven compartments) should be entered into Number of Premises Entered (DE 10).

___


<br>










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

`Note: This two-digit identifier is used by LIBRS to determine the type of segment being processed.`

<br>

**Allowed Entries for Data Element C1:**

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

**Requirements:**

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20010"] -%}
1 | {{error.descc2}} | {{error.err_no}} | {{ error.err_message }} 

`Note: The name of the Submitting Agency is spelled out, and often abbreviated.  This data field is found in the Header Segment, which is the first segment in all data submission files.`
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

`Note: This data element provides LIBRS with the date that this data submission file was generated for submission.`

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

`Note: Reporting Period identifies the month and year that the Incident-Based data in a data submission file is being reported. All data in the data submission does not have to correspond to this date (i.e., Modifications and Time-Window Submissions will be from preceding months).`

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

`Note: Action Type (C5) informs LIBRS of the type of action that LIBRS and NIBRS are required to take with incident data contained by the segment.`

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

`Note: Clearance Indicator (C6) is used in the Arrestee Segment (60) to indicate whether this arrest produced a clearance, or is an additional arrest on a previously cleared incident that is outside the agency's base date.`

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

`Note: This field provides LIBRS with a count of segments submitted by the agency within the data submission file, including the header and trailer segments.  This number is used as part of the data submission validation process.`

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

`Note: This field is used to pad unused fields for systems that are unable to write variable length records. This padding will lengthen all segments to 150 characters. Padding can be replaced with a newline character for those systems that can write variable length records. The newline character will mark the true End-of-Record. Variable length records are preferred by LIBRS because of the space savings they allow.`

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