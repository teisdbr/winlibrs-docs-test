---
title: Data Elements
layout: default
permalink: /data-elements2
---

# LIBRS Data Elements
____

# Data Element Definitions
____


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

<br>

### Allowed Entries (Criminal Activity)
___

Up to three (3) of the following **Type of Criminal Activity** Codes can be entered for offenses. These offenses can only be of NIBRS type **250, 35B, 520, 280, 39C, 90A, 35A, 370 and 90Z**. 

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Type of Criminal Activity Codes</th>
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

### Examples (Criminal Activity):
___

Example Number | Description
:-------------:|:-----------
1 | The Offenders published and sold pornographic photographs of children. Therefore, up to three types of Criminal Activity can be entered: Cultivating/Manufacture/Publishing ("C"), Distributing/Selling ("D"), and Exploiting Children ("E").

<br>

### Requirements (Gang Activity):
___ 

The following requirements are for **Gang Information Only**:

Requirement  | Requirement Description | Error Number | Error Message
:-----------:|-------------------------|:------------:|----------
{% assign error = site.data.error["12019"] -%}
4 | {{error.desc_de12-2}} | {{error.err_no}}| {{ error.err_message }} 
{% assign error = site.data.error["12017"] -%}
5 | {{error.desc_de12}} | {{error.err_no}}| {{ error.err_message }} 

<br>

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Type of Gang Information Codes</th>
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


### Examples (Gang Information):
___

Example Number | Description
:-------------:|:-----------
1 | Two males, aged 19, were on bicycles riding through a neighborhood when they were approached by three males and forced to stop. Words were exchanged and one of the bicyclists was attacked. Each of the three attackers, one, aged 16 and the other two, aged 17, had identical tattoos on their upper arm. This marking was commonly associated with a local gang. The entry for Type of Criminal Activity/Gang Information should be Juvenile Gang ("J").

<br>

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


### Allowed Entries:
Can enter up to three (3) codes for each offense:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Types of Weapon/Force Involved</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '13' %}
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
1 | Three robbers held up a bank. One was armed with a revolver, the second had a sawed-off shotgun, and the third had an automatic machine gun. The entries would be: Handgun ('12'), Shotgun ('14') and Other Automatic Firearm ('15A').

<br>

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

`Note: There is no UNIQUE constraint for the Property Sequence Number Reference. This allows for a Property to relate to many Offenses if multiple Property/Offense segments are submitted within a single incident.`

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

`Note: There is no UNIQUE constraint for the Property Sequence Number Reference. This allows for a Property to relate to many Offenses if multiple Property/Offense segments are submitted within a single incident.`

<br>

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

<br>

### Allowed Entries:
___

Enter only one (1) code for each Property Description Segment. However, as many property segments as applicable can be submitted per incident:

<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Types of Weapon/Force Involved</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '14' %}
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


<br>


### Allowed Entries: 
___

Enter one Property Description (DE 15) code per Property Description (31) Segment, but can enter multiple Property Description (31) Segments. Do NOT enter duplicate Property Description (DE 15) codes within an Incident, unless a different Type of Property Loss (DE 14) code is used. An exception would be if there is more than one Drug that was Seized in the Incident. However, rules found in the Mandatory Data Element Requirements must still be followed.


<table>
<thead>
	<tr>
		<th colspan = "2" style="align-text:center;">Types of Weapon/Force Involved</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
    {% if de.de_num == '15' %}
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


>
> 2\) If Value of Property (16) is unknown, must enter a value of Unknown
> ("1", representing \$1.00). A value of zero ("0") is allowed only when
> Property Description (15) codes are the following:
>
> ZERO ("0") value is ***required*** for the following:
>
> 09 Credit/Debit Cards
>
> 22 Nonnegotiable Instruments
>
> 48 Documents/Personal or Business
>
> 65 Identity Documents
>
> 66 Identity-Intangible
>
> **Error 13051**
>
> ZERO ("0") value is ***optional*** for the following:
>
> 77 Other
>
> 99 Special Category.
>
> **Error 13051\
> **
>
> 3\) When Property Description (15) has Credit/Debit Cards (\"09\") or
> Nonnegotiable Instruments (\"22\") entered, a ZERO ("0") value is
> required for Value of Property (16). **Error**s **13091**
>
> 4\) If a Value of Property (16) has a code entered, then Property
> Description (15) must be entered. **Error** **13054**
>
> 5\) For Property Description Segments (31) having Type of Property Loss
> (14) entries for both Stolen/Etc. ("7") and Recovered (\"5\"), the
> Recovered \"property\" CANNOT have Value of Property (16) value(s)
> greater than corresponding Stolen "property" Value of Property (16)
> value(s). **Error 10084**
>
> 6\) When Value of Property (16) contains a value that exceeds a LIBRS
> assigned threshold amount, a \"Warning\" message is created. The agency
> is asked to check if the value entered was a data entry error, or if it
> was an intended entry.\
> \
> Also, a Warning message is always produced when the value is \$1,000,000
> or greater. For example, if the value of a property was \$12,000.99 but
> was inadvertently entered as \$1,200,099 in LIBRS submission file, a
> \"Warning\" message will be generated. In this case, the cents were
> entered as whole dollars. **Error 13042**

**Example:** A man purchases a new power saw from the hardware store.
Later that same day someone breaks into his truck and steals the saw.
The saw was purchased for \$95.73. The value of the property would be
rounded to the nearest whole dollar and reported as \"000000056\"-
\$96.00.