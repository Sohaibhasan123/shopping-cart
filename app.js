document.getElementById("phone-plus").addEventListener('click',()=>{
    const currentValue=getInput('phone');
    let totalValue=currentValue+1;
    document.getElementById("phone").value=`${totalValue}`;
    calculateTotal();
})
document.getElementById("phone-minus").addEventListener('click',()=>{
    let currentValue=getInput('phone');

    
        let totalValue=currentValue-1;
  
        
    if(totalValue<0)
    {
        totalValue=0;
    }
    document.getElementById("phone").value=`${totalValue}`;
    calculateTotal();

})
document.getElementById("case-plus").addEventListener('click',()=>{
    const currentValue=getInput('case');
    let totalValue=currentValue+1;
    document.getElementById("case").value=`${totalValue}`;
    calculateTotal();
})
document.getElementById("case-minus").addEventListener('click',()=>{
    const currentValue=getInput('case');
    
    let totalValue=currentValue-1;
    if(totalValue<0)
    {
        totalValue=0;
    }
    document.getElementById("case").value=`${totalValue}`;
    calculateTotal();
})
function getInput(id)
{
    const currentValue=parseInt(document.getElementById(id).value);
    return currentValue;
}
function calculateTotal()
{
   const phoneTotal=getInput("phone")*1219;
   const caseTotal=getInput("case")*59;
   const subTotal=phoneTotal+caseTotal;
   const tax=subTotal/10;
   const total=tax+subTotal;
   document.getElementById("sub-total").innerText=subTotal;
   document.getElementById("tax").innerText=tax;
   document.getElementById("total").innerText=total;

}