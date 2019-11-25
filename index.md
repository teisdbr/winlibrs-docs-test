---
title: Home Page
layout: default
permalink: /
---

# LIBRS Validation and Processing Documentation
____

This page contains information on how LIBRS Flat Files should be processed and generated for use in submitting data to the State of Louisiana, and subsequently the FBI via NIBRS. 

This site contains the following information:
- <a href="./librs-spec">LIBRS Specification Documentation</a>
- <a href="./data-elements">LIBRS Data Element Definitions</a>
- <a href="./lrs-master-list">Master LIBRS LRS List</a>
- LRS to NIBRS Translations
  

<table>
<thead style="font-size: 14px;">
	<tr>
		<th style="max-width:80px;text-align: center;">Element Number</th>
		<th>Element Name</th>
		<th>Definition</th>
		<th style="text-align: center;">Length</th>
		<th style="text-align: center;">Format</th>
		<th>Values</th>
		<th>Comments</th>
	</tr>
    </thead>
    <tbody style="font-size: 13px;">
{% for de in site.data.data-element-defs %}
	<tr>
		<td style="max-width:80px;text-align: center;">{{de.de_num}}</td>
		<td>{{de.name}}</td>
		<td>{{de.definition}}</td>
		<td style="text-align: center;">{{de.length}}</td>
		<td style="text-align: center;">{{de.format}}</td>
        <td style="min-width: 250px">
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
			<br>
        	{% endfor %}
			
		</td>
        <td style="min-width: 300px">{{de.comment}}</td>
    </tr>
{% endfor %}
</tbody>
</table>