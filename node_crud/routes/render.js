const axios = require('axios');
exports.home = (req,res)=>{
    axios.get('http://localhost:8000/api/v1/user')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.add = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:8000/api/v1/user', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}