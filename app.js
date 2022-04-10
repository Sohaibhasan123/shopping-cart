document.getElementById("phone-plus").addEventListener('click',()=>{
    const currentValue=getInput('phone');
    let totalValue=currentValue+1;
    document.getElementById("phone").value=`${totalValue}`;
})
document.getElementById("phone-minus").addEventListener('click',()=>{
    const currentValue=getInput('phone');
    let totalValue=currentValue-1;
    document.getElementById("phone").value=`${totalValue}`;

})
document.getElementById("case-plus").addEventListener('click',()=>{
    const currentValue=getInput('case');
    let totalValue=currentValue+1;
    document.getElementById("case").value=`${totalValue}`;
})
document.getElementById("case-minus").addEventListener('click',()=>{
    const currentValue=getInput('case');
    let totalValue=currentValue-1;
    document.getElementById("case").value=`${totalValue}`;
})
function getInput(id)
{
    const currentValue=parseFloat(document.getElementById(id).value);
    return currentValue;
}