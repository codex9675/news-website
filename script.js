const cardContainer = document.querySelector(".card-container");
const search = document.querySelector("#search");
const btn = document.querySelector("#btn");

const key = "pub_14747d4052854127b19968b5ec1f7edb";

const api = async (searchNow) => {
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${key}&q=${searchNow}`
  );
  const data = await res.json();
  console.log(data);
  const cardsHTML = data.results.map((item) => {
      return `
      <div class="card">
        <img src="${item.image_url}" id="img" alt="" />
        <h3>${item.title}</h3>
        <p>
          The global market for Pizza Steel was estimated to be worth US$ 691
          million in 2024 and is forecast to a readjusted size of US$ 1020
          million by 2031 with a CAGR of 5.8% during the forecast period
          2025-2031.QYResearch (Global)
        </p>
      </div>`;
    }).join('');
  cardContainer.innerHTML = cardsHTML;
};

btn.addEventListener("click", () => {
  api(search.value);
});
api("pizza");