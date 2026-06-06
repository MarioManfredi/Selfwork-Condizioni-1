
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


// Utilizzo switch
let v = 23;

switch(true){

    case v >= 0 && v < 18:
        console.log(`Il voto ${v} è insufficiente`);
        break;

    case v >= 18 && v < 21:
        console.log(`Il voto ${v} è sufficiente`);
        break;    

    case v >= 21 && v < 24:
        console.log(`Il voto ${v} è buono`);
        break; 
    
    case v >= 24 && v < 27:
        console.log(`Il voto ${v} è distinto`);
        break;

    case v >= 27 && v <= 29:
        console.log(`Il voto ${v} è ottimo`);
        break;

    case v == 30:
        console.log(`Il voto ${v} è eccellente`);
        break;

    default:
        console.log(`Il voto ${v} non è valido`);
        break;
}