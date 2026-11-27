---
layout: page
permalink: /publications/
title: publications
nav_title: Publications
heading: Publications
description: Selected papers in reverse chronological order.
years: [2026]
nav_order: 4
wide: true
---

{% for y in page.years %}
  <h2 class="pub-year">{{ y }}</h2>
  {% bibliography -f papers -q @*[year={{ y }}]* %}
{% endfor %}
