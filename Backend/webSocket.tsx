WebSockets are a communication protocol providing full-duplex, persistent connections between a client and a server over a single TCP connection. 
Unlike traditional HTTP's request-response model, WebSockets enable real-time, bidirectional data exchange, making them ideal for applications 
  requiring instant updates like chat applications, online gaming, or live data feeds. 


  const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }); // Creates a WebSocket server on port 8080

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`); 
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', error => {
    console.error('WebSocket error:', error);
  });
});

console.log('WebSocket server started on port 8080');



Client Side Implementation:

<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Client</title>
</head>
<body>
    <input type="text" id="messageInput" placeholder="Enter message">
    <button onclick="sendMessage()">Send</button>
    <div id="messages"></div>

    <script>
        const ws = new WebSocket('ws://localhost:8080'); // Connects to the server

        ws.onopen = () => {
            document.getElementById('messages').innerHTML += '<p>Connected to WebSocket server.</p>';
        };

        ws.onmessage = event => {
            document.getElementById('messages').innerHTML += `<p>Received: ${event.data}</p>`;
        };

        ws.onclose = () => {
            document.getElementById('messages').innerHTML += '<p>Disconnected from WebSocket server.</p>';
        };

        ws.onerror = error => {
            document.getElementById('messages').innerHTML += `<p style="color: red;">WebSocket Error: ${error}</p>`;
        };

        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const message = messageInput.value;
            if (message) {
                ws.send(message);
                messageInput.value = ''; // Clear input field
            }
        }
    </script>
</body>
</html>
