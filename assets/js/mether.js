export default getParent
function getParent(element , parent){
    while(element.parentElement){
        if(element.parentElement.matches(parent)){
            return element.parentElement
        }
        element = element.parentElement
    }
}
