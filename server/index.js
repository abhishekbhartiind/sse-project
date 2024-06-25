const express = require('express');
const app = express();

const cors = require('cors');
const PORT = 5000;

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ullamcorper erat, at luctus nunc. Quisque sed est orci. Vestibulum ipsum enim, elementum id diam in, congue vehicula mauris. Aliquam id risus vitae felis cursus vulputate. Aenean quis quam tempus, scelerisque enim sit amet, accumsan ipsum. Quisque varius egestas lorem auctor interdum. Integer ex ligula, vestibulum ac eleifend vel, tempus sed magna. Etiam egestas sapien at tellus imperdiet iaculis. Fusce facilisis, magna eget pharetra viverra, velit dolor aliquam arcu, sit amet rutrum nibh dolor sed turpis. Praesent hendrerit lectus eget sem facilisis, eget vulputate diam semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id est rhoncus elit maximus bibendum. Aliquam mattis pretium enim sit amet luctus. Etiam non mi ac ipsum auctor tempor. Mauris gravida, nisl ac tincidunt fringilla, ligula tellus blandit nulla, ut dignissim eros turpis vitae libero. In orci lectus, interdum lobortis faucibus non, molestie nec felis.`;
  const words = longText.split(' ');
  let index = 0;

  const sendWords = () => {
    if (index < words.length) {
      res.write(`data: ${words[index]}\n\n`);
      index++;
    } else {
      clearInterval(interval);
    }
  };

  const interval = setInterval(sendWords, 500);
  req.on('close', () => {
    clearInterval(interval);
  });
});

app.listen(PORT, () => {
  console.log(`SSE Backend is running on ${PORT}`);
});
