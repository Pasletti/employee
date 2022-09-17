const moment = require('moment');
const fs = require('fs');
const path = require('path');

// log system
exports.write = async function write(strLog) {
    if (process.env.FILE_DEBUG === "false") {
        return process.env.FILE_DEBUG;
    }

	console.log(strLog);

    return fs.appendFile(
        path.join("./", "logs", `system${moment().format('YYYYMMDD')}.log`),
	    moment().format('DD/MM/YYYY HH:mm:ss') + " - " + strLog + "\n", 
	    function(err) {
		    if (err) { 
			    //console.log(err); 
		    } 
		    //console.log("The file was saved!"); 
	    }
    );
}