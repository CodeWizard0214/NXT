// pages/api/processAndUpload.js
import path from 'path';
import { promises as fs } from 'fs';
import { uploadToVPS } from '../../utils/uploadToVPS';
import { createZip } from './createZip'; // Import the core functionality

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create zip file directly
      await createZip(); // Call the core function instead of the handler
      
      // Upload the zip file to VPS
      const zipPath = path.join(process.cwd(), 'archive.zip');
      const uploadResult = await uploadToVPS(zipPath);
      await fs.unlink(zipPath);

      res.status(200).json({ 
        message: 'successfully', 
        result: uploadResult 
      });
    } catch (error) {
      // console.error('Process error:', error);
      res.status(500).json({ 
        error: 'Failed to process'
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
