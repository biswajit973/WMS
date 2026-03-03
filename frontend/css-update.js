import fs from 'fs';

let style = fs.readFileSync('public/css/style.css', 'utf8');

style = style.replace('.tp-main-menu ul li {\n            display: inline-block;\n            margin-right: 30px;\n            position: relative;\n        }', '.tp-main-menu ul li {\n            display: inline-block;\n            margin-right: 20px;\n            position: relative;\n        }');
style = style.replace('.tp-main-menu ul li {\n            display: inline-block;\n            margin-right: 32px;\n            position: relative;\n        }', '.tp-main-menu ul li {\n            display: inline-block;\n            margin-right: 20px;\n            position: relative;\n        }');

fs.writeFileSync('public/css/style.css', style);
