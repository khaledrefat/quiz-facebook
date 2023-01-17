// function sendEmail() {
//     var email =     document.getElementById("email").value;
//     var phone =     document.getElementById("password").value;
//     var error =     document.getElementById("error");
//     var text = "" ;
//     // if (username.length < 5) {
//     //     text = ("please enter valid username");
//     //     error.innerHTML = text;
//     //     return false ;
//      if (email. indexOf("@") == -1 &&  email.length < 10) {
//         text = ("please enter valid email");
//         error.innerHTML = text;
//         return false ;
//     }else if (isNaN(phone) || phone.length < 11) {
//         text = ("please enter valid phone");
//         error.innerHTML = text;
//         return false ;
//     } else {
//     alert ("done");
//         return true;
//     }  
// }




function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_p9oav15";
    const templateID = "template_k04vl4s";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  