import chalk from 'chalk';
import fs from 'fs';

const text = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while((temp = regex.exec(text)) !== null ) {
        arrayResults.push({ [temp[1]]: temp[2] })
    }
    return arrayResults.length === 0 ? 'There are no links' : arrayResults;
}

extractLinks(text);

function handleError(error) {
    throw new Error(chalk.red(error.code, 'There is no archive in path'));
}

export default async function getArchive(archivePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(archivePath, encoding)
        return extractLinks(text);
    } catch (error) {
        handleError(error);
    }
}