const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url.slice(1);
  const p = path.join(dir, file);
  if (!p.startsWith(dir)) { res.writeHead(403); res.end(); return; }
  try {
    const ext = path.extname(file);
    const isBin = ext === '.png' || ext === '.jpg';
    const c = fs.readFileSync(p, isBin ? null : 'utf-8');
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    res.end(c);
  } catch { res.writeHead(404); res.end('404'); }
});
server.listen(3000, () => console.log('http://localhost:3000'));
