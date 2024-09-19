function mostrarTabuada(n){
    console.log(`Tabuada do ${n}:`);
    let contador = 0;
    while(contador <=10){
        console.log(`${n} x ${contador} = ${n*contador}`);
        contador ++;
    };
    console.log("\n");
};

function mostrarTabuada2(n){
    console.log(`Tabuada do ${n}:`);
    for(let contador = 0 ; contador <= 10 ; contador ++){
        console.log(`${n} x ${contador} = ${n*contador}`);
    };
    console.log("\n");
}

mostrarTabuada(5);
mostrarTabuada2(3);