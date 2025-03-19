import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import { OBJALISTA } from "./tomb.js";
import Nagykep from "./Nagykep.js";

let szuloElem = document.getElementsByClassName("galeria")[0]
let nkep = document.getElementsByClassName("kiemelt")[0]

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

//const n1 = new Kep(obj[0].cim, obj[0].src,obj[0].leiras, nkep)
const NAGYKEP = new Nagykep(
                            OBJALISTA[0].cim, 
                            OBJALISTA[0].src, 
                            OBJALISTA[0].leiras, 
                            nkep);
const KEPEK = new Kepek(OBJALISTA, szuloElem);

let aktIndex = 0

const jobbGombElem=document.getElementsByClassName("jobb")[0]
jobbGombElem.addEventListener("click", function() {
    aktIndex++;
    const NAGYKEP = new Nagykep(OBJALISTA[aktIndex].cim, 
                                OBJALISTA[aktIndex].src, 
                                OBJALISTA[aktIndex].leiras, 
                                nkep);
});
