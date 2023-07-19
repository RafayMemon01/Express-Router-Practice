import express from 'express';
let router = express.Router()

router.get('/comment', (req, res, next) =>{
    res.send('This Is Comment')    

})
export default router