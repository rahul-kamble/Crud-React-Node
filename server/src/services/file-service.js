const fs = require('fs');
const path = require('path');

class FileService {

    getHtmlFile(fileName) {
        let _path = path.resolve('./', 'src/templates', fileName);
        return new Promise((resolve, reject) => {
            fs.readFile(_path, function (err, pgResp) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(pgResp);
            });
        })
    }

    deleteFile(fileName) {
        const _path = path.resolve('./', 'src/templates', fileName);
        return new Promise((resolve, reject) => {
            fs.unlink(_path, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            })
        })
    }

    renameFile(oldFileName, newFileName) {
        const _path = path.resolve('./', 'src/templates', oldFileName);
        const newPath = path.resolve('./', 'src/templates', newFileName);

        console.log('path', newFileName);
        return new Promise((resolve, reject) => {
            fs.rename(_path, newPath, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('File renamed succesfully');
            })
        })
    }

    // Create a new file using the appendFile
    //The File System module has methods for creating new files:
    //fs.appendFile()
    //fs.open()
    //fs.writeFile()


    //method appends specified content to a file. If the file does not exist, the file will be created:
    createFileUseAppend(fileName, text) {
        const _path = path.resolve('./', 'src/templates', fileName);
        return new Promise((resolve, reject) => {
            fs.appendFile(_path, text, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('text appnd success');
            });
        })
    }

    //method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
    //If the file does not exist, an empty file is created:
    createFileUseOpen(fileName) {
        const _path = path.resolve('./', 'src/templates', fileName);
        return new Promise((resolve, reject) => {
            fs.open(_path, 'w', (err, file) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('saved');
            });
        })
    }

    //method replaces the specified file and content if it exists. 
    //If the file does not exist, a new file, containing the specified content, will be created:
    createFileUseWrite(fileName, text) {
        const _path = path.resolve('./', 'src/templates', fileName);
        return new Promise((resolve, reject) => {
            fs.writeFile(_path, text, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('updated')
            });
        })
    }

}

module.exports = new FileService();