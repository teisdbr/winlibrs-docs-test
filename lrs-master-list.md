---
title: Master LRS List
layout: default
permalink: /lrs-master-list
---

# LIBRS LRS Master List
____

This page contains information about the current list of acceptable LRS Codes for LIBRS, as well as expired LRS Codes. You can use this list as a reference for the current LRS/NIBRS Mappings, or [click here](https://github.com/teisdbr/winlibrs-docs/blob/master/_data/lrs-codes.json) to download the full list in JSON Format for ingesting into your RMS

The list here is generated directly from LIBRS. If an LRS Code is missing from this list, then it is not in LIBRS. Please let us know if there is an LRS Code that you would like to report that isn't present on this list. 

____

<br>

## Current and Active Master LRS Code List

<table>
<thead style="font-size: 14px;">
	<tr>
		<th style="padding-left: 8px; padding-right:3px;">LRS #</th>
		<th style="padding-left: 0px; padding-right:3px;">LRS Description</th>
		<th style="text-align: center;">LRank</th>
		<th style="text-align: center;">UCR</th>
		<th style="text-align: center;">NIBRS</th>
		<th style="text-align: center;">Group</th>
		<th style="text-align: center;">Part</th>
        <th style="text-align: center; white-space: nowrap">1A Index</th>
        <th style="text-align: center; white-space: nowrap">Index Class</th>
        <th style="text-align: center; white-space: nowrap">UCR Index</th>
        <th style="text-align: center; white-space: nowrap">LIBRS Index</th>
	</tr>
    </thead>
    <tbody style="font-size: 13px;">
{% assign active_lrs = site.data.lrs-codes | sort:"LRS" %}
{% for lrs in active_lrs %}
{% if lrs.Expiration_Date == "Active" %}
	<tr>
		<td style="padding-left: 8px; padding-right:3px;">{{ lrs.LRS }}</td>
		<td style="padding-left: 0px; padding-right:3px;">{{ lrs.LRS_Description }}</td>
		<td style="text-align: center;">{{ lrs.Lrank }}</td>
		<td style="text-align: center;">{{ lrs.UCR }}</td>         
        <td style="text-align: center; min-width: 120px;">{% for values in lrs.Available_NIBRS %}
		        {{values}}{% if forloop.rindex0 > 0%}, {% endif %}
            {% endfor %}</td>
        <td style="text-align: center;">{{ lrs.GP }}</td>
        <td style="text-align: center;">{{ lrs.PT }}</td>
        <td style="text-align: center;">{{ lrs.OneA_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.Index_Class }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.UCR_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.LIBRS_Index }}</td>
    </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

___

<br>

## Expired LIBRS LRS Codes

The table below contains a list of LRS Codes that have been Expired. These LRS Codes could either no longer be valid Codes according to the Louisiana State Legislature, or may have had significant aspects about them changed (for instance, 14:XY might have been a Property Crime in 2018, but has since been redesignated as a Crime Against Person). 

Be sure to check the list here and make sure that your RMS is up to date with the latest Master LRS List. Again, you can download the full list for ingestion into your system [here](https://github.com/teisdbr/winlibrs-docs/blob/master/_data/lrs-codes.json)

____

<br>


<table>
<thead  style="font-size: 14px;">
	<tr>
		<th style="padding-left: 8px; padding-right:3px;">LRS #</th>
		<th style="padding-left: 0px; padding-right:3px;">LRS Description</th>
		<th style="text-align: center;">LRank</th>
		<th style="text-align: center;">UCR</th>
		<th style="text-align: center;">NIBRS</th>
		<th style="text-align: center;">Group</th>
		<th style="text-align: center;">Part</th>
        <th style="text-align: center; white-space: nowrap">1A Index</th>
        <th style="text-align: center; white-space: nowrap">Index Class</th>
        <th style="text-align: center; white-space: nowrap">UCR Index</th>
        <th style="text-align: center; white-space: nowrap">LIBRS Index</th>
        <th>Date Expired</th>
	</tr>
    </thead>
    <tbody style="font-size: 13px;">
{% assign active_lrs = site.data.lrs-codes | sort:"Expiration_Date" %}
{% for lrs in active_lrs %}
{% if lrs.Expiration_Date != "Active" %}
	<tr>
		<td style="padding-left: 8px; padding-right:3px;">{{ lrs.LRS }}</td>
		<td style="padding-left: 0px; padding-right:3px;">{{ lrs.LRS_Description }}</td>
		<td style="text-align: center;">{{ lrs.Lrank }}</td>
		<td style="text-align: center;">{{ lrs.UCR }}</td>         
        <td style="text-align: center; min-width: 120px;">{% for values in lrs.Available_NIBRS %}
		        {{values}}{% if forloop.rindex0 > 0%}, {% endif %}
            {% endfor %}</td>
        <td style="text-align: center;">{{ lrs.GP }}</td>
        <td style="text-align: center;">{{ lrs.PT }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.OneA_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.Index_Class }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.UCR_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ lrs.LIBRS_Index }}</td>
        <td>{{ lrs.Expiration_Date }}</td>
    </tr>
    {% endif %}
{% endfor %}
</tbody>
</table>

____

<br>
