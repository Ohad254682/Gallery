$(document).ready(function () {
    createProjs();
    renderProj();
})

function renderProj() {
    var projs = projsToRender();
    var $elPortfolio = $('#portfolio-projects');
    var strHtml = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onOpenModal(${proj.id})">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.url}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>
      `
    })
    $elPortfolio.html(strHtml.join(''));
}

function onOpenModal(projId) {

    setCurrProj(projId);
    console.log(gCurrProj);
    $('#project-name').text(gCurrProj.name);
    $('#project-published-at').text(gCurrProj.publishedAt);
    $('#project-desc').text(gCurrProj.desc);
    $('#project-labels').text(gCurrProj.labels);
    $('#project-title').text(gCurrProj.title);
    $('#project-url').text();
    $("#project-url").attr("src", `img/portfolio/${gCurrProj.url}`);
}

function launchProject() {
    window.location.href = gCurrProj.link;
}

function onMoveToContactPage() {
    var mail = $('#contact-mail').val();
    var subject = $('#contact-subject').val();
    var msg = $('#contact-msg').val();
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&b
    ody=${msg}`;
}