---
layout: base.njk
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: "/tags/{{ tag | slug }}/"
title: "Posts tagged {{ tag }}"
---

<!doctype html>
<h1>Posts tagged "{{ tag }}"</h1>

<div class="blog-posts-container">
  {% for post in collections[tag] %}
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

<p><a href="/tags/">← Back to all tags</a></p>
