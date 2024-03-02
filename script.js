class navigator{
    mobileMenuButton = null;
    mobileMenu = null;
    mobileMenuButtonClass = 'burger';
    mobileMenuClass = 'mobile-nav-panel';
    constructor(){
        this.init();
        this.bindEvents();
    }

    init(){
        this.mobileMenu = document.querySelector(`.${this.mobileMenuClass}`);
        this.mobileMinuButton= document.querySelector(`.${this.mobileMinuButtonClass}`);
    }

    bindEvents(){
        if(this.mobileMenu == undefined || this.mobileMenuButton == undefined){
            console.log('Error');
            return;
        }
        this.mobileMenuButton.addEventListener('click', ()=> {
            console.log(this)
            this.mobileMenu.classlist.toggle('active');
        })
    }
}
sasasas
document.addEventListener('DOMContentLoaded', ()=>{
    new Navigation()
})
ssdsddsdsdsd
