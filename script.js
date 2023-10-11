async function getPrice() {
    const API_BASE_URL = "https://be-balikpapan-19-production.up.railway.app";
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const weight = document.getElementById('weight').value;
    try {
        const response = await fetch(`${API_BASE_URL}/price?origin=${origin}&destination=${destination}&weight=${weight}`);
        const price = await response.json();
        const priceContainer = document.getElementById('ongkirResult');
        priceContainer.innerHTML = `Harganya Rp. ${price.data.price * weight}`;
    } catch (error) {
        console.error('Error fetching book:', error);
        const priceContainer = document.getElementById('ongkirResult');
        priceContainer.innerHTML = `Harga Tidak Diketahui`;
    }
}

