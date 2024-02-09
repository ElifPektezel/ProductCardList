function createProductCard(product) {
  const discountAmount = (product.price * product.discount) / 100;
  const discountedPrice = product.price - discountAmount;

  // images özelliğini kontrol et
  const carouselItems =
    product.images && product.images.length > 0
      ? product.images
          .map(
            (image, index) => `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${image}" class="d-block w-100" alt="...">
      </div>`
          )
          .join("")
      : "";

  const card = `
  <div class="col-md-3 mb-4">

    <div class="card product-card">
      <div class="favourite"><i class="fa-regular fa-heart"></i> </div>
      <div id="carousel-${
        product.id
      }" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          ${carouselItems}
        </div>
        <a class="carousel-control-prev" href="#carousel-${
          product.id
        }" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-${
          product.id
        }" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        <div class="card-body product-info">
          <p class="product-label">${product.label}</p>
          <p class="card-text product-description">
            <span style="color:#484848">${product.name}</span>
            ${product.info}</p>
          <p class="card-text product-price"><span class="discount">${discountedPrice.toFixed(
            2
          )} TL</span> <span class="discount-rate">(-${
    product.discount
  }%)</span> <br><del>${product.price.toFixed(2)} TL</del></p>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <button class="btn btn-primary btn-details">Detaylar</button>
        </div>
      </div>
    </div>
  </div>
`;

  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const productRow = document.getElementById("product-row");
  products.forEach(function (product) {
      const cardHtml = createProductCard(product);
      productRow.insertAdjacentHTML("beforeend", cardHtml);
  });

  // Ürün kartlarının üzerine gelindiğinde;
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach(function (card) {
      card.addEventListener("mouseenter", function () {
          const detailsBtn = this.querySelector(".btn-details");
          detailsBtn.style.opacity = "1";
          const facIcn = this.querySelector(".favourite");
          facIcn.style.opacity = "1";
      });

      card.addEventListener("mouseleave", function () {
          const detailsBtn = this.querySelector(".btn-details");
          detailsBtn.style.opacity = "0";
          const facIcn = this.querySelector(".favourite");
          facIcn.style.opacity = "0";
      });
  });
});
