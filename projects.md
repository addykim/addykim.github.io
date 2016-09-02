---
layout: page
title: projects
permalink: /projects/
---
{% for project in site.projects %}
<div class="project-block">
	<img src="{{project.logo}}" class="project-logo"/>
	<a class="project-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title | escape }}</a>
</div>

{% endfor %}