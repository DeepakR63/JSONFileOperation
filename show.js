const fs=require('fs');
const read=require('./read.js');

var data={
    name:[]
}

module.exports=function showName()
{
    data=read();
    
    if(data!=0)
    {
        
        for(var i =0;i< data.name.length; i++) 
        {
            console.log((i+1)+" -- "+data.name[i]);
        }   
    }
    else
    {
        console.log('No details found.');
    }
}
