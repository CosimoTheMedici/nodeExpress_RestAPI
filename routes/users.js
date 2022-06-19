

import express from 'express'


import {getAllUsers , createUser ,getbyID, deleteByID , patchByID} from './../controllers/usersControlers.js'

const router = express.Router();


router.get('/',getAllUsers);

router.post('/',createUser);


router.get('/:id',getbyID);


router.delete('/:id',deleteByID);

router.patch('/:id',patchByID);

export default router;