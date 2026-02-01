{% for pub in site.data.papers %}
{% if pub.featured %}
<div class="pub-compact">
  <div class="pub-venue">{{ pub.venue }}</div>
  <div class="pub-details">
    <span class="pub-title">{{ pub.title }}</span>
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
</div>
{% endif %}
{% endfor %}

<p style="margin-top: 20px;"><a href="/papers">See all papers →</a></p>
