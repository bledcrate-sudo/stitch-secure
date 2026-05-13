const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = 'C:\\Projects\\stitch-secure\\src';
const server = http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url.slice(1);
  const p = path.join(dir, file);
  if (!p.startsWith(dir)) { res.writeHead(403); res.end(); return; }
  try {
    const c = fs.readFileSync(p, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(c);
  } catch { res.writeHead(404); res.end('404'); }
});
server.listen(8080, () => console.log('http://localhost:8080'));
