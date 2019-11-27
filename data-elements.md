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

<br>



### Allowed Entries:
___

Enter only one (1) code per Offense Segment:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Location Type</th>
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

<br>

### Examples: 
___

Example Number | Description
:-------------:|:-----------
1 | Investigation of a burglary complaint disclosed that the Offender(s) entered the building through an unlocked street door, then forced a locked door to an office and stole a typewriter. Since one door was forced, the Method of Entry should be entered as Force ("F").

___

<br>

## Relationship of Victim to Offender (35)

**Data Characteristics:** 2 Character Alpha

### Requirements:
___

Requirment   | Requirement Description | Error Number | Error Message
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
{% assign error = site.data.error[""] -%}
8 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
9 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
10 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
11 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
12 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error[""] -%}
13 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error[""] -%}
14 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
15 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
16 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
17 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error[""] -%}
18 | {{error.desc_de35}} | {{error.err_no}}| {{ error.err_message }} 

___

<br>

"desc_de35": "

 **Error 15060**
 **Error** **15004**
 **Error** **15050, 14050**
  **Error** **14054**
 **Error** **15068**
>
> 7\) When Victim was Offender [(]{.underline}\"VO\"[)]{.underline} is
> entered, a minimum of [two]{.underline} Victims Segments (50) and
> [two]{.underline} Offender Segments (40) MUST be submitted. \"VO\"
> indicates situations such as brawls and domestic disputes **where all of
> the participants in the incident were Victims and Offenders of the same
> Offense (for example, assaults or double murders where two people kill
> each other).** In most cases, each Victim is also the Offender;
> therefore, every Victim Segment (50) will contain a \"VO\" code.\
> \
> However, there may be some situations where only one of the Victims is
> also the Offender, but where the other Victim(s) are not also the
> Offender(s) (for example, a Victim who is not an Offender could be an
> innocent bystander in a barroom brawl, or a child who is victimized as a
> result of the parents domestic dispute). **Error** **15070**
>
> 8\) When entered, Victim was Offender (\"VO\") can only be entered once
> in a Victim Segment (50) and can refer to an Offender only once. Since
> \"VO\" points to himself/herself, a Victim CANNOT at the same time be
> two Offenders.
>
> **Error** **15071, 15074**
>
> 9\) When the related Offender has \"Unknown\" values entered for Age, Sex
> and Race, the relationship must be Relationship Unknown (\"RU\"). This
> edit ensures a logical relationship. For example, if Brother ("SB") was
> entered fro Relationship of Victim to Offender (25), then Age, Sex and
> Race would NOT be Unknown values.
>
> **Error** **15072**
>
> **10) In a multiple Offender incident, a Victim CANNOT have a
> relationship of Spouse (\"SE\") to more than one Offender. Error
> 15075**
>
> **11) In a multiple Victim incident, two or more Victims CANNOT have a
> Victim relationship of Spouse (\"SE\") to the same Offender. Error
> 15076**
>
> 12\) MUST be entered if Louisiana Revised Statute (6) is a *Crime Against
> Person*, and has a **NIBRS Offense code \[as defined on Master LIBRS/LRS
> Code Table\] of:\
> \
> 09A 09B 09C\
> 100\
> 11A 11B 11C 11D\
> 120\
> 13A 13B 13C\
> 36A 36B\
> 90Z\
> \
> *[and]{.underline}*** Louisiana Revised Statute (6) is one of the
> following:
>
> 14:28.1 14:30 14:30.1 14:31\
> 14:32 14:32.1/AA 14:32.12 14:34 14:34.1\
> 14:34.2 14:34.3 14:34.4 14:34.5 14:34.5.1
>
> 14:34.6 14:34.7 14:35 14:35.1 14:35.2
>
> 14:35.3 14:35.3/M 14:37 14:37.1 14:37.2
>
> 14:37.3 14:37.4 14:37.5 14:38 14:38.1
>
> 14:38.2 14:38.3 14:39 14:39.1 14:39.2
>
> 14:40 14:40.1 14:40.2 14:40.3 14:40.4
>
> 14:40.5 14:40.6 14:40.60 14:42/A 14:42/V
>
> 14:42.1/A 14:42.1/V 14:43/A 14:43/V 14:43.1/N
>
> 14:43.1/P 14:43.2/N 14:43.2/P 14:43.3 14:43.4
>
> 14:43.5 14:43.6 14:44 14:44.1 14:44.1/A
>
> 14:44.1/N 14:44.1/O 14:44.1/P 14:44.1/V 14:44.2
>
> 14:45 14:45.1 14:46 14:46.1 14:46.30
>
> 14:47 14:50.1 14:50.2 14:54.1 14:54.6
>
> 14:78 14:78.1 14:79 14:80 14:80.1
>
> 14:81 14:81.2 14:81.3 14:81.4 14:87.1
>
> 14:87.2/F 14:87.2/L 14:87.5/F 14:87.5/L 14:89.1
>
> 14:92.1 14:92.3 14:93/F 14:93.2.3 14:93.3
>
> 14:93.5 14:94/E 14:102.21 14:103/A1 14:107.1/F
>
> 14:108/B1BF 14:108/B1B 14:108.2 14:122/F 14:122/T
>
> 14:122.1 14:122.2 14:129/A1 14:129/A2F 14:129/A2T
>
> 14:129.1 14:129.1/F 14:129.1/T 14:130.1/A 14:130.1/T
>
> 14:130.1/F 14:133.1/F 14:133.1/T 14:133.5 14:285
>
> 14:286 14:404/J 14:404/Q 14:501 32:668
>
> **Relationship of Victim to Offender (35) MUST be Blank (G) when
> \"000\" is entered into Offender Number to be Related (34). Error**
> **15059**
>
> **13) If Offenders of Human Trafficking offenses (NIBRS Codes 64A, 64B
> and 40C) are *known*, then data value for Relationship of Victim to
> Offender (Data Element 34) MUST be supplied as well.**

