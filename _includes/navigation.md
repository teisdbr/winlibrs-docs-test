<div class="m-4">
    <div id="accordion">
        <ul>
            <li>
                <div>LIBRS Specifications</div>
                    <ul>
                        {% for amenu in _data/specnavigation.yaml %}
                        {{ amenu.title }}
                            <!-- {% for bmenu in amenu.bmenu%}
                	            {% if forloop.first %}<ul>{% endif %}
    	                        <li>{{ bmenu.title }}</li>
                                {% for cmenu in bmenu.cmenu %}
                                    {% if forloop.first %}<ul>{% endif %}
                                    <li>{{ cmenu.title }}</li>
		  	                        {% if forloop.last %}</ul>{% endif %}
		                        {% endfor %}
                                {% if forloop.last %}</ul>
                                {% endif %}
                            {% endfor %} -->
                        {% endfor %}
                    </ul>
            </li>
        </ul>
    </div>
</div>