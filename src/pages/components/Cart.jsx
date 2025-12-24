import styled from "styled-components";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile, tablet } from "../responsive";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { products as allProducts } from '../../data';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 90px;
  ${mobile({ padding: "10px", marginTop: "80px" })}
`;

const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", gap: "10px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent" };
  color: ${(props) => props.type === "filled" ? "white" : "black"};
  ${mobile({ width: "100%" })}
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid teal;
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props) => props.type === "filled" ? "#333" : "#f0f0f0"};
  }
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 15px;
    color: teal;
    transition: all 0.3s ease;

    &:focus {
        outline: 2px solid teal;
        outline-offset: 2px;
    }

    &:hover {
        color: #006666;
    }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  ${mobile({ flex: "none" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  ${mobile({ width: "100%", height: "200px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "10px" })}
`;

const ProductName = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
`;

const ProductId = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
`;

const ProductSize = styled.span`
  margin-right: 20px;
`;

const SizeSelect = styled.select`
  margin-left: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  color: #333;
  font-size: 14px;
  min-width: 120px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid teal;
    outline-offset: 2px;
    border-color: teal;
  }

  &:hover {
    border-color: #999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  option:disabled {
    color: #999;
    font-style: italic;
  }
`;

const SizeOption = styled.option``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginTop: "20px" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 0px 5px;
  ${mobile({ fontSize: "18px" })}
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: "18px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ height: "auto" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
  }

  &:focus {
    outline: 2px solid teal;
    outline-offset: 2px;
  }
`;

const RestoreSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const RestoreTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #333;
`;

const RestoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: white;
`;

const RestoreItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RestoreItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

const RestoreButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: 2px solid #28a745;
    outline-offset: 2px;
  }
`;