**Allowed Entries:** MUST enter [ONE]{.underline} code for each Victim
Segment (50). MUST enter relationship of each Victim to each Offender
when Offense is a *Crime Against Person* or a Robbery against a Victim:

  Relationship of Victim to Offender    
  ------------------------------------- ---------------------------------------------------------------------------------
  Within Family                         
  SE                                    Victim was Spouse
  CS                                    Victim was Common-Law Spouse
  PA                                    Victim was Parent
  SB                                    Victim was Sibling (brother or sister)
  CH                                    Victim was Child
  GP                                    Victim was Grandparent
  GC                                    Victim was Grandchild
  IL                                    Victim was In-Law
  SP                                    Victim was Stepparent
  SC                                    Victim was Stepchild
  SS                                    Victim was Step sibling (stepbrother or stepsister)
  OF                                    Victim was Other Family Member (step-grandparents, ex-common law spouses. etc.)
  NM                                    Victim was Non-Married Live-In (to NIBRS as CS)
  Outside Family, But Known to Victim   
  AQ                                    Victim was Acquaintance
  FR                                    Victim was Friend
  NE                                    Victim was Neighbor
  BE                                    Victim was Babysittee (the baby)
  BG                                    Victim was Boyfriend/Girlfriend
  XB                                    **Victim was Ex-Boyfriend/Ex-Girlfriend** (to NIBRS as BG)
  CF                                    Victim was Child of Boyfriend or Girlfriend
  HR                                    Victim was in Homosexual Relationship
  XS                                    Victim was Ex-Spouse
  EE                                    Victim was Employee
  ER                                    Victim was Employer
  OK                                    Victim was Otherwise Known
  ES                                    Victim was Estranged Spouse (to NIBRS as SE)
  Not Know By Victim                    
  RU                                    Relationship Unknown
  ST                                    Victim was Stranger
  Other                                 
  VO                                    Victim was Offender

**Examples**:

\(1) An employee assaulted his employer (a person) with his fists. Victim
was Employer (ER) should be entered.

