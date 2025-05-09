---
layout: base.njk
title: "The Eleventy Podcast Series"
date: 2025-05-09T09:00:00Z
author: "Pranav Srivatsa"
description: "A comprehensive series exploring Eleventy, static site generation, and modern web development best practices."
tags: ["post", "podcast", "tech", "eleventy"]
---

# The Eleventy Podcast Series

I'm excited to announce the launch of The Eleventy Podcast series! This comprehensive series explores the world of static site generation with Eleventy, discussing performance, SEO, and modern web development best practices.

## Episodes

All episodes are available now:

{% for episode in collections.podcast_episode | reverse %}

### {{ episode.data.title }}

**Released:** {{ episode.date | date: "%B %d, %Y at %I:%M %p EST" }}

{{ episode.templateContent }}

## {% if not loop.last %}

&nbsp;

---

&nbsp;

{% endif %}

{% endfor %}

## Subscribe to the Podcast

You can subscribe to the podcast via our [RSS feed](/podcast-feed.xml) to get notified about new episodes. The feed is compatible with all major podcast players and RSS readers.

<div class="copy-container">
  <div class="copy-box">
    <input type="text" value="https://eleventy-blog-gamma.vercel.app/podcast-feed.xml" readonly class="copy-input">
  </div>
</div>

## About the Series

This series is designed for both beginners and experienced developers who want to learn more about Eleventy and static site generation. Each episode builds upon the previous ones, creating a comprehensive learning journey from basic concepts to advanced deployment strategies.

Whether you're building a blog, documentation site, or portfolio, these episodes will help you understand why Eleventy might be the perfect choice for your next project.
