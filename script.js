

function rollDice()
{
    let nums=[];
let imgs=[];



    document.getElementById("nums").textContent=``;
    document.getElementById("img").innerHTML="";
    
    let num=Number(document.getElementById("input").value);
    if(num<1||isNaN(num)||document.getElementById("input").value=="")
    {  document.getElementById("nums").textContent=`Please enter a valid number!`;
    

    }  
    else {
    for(let i=0;i<num;i++)
    {
        let randomNum = Math.floor(Math.random() * (6)) + 1;
        nums.push(randomNum);
        imgs.push(`<img src="${randomNum}.jpg ">`);


    }
    document.getElementById("nums").textContent=`Dice: ${nums.join(', ')}`;
    document.getElementById("img").innerHTML=imgs.join(" ");
}
    

}