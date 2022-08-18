import getArchive from './index.js';
import chalk from 'chalk';
import validateUrls from './http-validate.js';

const path = process.argv;

async function processText(pathOfArchive) {
    const result = await getArchive(pathOfArchive[2]);
    if (path[3] === 'validate') {
        console.log(chalk.yellow('validated Links:'), await validateUrls(result))
    }else {
        console.log(chalk.yellow('Links list'), result);
    }
}

processText(path)