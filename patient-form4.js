   /*
 name: Dewan Raza
 file: patient-form2.js
 date created:10-17-2025
 date updated: 10-25-2025
 purpose: validating data from a form in real time
 */

function getdata1()
{
    let formcontent=document.getElementById("signup");
    let x;
    let dtype;
    let formoutput;
    formoutput="<table class='output'><th>datatype</th><th>value</th>";
    for(x=0;x<formcontent.length;x++)
    {
    dtype=formcontent.elements[x].type;
    switch(dtype)
    {
        case"checkbox":
        if(formcontent.elements[x].checked)
        {
            formoutput= formoutput+ "<tr><td>"+ formcontent.elements[x].name + "</td>";
            formoutput= formoutput+ "<td class='outputdata'>Checked</td></tr>";
        }
        break;
        case "radio":
        if(formcontent.elements[x].checked)
        {
            formoutput= formoutput+ "<tr><td>" + formcontent.elements[x].name + "</td>";
            formoutput= formoutput+ "<td class='outputdata'>checked</td></tr>";

        }
        break;
        case "button": case "submit": case "reset":
        break;
        default:
        
        formoutput += "<tr><td>"+formcontent.elements[x].name + "</td>";
        formoutput +="<td class='outputdata'>" + formcontent.elements[x].value +"</td></tr>";
         
    }





    }
if (formoutput.length>0) 
{ 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
}

}
function checkfirstname()
{
    x=document.getElementById("firstname").value;
    if(x.length<2)
    {
        document.getElementById("name_msg").innerHTML="first name is too short";
    }
    else
    {
        if(x.match(/[a-zA-Z-']+$/))
        {
            document.getElementById("name_msg").innerHTML="";
        }
    
    else
    {
        document.getElementById("name_msg").innerHTML="invalid characters in first name";
    }
    }



}
function checkmid()
{
x=document.getElementById("middleinitial").value;
if(x.length>0)
{
    if(x.match(/[a-zA-Z]+$/))
    {
        document.getElementById("name_msg").innerHTML="";
    }
    else
    {
        document.getElementById("name_msg").innerHTML="invalid character for middle name";
    }




}

}
function checklastname()
{
    x=document.getElementById("lastname").value;
    if(x.length<2)
    {
        document.getElementById("name_msg").innerHTML="last name too short";
    }
    else
    {
        if(x.match(/[a-zA-Z2-5-]+$/))
        {
            document.getElementById("name_msg").innerHTML="";
        }
        else
        {
           document.getElementById("name_msg").innerHTML="invalid characters in last name";
        }
    }

}

function passwordcheck()
{
let passout;
let passin=document.getElementById("pass").value;
if(passin.search(/[a-z]/)<0)
{
    passout="please enter 1 lower case letter";
}
else
{
    passout="1 lower case letter confirmed";
}
document.getElementById("pass_msg").innerHTML=passout;    
if(passin.search(/[A-Z]/)<0)
{
    passout="please enter 1 upper case letter";
}
else
{
    passout="1 upper case letter confirmed";
}
document.getElementById("pass_msg2").innerHTML=passout;
if(passin.search(/[0-9]/)<0)
{
    passout="please enter 1 number";
}
else
{
    passout="1 number received";
}
document.getElementById("pass_msg3").innerHTML=passout;
if(passin.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0)
{
    passout="please enter 1 special character";
}
else
{
    passout="1 special character present";
}
document.getElementById("pass_msg4").innerHTML=passout;
if(passin.length<8)
{
    passout="please enter at least 8 characters";
}
else
{
    passout="at least 8 characters received";
}
document.getElementById("pass_msg5").innerHTML=passout;
if(passin==document.getElementById("userid").innerHTML)
{
    passout="password cannot be the same as user id";
}
else
{
    passout="password verified different from id";
}
document.getElementById("pass_msg6").innerHTML=passout;
}
function passmatch()
{
x=document.getElementById("repass").value;
if(x==document.getElementById("pass"))
{
    document.getElementById("pass_check").innerHTML="passwords match";
}
else
{
    document.getElementById("pass_check").innerHTML="passwords do not match";
}
}
function checkemail()
{
x=document.getElementById("email").value;
let emailout;
if(x.search(/[@]/)<0)
{
    emailout="please enter valid email in name@domain.tld format";
}
else
{
    emailout="";
}
document.getElementById("email_msg").innerHTML=emailout;
if(x.length<4)
{
    emailout="please enter a valid email in name@domain.tld format";
}
else
{
    emailout="";
}
document.getElementById("email_msg").innerHTML=emailout;

}
function checkphone()
{
let x=document.getElementById("phone").value;
let phoneout="";
if(x.length<10)
    {
        document.getElementById("phone_msg").innerHTML="enter valid 10 digit number";
    }
    else
    {
        if(x.match(/^[0-9-]+$/))
    {
        document.getElementById("phone_msg").innerHTML="";
    }
    else
    {
        document.getElementById("phone_msg").innerHTML="please enter valid phone # in 000-000-0000 format";
    }
     if(x.search(/0-9/)>10)
        {
            phoneout="10 digit number received";
        }
        else
        {
            phoneout="please enter valid 10 digit number";
        }
        document.getElementById("phone_msg2").innerHTML=phoneout;
    }
}
function addrcheck()
{
    x=document.getElementById("addr1").value;
    if(x.length<2)
    {
        document.getElementById("addr_msg").innerHTML="please enter something on the address line";
    }
    else
    {
        document.getElementById("addr_msg").innerHTML="";
    }

}
function addrcheck2()
{
    x=document.getElementById("addr2").value;
    if(x.length==0)
    {
        document.getElementById("addr2_msg").innerHTML="";
    }
    else
    {
        if(x.length<2)
    {
        document.getElementById("addr2_msg").innerHTML="please enter something on address 2 line";
    }
    else
    {
        document.getElementById("addr2_msg").innerHTML="";
    }
    }
}
function checkcity()
{
    x=document.getElementById("city").value;
    if(x.length<2)
    {
        document.getElementById("city_msg").innerHTML="city length too short";
    }
    else
    {
        if(x.match(/[a-zA-Z3-5-']+$/))
    {
        document.getElementById("city_msg").innerHTML="";
    }
    else
    {
        document.getElementById("city_msg").innerHTML="city has invalid characters";
    }
    }
}
function checkstate()
{
    x=document.getElementById("state").value;
    if(x=="")
    {
        document.getElementById("state_msg").innerHTML="please select a state";
    }
    else
        {
            document.getElementById("state_msg").innerHTML="";
        }
}
function checkzip()
{
    x=document.getElementById("zip").value;
    if(x.length<5)
    {
        document.getElementById("zip_msg").innerHTML="zip code too short";
    }
    else
    {
    if(x.match(/[0-9-]+$/))
    {
        document.getElementById("zip_msg").innerHTML="";
    }
    else
    {
        document.getElementById("zip_msg").innerHTML="invalid character in zip code";
    }
    }
}
function checkid()
{
    let idout;
    idin=document.getElementById("userid").value;
    if(idin==document.getElementById("email").value)
    {
       idout="user id cannot equal email address";
    }
    else
    {
        idout="";
    }
    document.getElementById("id_msg").innerHTML=idout;
    if(idin.length<5)
    {
        idout="user id too short";
    }
    else
    {
        idout="";
    }
    document.getElementById("id_msg2").innerHTML=idout;
    if(x.match(/[a-zA-Z0-9_-]+$/))
    {
        idout="valid user id";
    }
    else
    {
        idout="invalid character in user id";
    }
    document.getElementById("id_msg3").innerHTML=idout;

}
function health()
{
   let slider = document.getElementById("scale").value;
   document.getElementById("rangedisplay").innerHTML=slider;
    

}

function checkssn()
{
    x=document.getElementById("socialsecurity").value;
    if(x.length<9)
    {
        document.getElementById("ssn_msg").innerHTML="please enter valid 9 digit social security number";
    }
    else
    {
        if(x.match(/[0-9-]+$/))
        {
            document.getElementById("ssn_msg").innerHTML="";
        }
        else
        {
            document.getElementById("ssn_msg").innerHTML="invalid character in ssn";
        }
    }
}
