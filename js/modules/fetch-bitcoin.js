export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = fetch(url);
      const bitcoinJSON = await (await bitcoinResponse).json();
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / bitcoinJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
