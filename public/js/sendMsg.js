

$('form').submit(function () {
  socket.emit('sendText', $('#m').val());
  $('#m').val('');
  return false;
});

function leaveRoom() {
  socket.emit('leaveRoom', "411111111111111111111111", "211111111111111111111111");
}