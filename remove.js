const fs=require('fs');
const file=require('./file.js');
const read=require('./read.js');

var data={
    name:[]
}

module.exports=function removeName(name)
{
    var _IsAvailable=false;
    
    data=read();

    if(data==0)
    {
        data={
            name:[]
        }
    }

    for(var i = data.name.length - 1; i >= 0; i--) 
    {
        if(data.name[i] === name) 
        {
            data.name.splice(i, 1);
            _IsAvailable=true;
        }
    }

    if(_IsAvailable==true)
    {
        dataJSON = JSON.stringify(data,null,2);  
        fs.writeFile('./storage/names.json', dataJSON,'utf8', (err) => {  
            if (err) throw err;
            else
            {
                console.log('Remove '+name+' from file');
                console.log('Available names are:',data.name.toString());
            }
        });  
       
    }
    else
    {
        console.log(name+'is not available.');
    }    
}
