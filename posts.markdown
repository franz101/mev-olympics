---
layout: default
title: Posts
permalink: /posts/

pagination: 
  enabled: true

---
## Education Posts

<ul>
{% for post in site.posts %}
<li>
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.excerpt }}
</li>
{% endfor %}
</ul>


{% if paginator.total_pages > 1 %}
<ul>
  {% if paginator.previous_page %}
  <li>
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Newer</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li>
    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">Older</a>
  </li>
  {% endif %}
</ul>
{% endif %}

## sort by tag


## search for a specific blogpost
