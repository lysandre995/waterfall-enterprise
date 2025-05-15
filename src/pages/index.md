---
layout: layout.njk
title: Home
permalink: /index.html
---

<h1 data-i18n="welcome">Welcome</h1>

<span data-i18n="homepage-message">This is the Homepage</span>

<div id="articles-container">
  {% for article in articles %}
    <div class="card mb-3" data-article-id="{{ article.id }}">
      <img src="{{ article.img }}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title" data-i18n="articles.{{ article.id }}.title">...</h5>
        <p class="card-text" data-i18n="articles.{{ article.id }}.summary">...</p>
        <p class="card-text">
          <small class="text-body-secondary">
            {{ article.author }} - {{ article.date }}
          </small>
        </p>
      </div>
    </div>
  {% endfor %}
</div>
