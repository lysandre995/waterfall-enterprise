---
layout: layout.njk
title: Play
permalink: "/play/index.html"
---

<div class="container py-5">

  <!-- title -->
  <h1 class="display-4 text-center mb-2" data-i18n="waterfall">Waterfall</h1>
  <p class="lead text-center mb-5" data-i18n="playpage.director">Scritto e diretto da Ilaria Casati</p>

  <!-- synopsis -->
  <div class="mb-5">
    <h2 class="h3"  data-i18n="playpage.synopsis.header">Sinossi</h2>
    <p data-i18n="playpage.synopsis.text">
      ...
    </p>
  </div>

  <!-- trailer -->
  <div class="mb-5 text-center">
    <h2 class="h5 mb-3" data-i18n="playpage.trailer">Guarda il trailer</h2>
    <div class="ratio ratio-16x9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KIL3brOzbME?si=GoV8h_azchL28le3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <!-- dates -->
  <div class="mb-5">
    <h2 class="h3 mb-4" data-i18n="playpage.dates">Date</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {% for d in dates %}
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">{{ d.location }}</h4>
              <h5 class="card-subtitle mb-2 text-muted">{{ d.city }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ d.address }}</h6>
              <p class="card-text">{{ d.date }}</p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
    <div class="container d-flex flex-column align-items-center text-center py-5 mt-5">
        <h5 class="mb-3">Powered by Trebisonda</h5>
        <img src="/img/trebisonda.svg" alt="Trebisonda Logo" style="height: 60px;" class="mb-4">
        <div class="mb-4">
        <a href="https://facebook.com/trebisondacomo" class="text-body me-3 text-decoration-none" target="_blank">
            <i class="ph ph-facebook-logo" style="font-size: 1.5rem;"></i>
        </a>
        <a href="https://www.instagram.com/trebisondacomo?igsh=MXcycTY0bmdrdm01Zg==" class="text-body me-3 text-decoration-none" target="_blank">
            <i class="ph ph-instagram-logo" style="font-size: 1.5rem;"></i>
        </a>
        <a href="https://www.youtube.com/@trebisondaarci7253" class="text-body me-3 text-decoration-none" target="_blank">
            <i class="ph ph-youtube-logo" style="font-size: 1.5rem;"></i>
        </a>
        <a href="mailto:arcitrebisonda@gmail.com" class="text-body text-decoration-none" target="_blank">
            <i class="ph ph-envelope" style="font-size: 1.5rem;"></i>
        </a>
        </div>
        <p class="mb-1">
        Website made by <a href="https://alessandroalfano.com" target="_blank">Alessandro Alfano</a>
        </p>
        <a href="https://github.com/lysandre995" target="_blank" class="text-body text-decoration-none">
        <i class="ph ph-github-logo" style="font-size: 1.5rem;"></i>
        </a>
    </div>
</div>

