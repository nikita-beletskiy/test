const serverResponse = {
  displayedName: {
    displayedName: {
      value: ['Профиль маячковый ПВХ 10 мм L3м'],
      description: 'Полное наименование товара для клиента'
    }
  },
  stock: {
    stocks: {
      34: {
        2: '35',
        3: '42',
        4: '58',
        5: '57',
        6: '112',
        20: '51',
        22: '78',
        26: '34',
        32: '22',
        35: '358',
        40: '28',
        43: '68',
        45: '58',
        49: '31',
        51: '29',
        56: '42',
        62: '26',
        64: '0',
        65: '57',
        86: '15',
        114: '41',
        117: '46',
        143: '46',
        162: '4',
        171: '0',
        176: '12'
      }
    }
  }
};

// Получить название товара
const getProductName = productData =>
  productData.displayedName.displayedName.value[0];

// Получить массив номеров магазинов, в которых есть товары в наличии
const getShopsWIthProduct = productData => {
  let shopsWithProduct = [];

  for (const [shop, inStock] of Object.entries(
    productData.stock.stocks['34']
  )) {
    if (inStock > 0) shopsWithProduct.push(shop);
    else continue;
  }

  return shopsWithProduct;
};

// Найти максимальное количество товара в регионе, вернуть это количество и номер магазина
const getMaxProductAmount = productData => {
  const shops = productData.stock.stocks['34'];

  const maxProductVal = Object.values(shops).sort((a, b) => b - a)[0];

  const shopsWithMax = Object.keys(shops).filter(
    key => shops[key] === maxProductVal
  );

  // Возвращает максимальное количество и массив магазинов, так как их может быть несколько с таким количеством
  return Object.fromEntries([[maxProductVal, shopsWithMax]]);
};
