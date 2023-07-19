import express from 'express';
let router = express.Router()

router.get('/feed', (req, res, next) =>{
    res.send('this is feed')    

})
export default router