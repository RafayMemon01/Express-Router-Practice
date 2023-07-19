import express from 'express';
let router = express.Router()

router.get('/login', (req, res, next) =>{
    res.send('This Is Comment Auth Login')    

})
export default router