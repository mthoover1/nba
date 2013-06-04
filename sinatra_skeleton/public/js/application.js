$(document).ready(function() {
  $("#kings_players").submit(function() {
    var data = $(this).serialize();
    $.post('/cool_url', data, function(server_response) {
      var player = $(server_response).find('span');
      $('span').html(player);
    });
  });
});
