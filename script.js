function doCheckCost(){
    const requestOngkir = new Request("https://eok8jd671o4psp5.m.pipedream.net",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        origin : document.getElementById("origin").value,
        destination : document.getElementById("destination").value,
        weight : document.getElementById("weight").value
    })
});

    const responseOngkir = fetch(requestOngkir);

    responseOngkir
    .then((reponse)=>reponse.json())
    .then(function(json){
        document.getElementById("ongkirResult").textContent = json.responseSucsess;
        console.log(json);
    })
    .catch(function(error){
        document.getElementById("ongkirResult").textContent = error;
    })
}

document.getElementById("checkCost").onclick = doCheckCost;