const products = [
  {
    name: "Ürün Adı",
    id: 1,
    price: 3899.99,
    discount: 10,
    label: "%1,19 Oranlı Kredi",
    images:["https://productimages.hepsiburada.net/s/476/550/110000518914645.jpg","https://productimages.hepsiburada.net/s/295/550/110000285332617.jpg"],
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Ürün Adı",
    id: 2,
    price: 3149.99,
    discount: 20,
    images:["https://productimages.hepsiburada.net/s/537/550/110000595932232.jpg","https://productimages.hepsiburada.net/s/374/550/110000391928113.jpg"],
    label: "%1,79 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    name: "Ürün Adı",
    price: 7439.99,
    discount: 15,
    images:[ "https://productimages.hepsiburada.net/s/198/550/110000168630735.jpg","https://productimages.hepsiburada.net/s/381/550/110000400001387.jpg"],
    label: "%1,59 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    name: "Ürün Adı",
    price: 4399.99,
    discount: 10,
    images:["https://productimages.hepsiburada.net/s/381/550/110000400018653.jpg","https://productimages.hepsiburada.net/s/381/550/110000400001387.jpg"],
    label: "%1,79 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 5,
    name: "Ürün Adı",
    price: 4149.99,
    discount: 20,
    images:["https://productimages.hepsiburada.net/s/374/550/110000391927456.jpg","https://productimages.hepsiburada.net/s/198/550/110000168805965.jpg"],
    label: "%1,89 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 6,
    name: "Ürün Adı",
    price: 5579.99,
    discount: 15,
    images:["https://productimages.hepsiburada.net/s/295/550/110000285274989.jpg","https://productimages.hepsiburada.net/s/544/550/110000604065356.jpg"],
    label: "%1,19 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 7,
    name: "Ürün Adı",
    price: 5699.99,
    discount: 10,
    label: "%1,99 Oranlı Kredi",
    images:["https://productimages.hepsiburada.net/s/476/550/110000518914645.jpg","https://productimages.hepsiburada.net/s/295/550/110000285332617.jpg"],
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 8,
    name: "Ürün Adı",
    price: 5649.99,
    discount: 20,
    images:["https://productimages.hepsiburada.net/s/537/550/110000595932232.jpg","https://productimages.hepsiburada.net/s/374/550/110000391928113.jpg"],
    label: "%1,99 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 9,
    name: "Ürün Adı",
    price: 7679.99,
    discount: 15,
    images:[ "https://productimages.hepsiburada.net/s/198/550/110000168630735.jpg","https://productimages.hepsiburada.net/s/381/550/110000400001387.jpg"],
    label: "%1,99 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 10,
    name: "Ürün Adı",
    price: 4599.99,
    discount: 10,
    images:["https://productimages.hepsiburada.net/s/381/550/110000400018653.jpg","https://productimages.hepsiburada.net/s/381/550/110000400001387.jpg"],
    label: "%1,99 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 11,
    name: "Ürün Adı",
    price: 5449.99,
    discount: 20,
    images:["https://productimages.hepsiburada.net/s/374/550/110000391927456.jpg","https://productimages.hepsiburada.net/s/198/550/110000168805965.jpg"],
    label: "%1,99 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 12,
    name: "Ürün Adı",
    price: 4579.99,
    discount: 15,
    images:["https://productimages.hepsiburada.net/s/295/550/110000285274989.jpg","https://productimages.hepsiburada.net/s/544/550/110000604065356.jpg"],
    label: "%1,99 Oranlı Kredi",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];
 // URL'den ürün ID'sini al
 const urlParams = new URLSearchParams(window.location.search);
 const productId = urlParams.get('id');

 // productId'ye sahip ürünü bul
 const product = products.find(p => p.id === parseInt(productId));

 // Ürün bilgilerini göster
 if (product) {
     document.getElementById('product-name').innerText = product.name;
     document.getElementById('product-label').innerText = product.label;
     document.getElementById('product-description').innerText = product.info;
     document.getElementById('product-price').innerText = `${product.price.toFixed(2)} TL`;

     document.getElementById('product-image').src = product.images[0];
 } else {
     document.getElementById('product-details').innerHTML = '<p>Ürün bulunamadı.</p>';
 }

