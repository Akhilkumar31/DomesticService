function fun()
{
    let a = document.getElementById("Username").value;
    let b = document.getElementById("password").value;
    console.log(a);
        console.log(b);
    if(a=="admin"&&b=="password") 
    {
        
        window.location.assign("details.html");
    }
    else 
    {
        document.getElementById("text").style.visibility="visible";
    } 
}