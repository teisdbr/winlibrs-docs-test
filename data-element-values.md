---
title: LIBRS Data Element Available Values
layout: default
permalink: /data-element-values
---

# LIBRS Data Element Available Values
____

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
						<td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
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