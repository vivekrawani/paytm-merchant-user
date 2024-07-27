import { Router, Request, Response } from "express";

const merchantRouter = Router();

merchantRouter.post('/signup', async(req : Request, res : Response)=>{
    const body = req.body;
    console.log(body)
res.json({message : "working"});
});

merchantRouter.post('/signin', async(req : Request, res : Response)=>{
    const body = req.body;
    console.log(body)
    res.json({message : "working"});
});


export default merchantRouter;