let password = document.getElementById("password");
let power = document.getElementById("power-pointer");

password.oninput=function(){
    let point = 0;
    let value = password.value;
    let widthPower = ["1%","25%","50%","75%","100%"];
    let colorPower =["#D73F40","DC6551","F2884F","#E2F516","#66FF00"]; 

    if(value.length>=6){c
        let arrayTest = [/[0-9]/,/[a-z]/,/[A-Z]/,/[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if(item.test(value)){
                point+=1;
            }
        }); 
    }


    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};