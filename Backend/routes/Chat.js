import express from "express";
import Thread from "../models/Thread.js";
import GetOpenAiResponse from '../utils/openai.js';


const router = express.Router();

router.post("/test", async(req,res) => {
    try{
        const thread = new Thread({
            threadId : "xyz",
            title : "Testing Thread",
        });

        const response = await thread.save();
        res.send(response);
    }catch(err){
        res.send(err);
        res.status(500).json({
            error: "Faild to save data in DB"
        });
    }
});


//get all thread
router.get("/thread", async (req,res) => {
    try{
        const threads = await Thread.find({}).sort({updatedAt: -1});
        //descending order of updated at 
        res.json(threads);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch data"});
    }
});


//get perticular / specific thread
router.get("/thread/:threadId", async (req,res) => {
    const {threadId} = req.params;
    try{
        const thread = await Thread.findOne({threadId});
        if(!thread){
            res.status(404).json({error:"Thread not found"});
        }
        res.json(thread.messages);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch data"});
    }
});


//delete specific thread
router.delete("/thread/:threadId", async (req,res) => {
    const {threadId} = req.params;
    try{
        const deletedThread = await Thread.findOneAndDelete({threadId});

        if(!deletedThread){
            res.status(404).json({error:"Thread could not be Deleted"});
        }

        res.status(200).json({success : "Thread Deleted successfully"})

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch data"});
    }
    
});


router.post('/chat', async (req, res) => {

    const {threadId , message} = req.body;

    if(!threadId || !message){
        res.status(400).json({error : "Required Field missing"});
    }

    try{
        let thread = await Thread.findOne({threadId});

        if(!thread){
            thread = new Thread({
                threadId,
                title:message,
                messages:[{role:"user",content:message}]
            })
        }else{
            thread.messages.push({role:"user",content:message}); 
        }

        let assistantReply = await GetOpenAiResponse(message);

        thread.messages.push({role:"assistant",content:assistantReply});
        thread.updatedAt = Date.now();

        await thread.save(); 
        res.json({reply:assistantReply});

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Something went wrong"});
    }

})

export default router;