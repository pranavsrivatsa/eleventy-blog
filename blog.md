---
layout: base.njk
title: Blog
pagination:
  data: collections.post
  size: 10
permalink: "blog/{{ pagination.pageNumber | plus: 1 }}/index.html"
generatePageOnEmptyData: true
---

<h1>Blog</h1>

{% if pagination.items.length > 0 %}

<div class="blog-posts-container">
  {% for post in pagination.items %}
  <a class="blog-post-link" href="{{ post.url }}">
    <article class="blog-post">
      <div class="post-header">
        <div class="authors">
          <div class="author">
            <!-- <img class="author-pic" src="/images/authors/{{ post.data.author | slug }}.jpg" alt="{{ post.data.author }}" onerror="this.src='/images/authors/default.jpg'"> -->
            <div class="author-name-title">
              <div class="author-name">{{ post.data.author }}</div>
              <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
            </div>
          </div>
        </div>
        <h2>{{ post.data.title }}</h2>
        <p class="post-description">{{ post.data.description }}</p>
      </div>
      <div class="post-tags">
      {% for tag in post.data.tags %}
        {% if tag != "post" %}
          <span class="tag">{{ tag }}</span>
        {% endif %}
      {% endfor %}
      </div>
      </article>
      </a>{% endfor %}
</div>

<div class="pagination">
  {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">← Previous</a>
  {% else %}
    <a class="disabled" href="#">← Previous</a>
  {% endif %}

{% if pagination.href.next %}
<a href="{{ pagination.href.next }}">Next →</a>
{% else %}
<a class="disabled" href="#">Next →</a>
{% endif %}

</div>
{% else %}
<p>No posts found on this page.</p>
{% endif %}
