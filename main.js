let output=document.getElementById("output")


const clicked=(event)=>{
    
    output.value+=event.target.value
}


const calculate=()=>{
    result=eval(output.value)
    output.value=result

}
