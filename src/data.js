export const sliderItems = [
  {
    id: "slide1",
    img: "https://res.cloudinary.com/dznblgcdr/image/upload/v1753718344/b2_pvrui2.jpg",
    title: "冬季新品上市",
    desc: "精選優質面料，打造舒適保暖的冬季時尚",
    bg: "f5fafd"
  },
  {
    id: "slide2",
    img: "https://res.cloudinary.com/dznblgcdr/image/upload/v1753718345/cg1_qomlnw.jpg",
    title: "春季限定系列",
    desc: "清新優雅的設計，展現春季浪漫風情",
    bg: "fcf1ed"
  },
  {
    id: "slide3",
    img: "https://res.cloudinary.com/dznblgcdr/image/upload/v1753718344/cg4_bfiryw.jpg",
    title: "經典百搭單品",
    desc: "永不過時的設計，打造您的專屬風格",
    bg: "fbf0f4"
  }
];

export const products = [
  // Tops
  {
    id: 'redVelvetCoat',
    titleKey: 'products.redVelvetCoat.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/w1_hdmtsi.png',
    price: 1280,
    category: 'tops',
    gender: 'women',
    colors: ['red', 'black'],
    sizes: ['S', 'M', 'L'], // 外套通常只有這三種
    createdAt: 1730000000000
  },
  {
    id: 'greyWoolCoat',
    titleKey: 'products.greyWoolCoat.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517355/w2_kpvtyh.png',
    price: 1580,
    category: 'tops',
    gender: 'men',
    colors: ['grey', 'black'],
    sizes: ['M', 'L', 'XL'], // 羊毛大衣通常偏大尺寸
    createdAt: 1730500000000
  },
  {
    id: 'khakiCoat',
    titleKey: 'products.khakiCoat.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w3_ayfitr.png',
    price: 1480,
    category: 'tops',
    gender: 'women',
    colors: ['khaki'],
    sizes: ['S', 'M', 'L', 'XL'], // 卡其風衣四種尺寸都有
    createdAt: 1730600000000
  },
  {
    id: 'vintageCoat',
    titleKey: 'products.vintageCoat.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w4_ygtcwb.png',
    price: 1380,
    category: 'tops',
    gender: 'men',
    colors: ['brown'],
    sizes: ['S', 'M', 'L'], // 復古外套三種尺寸
    createdAt: 1730700000000
  },
  {
    id: 'blackLongSleeveTee',
    titleKey: 'products.blackLongSleeveTee.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w5_gu4uaq.png',
    price: 580,
    category: 'tops',
    gender: 'men',
    colors: ['black'],
    sizes: ['S', 'M', 'L', 'XL'], // 基本款T恤四種尺寸都有
    createdAt: 1730800000000
  },
  {
    id: 'blackGraphicTee',
    titleKey: 'products.blackGraphicTee.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517351/s1_bnhsih.png',
    price: 480,
    category: 'tops',
    gender: 'men',
    colors: ['black'],
    sizes: ['M', 'L', 'XL'], // 圖案T恤偏大尺寸
    createdAt: 1730900000000
  },
  {
    id: 'whiteShortSleeveTee',
    titleKey: 'products.whiteShortSleeveTee.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s2_ggvqtw.png',
    price: 450,
    category: 'tops',
    gender: 'men',
    colors: ['white'],
    sizes: ['S', 'M', 'L', 'XL'], // 白T恤四種尺寸都有
    createdAt: 1730950000000
  },
  {
    id: 'floralMidiDress',
    titleKey: 'products.floralMidiDress.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s3_crvqgz.png',
    price: 980,
    category: 'tops',
    gender: 'women',
    colors: ['floral', 'beige'],
    sizes: ['S', 'M', 'L'], // 洋裝通常三種尺寸
    createdAt: 1731000000000
  },

  // Bottoms
  {
    id: 'blueWideLegShorts',
    titleKey: 'products.blueWideLegShorts.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s4_hyehnc.png',
    price: 680,
    category: 'bottoms',
    gender: 'women',
    colors: ['blue'],
    sizes: ['S', 'M', 'L'], // 短褲三種尺寸
    createdAt: 1731100000000
  },
  {
    id: 'lightWashDenimShorts',
    titleKey: 'products.lightWashDenimShorts.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s5_fbaull.png',
    price: 780,
    category: 'bottoms',
    gender: 'women',
    colors: ['lightBlue'],
    sizes: ['M', 'L'], // 牛仔短褲只有兩種尺寸
    createdAt: 1731200000000
  },

  // Accessories
  {
    id: 'whiteCasualShoes',
    titleKey: 'products.whiteCasualShoes.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594474/a1_quea5c.png',
    price: 1280,
    category: 'accessories',
    gender: 'unisex',
    colors: ['white'],
    sizes: ['40', '41', '42'],
    createdAt: 1731300000000
  },
  {
    id: 'orangeWhiteSneakers',
    titleKey: 'products.orangeWhiteSneakers.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a2_rgbsn4.png',
    price: 1480,
    category: 'accessories',
    gender: 'unisex',
    colors: ['orange', 'white'],
    sizes: ['40', '41', '42'],
    createdAt: 1731400000000
  },
  {
    id: 'wovenLeatherToteBag',
    titleKey: 'products.wovenLeatherToteBag.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a3_kiitdk.png',
    price: 2280,
    category: 'accessories',
    gender: 'women',
    colors: ['brown'],
    sizes: ['One Size'],
    createdAt: 1731500000000
  },
  {
    id: 'plaidCrossbodyBag',
    titleKey: 'products.plaidCrossbodyBag.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a4_e2zzry.png',
    price: 1680,
    category: 'accessories',
    gender: 'women',
    colors: ['plaid'],
    sizes: ['One Size'],
    createdAt: 1731600000000
  },
  {
    id: 'whiteSmartwatch',
    titleKey: 'products.whiteSmartwatch.title',
    image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a5_n0odwz.png',
    price: 3280,
    category: 'accessories',
    gender: 'unisex',
    colors: ['white'],
    sizes: ['One Size'],
    createdAt: 1731700000000
  }
]; 