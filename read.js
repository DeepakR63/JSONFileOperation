const fs=require('fs');
const file=require('./file.js');

var dataJSON={
    name:[]
};

module.exports=function readCall()
{
    if(fs.existsSync(file))
    {
       var _result= fs.readFileSync(file);
       if(_result.length<=0)
        {
            dataJSON=0;
        }
        else
        {
            dataJSON=JSON.parse(_result);
        }
    }
    else{
        console.log('File does not exist.');
        dataJSON=-1;
    }

    return dataJSON;
        
}