const Cart = () => {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity, updateSize, getCartTotal, deletedItems, restoreItem, clearDeletedHistory } = useCart();
  const navigate = useNavigate();

  // 輔助函數：獲取正確的商品標題
  const getProductTitle = (product) => {
    // 如果 product.title 已經是正確的中文標題，直接返回
    if (product.title && !product.title.includes('key') && !product.title.includes('products.')) {
      return product.title;
    }
    
    // 如果 product.title 是翻譯鍵值或無效，嘗試從 allProducts 中獲取
    const fullProduct = allProducts.find(p => p.id === product.id);
    if (fullProduct && fullProduct.titleKey) {
      return t(fullProduct.titleKey);
    }
    
    // 如果都無法獲取，返回商品 ID
    return product.id;
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else if (newQuantity === 0) {
      // 當數量要變成 0 時，直接移除商品
      removeFromCart(productId);
      toast.success(t('cart.itemRemoved'));
    }
  };

  const handleSizeChange = (productId, newSize) => {
    // 使用 CartContext 的 updateSize 方法更新商品尺寸
    updateSize(productId, newSize);
    // 移除提醒，讓用戶可以安靜地更改尺寸
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
    toast.success(t('cart.itemRemoved'));
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleRestoreItem = (productId) => {
    restoreItem(productId);
    toast.success(t('cart.itemRestored', { defaultValue: '商品已復原到購物車' }));
  };

  if (cart.length === 0) {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>{t('cart.empty')}</Title>
          <Top style={{ justifyContent: 'center', marginTop: '20px' }}>
            <TopButton onClick={handleContinueShopping}>
              {t('cart.continueShopping')}
            </TopButton>
          </Top>
          {deletedItems.length > 0 && (
            <RestoreSection>
              <RestoreTitle>{t('cart.deletedItems', { defaultValue: '最近刪除的商品' })}</RestoreTitle>
              {deletedItems.map((item) => (
                <RestoreItem key={item.id}>
                  <RestoreItemInfo>
                    <RestoreItemImage src={item.image} alt={getProductTitle(item)} />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{getProductTitle(item)}</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>NT$ {item.price}</div>
                    </div>
                  </RestoreItemInfo>
                  <RestoreButton onClick={() => handleRestoreItem(item.id)}>
                    {t('cart.restore', { defaultValue: '復原' })}
                  </RestoreButton>
                </RestoreItem>
              ))}
              <TopButton 
                onClick={clearDeletedHistory}
                style={{ marginTop: '15px', fontSize: '12px', padding: '8px 16px' }}
              >
                {t('cart.clearHistory', { defaultValue: '清除歷史記錄' })}
              </TopButton>
            </RestoreSection>
          )}
        </Wrapper>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>購物車</Title>
        <Top>
          <TopButton onClick={handleContinueShopping}>
            {t('cart.continueShopping')}
          </TopButton>
          <TopTexts>
            <TopText>{cart.length} {t('cart.items')}</TopText>
          </TopTexts>
          <TopButton type="filled">{t('cart.checkout')}</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((product) => (
              <div key={product.id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} alt={getProductTitle(product)} />
                    <Details>
                      <ProductName><b>{t('products', { defaultValue: '商品' })}: </b>{getProductTitle(product)}</ProductName>
                      <ProductId><b>ID: </b>{product.id}</ProductId>
                      <ProductSize>
                        <b>{t('size', { defaultValue: '尺寸' })}: </b>
                        <SizeSelect
                          value={product.size || ''}
                          onChange={(e) => handleSizeChange(product.id, e.target.value)}
                          aria-label={t('selectSize', { defaultValue: '選擇尺寸' })}
                        >
                          <SizeOption value="">{t('selectSize', { defaultValue: '選擇尺寸' })}</SizeOption>
                          {/* 動態生成尺寸選項，根據商品本身的可用尺寸 */}
                          {product.sizes && product.sizes.length > 0 ? (
                            product.sizes.map((size) => (
                              <SizeOption key={size} value={size}>{size}</SizeOption>
                            ))
                          ) : (
                            <SizeOption value="one-size" disabled>One Size</SizeOption>
                          )}
                        </SizeSelect>
                        {/* 調試資訊：顯示可用的尺寸 */}
                        {product.sizes && product.sizes.length > 0 && (
                          <small style={{ marginLeft: '10px', color: '#666', fontSize: '12px' }}>
                            可用尺寸: {product.sizes.join(', ')}
                          </small>
                        )}
                      </ProductSize>
                      {product.color && (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <b>{t('color', { defaultValue: '顏色' })}: </b>
                          <ProductColor color={product.color} />
                        </div>
                      )}
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove 
                        style={{ cursor: 'pointer' }} 
                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add 
                        style={{ cursor: 'pointer' }} 
                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>NT$ {product.price * product.quantity}</ProductPrice>
                    <TopButton 
                      onClick={() => handleRemoveItem(product.id)}
                      style={{ marginTop: '10px' }}
                    >
                      {t('cart.removeItem')}
                    </TopButton>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>{t('cart.subtotal')}</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>{t('cart.subtotal')}</SummaryItemText>
              <SummaryItemPrice>NT$ {getCartTotal()}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>{t('cart.shipping')}</SummaryItemText>
              <SummaryItemPrice>NT$ {getCartTotal() >= 1000 ? 0 : 60}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>{t('cart.total')}</SummaryItemText>
              <SummaryItemPrice>
                NT$ {getCartTotal() >= 1000 ? getCartTotal() : getCartTotal() + 60}
              </SummaryItemPrice>
            </SummaryItem>
            <Button>{t('cart.checkout')}</Button>
          </Summary>
        </Bottom>
        {deletedItems.length > 0 && (
          <RestoreSection>
            <RestoreTitle>{t('cart.deletedItems', { defaultValue: '最近刪除的商品' })}</RestoreTitle>
            {deletedItems.map((item) => (
              <RestoreItem key={item.id}>
                <RestoreItemInfo>
                  <RestoreItemImage src={item.image} alt={getProductTitle(item)} />
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{getProductTitle(item)}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>NT$ {item.price}</div>
                  </div>
                </RestoreItemInfo>
                <RestoreButton onClick={() => handleRestoreItem(item.id)}>
                  {t('cart.restore', { defaultValue: '復原' })}
                </RestoreButton>
              </RestoreItem>
            ))}
            <TopButton 
              onClick={clearDeletedHistory}
              style={{ marginTop: '15px', fontSize: '12px', padding: '8px 16px' }}
            >
              {t('cart.clearHistory', { defaultValue: '清除歷史記錄' })}
            </TopButton>
          </RestoreSection>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart; 