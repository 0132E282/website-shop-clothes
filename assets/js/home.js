
const $ =document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const home = (()=>{
    const infoProducts = $$('.product');
    return {
        getParent(element,parent){
            while(element.parentNode){
              if(element.parentNode.matches(parent)){
               return element.parentNode
              }
             element = element.parentNode
            }
       },
        handleOpenAndClose(element, active){
            if(element.classList.contains(active)){
                element.classList.remove(active)
            }else{
                element.classList.add(active)
            }
        },
        handleEvent(){
           const _this =this;
           infoProducts.forEach((infoProduct)=>{
              infoProduct.onclick = e =>{
                  if(e.target.classList.contains('fa-circle-info') || e.target.classList.contains('product__button--list--item--close')){
                   _this.handleOpenAndClose(_this.getParent(e.target,'.product'),'active')
                  }
                  if(e.target.closest('.product__button--list--item-like')){
                    _this.handleOpenAndClose(_this.getParent(e.target,'.product'),'active-like')
                  }
                }
              }
           )
        },

        start(){
            this.handleEvent()
        }
    }
})()
home.start()