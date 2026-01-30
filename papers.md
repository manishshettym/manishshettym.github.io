---
layout: default
title: Papers
---

<div class="page-content">

<div class="blog-header">
  <h1>Papers</h1>
  <p class="blog-description">Research publications and preprints.</p>
</div>

{% for pub in site.data.papers %}
<div class="pub-compact">
  <div class="pub-row">
    <span class="pub-title">{{ pub.title }}</span>
    <span class="pub-venue">{{ pub.venue }}</span>
  </div>
  <div class="pub-authors">{{ pub.authors }}</div>
  <div class="pub-links">
    {% if pub.paper %}<a href="{{ pub.paper }}">paper</a>{% endif %}
    {% if pub.website %} / <a href="{{ pub.website }}">website</a>{% endif %}
    {% if pub.code %} / <a href="{{ pub.code }}">code</a>{% endif %}
    {% if pub.blog %} / <a href="{{ pub.blog }}">blog</a>{% endif %}
    {% if pub.slides %} / <a href="{{ pub.slides }}">slides</a>{% endif %}
    {% if pub.highlight %} / <a href="{{ pub.highlight_url }}" style="color: #D33682;">{{ pub.highlight }}</a>{% endif %}
  </div>
</div>
{% endfor %}

</div>
