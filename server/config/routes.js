let UsersCtrl=require('./../controllers/UsersCtrl.js')

module.exports=function(app){
app.get('/',UsersCtrl.index);
app.post('/add_user',UsersCtrl.create);
app.post('/mongooses/destroy/:id',UsersCtrl.destroy);
app.post('/mongooses/show_update/:id',UsersCtrl.show_update);
app.post('/mongooses/edit/:id',UsersCtrl.update);
}