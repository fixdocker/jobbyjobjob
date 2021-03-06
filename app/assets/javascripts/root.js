function populateSearch(term) {
  document.getElementById('query').value = term;
  var elem = document.getElementById('searchForm');
  Rails.fire(elem, 'submit');
}

function toggleFilter() {
  $(".filtering_container").toggleClass("visible-sm");
  $(".filtering_container").toggleClass("visible-xs");
}


$(document).ready(function() {
  var flashTimeout;
  function setFlash() {
    flashTimeout = window.setTimeout(function() {
      $('.flash').slideToggle();
    }, 3000);
  }
  $('.flash').click(function() {
    window.clearTimeout(flashTimeout);
    $(this).slideUp();
  });
  $('.flash').show(function() {
    setFlash();
  });
  $('.job_pagination.add_remote a').attr('data-remote', 'true');
});
