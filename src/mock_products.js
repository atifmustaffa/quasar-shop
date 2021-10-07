const products = [
  {
    id: 1001,
    brand: "Amazon Essentials",
    name: "Women's Pointed-Toe Ballet Flat",
    images: [
      "https://m.media-amazon.com/images/I/61WizR5wiLL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/61fgAcn-L4L._AC_UL320_.jpg"
    ],
    price: 30.93,
    stock: 30
  },
  {
    id: 1002,
    brand: "Clarks",
    name: "Women's May Marigold Slip-On Loafer",
    images: [
      "https://m.media-amazon.com/images/I/61fgAcn-L4L._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/61WizR5wiLL._AC_UL320_.jpg"
    ],
    price: 91.12,
    stock: 91
  },
  {
    id: 1003,
    brand: "Adidas",
    name: "Men's Lite Racer Adapt 3.0 Running Shoe",
    images: [
      "https://m.media-amazon.com/images/I/71StEHAlKIL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71StEHAlKIL._AC_UL320_.jpg"
    ],
    price: 56.59,
    stock: 56
  },
  {
    id: 1004,
    brand: "Skechers",
    name: "Women's Plush-Peace and Love Flat",
    images: [
      "https://m.media-amazon.com/images/I/61mx85-BOjL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/61mx85-BOjL._AC_UL320_.jpg"
    ],
    price: 47.66,
    stock: 4
  },
  {
    id: 1005,
    brand: "Under Armour",
    name: "Men's Charged Assert 8 Running Shoe",
    images: [
      "https://m.media-amazon.com/images/I/81HU41AhyFS._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81HU41AhyFS._AC_UL320_.jpg"
    ],
    price: 32.23,
    stock: 32
  },
  {
    id: 1006,
    brand: "Adidas",
    name: "Women's Cloudfoam Pure 2.0 Running Shoe",
    images: [
      "https://m.media-amazon.com/images/I/71OSVxOrixL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71OSVxOrixL._AC_UL320_.jpg"
    ],
    price: 83.22,
    stock: 83
  },
  {
    id: 1007,
    brand: "ASICS",
    name: "Men's Gel-Venture 7",
    images: [
      "https://m.media-amazon.com/images/I/71LTkg0+CxL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71LTkg0+CxL._AC_UL320_.jpg"
    ],
    price: 49.75,
    stock: 49
  },
  {
    id: 1008,
    brand: "Rockport",
    name: "Men's Eureka Walking Shoe",
    images: [
      "https://m.media-amazon.com/images/I/61rtuwpKtoL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/61rtuwpKtoL._AC_UL320_.jpg"
    ],
    price: 46.83,
    stock: 46
  },
  {
    id: 1009,
    brand: "Under Armour",
    name: "Men's Charged Commit Tr 3 Cross Trainer",
    images: [
      "https://m.media-amazon.com/images/I/71aKh2DeaHL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71aKh2DeaHL._AC_UL320_.jpg"
    ],
    price: 66.02,
    stock: 66
  },
  {
    id: 1010,
    brand: "Nike",
    name: "Women's Plain Training Shoes",
    images: [
      "https://m.media-amazon.com/images/I/71BBDcvgL1L._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71BBDcvgL1L._AC_UL320_.jpg"
    ],
    price: 62.43,
    stock: 62
  },
  {
    id: 1011,
    brand: "Adidas",
    name: "Men's Tech Response Golf Shoes",
    images: [
      "https://m.media-amazon.com/images/I/81XU2Iy9ZFL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81XU2Iy9ZFL._AC_UL320_.jpg"
    ],
    price: 95.78,
    stock: 95
  },
  {
    id: 1012,
    brand: "Clarks",
    name: "Men's Tilden Cap Oxford Shoe",
    images: [
      "https://m.media-amazon.com/images/I/81u0hQpR04L._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81u0hQpR04L._AC_UL320_.jpg"
    ],
    price: 27.52,
    stock: 7
  },
  {
    id: 1013,
    brand: "Fila",
    name: "Men's Memory Workshift Slip Resistant Work Shoe",
    images: [
      "https://m.media-amazon.com/images/I/81Bz-5vMe2L._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81Bz-5vMe2L._AC_UL320_.jpg"
    ],
    price: 70.63,
    stock: 70
  },
  {
    id: 1014,
    brand: "Amazon Essentials",
    name: "Men's Canvas Slip-on Loafer",
    images: [
      "https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg"
    ],
    price: 36.28,
    stock: 36
  },
  {
    id: 1015,
    brand: "Clarks",
    name: "Women's Juliet Palm Loafer",
    images: [
      "https://m.media-amazon.com/images/I/71AtsP98pFL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71AtsP98pFL._AC_UL320_.jpg"
    ],
    price: 78.22,
    stock: 78
  },
  {
    id: 1016,
    brand: "Adidas",
    name: "Men's Lite Racer Adapt 4.0 Running Shoes",
    images: [
      "https://m.media-amazon.com/images/I/71VLgmQ8epL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/71VLgmQ8epL._AC_UL320_.jpg"
    ],
    price: 25.41,
    stock: 2
  }
];

export default products;
