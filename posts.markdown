---
layout: default
title: Posts
permalink: /posts/
---
## > ls posts

  {% for post in site.posts %}
      <a href="{{ post.url }}">{{ post.title }}</a>
  {% endfor %}

