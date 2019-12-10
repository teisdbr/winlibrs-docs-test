<div id="accordion" style="left:5px; width:325px; height: 100%; position: fixed; overflow-x: hidden;">
<div ><i onclick="document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';" class="fa fa-bars fa-2x" style = "float: right; z-index: 10; padding-top: 11px; padding-left: 5px; padding-right: 5px"></i></div>
<ul>
        <li>
            <div><a href=".">&nbsp;&nbsp;&nbsp;Home</a></div></li>
        <li>
            <div>LIBRS Specifications</div>
                {% for item in site.data.specnavigation %}
                    {% if forloop.first %}<ul>{% endif %}
                    <li>
                        <div>
                        {% if item.url != "" %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
                        {% for subitem in item.submenu %}
                            {% if forloop.first %}<ul style="padding-left: 5px;">{% endif %}
                                <li>
                                <a onclick="document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';" href = "{{ subitem.url }}">{{ subitem.subtitle }}</a>
                                </li>
                                {% if forloop.last %}</ul>{% endif %}
                        {% endfor %}
                    {% if forloop.last %}</ul>{% endif %}
                {% endfor %}
                </li>
    <li>
            <div>Data Elements</div>
                {% for item in site.data.dataelementsnavigation %}
                    {% if forloop.first %}<ul>{% endif %}
                    <li>
                        <div>{% if item.url != "" %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
                        {% for subitem in item.submenu %}
                            {% if forloop.first %}<ul style="padding-right:5px;">{% endif %}
                                <li>
                                <a href = "{{ subitem.url }}"><table><tr onclick="document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';">
                                <td style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">{{ subitem.de_num }}</td><td style="vertical-align: top; padding-left:0px; padding-right:0px;">&nbsp;-&nbsp;</td>
                                <td style="vertical-align: top; padding-left:0px;">{{subitem.subtitle}}</td>
                                </tr></table></a>
                                </li>
                                {% if forloop.last %}</ul>{% endif %}
                        {% endfor %}
                    {% if forloop.last %}</ul>{% endif %}
                {% endfor %}
                </li>
            </ul>
        </li>
    </ul>
</div>