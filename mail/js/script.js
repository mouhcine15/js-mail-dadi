const MyMailList=["Luca@gmail.com", "Marco@gmail.com", "Paolo@gmail.com"]; 

const UserMail=document.querySelector("input");
const btn=document.querySelector("button");
const myOutput=document.querySelector("check");
console.log("ciao");

btn.addEventListener("click",
    function () {

        for (let i=0; i < MyMailList.length; i++) {

            if (UserMail == MyMailList[0] || MyMailList [1] || MyMailList[2]) {
                document.getElementsByClassName("check").innerHTML = ("Ci sei")
            }

        }

    }

)