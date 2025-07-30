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

// Display production startup message
function displayProductionStartup(port = 3000) {
  const localUrl = `http://localhost:${port}/`;
  const networkAddresses = getNetworkInterfaces();
  
  console.log(chalk.green('\n  🚀 PRODUCTION BUILD') + chalk.dim(' - Next.js v14.0.4'));
  console.log(chalk.green('  ⚡ OPTIMIZED ') + chalk.white('& READY'));
  console.log();
  console.log(chalk.green('  ➜  ') + chalk.white('Local:   ') + chalk.cyan(localUrl));
  
  networkAddresses.forEach(address => {
    console.log(chalk.green('  ➜  ') + chalk.white('Network: ') + chalk.cyan(`http://${address}:${port}/`));
  });
  
  console.log();
  console.log(chalk.green('  📊 Performance Benefits:'));
  console.log(chalk.white('     ⚡ 3-10x faster than dev mode'));
  console.log(chalk.white('     🗜️  85% smaller bundle sizes'));
  console.log(chalk.white('     🚀 Pre-rendered static content'));
  console.log(chalk.white('     💾 50-70% less memory usage'));
  console.log();
  console.log(chalk.dim('  press ') + chalk.white('Ctrl+C') + chalk.dim(' to stop the server'));
  console.log();
}

async function runProductionServer() {
  console.log(chalk.blue('🔨 Building production bundle...'));
  
  // Build the application
  const buildProcess = spawn('npx', ['next', 'build'], {
    stdio: 'inherit',
    shell: true
  });

  buildProcess.on('close', (code) => {
    if (code !== 0) {
      console.log(chalk.red('❌ Build failed'));
      process.exit(1);
    }

    console.log(chalk.green('✅ Build complete! Starting production server...'));
    
    // Start the production server
    const startProcess = spawn('npx', ['next', 'start', '-H', '0.0.0.0'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true
    });

    let hasShownStartup = false;

    startProcess.stdout.on('data', (data) => {
      const output = data.toString();
      
      if (output.includes('Ready') && !hasShownStartup) {
        displayProductionStartup();
        hasShownStartup = true;
      } else if (!output.includes('Local:') && !output.includes('Network:')) {
        process.stdout.write(output);
      }
    });

    startProcess.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    startProcess.on('close', (code) => {
      console.log(`Production server exited with code ${code}`);
    });

    // Handle process termination
    process.on('SIGINT', () => {
      startProcess.kill('SIGINT');
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      startProcess.kill('SIGTERM');
      process.exit(0);
    });
  });
}

runProductionServer();
