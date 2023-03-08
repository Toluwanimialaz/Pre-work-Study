var topics=["HTML","CSS","Git","Javascript"]
var rand=Math.floor(Math.random()*topics.length);

function br(){
    console.log("which topic should we study first")

    for(i=0;i<topics.length;i++){
        if(topics[rand]=="HTML"){
            console.log("lets study html");
        } else if(topics[rand]=="CSS"){
            console.log("lets study CSS");
        } else if(topics[rand]=="Git"){
            console.log("lets study git");
        } else if(topics[rand]=="Javascript"){
            console.log("lets study Javascript");
        } else{
            console.log("none");
        }
    }

    
}

br()
   

