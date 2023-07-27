const wsUri = "wss://echo.websocket.org/";

const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

btnSend.addEventListener('click', () => {
   websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {};
  
  const input = document.getElementById('input').value;
  const message = input;
  writeToScreen ("Отправитель: " + message);
  websocket.send(message);
  
  websocket.onmessage = function(evt) {
    writeToScreen(
      '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
  };
  websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };
});

btnGeo.addEventListener('click', () => {
   let cur = navigator.geolocation.getCurrentPosition((cur) => {
      writeToScreen(
         `<a href="https://www.openstreetmap.org/#map=9/${cur.coords.latitude}/${cur.coords.longitude}">geolocation</a>`
      );
      websocket.send = function (cur) { };
   });
});