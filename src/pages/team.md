---
layout: layout.njk
title: Team
permalink: "/team/index.html"
---

<h1 data-i18n="teampage.message">Conosci il nostro team!</h1>

<div id="team-container" class="d-flex flex-column align-items-center">
    {% for member in team %}
        <div class="card" style="width: 18rem;">
        <img src="{{ member.img }}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title" data-i18n="team.{{ member.id }}.role">Role</h5>
                <ul>
                {% for i in range(0, member.dutyCount) %}
                    {% if member.id == 'dps' and (i == 0 or i == 1) %}
                        <li data-i18n="team.{{ member.id }}.duties.{{ i }}" style="text-decoration: line-through;">
                            Duty {{ i }}
                        </li>
                    {% else %}
                        <li data-i18n="team.{{ member.id }}.duties.{{ i }}">
                            Duty {{ i }}
                        </li>
                    {% endif %}
                {% endfor %}
                </ul>
            </div>
        </div>
    {% endfor %}
</div>

