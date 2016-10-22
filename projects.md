---
layout: page
title: projects
permalink: /projects/
---
{% for project in site.projects %}
<div class="project-summary">
	<p class="project-header">
		<!-- <a href="{{ project.github_url }}">{{ project.title | escape }}</a> -->
		{{ project.title | escape}}
		{% if project.date_range %}
			<span class="project-meta">{{ project.date_range }}</span>
		{% else %}
			<span class="project-meta">{{ project.date_started }} - {{ project.date_finished }}</span>
		{% endif %}
	</p>
	<p>{{ project.short_description | escape }}</p>
	<br><br>
</div>

{% endfor %}