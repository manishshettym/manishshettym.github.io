---
layout: default
title: Notes by Tag
---

<div class="blog-header">
  <h1>Notes by Tag</h1>
  <p><a href="{{ site.baseurl }}/notes">&larr; All notes</a></p>
</div>

{% assign visible_posts = site.posts | where_exp: "post", "post.hidden != true" %}
{% assign tags = visible_posts | map: "tags" | compact | flatten | uniq | sort %}

{% for tag in tags %}
<section class="tag-section" id="{{ tag | slugify }}">
  <h2 class="tag-heading">{{ tag }}</h2>
  <ul class="tag-posts">
    {% for post in visible_posts %}
      {% if post.tags contains tag %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %Y" }}</span>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>
{% endfor %}
