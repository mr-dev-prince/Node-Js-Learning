const { format } = require('date-fns')
const { v4 : uuid } = require('uuid')
const fs = require('fs')
const fspromise = require('fs').promises
const path = require('path')



const logEvents = async (message)=>{
    const dateTime = `${format(new Date(), 'yyyy\tMM\tdd\tHH:mm:ss')}`;
    const logItems = `${dateTime}\t$(uuid())\t${message}`;
    console.log(logItems);

    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            fspromise.mkdir(path.join(__dirname, 'logs'))
        }
        await fspromise.appendFile(path.join(__dirname , 'logs', 'eventLog.txt'), logItems);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = logEvents;