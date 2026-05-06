---
layout: default
title: Research
---

<div class="page-content">

<div class="blog-header">
  <h1>Research</h1>
  <p class="blog-description">Publications and preprints.</p>
</div>

{% for pub in site.data.papers %}
<div class="pub-compact">
  <div class="pub-venue">{{ pub.venue }}</div>
  <div class="pub-details">
    <span class="pub-title">{{ pub.title }}</span>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-links">
      {% assign sep = "" %}
      {% if pub.paper %}{{ sep }}<a href="{{ pub.paper }}">paper</a>{% assign sep = " / " %}{% endif %}
      {% if pub.website %}{{ sep }}<a href="{{ pub.website }}">website</a>{% assign sep = " / " %}{% endif %}
      {% if pub.code %}{{ sep }}<a href="{{ pub.code }}">code</a>{% assign sep = " / " %}{% endif %}
      {% if pub.blog %}{{ sep }}<a href="{{ pub.blog }}">blog</a>{% assign sep = " / " %}{% endif %}
      {% if pub.slides %}{{ sep }}<a href="{{ pub.slides }}">slides</a>{% assign sep = " / " %}{% endif %}
      {% if pub.highlight %}{{ sep }}<a href="{{ pub.highlight_url }}" style="color: #a85a3a;">{{ pub.highlight }}</a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}

</div>
