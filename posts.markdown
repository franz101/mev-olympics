---
layout: default
title: Posts
permalink: /posts/
---
## > ls posts

  {% for post in site.posts %}
      ({{ post.url }})[{{ post.title }}]
  {% endfor %}

