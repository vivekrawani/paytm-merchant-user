import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.post('/signup', async(req : Request, res : Response)=>{
    const body = req.body;
    console.log(body)
res.json({message : "working"});
});

userRouter.post('/signin', async(req : Request, res : Response)=>{
    const body = req.body;
    console.log(body)
    res.json({message : "working"});
});


export default userRouter;