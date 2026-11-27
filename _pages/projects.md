---
layout: page
title: projects
nav_title: Projects
heading: Projects
permalink: /projects/
description: Peer-reviewed research projects and released systems.
nav_order: 3
wide: true
---

<div class="project-grid">
{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
  {% assign href = project.redirect | default: project.url | prepend: site.baseurl %}
  <a class="project-card card card--interactive" href="{{ href }}"{% if project.redirect %} target="_blank" rel="noopener"{% endif %}>
    {% if project.img %}
    <div class="project-card__media{% if project.img_fit == 'contain' %} project-card__media--contain{% endif %}">
      <img src="{{ project.img | prepend: site.baseurl }}" alt="{{ project.title }}">
    </div>
    {% endif %}
    <div class="project-card__body">
      {% if project.venue %}<span class="badge">{{ project.venue }}</span>{% endif %}
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <span class="project-card__more">View details{% include icon.html name="arrow_forward" %}</span>
    </div>
  </a>
{% endfor %}
</div>
