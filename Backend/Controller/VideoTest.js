
const VideoTest = require('../Models/VideoTest')
const formidable = require('formidable')
const fs = require('fs')
path = require('path')
const { createCanvas, loadImage,registerFont } = require('canvas')
//"C:\Users\balkr\Downloads\glacial-indifference\GlacialIndifference-Regular.otf"
//`registerFont('C:\\Users\\balkr\\Downloads\\glacial-indifference\\GlacialIndifference-Regular.otf', { family: 'Glacial Indifference' })
const canvas = createCanvas(2000, 1414)
const ctx = canvas.getContext('2d')
const ctx2 = canvas.getContext('2d')
//media streaming
const mongoose = require('mongoose')
let gridfs = null
mongoose.connection.on('connected', () => {
    gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db)
})

exports.mediaByID = async (req, res, next, id) => {
    try {
        let media = await VideoTest.findById(id).exec()
        if (!media)
            return res.status('400').json({
                error: "Media not found"
            })
        req.media = media
        let files = await gridfs.find({ filename: media._id }).toArray()
        if (!files[0]) {
            return res.status(404).send({
                error: 'No video found'
            })
        }
        req.file = files[0]
        next()
    } catch (err) {
        return res.status(404).send({
            error: 'Could not retrieve media file'
        })
    }
}
exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        console.log(files);
        if (err) {
            return res.status(400).json({
                error: "Video could not be uploaded"
            })
        }
        let media = new VideoTest(fields)

        if (files.video) {
            let writestream = gridfs.openUploadStream(media._id, {
                contentType: files.video.type || 'binary/octet-stream'
            })
            fs.createReadStream(files.video.filepath).pipe(writestream)
        }
        try {
            let result = await media.save()
            res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                error: err
            })
        }
    })
}
exports.video = (req, res) => {
    console.log("Called");
    const range = req.headers["range"]
    if (range && typeof range === "string") {
        const parts = range.replace(/bytes=/, "").split("-")
        const partialstart = parts[0]
        const partialend = parts[1]

        const start = parseInt(partialstart, 10)
        const end = partialend ? parseInt(partialend, 10) : req.file.length - 1
        const chunksize = (end - start) + 1

        res.writeHead(206, {
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Range': 'bytes ' + start + '-' + end + '/' + req.file.length,
            'Content-Type': req.file.contentType
        })

        let downloadStream = gridfs.openDownloadStream(req.file._id, { start, end: end + 1 })
        downloadStream.pipe(res)
        downloadStream.on('error', () => {
            res.sendStatus(404)
        })
        downloadStream.on('end', () => {
            res.end()
        })
    } else {
        res.header('Content-Length', req.file.length)
        res.header('Content-Type', req.file.contentType)

        let downloadStream = gridfs.openDownloadStream(req.file._id)
        downloadStream.pipe(res)
        downloadStream.on('error', () => {
            res.sendStatus(404)
        })
        downloadStream.on('end', () => {
            res.end()
        })
    }
}
exports.read = async (req, res) => {
    return res.json(req.media)
}

exports.generateCertificate = async(req,res)=>{
    var name = req.body.name;
    var txt = "has successfully completed "+req.body.courseName+" on "+new Date().getDate().toString()+"/"+new Date().getMonth().toString()+"/"+new Date().getFullYear().toString();
    var txt2 =" and is certified by passing all exams."
    console.log(await req.body);
    var rawCertificatesPath = path.join(__dirname, '../CertificateTemplate');
    loadImage(rawCertificatesPath + '\\CourseCertificate.png').then((img)=>{
        ctx.drawImage(img, 0, 0, 2000, 1414)
        //NAME
        ctx.font = "90px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#D16821";
        ctx.fillText(name, 1000, 680);
        //TXT1
        ctx.font = "40px Glacial Indifference";
        ctx.textAlign = "center";
        ctx.fillStyle = "#000000";
        ctx.fillText(txt, 1000, 800);
        //TXT2
        ctx.font = "40px Glacial Indifference";
        ctx.textAlign = "center";
        ctx.fillText(txt2, 1000, 850);
        const out = fs.createWriteStream(rawCertificatesPath + '\\OUTPUT.png')
        const stream = canvas.createPNGStream()
        stream.pipe(out)
        out.on('finish', () =>  {
            console.log('The PNG file was created.')
            //Upload Certificate and Add ID to Course Complete Section
        })
    })
    return res.json({note:req.body})
}

exports.generateResearchCertificate = async(req,res)=>{
    var name = req.body.name;
    var txt = "has successfully completed "+req.body.courseName+" on "+new Date().getDate().toString()+"/"+new Date().getMonth().toString()+"/"+new Date().getFullYear().toString();
    var txt2 =" and is certified by passing all exams."
    console.log(await req.body);
    var rawCertificatesPath = path.join(__dirname, '../CertificateTemplate');
    loadImage(rawCertificatesPath + '\\CourseCertificate.png').then((img)=>{
        ctx.drawImage(img, 0, 0, 2000, 1414)
        //NAME
        ctx.font = "90px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#D16821";
        ctx.fillText(name, 1000, 680);
        //TXT1
        ctx.font = "40px Glacial Indifference";
        ctx.textAlign = "center";
        ctx.fillStyle = "#000000";
        ctx.fillText(txt, 1000, 800);
        //TXT2
        ctx.font = "40px Glacial Indifference";
        ctx.textAlign = "center";
        ctx.fillText(txt2, 1000, 850);
        const out = fs.createWriteStream(rawCertificatesPath + '\\OUTPUT.png')
        const stream = canvas.createPNGStream()
        stream.pipe(out)
        out.on('finish', () =>  {
            console.log('The PNG file was created.')
            //Upload Certificate and Add ID to Course Complete Section
        })
    })
    return res.json({note:req.body})
}
