$(document).ready(function () {
  $.getJSON('assets/data/projects.json', function (data) {
    var container = $('#projects-container');
    var tags = new Set();

    data.forEach(function (project) {
      project.tech.forEach(function (t) { tags.add(t); });
      var techItems = project.tech.map(function (t) {
        return '<li>' + t + '</li>';
      }).join('');

      var demoLink = project.demo ?
        '<a href="' + project.demo + '" target="_blank" class="btn btn-primary btn-sm me-2">Demo</a>' : '';

      var card = '<div class="col-12 col-md-6 col-lg-4 mb-4">\
        <div class="project-card h-100 d-flex flex-column">\
          <h3>' + project.title + '</h3>\
          <p>' + project.description + '</p>\
          <ul class="project-tech">' + techItems + '</ul>\
          <div class="mt-auto project-links">\
            <a href="' + project.repo + '" target="_blank" class="btn btn-outline-dark btn-sm me-2">Repo</a>' +
            demoLink +
          '</div>\
        </div>\
      </div>';

      container.append(card);
    });

    // generate filters
    var filterWrap = $('#filter-buttons');
    filterWrap.append('<button class="btn btn-secondary filter-btn me-2 active" data-tech="all">All</button>');
    tags.forEach(function (tag) {
      filterWrap.append('<button class="btn btn-outline-secondary filter-btn me-2" data-tech="' + tag + '">' + tag + '</button>');
    });

    filterWrap.on('click', '.filter-btn', function () {
      var tech = $(this).data('tech');
      $('.filter-btn').removeClass('active btn-secondary').addClass('btn-outline-secondary');
      $(this).addClass('active btn-secondary').removeClass('btn-outline-secondary');

      $('#projects-container > div').each(function () {
        if (tech === 'all') {
          $(this).show();
        } else {
          var itemTechs = $(this).find('.project-tech li').map(function () { return $(this).text(); }).get();
          $(this).toggle(itemTechs.indexOf(tech) !== -1);
        }
      });
    });
  });
});
