let submit = document.getElementById('submit'),
  pl = document.getElementById('pl');

let CreateWebSocket = (() => {
  return (urlValue) => {
    return new WebSocket(urlValue);
  }
})();
// http://
let websocket = CreateWebSocket('ws://127.0.0.1:3000');
websocket.onopen = evt => {
  // console.log('来到AI聊天室');
  addMsg(1, '你好， 欢迎进入AI聊天室');
}
websocket.onmessage = evt => {
  addMsg(1, evt.data);
  submit.innerHTML = '发送';
}

submit.onclick = (e) => {
  if (e.target.innerHTML == '回复中...') {
    return false;
  }
  e.target.innerHTML = '回复中...';
  const str = pl.value;
  websocket.send(str);
  addMsg(2, str);
}

function addMsg(type, msg) {
  let li = document.createElement('li');
  // 1机器人/2自己
  if (type == 1) {
      li.classList.add('computer-say');
      li.innerHTML = `<span class="sayman">机器人</span><span class="computer say">${msg}</span>`;
  } else {
      li.classList.add('my-say');
      li.innerHTML = `<span class="computer say">${msg}</span><span class="sayman">我</span>`;
      pl.value = '';
  }
  document.getElementById('view').appendChild(li);
  document.getElementById('ulView').scrollTo(0, document.getElementById('view').clientHeight);
}
