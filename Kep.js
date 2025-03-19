export default class Kep{
    #cim
    #src
    #leiras
    constructor(cim, src,leiras, szuloElem ){
        this.#cim=cim;
        this.#src = src;
        this.#leiras=leiras;
        this.szuloElem=szuloElem;
        this.megjelenit();
        this.esemenykezelo();

    }

    esemenykezelo() {
        this.kepElem = document.querySelector(".kep:last-child")
        console.log(this.kepElem)
        this.kepElem.addEventListener("click", ()=> { // function nevtelen fugveny eseten a this arra az elemre mutatt amelleyet az esemeny kivaltotta ez olyasmi mint az event target
                                                        // a nyilfugveny eseten a this arra  a fugvenyre mutatt amelnyek a hatokoreben a nyil szerepel
            console.log(this)
        }) 
    }

    megjelenit(){
        let html = `<div class="kep">
                        <img src="${this.#src}" alt="">



                    </div>`
        this.szuloElem.insertAdjacentHTML("beforeend", html);

    }
}