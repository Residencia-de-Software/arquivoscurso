var display = document.getElementById("display");
var temp,op;

function pressNumber(number){
    if (number!="0"){
        display.value = display.value + number;
    }
    else if(display.value!=""){
        display.value = display.value + number;
    }
   
}

function pressDec(){
    if (display.value.indexOf(".")<0){
        if (display.value == ""){
            display.value = "0.";
        }
        else {
            display.value = display.value + ".";
        }
    }
}

function pressCE(){
    display.value = "";
    op=null;
    temp=null;
}

function pressC(){
    display.value = display.value.substring(0,display.value.length-1);
}

function pressOP(op){
    if(this.op==null && display.value!=""){
        this.op=op;
        temp=Number(display.value);
        display.value = "";
    }
}

function pressResult(){
    if (display.value!="" && temp!=null){
        switch (this.op){
            case "sum":
                temp+=Number(display.value);
                display.value=temp;
                this.op=null;
                break;
            case "sub":
                temp-=Number(display.value);
                display.value=temp;
                this.op=null;
                break;
            case "div":
                if (Number(display.value)!=0){
                    temp=temp/(Number(display.value));
                    display.value=temp;
                    this.op=null;
                }
                else{
                    temp=temp/(Number(display.value));
                    display.value="Error";
                    this.op=null;
                }                
                break;
            case "mult":
                temp=Number(display.value)*temp;
                display.value=temp;
                this.op=null;
                break;
        }
    }
}