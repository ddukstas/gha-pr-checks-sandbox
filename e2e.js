// Stand-in for the Cypress run: sleeps ~20 s, writes a dummy screenshot, fails if FAIL_E2E exists.
const fs = require('node:fs');
const path = require('node:path');
const dir = process.argv[2];
setTimeout(() => {
  const shots = path.join(dir, 'cypress', 'screenshots');
  fs.mkdirSync(shots, { recursive: true });
  fs.writeFileSync(path.join(shots, 'stand-in.txt'), `written by e2e.js for ${dir}\n`);
  if (fs.existsSync('FAIL_E2E')) {
    console.error(`e2e stand-in failing for ${dir}: FAIL_E2E present`);
    process.exit(1);
  }
  console.log(`e2e stand-in passed for ${dir}`);
}, 20000);
