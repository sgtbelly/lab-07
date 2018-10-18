$(function() {
  $('.formToggle').on('click', toggleForm);

  function toggleForm(e) {
    e.preventDefault();
    let $input = $(this).parent().find('input');
    let disabledState = !! $input.attr('disabled');
    $(this).parent().toggleClass('disabled');
    $input.attr('disabled', ! disabledState);
  }

});
