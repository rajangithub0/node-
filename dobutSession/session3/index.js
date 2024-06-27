const express=require('express');
const storage=require("node-persist")
const app=express();
app.use(express.json())//use for body parse for json file
storage.init();

app.get("/todo",async(req,res)=>{
  const tasks=await storage.values(); //get all objects
    res.status(200).send(tasks)
})

app.post("/todo",(req,res)=>{
    const {task,id}=req.body;
    // const key=Date.now()+"";// converted data into string
    storage.setItem(id,{task,completed:false});
    res.status(201).send("task added successfully")
})


app.delete("/todo/:id",(req,res)=>{
const id= req.params.id;
storage.removeItem(id);
res.send("task deleted")

})

app.put("/todo/:id",async(req,res)=>{
    const id =req.params.id
    const data=await storage.getItem(id);
    if(data){
        data.completed=true;
        storage.setItem(id,data)
        return res.send("item updated")
    }
    res.send("no item found to update")
})
app.listen(5000,()=>console.log('server started'));
