$('.nav--list').hover(function(e){
  e.preventDefault();
  $this = $(this);
  $value = $this.attr('data-subcategory-name');
  $('.nav__secondary--'+$value+'').toggleClass('hidden');
})
