//  Resume
$(document).ready(function(){
    $('#profile_ripples').ripples({
        resolution: 512,
        dropRadius:10
    }); 
    const bars = document.querySelectorAll('.progress-bar');
   
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        
        console.log(percentage);

    })

});