const express = require('express');
const router = express.Router();
const FileController = require('../controller/file.controller');


router.get('/api/readhtml', FileController.getHtmlFile);

router.delete('/api/deletefile', FileController.deleteFile);

router.put('/api/renamefile', FileController.renameFile);

router.post('/api/createfile-use-append', FileController.createFileUseAppend);

router.post('/api/createfile-use-open', FileController.createFileUseOpen);

router.post('/api/createfile-use-write', FileController.createFileUseWrite);


module.exports = router;