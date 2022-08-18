import getArchive from './index.js';
import chalk from 'chalk';

const path = process.argv;

async function processText(pathOfArchive) {
    const result = await getArchive(pathOfArchive[2]);
    console.log(chalk.yellow('Links list'), result);
}

processText(path)