\(2) Two unknown subjects rob a male and a female couple. Victim was
Stranger (\"ST\") should be entered to indicate the relationship of each
Victim to each Offender.

### 

___

<br>

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

`Notes: Each Offender in an incident is assigned a UNIQUE Offender Sequence Number (36) from '001' to '999'. If nothing is known about the Offender(s), enter '000' into this data element and LEAVE DATA ELEMENTS 37 THROUGH 39 BLANK (G). Also, Offender Suspected of Using (8) MUST be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) MUST be None ('88').`

<br>


### Examples: 
___

Example Number | Description
:-------------:|:-----------
1 | A corpse with five bullet holes in it was found in an abandoned warehouse. There were no witnesses to the crime, or suspects. A single Offender Segment (40) should be submitted with '000' entered into Offender Sequence Number (36) and with no entries in Data Elements 37 through 39. **Also, Offender Suspected of Using (8) must be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) must be None '88'.**
2 | Two Offenders were seen fleeing the scene of a burglary, but because they were wearing ski masks, their Age, Sex, and Race could not be determined. Two Offender Segments (40) should be submitted: the first with Offender Sequence Number \"001\" and the second with '002'. Applicable Unknown codes should be entered into Data Elements 37, 38 and 39. **Also, Offender Suspected of Using (8) MUST be Not Applicable ('N') and Bias Motivation/Bias Crime Type (8A) MUST be None ('88').**

___

<br>

## Age of Offender [at Time of Incident] (37)



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
6a | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14008"] -%}
6b | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14009"] -%}
7a | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["24010"] -%}
7b | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}
{% assign error = site.data.error["14022"] -%}
7c | {{error.desc_de37}} | {{error.err_no}}| {{ error.err_message }}

___

`Note: Age of the Offender (37) is entered either as an exact number of years, an estimated age or as unknown.`

<br>

### Allowed Entries

___

Enter only one code per Offender Segment(40):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Age of Offender (at Time of Incident)</th>
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

<br>

 `If the Offender's Age is NOT KNOWN, estimate the Offender's Age and append an 'E' (Estimated). If a range is given for the Offender's Age, enter the median (average) age of the range (rounded down). If it is impossible to determine even an Estimated Age of the Offender, then enter Unknown ('00').`



<br>

### Examples: 


Example Number | Description
:-------------:|:-----------
1 | If the Victim, or a witness, reported the Offender's Age as between 25 and 30 years old, enter '27E' (the average of 25 and 30 is 27.5, round down to get an estimated age of 27).

___

<br>


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

`Note: If the Date of Birth of the Offender is known, it is to be indicated in this data element.`

___

<br>

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
{% assign error = site.data.error["14060"] -%}
6 | {{error.desc_de38}} | {{error.err_no}}| {{ error.err_message }} 

`Note: This Data Element (38) indicates Sex of the Offender.`

___

<br>



### Allowed Entries:
___

Enter only (1) code per Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Sex of Offender</th>
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

<br>

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | The witness caught only a fleeting glance of the Offender and, therefore, was unable to report the Offender's Sex. The entry should be Unknown ('U').

___

<br>



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

`Note: Race of an Offender is indicated in this Data Element (39).`

___

<br>



### Allowed Entries:
___

Enter only (1) code per Offender Segment (40):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Race of Offender</th>
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

`Note: Each Arrestee reported is assigned a UNIQUE Sequence Number from '001' to '999'.`

___

<br>

### Examples:
___

Example Number | Description
:-------------:|:-----------
1 | If two persons were arrested in connection with a previously submitted incident, **two** Arrestee Segments should be submitted: one with Arrestee Sequence Number '001' and the other with '002'.

_____

<br>



## Arrestee Name (L40)

___

**Data Characteristics:** 20 Character Alpha

