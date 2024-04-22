const express = require('express')
const Image = require('../models/Image')
const fs = require('fs')
const upload = require('../middleware/upload')
const path = require('path')

const fileRouter = express.Router();

fileRouter.get('/:fileId', (req, res, next) => {
    console.log(req.params.fileId)
    Image.findOne({_id: req.params.fileId}).then((data, err) => {
        if(err) {
            console.log(err)
        }

        res.contentType(data.img.contentType)
        res.end(data.img.data, 'binary')
        //res.render('image', {items: data})
        // res.status(200).json({ Image:data })
    })
})

fileRouter.post('/', upload.single('image'), (req, res, next) => {

    console.log('Name: ' + req.body.name + '. Description: ' + req.body.description + '. Filename: ' + req.file.filename)
    console.log('File at path: ' + (process.cwd() + '\\uploads\\' + req.file.filename))

    const obj = {
        name: req.body.name,
        description: req.body.description,
        img: {
            data: fs.readFileSync(path.join(process.cwd() + '\\uploads\\' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    Image.create(obj).then((err, item) => {
        if(err) {
            console.log(err)
            res.status(500).json()
        }
        else {
            res.status(200).json({id: item._id});
        }
    })
})

fileRouter.delete('/:fileId', (req, res, next) => {

})

module.exports = fileRouter;