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
<thead>
	<tr>
		<th style="max-width:80px;text-align: center;">Element Number</th>
		<th style="max-width:200px;">Element Name</th>
		<th style="max-width:300px;">Definition</th>
		<th style="text-align: center;">Length</th>
		<th style="text-align: center;">Format</th>
		<th>Values</th>
		<th style="max-width:300px;">Comments</th>
	</tr>
    </thead>
    <tbody>
{% for de in site.data.data-element-defs %}
	<tr>
		<td style="max-width:80px;text-align: center;">{{de.de_num}}</td>
		<td style="max-width:200px;">{{de.name}}</td>
		<td style="max-width:300px;">{{de.definition}}</td>
		<td style="text-align: center;">{{de.length}}</td>
		<td style="text-align: center;">{{de.format}}</td>
        <td>
        {% for values in de.values %}
		    {{values.code}}...{{values.desc}}<br>
        {% endfor %}</td>
        <td style="max-width:300px;">{{de.comment}}</td>
    </tr>
{% endfor %}
</tbody>
</table>