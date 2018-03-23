const fs=require('fs');
const read=require('./read.js');
const file=require('./file.js');

var data={
    name:[]
}

module.exports=function writeName(name)
{
    
    data=read();

    if(data==0)
    {
        data={
            name:[]
        }
    }

    data.name.push(name);
    dataJSON = JSON.stringify(data,null,2); 

    fs.writeFile(file, dataJSON,'utf8', (err) => {  
        if (err)
        { 
            throw err;
        }
        else
        {
            console.log(name+' written to file');
        }
    });         
}
