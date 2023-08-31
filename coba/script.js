const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

this.topBox = 99999;

function checkBoxes(){
    // console.log(window.innerHeight);
    const triggerBottom = window.innerHeight / 5 * 4;

    // console.log(triggerBottom);
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        
        console.log(boxTop);
        
        if(boxTop < triggerBottom){
            // if(boxTop < this.topBox){
                box.classList.add('show');
            } 
            // else {
                //     box.classList.remove('show');
                // }
                
        if(this.topBox > boxTop){
            this.topBox = boxTop;
        }
    });
}