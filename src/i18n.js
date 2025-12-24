import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      search: '搜尋商品',
      register: '註冊',
      login: '登入',
      cart: {
        empty: '購物車是空的',
        items: '件商品',
        subtotal: '商品小計',
        shipping: '運費',
        total: '總計',
        removeItem: '移除商品',
        updateQuantity: '更新數量',
        checkout: '結帳',
        continueShopping: '繼續購物',
        itemRemoved: '商品已從購物車中移除',
        quantityUpdated: '商品數量已更新',
        addToCartSuccess: '商品已加入購物車',
        addToCartError: '加入購物車失敗，請稍後再試',
        invalidQuantity: '請輸入有效的數量',
        outOfStock: '商品庫存不足',
        loading: '正在載入購物車...',
        error: '載入購物車時發生錯誤',
        deletedItems: '最近刪除的商品',
        restore: '復原',
        clearHistory: '清除歷史記錄',
        itemRestored: '商品已復原到購物車',
        sizeUpdated: '尺寸已更新'
      },
      itemsInCart: '件商品',
      loadingCart: '正在載入購物車...',
      loadingLogin: '正在載入登入頁面...',
      loadingRegister: '正在載入註冊頁面...',
      searchPlaceholder: '請輸入搜尋關鍵字',
      searchResult: '搜尋：',
      storeName: '雜貨の店',
      home: '首頁',
      products: '商品列表',
      about: '關於我們',
      contact: '聯絡我們',
      welcome: '歡迎光臨',
      addToCart: '加入購物車',
      checkout: '結帳',
      price: '價格',
      size: '尺寸',
      color: '顏色',
      quantity: '數量',
      selectSize: '選擇尺寸',
      description: '商品描述',
      relatedProducts: '相關商品',
      switchLanguage: '切換語言',
      announcement: '🎉 新春特惠：全館商品85折 | 消費滿$1000即可享免運 | 會員獨享：首購享95折',
      categories: {
        all: '全部商品',
        clothing: '服飾',
        accessories: '配件',
        home: '居家用品',
        stationery: '文具',
        gifts: '禮品',
        men: '男士專區',
        women: '女士專區',
        tops: '上身衣著',
        bottoms: '經典下著',
        outerwear: '質感大衣'
      },
      sort: {
        newest: '最新商品',
        priceAsc: '價格由低到高',
        priceDesc: '價格由高到低',
        popular: '熱門商品'
      },
      sortLabel: '排序功能:',
      slider: {
        slide1: {
          title: '冬季新品上市',
          desc: '精選優質面料，打造舒適保暖的冬季時尚'
        },
        slide2: {
          title: '春季限定系列',
          desc: '清新優雅的設計，展現春季浪漫風情'
        },
        slide3: {
          title: '經典百搭單品',
          desc: '永不過時的設計，打造您的專屬風格'
        }
      },
      shopNow: '即刻下單',
      products: {
        redVelvetCoat: {
          title: '紅絲絨大衣',
          desc: '奢華絲絨面料，柔軟舒適，鮮豔紅色展現獨特魅力，適合秋冬時尚穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/w1_hdmtsi.png'
        },
        greyWoolCoat: {
          title: '羊毛灰色大衣',
          desc: '高級羊毛混紡材質，保暖舒適，灰色設計展現低調奢華感，適合正式與休閒場合。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517355/w2_kpvtyh.png'
        },
        vintageCoat: {
          title: '復古雙排扣風衣',
          desc: '經典復古風設計，雙排扣與腰帶細節展現優雅品味，適合秋冬穿搭，打造時尚層次感。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w4_ygtcwb.png'
        },
        khakiCoat: {
          title: '經典卡其風衣',
          desc: '簡約時尚的雙排扣風衣，經典卡其色設計，搭配腰帶塑造完美身形，適合通勤與日常穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w3_ayfitr.png'
        },
        blackLongSleeveTee: {
          title: '黑色長袖T恤',
          desc: '簡約純黑設計，舒適棉質面料，胸前白色「705 CALIFORNIA」字樣，展現率性街頭風格。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w5_gu4uaq.png'
        },
        whiteShortSleeveTee: {
          title: '白色短袖T恤',
          desc: '經典純白素T，百搭基本款，舒適棉質面料，適合各種日常穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s2_ggvqtw.png'
        },
        whiteCasualShoes: {
          title: '白色休閒鞋',
          desc: '簡約白色皮革休閒鞋，黑色後跟點綴，俐落線條，輕鬆搭配各種造型。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594474/a1_quea5c.png'
        },
        orangeWhiteSneakers: {
          title: '橘白運動鞋',
          desc: '活力橘白配色運動鞋，流線型設計，舒適透氣，展現運動時尚風格。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a2_rgbsn4.png'
        },
        wovenLeatherToteBag: {
          title: '編織皮革托特包',
          desc: '質感編織皮革托特包，焦糖棕色，金色鍊條點綴，容量充足，適合日常或通勤使用。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a3_kiitdk.png'
        },
        plaidCrossbodyBag: {
          title: '格紋斜背包',
          desc: '紅色格紋斜背包，毛呢材質，經典時尚，小巧精緻，為穿搭增添亮點。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a4_e2zzry.png'
        },
        whiteSmartwatch: {
          title: '白色智慧手錶',
          desc: '簡約白色智慧手錶，銀色錶盤，科技感十足，多功能設計，滿足日常需求。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a5_n0odwz.png'
        },
        blackGraphicTee: {
          title: '黑色圖案T恤',
          desc: '經典黑色棉質T恤，胸前圓形圖案設計，百搭休閒，展現個性風格。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517351/s1_bnhsih.png'
        },
        floralMidiDress: {
          title: '印花中長洋裝',
          desc: '米色底碎花中長洋裝，長袖設計，飄逸雪紡材質，適合約會或度假穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s3_crvqgz.png'
        },
        blueWideLegShorts: {
          title: '藍色寬鬆短褲',
          desc: '亮藍色寬鬆短褲，抽繩鬆緊腰頭，舒適休閒，適合夏季日常穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s4_hyehnc.png'
        },
        lightWashDenimShorts: {
          title: '淺藍刷破牛仔短褲',
          desc: '淺藍色刷破牛仔短褲，不規則剪裁，個性十足，適合夏季街頭風格穿搭。',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s5_fbaull.png'
        }
      },
      footer: {
        aboutDesc: 'Zakka Store 致力於為您提供最優質的日本生活雜貨，讓您的日常生活更加美好。',
        slogan: '生活美學，從雜貨開始',
        usefulLinks: '實用連結',
        home: '首頁',
        cart: '購物車',
        manFashion: '男裝',
        womanFashion: '女裝',
        accessories: '配件',
        myAccount: '我的帳戶',
        orderTracking: '訂單追蹤',
        wishlist: '願望清單',
        terms: '條款與細則',
        contact: '聯絡我們',
        address: '台北市信義區松高路68號',
        phone: '+886 2 1234 5678',
        email: 'contact@zakkastore.com'
      },
      subscribeNewsletter: '訂閱電子報',
      subscribeDesc: '訂閱我們的電子報，獲取最新商品資訊與優惠活動！',
      emailPlaceholder: '請輸入您的電子郵件',
      wishlist: {
        added: '已加入收藏',
        removed: '已從收藏移除',
        empty: '收藏清單是空的',
        items: '件收藏商品',
        removeItem: '移除收藏',
        addToWishlist: '加入收藏',
        removeFromWishlist: '移除收藏',
        clearAll: '清空願望清單',
        clearAllConfirm: '確定要清空所有願望清單嗎？',
        cleared: '願望清單已清空'
      }
    }
  },
  en: {
    translation: {
      search: 'Search Products',
      register: 'Register',
      login: 'Login',
      cart: {
        empty: 'Your cart is empty',
        items: 'items',
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        total: 'Total',
        removeItem: 'Remove Item',
        updateQuantity: 'Update Quantity',
        checkout: 'Checkout',
        continueShopping: 'Continue Shopping',
        itemRemoved: 'Item removed from cart',
        quantityUpdated: 'Item quantity updated',
        addToCartSuccess: 'Item added to cart',
        addToCartError: 'Failed to add item to cart, please try again',
        invalidQuantity: 'Please enter a valid quantity',
        outOfStock: 'Item is out of stock',
        loading: 'Loading cart...',
        error: 'Error loading cart',
        deletedItems: 'Recently Deleted Items',
        restore: 'Restore',
        clearHistory: 'Clear History',
        itemRestored: 'Item restored to cart',
        sizeUpdated: 'Size updated'
      },
      itemsInCart: 'items',
      loadingCart: 'Loading cart...',
      loadingLogin: 'Loading login page...',
      loadingRegister: 'Loading register page...',
      searchPlaceholder: 'Please enter search keywords',
      searchResult: 'Search: ',
      storeName: 'Zakka Store',
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      welcome: 'Welcome',
      addToCart: 'Add to Cart',
      checkout: 'Checkout',
      price: 'Price',
      size: 'Size',
      color: 'Color',
      quantity: 'Quantity',
      selectSize: 'Select Size',
      description: 'Description',
      relatedProducts: 'Related Products',
      switchLanguage: 'Switch Language',
      announcement: '🎉 Chinese New Year Sale: 15% OFF All Items | Free Shipping on Orders Over $1000 | Members: Extra 5% OFF First Purchase',
      categories: {
        all: 'All Products',
        clothing: 'Clothing',
        accessories: 'Accessories',
        home: 'Home & Living',
        stationery: 'Stationery',
        gifts: 'Gifts',
        men: "Men's Collection",
        women: "Women's Collection",
        tops: 'Tops & Shirts',
        bottoms: 'Bottoms',
        outerwear: 'Outerwear'
      },
      sort: {
        newest: 'Newest',
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
        popular: 'Popular'
      },
      sortLabel: 'Sort by:',
      slider: {
        slide1: {
          title: 'Winter Collection',
          desc: 'Premium fabrics for comfortable and warm winter fashion'
        },
        slide2: {
          title: 'Spring Limited Series',
          desc: 'Fresh and elegant designs to showcase spring romance'
        },
        slide3: {
          title: 'Classic Essentials',
          desc: 'Timeless designs to create your unique style'
        }
      },
      shopNow: 'Shop Now',
      products: {
        redVelvetCoat: {
          title: 'Red Velvet Coat',
          desc: 'Luxurious velvet fabric, soft and comfortable, vibrant red color showcases unique charm, perfect for autumn and winter fashion.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/w1_hdmtsi.png'
        },
        greyWoolCoat: {
          title: 'Grey Wool Coat',
          desc: 'Premium wool blend material, warm and comfortable, grey design shows understated luxury, suitable for both formal and casual occasions.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517355/w2_kpvtyh.png'
        },
        vintageCoat: {
          title: 'Vintage Double-Breasted Coat',
          desc: 'Classic vintage design, double-breasted buttons and belt details showcase elegant taste, perfect for autumn and winter layering.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w4_ygtcwb.png'
        },
        khakiCoat: {
          title: 'Classic Khaki Trench Coat',
          desc: 'Simple and stylish double-breasted trench coat, classic khaki design, belt shapes perfect silhouette, ideal for commuting and daily wear.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w3_ayfitr.png'
        },
        blackLongSleeveTee: {
          title: 'Black Long Sleeve T-Shirt',
          desc: 'Simple black design, comfortable cotton fabric, white "705 CALIFORNIA" text on chest, showcasing casual street style.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w5_gu4uaq.png'
        },
        whiteShortSleeveTee: {
          title: 'White Short Sleeve T-Shirt',
          desc: 'Classic white basic tee, versatile essential piece, comfortable cotton fabric, suitable for various daily outfits.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s2_ggvqtw.png'
        },
        whiteCasualShoes: {
          title: 'White Casual Shoes',
          desc: 'Simple white leather casual shoes with black heel accent, clean lines, easy to match with any style.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594474/a1_quea5c.png'
        },
        orangeWhiteSneakers: {
          title: 'Orange & White Sneakers',
          desc: 'Vibrant orange and white color scheme sneakers, streamlined design, breathable and comfortable, perfect for sporty fashion.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a2_rgbsn4.png'
        },
        wovenLeatherToteBag: {
          title: 'Woven Leather Tote Bag',
          desc: 'Quality woven leather tote bag in caramel brown, gold chain accents, spacious capacity, ideal for daily or commuting use.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a3_kiitdk.png'
        },
        plaidCrossbodyBag: {
          title: 'Plaid Crossbody Bag',
          desc: 'Red plaid crossbody bag in wool material, classic and fashionable, compact and delicate, adding a highlight to your outfit.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a4_e2zzry.png'
        },
        whiteSmartwatch: {
          title: 'White Smart Watch',
          desc: 'Simple white smart watch with silver dial, tech-savvy design, multifunctional features to meet daily needs.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a5_n0odwz.png'
        },
        blackGraphicTee: {
          title: 'Black Graphic T-Shirt',
          desc: 'Classic black cotton T-shirt with circular graphic design on chest, versatile casual style, showcasing personality.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517351/s1_bnhsih.png'
        },
        floralMidiDress: {
          title: 'Floral Midi Dress',
          desc: 'Beige-based floral print midi dress with long sleeves, flowing chiffon material, perfect for dating or vacation wear.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s3_crvqgz.png'
        },
        blueWideLegShorts: {
          title: 'Blue Wide Leg Shorts',
          desc: 'Bright blue wide leg shorts with drawstring waist, comfortable and casual, ideal for summer daily wear.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s4_hyehnc.png'
        },
        lightWashDenimShorts: {
          title: 'Light Wash Denim Shorts',
          desc: 'Light blue distressed denim shorts with irregular cut, full of personality, perfect for summer street style.',
          image: 'https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s5_fbaull.png'
        }
      },
      footer: {
        aboutDesc: 'Zakka Store is dedicated to providing you with the finest Japanese lifestyle products to enhance your daily life.',
        slogan: 'Life Aesthetics, Starting from Zakka',
        usefulLinks: 'Useful Links',
        home: 'Home',
        cart: 'Cart',
        manFashion: 'Men\'s Fashion',
        womanFashion: 'Women\'s Fashion',
        accessories: 'Accessories',
        myAccount: 'My Account',
        orderTracking: 'Order Tracking',
        wishlist: 'Wishlist',
        terms: 'Terms & Conditions',
        contact: 'Contact',
        address: 'No. 68, Songgao Road, Xinyi District, Taipei City',
        phone: '+886 2 1234 5678',
        email: 'contact@zakkastore.com'
      },
      subscribeNewsletter: 'Subscribe to Newsletter',
      subscribeDesc: 'Subscribe to our newsletter for the latest products and promotions!',
      emailPlaceholder: 'Enter your email address',
      wishlist: {
        added: 'Added to wishlist',
        removed: 'Removed from wishlist',
        empty: 'Your wishlist is empty',
        items: 'items in wishlist',
        removeItem: 'Remove from wishlist',
        addToWishlist: 'Add to wishlist',
        removeFromWishlist: 'Remove from wishlist',
        clearAll: 'Clear Wishlist',
        clearAllConfirm: 'Are you sure you want to clear all items from your wishlist?',
        cleared: 'Wishlist cleared'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 