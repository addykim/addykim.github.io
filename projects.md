---
layout: page
title: projects
permalink: /projects/
---
{% for project in site.projects %}
<div class="project-summary">
	<p class="project-header">
		<a href="{{ project.github_url }}">{{ project.title | escape }}</a>
		<span class="project-meta">{{ project.date_started }} - {{ project.date_finished }}</span>
	</p>
	<p>{{ project.short_description | escape }}</p>
	<br><br>
</div>

{% endfor %}