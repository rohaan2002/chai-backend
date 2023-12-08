import multer from "multer";
// When a user submits a form with a file input, and the form has enctype="multipart/form-data", the data is sent as a series of parts, each representing a field or file. Multer helps parse and handle these parts in a convenient way.

// Key features of Multer:

// File Uploads: Multer is primarily used for handling file uploads. It can parse the incoming form data and handle the files, storing them in a specified location on the server.

// Middleware Integration: Multer can be easily integrated into Express applications as middleware. This allows you to use it selectively for routes that handle file uploads.

// Configuration: You can configure Multer to control various aspects of file handling, such as setting the destination directory for file storage, defining file name conventions, and filtering which files to accept or reject.

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "./public/temp")
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname+ '-' + uniqueSuffix)
    }
})

// Route handling file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.send('File uploaded!');
//   });

// ------------------------------------------------
// you couldve user multer.localStorage too 
// two attributes in multer- destination and filename
// both have functions with req,file,cb. cb is callback- have 2 args first is error(which weve sent null here) other is [for desitantion - filepath, for filename - file name u wanna have]
export const upload = multer({storage})