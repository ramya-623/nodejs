function verifylogin(user,pwd,callback){
    if(pwd=="pwd1"){
        callback("correct login")
    }
    else{
        callback("incrrect login")
    }
}
verifylogin("user1","pwd1",function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})