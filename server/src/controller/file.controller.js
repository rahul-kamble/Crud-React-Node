const FileService = require('../services/file-service');



class FileController {

    static getHtmlFile(req, res) {
        const fileName = req.query.fileName;
        FileService.getHtmlFile(fileName).then(result => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(result);
        }).catch(err => {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        })
    }

    static deleteFile(req, res) {
        const fileName = req.query.fileName;
        FileService.deleteFile(fileName).then(result => {
            res.status(200).send('File deleted successfully');
        }).catch(err => {
            res.status(500).send('Failed to delete file');
        })
    }

    static renameFile(req, res) {
        const obj = req.body;
        FileService.renameFile(obj.oldFileName, obj.newFileName).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static createFileUseAppend(req, res) {
        const obj = req.body;
        FileService.createFileUseAppend(obj.fileName, obj.text).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static createFileUseOpen(req, res) {
        const obj = req.body;
        FileService.createFileUseOpen(obj.fileName).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static createFileUseWrite(req, res) {
        const obj = req.body;
        FileService.createFileUseWrite(obj.fileName, obj.text).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

}

module.exports = FileController;