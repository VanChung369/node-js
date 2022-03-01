const userdb = require('../models/user')
exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:'error'});
    return;
}
const user = new userdb({
    name:req.body.name,
    email:req.body.email,
})
user.save(user).then(data=>
{
    res.redirect("/add")
}
)
.catch(err=>{
    res.status(500).send({message:err.message });
})
};
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message })
            })
    }
};
exports.updated=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:'error'});
    }
    const id = req.params.id;
    userdb.findByIdAndUpdate(id,req.body,{ useFindAndModify: false})
    .then(data=>{
        if(!data)
        {
            res.status(404).send({message:'error'});
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message });
    })
};
exports.delete=(req,res)=>{
    const id = req.params.id;
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data)
        {
            res.status(404).send({message:'error'});
        }
        else{
            res.send({message:'successfully'});
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message });
    })
};