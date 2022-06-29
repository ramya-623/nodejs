function verifylogin(user,pwd,callback){
    if(pwd=="pwd1"){
        callback(null,"correct login")
    }
    else{
        callback("incorrect login",null)
    }
}
verifylogin("user1","pwd2",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})