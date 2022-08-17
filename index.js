import chalk from 'chalk';
import fs from 'fs';

function handleError(error) {
    throw new Error(chalk.red(error.code, 'There is no archive in path'));
}

async function getArchive(archivePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(archivePath, encoding)
        console.log(chalk.green(text))
    } catch (error) {
        handleError(error);
    }
}

getArchive('./archives/text1.md');

// using .then()

// function getArchive(archivePath) {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(archivePath, encoding)
//     .then((text) => chalk.green(console.log(text)))
//     .catch((error) => handleError(error))
// }

// not using asynchronous function

// function getArchive(archivePath) {
//     const encoding = 'utf-8';
//     fs.readFile(archivePath, encoding, (error, text) => {
//         if (error) {
//             handleError(error);
//         }
//         console.log(chalk.green(text));
//     })
// }
