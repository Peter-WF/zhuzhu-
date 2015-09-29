var fs = require('fs');

function upload(data){
    //console.log("这里是upload");
    //var returnData="";
    //fs.readFile('./WebContent/hellow.html','utf-8', function(err,file){
    //    if(err){
    //        console.log(err);
    //        returnData= err;
    //    }else{
    //        //console.log(file);
    //        returnData= "aaa";
    //    }
    //});
    //console.log(returnData);
    //return returnData;
    //return "here is upload, received:"+data;
    return  {type:"200",data:data};
}
function start(data){
    //console.log("这里是start");
    //return {type:"200",data:"here is start, received:"+data};
    return  {type:"file",data:"here is start, received:"+data};
}
exports.upload=upload;
exports.start=start;