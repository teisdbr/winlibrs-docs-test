---
title: Errors List
layout: default
permalink: /errors
---

# LIBRS Error List
This page contains the list of all errors that LIBRS could possibly throw. Please note that some of these errors have been deprecated, and this list is not inteded to be used to flesh out an RMS's validation system. Rather it is intended to give general context to errors when they are thrown.

<table>
<thead>
	<tr>
		<th colspan = "1" style="align-text:center;">Error Code</th>
        <th colspan = "1" style="align-text:center;">Error Message</th>
	</tr>
    </thead>
    <tbody>
{% for e in site.data.error-active-list.LIBRS_Active_Errors%}
    <tr>
    {% assign error = site.data.error[e] -%}
    <td>{{error.err_no}}</td>
    <td>{{error.err_message}}</td>
    </tr>
{% endfor %}
</tbody>
</table>

<br><br>