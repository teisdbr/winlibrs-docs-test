---
title: LIBRS Data Element Available Values
layout: default
permalink: /data-element-values
---
# LIBRS Data Element Available Values

---

<table>
<thead>
	<tr>
		<th style="max-width:80px;text-align: center;">Element Number</th>
		<th>Element Name and Definition</th>
		<th style="text-align: center;">Length</th>
		<th style="text-align: center;">Format</th>
		<th>Values</th>
		<th>Comments</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
	<tr>
		<td style="max-width:80px;text-align: center;">{{de.de_num}}</td>
		<td><u>{{de.name}}</u><br>{{de.definition}}</td>
		<td style="text-align: center;">{{de.length}}</td>
		<td style="text-align: center;">{{de.format}}</td>
        <td style="min-width: 400px">
			{% for subsection in de.subsection %}
				<table class="subtable">
				{% if subsection.title != "" %}<th colspan="3">{{subsection.title}}</th> {% endif %}
					{% for values in subsection.values %}
					<tr>
            			<td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{values.code}}</td>
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;"> - </td>
            		    <td style="vertical-align: top; padding-left:0px;">{{values.desc}}</td>
            		</tr>
					{% endfor %}
				</table>
			{% if forloop.last == false %}<br>{% endif %}
        	{% endfor %}
		</td>
        <td style="min-width: 300px">{{de.comment}}</td>
    </tr>
{% endfor %}
</tbody>
</table>

`<br><br>`

# Allowable Property Loss Types (DE 14) By NIBRS and Attemped/Completed

---

The following table outlines the values that are allowed to be used for data Element 14, Property Loss Type, when an Offense of a particular NIBRS Code is either Attempted or Completed.

<table>
<thead>
	<tr>
		<th style="text-align: center;">NIBRS Code</th>
		<th>When Attempted...</th>
		<th>When Completed...</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.loss-types-by-nibrs-code.applicablePropertyLossTypes %}
	<tr>
		<td style="text-align: center;">{{de.nibrs}}</td>
		<td>
		{% for att in de.attempted %}
		{{att.lossType}} - {{att.description}}{% if forloop.last == false %}<br>{% endif %}
		{% endfor %}
		</td>
		<td>
		{% for com in de.completed %}
		{{com.lossType}} - {{com.description}}{% if forloop.last == false %}<br>{% endif %}
		{% endfor %}
		</td>
    </tr>
{% endfor %}
</tbody>
</table>