**Format:** (Last Name)(Suffix,(First Name)(Middle Name)\Suffix includes standard suffixes used to distinguish between
generations (for example, Sr, Jr, III, II). <span style="text-decoration: underline">Do not include titles</span> (for example, MD, M.E., Ph.D., Esq., etc.)

**Requirements:** None

___

`**Note:** If Arrestee’s full name will not fit in the field, then enter as much as possible. DO NOT put periods behind suffix abbreviations or middle initial.`

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

`**Note:** This Data Element (41) is a UNIQUE, IDENTIFYING number assigned by an agency to an Arrest Report. It may be the <span style="text-decoration: underline">Incident Number</span> of a reported incident relating to the Arrest, or it may be a separate Booking Number.`

<br>

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

`**Note:** Arrest Date (42) is used to enter the month, day and year when the actual arrest took place.`

<br>

## Type of Arrest (43)

___

**Data Characteristics**: 1 Character Alpha

### Requirements:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de43}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de43}} | {{error.err_no}}| {{ error.err_message }} 

<br>

`**Notes:** Type of Arrest (43) indicates the type of apprehension.`

___

### Allowed Entries:

___

Enter only <span style="text-decoration: underline">one</span> code per Arrest Segment:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Type of Arrest</th>
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

<br>

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

`Notes: Multiple Arrestee Segment Indicator (44) ensures that an Arrestee is counted (scored) only once when the Arrestee's apprehension causes the Arresting Agency to submit two or more Arrestee Segments (60) concerning separate Incident Reports. That is, the Arrestee was involved in more than one crime incident and his/her arrest data are duplicated in each Incident Report. In such a situation, Count Arrestee (“C”) is to be entered into one of the Arrestee Segments (60), and Multiple (M) is to be entered into all of the remaining Arrestee Segments (60). If the Arrestee's apprehension DOES NOT cause the Arresting Agency to submit multiple Arrestee Segments (60), enter Not Applicable (“N”).`

<br>

### Allowed Entries:
___

Enter only one (1) code per Arrestee Segment:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Multiple Arrestee Segment Indicator</th>
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


`Note: Count Arrestee (“C”) and Multiple ("M") codes are to be used in this Data Element (44) ONLYwhen the same agency submits two or more Arrestee Segments (for different incidents) relating to the same Arrestee.`

___

<br>

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | After a suspect's apprehension for robbery, it was learned that he was also responsible for five additional robberies within the jurisdiction. One Arrestee Segment (60) was keyed into the local computer, along with the Incident Numbers of the six incidents. The local computer then generated six Arrestee Segments (60) which were duplicates except for their Incident Numbers. Five of the Arrestee Segments (60) had Multiple ("M") and one had Count Arrestee ("C") entered into Multiple Arrestee Segment Indicator (44). Each of the six robberies is cleared.
2 | If the suspect's arrest did not clear additional incidents, the entry should be Not Applicable ("N").

<br>

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

`Notes: This Data Element records the Louisiana Revised Statute that the Arrestee was charged with. The structure of a Louisiana Revised Statute (LRS) is: Title (TT), followed by a colon, then a Section Number (SSSS.S), followed by optional Subparts, Qualifiers and Modifiers. Section and Subpart/Subpart with Qualifier/Qualifier/Juvenile Qualifier/Inchoate Modifier, should NOT be preceded by spaces or zeroes. If there are no places after the decimal, then both the place after the decimal and the decimal point should be omitted. (For example, the LRS for Murder is 14:30 – two spaces for the Title (14), a colon, two spaces for the Section (30) before the decimal, [not four spaces14:GG30], and dropping the space after the decimal.) The field should be LEFT JUSTIFIED WITH NO INCLUDED SPACES. <span style="text-decoration: underline">Spaces are interpreted as the End-of-Data in this data element.</span>`

`Subparts, Qualifiers, etc. are sometimes included for more specificity regarding those LRS codes requiring these identifiers. These parts of the field can be expanded or contracted as necessary to fill in the data.`

`All local ordinances must be reported with the appropriate state statute as the base offense, with any Subparts, Qualifiers, etc. added when applicable. When a parish statute does not correspond to a state LRS, the parish statute must be reported with a "P:" for the title and the parish statute following the colon. If a city ordinance does not correspond to a state LRS, it must be reported by the police department with a "C:" substituted for the title portion of the data field, and the city ordinance following the colon. When it is a Sheriff's Office, or any other law enforcement agency who has jurisdiction in more than one city, reporting the city ordinance, it should be reported with a "C#:" substituted for the title portion of the data field, and the city ordinance following the colon, where the "#" is replaced with a unique number for each city as decided by the agency and agreed upon by the state.`

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

## Arrest Connection to Offense (L45)

**Data Characteristics:** 15 Character Alpha

### Requirements:

___

MUST be a valid Offense Sequence Number (L6). The Offense Segment (20) referred to by this Data Element (L45) MUST exist.

___

`Notes: Arrest Connection to Offense (L45) is OPTIONAL at this time.` 

`Arrest Connection to Offense (L45) relates an Arrest with the Offense giving rise to the Arrest. Indirectly, it also relates an Offender to his Victim. All Offenses should be included if a charge was added for the particular Offense, even those from different previous incidents. `

`The first <span style="text-decoration: underline">three</span> characters are the Offense Sequence Number (L6) of the Offense (6). The next <span style="text-decoration: underline">twelve</span> characters are the Incident Number (2) of the Offense. If Multiple Arrestee Segment Indicator (44) is anything except Not Applicable ("N") then this field will be connecting an Arrest to Offenses in two or more separate incidents. The Incident Number (2) is appended to distinguish between Offense 001 in this incident and Offense 001 in a different incident. The combined Offense Sequence Number (L6) and the Incident Number (2) add together to give a unique identifier (15 characters) indicating which Offense gave rise to the Arrest. The Incident Number (2) can be omitted if Multiple Arrestee Segment Indicator (44) is Not Applicable ("N"), because all Offenses will be in the same incident. And therefore, the Incident Number (2) can be assumed to be that of the incident with which the Arrestee Segment (60) was submitted.`

___

<br>

## Arrestee was Armed With [At Time of Arrest] (46)

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

<br>

### Allowed Entries:

___

Enter as many codes as apply. However, DO NOT enter the same code more than once for the same Arrestee:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Arrestee was Armed with (at Time of Arrest)</th>
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

`Note: If the Arrestee was in possession of a toy or play weapon this would be reported as being Unarmed ('01').`

`Notes: Arrestee was Armed With (46) indicates if the Arrestee was armed with a commonly knownweapon at the time of his/her apprehension.`

`If the weapon was an "automatic" firearm, an Automatic ("A") designation is added as a suffixcode, (for example, Rifle Automatic ("13A"). An "Automatic Firearm" is defined as any firearmthat shoots, or is designed to shoot, more than one shot at a time by a single pull of the trigger without manual reloading.`

`Can enter as many codes as are applicable`

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

## Age of Arrestee [At Time of Arrest] (47)

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

`Note: Age of the Arrestee (47) can be entered either as an exact number of years, an estimated age, or as unknown.`

<br>

### Allowed Entries

___

Enter only <span style="text-decoration: underline">one</span> code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Age of Arrestee</th>
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

<br>

 `Note: Age at time of Arrest.`

 `Note: (00) Unknown CANNOT have 'E' with this data value`

 `Note: When Arrestee's Age is not known, estimate the Arrestee's Age and append an 'E' (Estimated).`

___

<br>

### Examples: 

___

Example Number | Description
:-------------:|:-----------
1 | An Arrestee refused to give his Date of Birth, but he appeared to be 35 to 40 years old. Possible entries would be Unknown ('00') or an estimated 37 years old ('37E'). Use the latter when possible.

<br>

## Date of Birth of Arrestee (L47)

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


`Note: If Date of Birth of the Arrestee is Known, it should be entered into this Data Element.`

<br>

## Sex of Arrestee (48)

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de48}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16067"] -%}
2 | {{error.desc_de48}} | {{error.err_no}}| {{ error.err_message }}

