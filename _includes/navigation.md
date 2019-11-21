<div id="accordion" style="min-width:300px; max-width:300px;height: 100%; position: fixed; overflow-x: hidden;">
    <ul>
        <li>
            <div>LIBRS Specifications</div>
                {% for item in site.data.specnavigation %}
                    {% if forloop.first %}<ul>{% endif %}
                    <li>
                        <div>{{ item.title }}</div>
                        {% for subitem in item.submenu %}
                            {% if forloop.first %}<ul style="padding-left: 5px;">{% endif %}
                                <li>
                                <a href = "{{ subitem.url }}">{{ subitem.subtitle }}</a>
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
                        <div>{{ item.title }}</div>
                        {% for subitem in item.submenu %}
                            {% if forloop.first %}<ul style="padding-right:5px;">{% endif %}
                                <li>
                                <a href = "{{ subitem.url }}"><table><tr>
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