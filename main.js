
let voto = 28;

if(voto >= 0 && voto < 18){

    console.log(`Il voto ${voto} è insufficiente`);
}else{

    if(voto >= 18 && voto < 21){

        console.log(`Il voto ${voto} è sufficiente`);
    }else{

        if(voto >= 21 && voto < 24){

            console.log(`Il voto ${voto} è buono`);   
        }else{

            if(voto >= 24 && voto < 27){

                console.log(`Il voto ${voto} è distinto`);
            }else{

                if(voto >= 27 && voto <= 29){

                    console.log(`Il voto ${voto} è ottimo`);
                }else{

                    if(voto == 30){

                    console.log(`Il voto ${voto} è eccellente`);    
                    }else{

                        console.log(`Il voto ${voto} non è valido`); 
                    }
                }
            }
        }
    }
}