---
layout: default
title: Notes
---

<div class="page-content">

<div class="blog-header">
  <h1>Notes</h1>
  <p class="blog-description">On papers, ideas, and things I'm thinking about.</p>
</div>

{% assign visible_posts = site.posts | where_exp: "post", "post.hidden != true" %}
{% assign tags = visible_posts | map: "tags" | compact | flatten | uniq | sort %}
{% if tags.size > 0 %}
<div class="tag-filter">
  <span class="tag-label">Filter:</span>
  <a href="{{ site.baseurl }}/notes" class="tag active">All</a>
  {% for tag in tags %}
    <a href="{{ site.baseurl }}/notes/tags#{{ tag | slugify }}" class="tag">{{ tag }}</a>
  {% endfor %}
</div>
{% endif %}

<div class="posts-list">
  {% for post in site.posts %}
  {% unless post.hidden %}
  <article class="post-card">
    <div class="post-card-content">
      <h2 class="post-card-title">
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <div class="post-card-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
        <span class="reading-time">
          {% assign words = post.content | number_of_words %}
          {% if words < 200 %}1 min{% else %}{{ words | divided_by: 200 }} min{% endif %}
        </span>
      </div>
      {% if post.description %}
      <p class="post-card-excerpt">{{ post.description }}</p>
      {% else %}
      <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
      {% endif %}
      {% if post.tags.size > 0 %}
      <div class="post-card-tags">
        {% for tag in post.tags %}
          <span class="tag-small">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </article>
  {% endunless %}
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<p class="no-posts">No posts yet. Check back soon!</p>
{% endif %}

</div>
