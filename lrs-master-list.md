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

#### Please note that LRS Codes need to be submitted exactly as written on this page. The only available NIBRS Codes you can submit with are listed in the "NIBRS" field. Please contact us if you'd like to get an LRS Code or NIBRS Mapping added. 

<br>

## Current and Active Master LRS Code List

#### Last Updated August 25th, 2020

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$(".accordion-toggle").click(function () {
    $(this).children().children().toggleClass("down");
});
});</script>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$(".accordion-toggle").click(function () {
    $(this).toggleClass("down");
});
});</script>

<table>
<thead style="font-size: 14px;">
	<tr>
        <th style="padding-left: 12px; padding-right:3px;">Details</th>
		<th style="padding-left: 8px; padding-right:3px;">LRS #</th>
		<th style="padding-left: 0px; padding-right:3px;">LRS Description</th>
	</tr>
</thead>
{% assign active_lrs = site.data.lrs-codes | sort:"LRS" %}
<tbody>
{% for lrs in active_lrs %}
{% if lrs.Expiration_Date == "3000-01-01" %}
	<tr data-toggle="collapse" data-target="#accordion{{ lrs.LRS }}" class="accordion-toggle" style="padding-top:0px; padding-bottom:0px;">
        <td><i class="fas fa-chevron-right rotate"></i></td>
		<td style="padding-left: 8px; padding-right:3px;">{{ lrs.LRS }}</td>
		<td style="padding-left: 0px; padding-right:3px;">{{ lrs.LRS_Description }}</td></tr><tr>
    <td colspan = "3" class="hiddenRow"><div class="accordion-body collapse" id ="accordion{{ lrs.LRS }}"><table><thead><tr>
        <th style="text-align: center;">LRank</th>
		<th style="text-align: center;">UCR</th>
		<th style="text-align: center;">NIBRS</th>
		<th style="text-align: center;">Group</th>
		<th style="text-align: center;">Part</th>
        <th style="text-align: center; white-space: nowrap">1A Index</th>
        <th style="text-align: center; white-space: nowrap">Index Class</th>
        <th style="text-align: center; white-space: nowrap">UCR Index</th>
        <th style="text-align: center; white-space: nowrap">LIBRS Index</th></tr></thead><tbody style="font-size: 13px;"><tr>
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
        <td style="text-align: center; white-space: nowrap">{{ lrs.LIBRS_Index }}</td></tr>
    </tbody>
    </table>
    </div>
    </td>
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
{% if lrs.Expiration_Date != "3000-01-01" %}
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
