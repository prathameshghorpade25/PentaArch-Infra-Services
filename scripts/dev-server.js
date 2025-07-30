const { spawn } = require('child_process');
const os = require('os');
const chalk = require('chalk');

// Get all network interfaces
function getNetworkInterfaces() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  
  return addresses;
}

// Display startup message like Vite
function displayStartupMessage(port = 3000) {
  const localUrl = `http://localhost:${port}/`;
  const networkAddresses = getNetworkInterfaces();
  
  console.log(chalk.green('\n  NEXT.JS') + chalk.dim(' v14.0.4') + chalk.green(' ready in ') + chalk.white('~2s'));
  console.log();
  console.log(chalk.green('  ➜  ') + chalk.white('Local:   ') + chalk.cyan(localUrl));
  
  networkAddresses.forEach(address => {
    console.log(chalk.green('  ➜  ') + chalk.white('Network: ') + chalk.cyan(`http://${address}:${port}/`));
  });
  
  console.log();
  console.log(chalk.dim('  press ') + chalk.white('h + enter') + chalk.dim(' to show help'));
  console.log();
}

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '-H', '0.0.0.0'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  shell: true
});

let isFirstReady = true;

nextProcess.stdout.on('data', (data) => {
  const output = data.toString();
  
  // Intercept the "Ready" message and replace with custom display
  if (output.includes('Ready in') && isFirstReady) {
    displayStartupMessage();
    isFirstReady = false;
  } else if (!output.includes('Local:') && !output.includes('Network:') && !output.includes('Next.js')) {
    // Show other messages but filter out default Next.js startup
    process.stdout.write(output);
  }
});

nextProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

nextProcess.on('close', (code) => {
  console.log(`Next.js development server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
  process.exit(0);
});
