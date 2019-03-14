let mongoose=require('mongoose');
let users= mongoose.model('users');
module.exports={
    index:function(req,res){
        users.find({},function(err,users){
            if(err){
            console.log(err);
            }
            res.render('index',{users:users});
        });
    },
    create:function(req,res){
        users.create(req.body,function(err,result){
            res.redirect('/');
        });
    },
    destroy:function(req,res){
        console.log(req.params.id);
        var id=req.params.id;
        users.findByIdAndDelete(id,function(err,docs){
            console.log('delete'+docs);
            res.redirect('/');
        });
    },
    show_update:function(req,res){
        console.log(req.params.id);
        var id=req.params.id;
        users.findById(id,function(err,users){
            console.log(users.name)
            console.log(users.quote)
            res.render('update_page',{users:users});
        });
    },
    update:function(req,res){
        console.log(req.params.id);
        console.log(req.body.name);
        console.log(req.body.quote);
        var id=req.params.id;
        users.update({_id:id},{$set:{name:req.body.name,quote:req.body.quote}},function(err,rs){
            res.redirect('/');
        });
    }
}