---
layout: base.njk
permalink: blog/index.html
eleventyExcludeFromCollections: true
---

{% if collections.post.length > 0 %}

<meta http-equiv="refresh" content="0;url=/blog/1/">
<script>
  window.location.href = "/blog/1/";
</script>

<p>Redirecting to <a href="/blog/1/">/blog/1/</a>...</p>
{% else %}
<h1>Blog</h1>
<p>No posts found.</p>
{% endif %}