`Note: This Data Element (48) indicates the sex of the Arrestee.`

___

<br>

### Allowed Entries

___

Enter only (1) code per Arrest Segment:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Age of Arrestee</th>
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

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16001"] -%}
1 | {{error.desc_de49}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["16004"] -%}
2 | {{error.desc_de49}} | {{error.err_no}}| {{ error.err_message }}

`Notes: Race of Arrestee (49) is indicated by this Data Element.`

___

<br>

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Race of Arrestee</th>
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

## Ethnicity of Arrestee (50)

**Data Characteristics:** 1 Character Alpha

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["16004"] -%}
1 | {{error.desc_de50}} | {{error.err_no}}| {{ error.err_message }}

`Note: This Data Element indicates the ethnic origin of the Arrestee.`

___

<br>

### Allowed Entries

___

Enter only (1) code per Arrest Segment:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Ethnicity of Arrestee</th>
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

`Notes: The Arrestee’s Residency Status, whether Resident ('R') or Nonresident ('N'), is entered into this Data Element.`

`A 'Resident' is a person who maintains his/her permanent home for legal purposes in the locality (i.e., town, city, or community) where the crime took place.`

___

<br>

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60):

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Resident Status of Arrestee</th>
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

## Disposition of Arrestee Under 17 (52)

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

