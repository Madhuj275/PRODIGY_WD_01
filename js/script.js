function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  header.classList.toggle('scrolled', window.pageYOffset > 0);
});

var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    this.style.color = 'green';
  });
  link.addEventListener('mouseout', function() {
    this.style.color = 'black';
  });
});