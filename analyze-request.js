import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPage = async (url) => {
    try{
        const response = await axios.get(url);
        writeResults(url, response, 'success');
    }catch(error){
        writeResults(url, error.response, 'error');
    }
}

const writeResults = (url, response, type) => {
    // const status = response.status;
    // const data = response.data || response.message || '';
    const {status, data} = response;
    // const dataLength = Buffer.byteLength(data, 'utf8');
    const timestamp = new Date().toISOString();

    const logString = `URL: ${url} | Type: ${type} | Status: ${status} | Data Length: ${data.length} | Timestamp: ${timestamp}\n`;

    fs.appendFile('results.txt', logString, (err) => {
        if(err){
            console.error('Error writing results:', err);
        }// }else{
        //     console.log('Results written to results.txt');
        // }
    });
}

getPage('https://www.google.com/');
getPage('https://twitter.com/');
getPage('https://www.amazon.com/');
getPage('https://www.disney.com/hello_world')