`Notes: Disposition of Arrestee Under 17 (52) is to be used ONLY if the Arrestee was 16 years of age or younger at the time of arrest.`

`This will change to Arrestee under 18 on 01/01/2020`

___

<br>

### Allowed Entries

___

Enter only (1) code per Arrest Segment (60) for Juveniles only:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Disposition of Arrestee Under 17</th>
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

<br>

### Examples: 

___


Example Number | Description
:-------------:|:-----------
1 | The Arrestee, age 13, was apprehended for vandalizing a school, then released to his parents with a warning. The entry should be Handled Within the Department and Released ('D').
2 | The Arrestee, age 16, was arrested for rape, and turned over to the Adult Court to be tried as an adult. The entry would be Referred to Criminal or Adult Court ('A').

<br>

## Location of Incident (Geographical Coordinates) (L53)

**Data Characteristics:** 12 Character **Alpha/Numeric**

**Format:** DDMMSSDDMMSS

|First six characters are LONGITUDE in:
:-------:|-----------------------------------
DD       | Degrees   
MM       | Minutes                             
SS       | Seconds                           

<br>

|Second six characters are LATITUDE in:
:-------:|-----------------------------------
DD       | Degrees   
MM       | Minutes                             
SS       | Seconds                     

<br>

### Requirements:

___

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["20200"] -%}
1 | {{error.desc_del53}} | {{error.err_no}}| {{ error.err_message }}

`Note: Location of Incident (52) reports the geographical location of the incident. This field is not required and should be left blank if the agency does not track incidents with the use of geographical coordinates.`

`Optional: This field is not validated nor submitted to the FBI.`

___

<br>

### Allowed Entries

___

Not required for LIBRS Releases 1.0/1.1. or 2.0, unless agency uses geographical coordinates to track incidents. Entry should either be valid geographical coordinates, or Blank (G). If agencies submit zeroes, program will produce errors because zeroes are
numeric.

<br>

## Station/Division/Precinct Identifier (L54)

**Data Characteristics:** 6 Character Alpha

### Requirements: 

None

___

`This field is optional and is for the reporting agency's use in locating incidents.`

<br>

## Arrest Transaction Number (ATN) for Louisiana (L55)

**Data Characteristics:** 15 Character Alpha/Numeric

### Requirements: 

MUST be present if fingerprints are submitted to the Bureau of Identification of the Louisiana State Police.

___

`Notes: Arrest Transaction Number (L55) is generated by the live scan when fingerprinting an Arrestee or is a pre-assigned number generated and assigned at the time of the fingerprinting. This ATN number is defined as:`

`Characters 1-4 4th, 5th, 6th, and 7th characters of the ORI number of the agency that made the arrest, or where the live scan device is housed.`
`Character 5 live scan device number assigned to the device being used to generate this Arrestee's fingerprints.`
`Characters 6-7 indicates the year this Arrestee's fingerprints are being scanned into this device.`
`Characters 8-12 Arrest Sequence Number for this arrest event. This is a number counter that sequentially assigns a number to each arrest event`
`Characters 13-15 indicates the number of charges being assigned to this Arrestee at the time these fingerprints are being scanned. For instance, if an Arrestee is being charged with five counts of Aggravated Battery for this arrest, the numbers generated would be "001" through "005."`
`The Arrest Transaction Number (L55) is used to facilitate crime analysis. Arrest Transaction Number (L55) is the number assigned when an Arrestee is fingerprinted on the Automatic Finger Print Information System (AFIS). This data element can be sent on every Arrestee, but is only mandated if the Louisiana Revised Statute is a felony arrest or charges required fingerprints.`

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

