function slider_left(){
    const sliderList = document.querySelector("#slider_list");
    sliderList.style.marginLeft = '0px';

}
function slider_right(){
    const sliderList = document.querySelector("#slider_list");
    sliderList.style.marginLeft = '-600px';
    
}

//course card hover effect 
// Select all card elements
let cards = document.querySelectorAll('.card');

// Iterate over each card
cards.forEach((card, i) => {
    card.addEventListener('mouseover', () => {
        // Get the corresponding Exp button for the current card
        let ExpBtn = document.querySelectorAll('.Exp')[i];
        if (ExpBtn) {
            ExpBtn.style.backgroundColor = "#2f8d45";
            ExpBtn.style.color = '#fff';
            ExpBtn.style.padding = '8px 10px';
            ExpBtn.style.borderRadius = '7px';
        }
    });

    card.addEventListener('mouseout', () => {
        // Get the corresponding Exp button for the current card
        let ExpBtn = document.querySelectorAll('.Exp')[i];
        if (ExpBtn) {
            ExpBtn.style.backgroundColor = 'transparent';
            ExpBtn.style.color = '#2f8d45';
            ExpBtn.style.padding = '0';
        }
    });
});


//explore section 
let expCard = document.querySelectorAll('.exp-card');

//Iterating over each card 
expCard.forEach((exp,i)=>{
    exp.addEventListener('mouseover',()=>{
        let expBtn = document.querySelectorAll('.exp_btn')[i];
        if (expBtn) {
            expBtn.style.backgroundColor = "#fff";
            expBtn.style.color = '#4db59c';
        }
    })
    exp.addEventListener('mouseout',()=>{
        let expBtn = document.querySelectorAll('.exp_btn')[i];
        if (expBtn) {
            expBtn.style.backgroundColor = "transparent";
            expBtn.style.color = 'white';
            expBtn.style.borderRadius = "1px solid white";
        }
    });
    
})