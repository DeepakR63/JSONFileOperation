const writeCall=require('./write.js');
const readCall=require('./read.js');
const removeCall=require('./remove.js');
const showCall=require('./show.js');
const yargs=require('yargs');

function fileOPeration(option,value)
{
    if(option=='write')
    {
        writeCall(value);
    }
    else if(option=='read'||option=='show')
    {
        showCall();
    }
    else if(option=='remove')
    {
        removeCall(value);
    }
    else 
    {
        console.log('Invalid Option.')
    }
}

fileOPeration(yargs.argv.option,yargs.argv.name);

