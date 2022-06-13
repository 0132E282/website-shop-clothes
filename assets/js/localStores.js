import getParent from "./mether.js";
const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document)
const app = (()=>{
    const informationStores =[
        {
            city : 'London',
            sub : ' 109 Columbus Circle, New York, NY 10023',
            context : 'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.',
            local : '180-182 Regent Street, London, W1B 5BT',
            map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11812.186537558879!2d-0.2800357542111365!3d51.50943055002519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e0110275d77%3A0xcc6c71db5e16655!2sTwyford%20Avenue%20Sports%20Ground%2C%20Twyford%20Ave%2C%20London%20W3%209QA%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1653492457321!5m2!1svi!2s',
            phone : '0123-456-789',
            link :'www.yourwebsite.com',
            email :'support@yourwebsite.com',
            work :'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm'
        },
        {
           city : 'New York',
           sub : ' 180-182 Regent Street, London, W1B 5BT',
           context : ' Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.',
           local : '180-182 Regent Street, London, W1B 5BT',
           map : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.723668537021!2d-73.98413704876553!3d40.76810207922449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f63cf10429%3A0xfbc5a6a8a9420e16!2s109%20Columbus%20Cir%2C%20New%20York%2C%20NY%2010019%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1653496019156!5m2!1svi!2s',
           phone : '0123-456-789',
           link :'www.yourwebsite.com',
           email :'support@yourwebsite.com',
           work :'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm'
       },
       {
           city : 'Paris',
           sub : '2133 Rue Saint-Honoré, 75001 Paris',
           context : ' Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.',
           local : '180-182 Regent Street, London, W1B 5BT',
           map : ' https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.079111119296!2d2.3183606564998813!3d48.86698998412326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e320d24e35b%3A0x4cec83df0eeb2e50!2sCake%20Shop!5e0!3m2!1svi!2s!4v1653496103311!5m2!1svi!2s',
           phone : '0123-456-789',
           link :'www.yourwebsite.com',
           email :'support@yourwebsite.com',
           work :'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm'
       }
    ]
    const listItem = $('.container__stores--list')
    
    return {
       indexInfo: 0,
        reader(){
            const elementInfo = informationStores.map((info,index)=>{
               return `<div class="l-4 col">
                <div class= "container--local--location--item ${this.indexInfo===index ?'active':''} " data-index=${index}>
                     <h3 class="location--item__heading">${info.city}</h3>
                     <h4 class="location--item__sub">${info.sub}</h4>
                     <p class="location--item__heading--context">${info.context}</p>
                     <button class="btn location--item__button">view details</button>
                </div>
              </div>`
             }
            )
            $('.container__stores--list').innerHTML = elementInfo.join('')
            
        },
        loadMap(){
            const elementMap = `
                 <div class="l-7 col">
                    <div class="local--contain--map">
                        <iframe src="${informationStores[this.indexInfo].map}"></iframe>
                    </div>
                 </div>
                 <div class="l-5 col"> 
                     <div class="local--map--content">
                        <h3 class="local--map--content--name">${informationStores[this.indexInfo].city} </h3>
                        <h5 class="local--map--content--sub">${informationStores[this.indexInfo].sub} </h5>
                        <p class="local--map--content--context">${informationStores[this.indexInfo].context}</p>
                        <ul class="local--map--content--info">
                            <li class="local--map--content--info--item">
                               <i class="fas fa-map-marker"></i> ${informationStores[this.indexInfo].local}
                            </li>
                            <li class="local--map--content--info--item">
                               <i class="fas fa-phone"></i> ${informationStores[this.indexInfo].phone}
                            </li>
                            <li class="local--map--content--info--item">
                               <i class="fas fa-link"></i> ${informationStores[this.indexInfo].link}
                            </li>
                            <li class="local--map--content--info--item">
                               <i class="fas fa-envelope"></i> ${informationStores[this.indexInfo].email}
                            </li>
                            <li class="local--map--content--info--item">
                              <i class="fas fa-clock"></i> ${informationStores[this.indexInfo].work}
                            </li>
                        </ul>
                     </div>
                 </div>
                `
            $('.container--local--contain--detal').innerHTML = elementMap
        },
        handleEvent(){
            const _this = this
            listItem.onclick=e=>{
               if(e.target.closest('.location--item__button')){
                 let index =Number(getParent(e.target,'.container--local--location--item').getAttribute('data-index'));
                 _this.indexInfo =index
                 _this.reader()
                 _this.loadMap()
                 
                 
               }

            }
        },
        start(){
            this.reader()
            this.loadMap()
            this.handleEvent()
        }
    }
})();
app.start()
