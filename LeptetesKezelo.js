import Nagykep from "./Nagykep";
export default class LeptetoKezelo {

    #aktIndex;
    #lista = [];
    constructor() {

        this.#lista = lista;
        this.#aktIndex = 0;
        this.szuloElem = szuloElem;
        this.jobbGombElem = document.getElementsByClassName("jobb")[0];
        const NAGYKEP = new Nagykep(
            this.#lista[this.#aktIndex].cim, 
            this.#lista[this.#aktIndex].src, 
            this.#lista[this.#aktIndex].leiras, 
            this.szuloElem
        );
        this.esemenykezelo();
        this.kiskepkezeles();
    };

kiskepkezeles() {
    window.addEventListener("kivalaszt", (event)=>
        console.log(event.detail);
        this.#aktIndex = event.detail;
    );
}
    
    
}

esemenykezelo() {

    jobbGombElem.addEventListener("click", ()=> {
        this.#aktIndex++;
        this.#aktIndex = this.#aktIndex % this.#lista.lenght;
        const NAGYKEP = new Nagykep(
                                    this.#lista[this.#aktIndex].cim, 
                                    this.#lista[this.#aktIndex].src, 
                                    this.#lista[this.#aktIndex].leiras, 
                                    this.szuloElem
                                );
    });

}
