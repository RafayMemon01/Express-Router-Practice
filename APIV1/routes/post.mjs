import express from 'express';
let router = express.Router()

router.get('/post', (req, res, next) =>{
    res.send('This Is Post')    

})
export default router