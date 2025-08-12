export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Kırmızı tişört",
        price: 99.99,
        description: "Dünyanın en rahat kırmızı tişörtü. süper hafif kumaşı ile yaz aylarında serin tutar.mükemmel bir yaz ürünü. inanılmaz hafif ve nefes alabilir kumaşı ile yaz aylarında serin tutar.",
        category: "giyim",
        image: "./kırmızıTişört.jpeg",
        rating: 3.5
    },
    {
        id: 2,
        name: "Mavi kot pantolon",
        price: 299.99,
        description: "Şık ve rahat mavi kot pantolon.",
        category: "giyim",
        image: "./maviPantolon.jpeg",
        rating: 4.7
    },
    {
        id: 3,
        name: "Siyah spor ayakkabı",
        price: 399.99,
        description: "Yüksek konforlu siyah spor ayakkabı.",
        category: "ayakkabı",
        image: "./siyahAyakkabı.jpeg",
        rating: 4.3
    },
    {   id: 4,
        name: "Gümüş saat",
        price: 799.99,
        description: "Zarif gümüş saat, her tarza uyum sağlar.",
        category: "aksesuar",
        image: "./gumusSaat.jpeg",
        rating: 4.6
    },
    {   id: 5,
        name: "Yeşil sweatshirt",
        price: 179.99,
        description: "Rahat ve şık yeşil sweatshirt.",
        category: "giyim",
        image: "./yeşilSweatshirt.jpeg",
        rating: 3.8
    },
    {   id: 6,
        name: "Siyah deri ceket",
        price: 499.99,
        description: "Klasik siyah deri ceket, her mevsim için mükemmel.",
        category: "giyim",
        image: "./siyahCeket.jpeg",
        rating: 4.8
    },
    {   id: 7,
        name: "samsung Galaxy S21",
        price: 9999.99,
        description: "Yüksek performanslı Samsung Galaxy S21 akıllı telefon.",
        category: "elektronik",
        image: "./samsungS21.jpeg",
        rating: 4.1
    },
    {
    id: 8,
    name: "Deri Cüzdan",
    price: 349.99,
    description: "Hakiki deriden üretilmiş, ince tasarımlı cüzdan.",
    category: "aksesuar",
    image: "./deriCuzdan.jpeg",
    rating: 4.4
    },
    {
    id: 9,
    name: "Osimhen Maskesi",
    price: 99999.99,
    description: "Dünyaca ünlü yıldız GALATASARAY oyuncusu Victor Osimhen'in maskesi.",
    category: "aksesuar",
    image: "./osimhenMask.jpg",
    rating: 5
    },
    {
    id: 10,
    name: "Apple MacBook Air M2",
    price: 32999.99,
    description: "Hafif, güçlü ve uzun pil ömürlü dizüstü bilgisayar.",
    category: "elektronik",
    image: "./macbookAir.jpeg",
    rating: 4.8
  },
  {
    id: 11,
    name: "Bluetooth Kulaklık",
    price: 1499.99,
    description: "Kablosuz, yüksek ses kalitesine sahip kulaklık.",
    category: "elektronik",
    image: "./bluetoothKulaklik.jpeg",
    rating: 4.5
  },
  {
    id: 12,
    name: "Kadın Elbise",
    price: 699.99,
    description: "Yazlık, hafif kumaştan şık kadın elbise.",
    category: "giyim",
    image: "./kadinElbise.jpeg",
    rating: 4.3
  },
  {
    id: 13,
    name: "Erkek Gömlek",
    price: 899.99,
    description: "Pamuklu, klasik kesim erkek gömlek.",
    category: "giyim",
    image: "./erkekGomlek.jpg",
    rating: 5
  },
  {
    id: 14,
    name: "Kadın Tişört",
    price: 249.99,
    description: "Pamuklu, nefes alabilir kısa kollu kadın tişört.",
    category: "giyim",
    image: "./kadinTisort.jpeg",
    rating: 4.2
  }
]