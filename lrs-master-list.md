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
{% assign lastUpdated = site.data.lrs-master-list-last-updated.lastUpdated %}
#### Last Updated {{ lastUpdated }}

___

As of October 2020, we've made some revisions to this page for how the data is displayed. In order to make things a little more clear, we've made it so that when you click on an LRS Code, it expands to show you the relevent NIBRS and reporting information about it. This way we can display the actual information that goes along with each Multiple Mapping for an LRS Code.

As a result the JSON File used to generate this portion of the documentation has changed slightly. However in an effort to help eliminate confusion for Vendors, we'll still be providing the file [here](https://github.com/teisdbr/winlibrs-docs/blob/master/_data/lrs-codes-old.json). Note that duplicates will be present due to the changes made to how NIBRS information is stored in our database. But the format is the same, so your Classes should all still work.


___


<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$(".accordion-toggle").click(function () {
    $(this).children().children().toggleClass("down");
});
});</script>
<script>var expanded = false</script>
<script type="text/javascript">
$(document).ready(function(){
$(".showhide").click(function () {
    if(expanded == false){
        expanded = true
    }
    else{
        expanded = false
    }
    var selection = document.getElementsByClassName("accordion-body");
    for (var i = 0; i < selection.length; i++) {
        var dummy = $(selection.item(i).classList)
        if (expanded == false) {
        $(selection.item(i).classList.remove("show"));
        }
        else {
        $(selection.item(i).classList.add("show"));
        }
}
});
});</script>

<button class="showhide">Show/Hide All</button>
<!-- <button class="showhide" data-toggle="collapse" data-target="$selector">Show/Hide All</button> -->
<div id="activecodes">
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
{% if lrs.Info.first.Expiration_Date == "3000-01-01"  %}
	<tr data-toggle="collapse" data-target="#accordion{{ lrs.LRS }}" class="accordion-toggle" style="padding-top:0px; padding-bottom:0px;">
        <td><i class="fas fa-chevron-right rotate"></i></td>
		<td style="padding-left: 8px; padding-right:3px;">{{ lrs.LRS }}</td>
		<td style="padding-left: 0px; padding-right:3px;">{{ lrs.LRS_Description }}</td></tr><tr>
        <td colspan = "3" class="hiddenRow"  style="border-bottom: none;"><div class="accordion-body collapse" id ="accordion{{ lrs.LRS }}"><table><thead><tr>
        <th style="text-align: center;">NIBRS Description</th>
		<th style="text-align: center;">NIBRS</th>
		<th style="text-align: center;">Group</th>
		<th style="text-align: center;">Part</th>
        <th style="text-align: center; white-space: nowrap">1A Index</th>
        <th style="text-align: center; white-space: nowrap">Index Class</th>
        <th style="text-align: center; white-space: nowrap">UCR Index</th>
        <th style="text-align: center; white-space: nowrap">LIBRS Index</th>
	<th style="text-align: center; white-space: nowrap">Effective Date</th></tr></thead><tbody style="font-size: 13px;">
        {% for values in lrs.Info %}
        <tr>      
        <td style="text-align: center; min-width: 120px;"> {{ values.NIBRS_DESCRIPTION }}</td>
        <td style="text-align: center; min-width: 120px;"> {{ values.NIBRS }}</td>
        <td style="text-align: center;">{{ values.GP }}</td>
        <td style="text-align: center;">{{ values.PT }}</td>
        <td style="text-align: center;">{{ values.OneA_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.Index_Class }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.UCR_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.LIBRS_Index }}</td>
	<td style="text-align: center; white-space: nowrap">{{ values.Effective_Date }}</td></tr>{% endfor %}
    </tbody>
    </table>
    </div>
    </td>
    </tr> 
    {% endif %}

{% endfor %}
</tbody>  
</table>
</div>

___

<br>

## Expired LIBRS LRS Codes

The table below contains a list of LRS Codes that have been Expired. These LRS Codes could either no longer be valid Codes according to the Louisiana State Legislature, or may have had significant aspects about them changed (for instance, 14:XY might have been a Property Crime in 2018, but has since been redesignated as a Crime Against Person). 

Be sure to check the list here and make sure that your RMS is up to date with the latest Master LRS List. Again, you can download the full list for ingestion into your system [here](https://github.com/teisdbr/winlibrs-docs/blob/master/_data/lrs-codes.json)

____

<br>
<div id="expiredcodes">
<table>
<thead style="font-size: 14px;">
	<tr>
        <th style="padding-left: 12px; padding-right:3px;">Details</th>
		<th style="padding-left: 8px; padding-right:3px;">LRS #</th>
		<th style="padding-left: 0px; padding-right:3px;">LRS Description</th>
		<th style="padding-left: 0px; padding-right:3px;">Effective Date</th>
        <th style="padding-left: 0px; padding-right:3px;">Expiration Date</th>
	</tr>
</thead>
{% assign active_lrs = site.data.lrs-codes | sort:"LRS" %}
<tbody>
{% for lrs in active_lrs %}
{% if lrs.Info.first.Expiration_Date != "3000-01-01"  %}
	<tr data-toggle="collapse" data-target="#accordion{{ lrs.LRS }}" class="accordion-toggle" style="padding-top:0px; padding-bottom:0px;">
        <td><i class="fas fa-chevron-right rotate"></i></td>
		<td style="padding-left: 8px; padding-right:3px;">{{ lrs.LRS }}</td>
		<td style="padding-left: 0px; padding-right:3px;">{{ lrs.LRS_Description }}</td>
        <td style="text-align: center; padding-left: 3px; padding-right:3px;">{{ lrs.Info.first.Effective_Date }}</td>
	<td style="text-align: center; padding-left: 3px; padding-right:3px;">{{ lrs.Info.first.Expiration_Date }}</td></tr><tr>
        <td colspan = "4" class="hiddenRow" style="border-bottom: none;"><div class="accordion-body collapse" id ="accordion{{ lrs.LRS }}"><table><thead><tr>
        <th style="text-align: center;">NIBRS Description</th>
		<th style="text-align: center;">NIBRS</th>
		<th style="text-align: center;">Group</th>
		<th style="text-align: center;">Part</th>
        <th style="text-align: center; white-space: nowrap">1A Index</th>
        <th style="text-align: center; white-space: nowrap">Index Class</th>
        <th style="text-align: center; white-space: nowrap">UCR Index</th>
        <th style="text-align: center; white-space: nowrap">LIBRS Index</th></tr></thead><tbody style="font-size: 13px;">
        {% for values in lrs.Info %}
        <tr>      
        <td style="text-align: center; min-width: 120px;"> {{ values.NIBRS_DESCRIPTION }}</td>
        <td style="text-align: center; min-width: 120px;"> {{ values.NIBRS }}</td>
        <td style="text-align: center;">{{ values.GP }}</td>
        <td style="text-align: center;">{{ values.PT }}</td>
        <td style="text-align: center;">{{ values.OneA_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.Index_Class }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.UCR_Index }}</td>
        <td style="text-align: center; white-space: nowrap">{{ values.LIBRS_Index }}</td></tr>{% endfor %}
    </tbody>
    </table>
    </div>
    </td>
    </tr> 
    {% endif %}

{% endfor %}
</tbody>  
</table>
</div>
____

<br>
