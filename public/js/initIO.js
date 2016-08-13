var socket = io('localhost:5003');

socket.on('left', function (nickname) {
  $('#messages').append($('<li>').text(nickname + ': has left'));
});

socket.on('history', function (texts) {
  $('#messages').append($('<li>').text('history'));
  for (t of texts) {
    $('#messages').append($('<li>').text(t.uid.nickname + ': ' + t.message));
  }
  $('#messages').append($('<li>').text('-----------------------'));
});

socket.on('participants', function (participants) {
  $('#messages').append($('<li>').text('list of participants: '));
  for (p of participants) {
    $('#messages').append($('<li>').text(p.nickname));
  }
  $('#messages').append($('<li>').text('-----------------------'));

});

socket.on('error', function (msg) {
  $('#messages').append($('<li>').text('error occured on socket!: ' + msg));
});

socket.on('newMsg', function (user, msg) {
  $('#messages').append($('<li>').text(msg.message));
});

socket.on('joined', function (nickname) {
  $('#messages').append($('<li>').text(nickname + ': has joined'));

  socket.emit('sendText', 'test message');
  socket.emit('getMembers', "211111111111111111111111");

  socket.emit('getTexts', 0, 100);
});

socket.emit('joinRoom', "411111111111111111111111", "211111111111111111111111");
