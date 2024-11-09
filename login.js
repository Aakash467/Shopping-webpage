function log()
{
    let username=document.getElementById("username").value;
    let pass=document.getElementById("pass").value;
    if(username===""||pass==="")
    {
        alert("Please enter your details properly!");
    }
    else if(username.length<5)
    alert("username is too short");
    else if(pass.length<8)
    {
        alert("password should be minimum 8 characters")
    }
    else if(username===pass)
    alert("username and password cant be same");
    else{
        window.open('bazaar2.htm');
    }
}