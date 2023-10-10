function hitungTarif()
{
    const origin = +document.getElementById("origin").value;
    const destination = +document.getElementById("destination").value;
    const weight = +document.getElementById("weight").value;    
    
    let tarif = 0;
    if(Math.abs(destination - origin) === 0){
        tarif = 16000 * weight;
    }
    else{
        tarif = Math.abs(destination - origin) * 3000 + 6000 + 16000 * weight;
    } 
    document.getElementById("ongkirResult").innerHTML = `Tarif: Rp. ${tarif}`;
}

document.getElementById("checkCost").onclick = hitungTarif;