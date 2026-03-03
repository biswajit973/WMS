const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.jsx', 'utf8');
// Fix location links
content = content.replace(/to="\/web-development-[a-z-]+\/"/g, 'to="/"');
// Remove T&C and Privacy Policy
content = content.replace(/<a href="#">Terms and conditions<\/a>[\s\n]*<a href="#">\s*Privacy policy<\/a>/g, '');
fs.writeFileSync('src/components/Footer.jsx', content);
