let gol1=document.getElementById("gol1");
let gol2=document.getElementById("gol2");
let gol=0;
let skor=0;
//! takım1 gol arttır
let plus1=document.getElementById("arttir1");
plus1.addEventListener("click",()=>{ 
    gol++;
    gol1.innerText=gol;
})

//! takım1 gol azalt

let negative=document.getElementById("azalt1");
negative.addEventListener("click",()=>{ 
    
    // gol1.innerText=gol;
    if(gol>0){
        gol--;
        gol1.innerText=gol;
    }
    else{gol1.innerHTML=0}
})

//! takım2 gol arttır
let plus2=document.getElementById("arttir2");
plus2.addEventListener("click",()=>{
    skor++;
    gol2.innerText=skor
})

//! takım2 gol azalt
let negative2=document.getElementById("azalt2").addEventListener("click",()=>{
    if(skor>0){
        skor--
        gol2.innerText=skor
    }
    else{gol2.innerHTML=0}
})

let changeGoal=document.getElementById("skorGir").addEventListener("click",()=>{
    let sayi1=prompt("1. Takımın golünü giriniz")
    gol1.innerText=sayi1;
    let sayi2=prompt("2. Takımın golünü giriniz")
    gol2.innerText=sayi2;
    plus1.disabled=true;
    plus2.disabled=true;
    negative.disabled=true;
    let deneme=document.getElementById("azalt2").disabled=true;
    // negative2.disabled=true;

    if(sayi2>sayi1){
        alert("Maç bitti kazanan 2. takım");
    }
    else if(sayi1>sayi2){
        alert("Maç bitti kazanan 1. takım");
    }
    else{
        alert("Berabere");
    }



})

