// to connect to the database-
const db = require('../config/mongoose');
const Todo = require('../models/todo');


// the default page which prints everything in the database-
module.exports.home = function(req,res){
    Todo.find({},function(err,todos){
        if(err){
            console.log('Error in fetching todos from DB');
            return;
        }
        //console.log(todos);
        return res.render('home',{
            title : "ToDo App",
            todo_list : todos
        });
    });
};

var months = {
    "01" : "Jan",
    "02" : "Feb",
    "03" : "Mar",
    "04" : "Apr",
    "05" : "May",
    "06" : "Jun",
    "07" : "Jul",
    "08" : "Aug",
    "09" : "Sept",
    "10" : "Oct",
    "11" : "Nov",
    "12" : "Dec"
};

// enters data straight into the database-
module.exports.createTODO = function(req,res){
    let d = req.body.duedate;
    d = d.split(' ')[0];
    if(d=="")
        d = "No deadline";
    else
    {
        let year = d.substring(0, 4);
        let month = d.substring(5,7);
        let day = d.substring(8,10);
        d = months[month] + " " + day + "," + year;
    }
    Todo.create({
        description: req.body.description,
        category : req.body.category,
        duedate : d
    },function(err , newTodo){
        if(err){
            console.log('error in creating the todo');
            return;
        }
        //console.log('******',newTodo);
        return res.redirect('back');
        
    });
}

//fetching all ids and deleting all the rewspective todos
module.exports.deleteTODO = function(req,res){
    let id = req.body.deleteid;
    //console.log(id);
    var flag = Array.isArray(id); 
    //if there is more than one element to delete
    if(flag==true)
    {
        var i=0;
        while(i<id.length)
        {
            Todo.findByIdAndDelete(id[i],function(err){
            if(err){
                console.log('error in deleting data from database');
                return;
            }
            });
            i++;
        }
        return res.redirect('back');
    }
    else // if there is only one element to delete
    {
        Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting data from database');
                return;
            }
            return res.redirect('back');
        });
    }
}