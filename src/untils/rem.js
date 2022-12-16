const docEl=document.documentElement;
function setRemUnit(){
    const rem=docEl.clientWidth/19.2;
    docEl.style.fontSize=rem+'px'
}
setRemUnit()
window.addEventListener('resize',setRemUnit)
window.addEventListener('pageshow',(e)=>{
    if(e.persisted){
        setRemUnit()
    }
})