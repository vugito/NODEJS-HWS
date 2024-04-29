const express = require("express");
const cors = require("cors");

const app = express();
const HOST = 7000;

const data = [
  {
    id: 1,
    name: "Уютная квартира у моря",
    city: "Baku",
    price: 120000,
    currency: "AZN",
    rooms: 2,
    floorCount: 9,
    floor: 4,
  },
  {
    id: 2,
    name: "Просторная квартира в центре",
    city: "Gence",
    price: 85000,
    currency: "USD",
    rooms: 3,
    floorCount: 5,
    floor: 3,
  },
  {
    id: 3,
    name: "Современная студия в центре города",
    city: "Sumgait",
    price: 60000,
    currency: "AZN",
    rooms: 1,
    floorCount: 12,
    floor: 8,
  },
  {
    id: 4,
    name: "Трехкомнатная квартира с видом на парк",
    city: "Baku",
    price: 210000,
    currency: "USD",
    rooms: 3,
    floorCount: 15,
    floor: 12,
  },
  {
    id: 5,
    name: "Уютная однокомнатная квартира в историческом районе",
    city: "Gence",
    price: 55000,
    currency: "AZN",
    rooms: 1,
    floorCount: 6,
    floor: 2,
  },
  {
    id: 6,
    name: "Светлая двушка в новостройке",
    city: "Sumgait",
    price: 95000,
    currency: "USD",
    rooms: 2,
    floorCount: 10,
    floor: 5,
  },
  {
    id: 7,
    name: "Квартира с видом на море",
    city: "Baku",
    price: 180000,
    currency: "AZN",
    rooms: 3,
    floorCount: 20,
    floor: 15,
  },
  {
    id: 8,
    name: "Студия с балконом",
    city: "Gence",
    price: 75000,
    currency: "USD",
    rooms: 1,
    floorCount: 8,
    floor: 4,
  },
  {
    id: 9,
    name: "Светлая квартира в центре",
    city: "Sumgait",
    price: 72000,
    currency: "AZN",
    rooms: 2,
    floorCount: 14,
    floor: 7,
  },
  {
    id: 10,
    name: "Комфортабельная трешка рядом с парком",
    city: "Baku",
    price: 240000,
    currency: "USD",
    rooms: 3,
    floorCount: 18,
    floor: 14,
  },
  {
    id: 11,
    name: "Уютная квартира в тихом районе",
    city: "Gence",
    price: 60000,
    currency: "AZN",
    rooms: 2,
    floorCount: 7,
    floor: 3,
  },
  {
    id: 12,
    name: "Студия с видом на город",
    city: "Sumgait",
    price: 68000,
    currency: "USD",
    rooms: 1,
    floorCount: 9,
    floor: 6,
  },
  {
    id: 13,
    name: "Квартира в центре с собственной парковкой",
    city: "Baku",
    price: 280000,
    currency: "AZN",
    rooms: 4,
    floorCount: 22,
    floor: 18,
  },
  {
    id: 14,
    name: "Современная квартира в жилом комплексе",
    city: "Gence",
    price: 90000,
    currency: "USD",
    rooms: 2,
    floorCount: 12,
    floor: 9,
  },
  {
    id: 15,
    name: "Уютная квартира с отличной транспортной доступностью",
    city: "Sumgait",
    price: 55000,
    currency: "AZN",
    rooms: 1,
    floorCount: 5,
    floor: 3,
  },
  {
    id: 16,
    name: "Трехкомнатная квартира с балконом",
    city: "Baku",
    price: 195000,
    currency: "USD",
    rooms: 3,
    floorCount: 17,
    floor: 13,
  },
  {
    id: 17,
    name: "Студия в новом доме",
    city: "Gence",
    price: 62000,
    currency: "AZN",
    rooms: 1,
    floorCount: 6,
    floor: 4,
  },
  {
    id: 18,
    name: "Светлая квартира с видом на парк",
    city: "Sumgait",
    price: 78000,
    currency: "USD",
    rooms: 2,
    floorCount: 11,
    floor: 8,
  },
  {
    id: 19,
    name: "Просторная квартира с отличной планировкой",
    city: "Baku",
    price: 220000,
    currency: "AZN",
    rooms: 4,
    floorCount: 19,
    floor: 16,
  },
  {
    id: 20,
    name: "Компактная квартира для молодой семьи",
    city: "Gence",
    price: 50000,
    currency: "USD",
    rooms: 1,
    floorCount: 4,
    floor: 2,
  },
];

app.use(cors());

app.get("/items", (req, res) => {
  let query = req.query;

  console.log(query.filter);

  if (query && query.filter !== "all") {
    let newArr = data.filter(
      (item) => item.city.toLowerCase() === query.filter
    );
    console.log(newArr);
    res.json(newArr);
  } else {
    res.json(data);
  }
});

app.listen(HOST, () => {
  console.log("Port " + HOST + " listens. ");
});
