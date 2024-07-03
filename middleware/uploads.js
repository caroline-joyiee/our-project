import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";


const upload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*' // If left blank, this defaults to root of drive '/',
    }),
    preservePath: true
});