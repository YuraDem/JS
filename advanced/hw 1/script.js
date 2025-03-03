const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const body = document.body;

const createPhoneCard = (arr) => {
  const container = document.createElement("div");

  const phoneCardMap = arr.forEach((item) => {
    const phoneCardContainer = document.createElement("div");
    const mainTitle = document.createElement("h3");
    mainTitle.innerText = item.name;
    // console.log(mainTitle)
    const subtitle = document.createElement("h4");
    subtitle.innerText = item.brand;
    // console.log(subtitle)
    const list = document.createElement("ul");
    const price = document.createElement("p");
    price.innerText = item.price;

    item.properties.forEach((elem) => {
      const listItem = document.createElement("li");
      listItem.innerText = elem;
      list.append(listItem);
    });

    phoneCardContainer.append(mainTitle, subtitle, list, price);
    container.append(phoneCardContainer);
  });

  return container;
};

const phoneCardResult = createPhoneCard(products);
body.append(phoneCardResult);

const createPhoneCardInnerHTML = (arr) => {
  const container = document.createElement("div");

  const phoneCardMap = arr
    .map((item) => {
      console.log(item);
      const innerHTMLCard = `
      <div>
        <h3>${item.name}</h3>
        <h4>${item.brand}</h4>
        <ul>
            ${item.properties.map((elem) => `<li>${elem}</li>`).join("")}
        </ul>
        <p>${item.price}</p>
      </div>
      `;

      return innerHTMLCard;
    })
    .join("");

  container.innerHTML = phoneCardMap;

  return container;
};

const innerHTMLResult = createPhoneCardInnerHTML(products);
body.append(innerHTMLResult);

const test = [
  { name: "Yura", surname: "Demianchuk" },
  { name: "Jura", surname: "Jemianchuk" },
];

const testHTML = test
  .map((item) => {
    const infoCard = `
    <div>
        <p>${item.name}</p>
        <p>${item.surname}</p>
    </div>
    `;

    return infoCard;
  })
  .join("");

  body.innerHTML = testHTML
