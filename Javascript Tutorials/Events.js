
    let para=document.getElementById('para');
    
    document.addEventListener('DOMContentLoaded', function() {
        para=document.getElementById('para');
        para.addEventListener('mouseover', function run(){
            alert('Mouse Inside')
            });
            para.addEventListener('mouseout', function run(){
            alert('mouse outside')
            });
    });
  
    
function toggleHide(){
    // let para= document.getElementById('para');
    if(para.style.display!='none'){
        para.style.display='none';

        
    }
    else{
        para.style.display='block';
    }
}