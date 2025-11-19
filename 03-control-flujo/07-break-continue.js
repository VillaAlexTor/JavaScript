let i = 0;
while (i <6){
    i++;
    if (i === 3){
        console.log("Se saltó el 3 continue");
        continue;
    }
    if (i === 5){
        console.log("Se detuvo en el 5 break");
        break;
    }
    console.log(i);
}