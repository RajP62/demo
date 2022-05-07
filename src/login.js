document.getElementById("loginBtn").addEventListener("click", loginInfo)





function loginInfo() {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    console.log(email, pass)
    checkData(email, pass)
}


function checkData(email, pass) {

    let signupData = JSON.parse(localStorage.getItem("YooxSignUpData"));
    console.log('signupData:', signupData)


    if (signupData === null) {
        window.location.href ="../registar.html"
        alert("you are new User please Signup first!!")
        document.querySelector("#email").value = ""
        document.querySelector("#pass").value = ""
    }
    else {


        for (let i = 0; i < signupData.length; i++) {

            // console.log(ele.email, ele.pass)
            if (signupData[i].email == document.querySelector("#email").value && signupData[i].pass == document.querySelector("#pass").value) {
                alert("login successful")
                document.querySelector("#email").value = ""
                document.querySelector("#pass").value = ""
                window.location.href = "../women.html";
                break;

            }

           else if (signupData[i].email != document.getElementById("email").value) {
                alert(" Ooops!! Invalid EmailId")
                break;

            }
            else {
                alert("Please check Password ")
                break
            }


            // if (ele.pass != document.getElementById("pass").value) {
            //     // (ele.email != document.querySelector("#email").value)
            //     alert("incorrect Password")
            //     document.querySelector("#email").value = ""
            //     document.querySelector("#pass").value = ""
            // }









        
        }


    }
}

//         signupData.map(function (ele) {

//             var flag = false;
//             // console.log(ele.email, ele.pass)
//             if (ele.email == document.querySelector("#email").value && ele.pass == document.querySelector("#pass").value) {
//                 alert("login successful")
//                 document.querySelector("#email").value = ""
//                 document.querySelector("#pass").value = ""
//                 window.location.href = "../index.html";




//             }


//             else {
//                 alert("please check mail pass")
//             }


//             //   else if( ele.email != document.getElementById("email").value){
//             //     alert("invalid email")




//             //      if(ele.pass != document.getElementById("pass").value) {
//             //         // (ele.email != document.querySelector("#email").value)
//             //         alert("incorrect Password")
//             //         document.querySelector("#email").value = ""
//             //         document.querySelector("#pass").value = ""
//             //       }
//             //   }




//         })





