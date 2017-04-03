---
layout: page
---
<div class="text-center front-page-summary">
  <img src="{{site.logo}}" alt="Addy's Picture" class="site-avatar"/>

  <p class="">{{site.description | escape}}<br>
  	Information Studies and Business Minor<br>
  </p>
  <p>Joining <a href="https://www.amazon.com">Amazon</a> as a Software Development Engineer in August<br>
  	Currently interning at <a href="https://www.squarecap.com">Squarecap</a><br>
  	Previously interned at <a href="https://www.clover.com">Clover Network</a> and <a href="https://www.squarecap.com">Squarecap</a><br>
  </p>
</div>
<div>
  <h3 id="projects">Projects</h3>
  {% for project in site.projects reversed %}
  <div class="project-summary">
    <p class="project-header">
      <!-- <a href="{{ project.github_url }}">{{ project.title | escape }}</a> -->
      {{ project.title | escape}}
      {% if project.date_range %}
        <span class="project-meta">{{ project.date_range }}</span>
      {% else %}
        <span class="project-meta">{{ project.date_started }} - {{ project.date_finished }}</span>
      {% endif %}
      {% if project.github_url %}
        <a href="https://github.com/{{ project.github_url }}"><i class="fa fa-github"></i></a>
      {% endif %}
    </p>
    <p>{{ project.short_description | escape }}</p>
    <br><br>
  </div>

  {% endfor %}
</div>