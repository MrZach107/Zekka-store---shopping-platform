import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";
import { Favorite, FavoriteBorder, ShoppingCartOutlined, AddShoppingCart } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from "./components/Categories";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { products as allProducts } from '../data';

const Container = styled.div`
    background-color: transparent;
`;

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Product = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f5fbfd;
    position: relative;
    padding: 10px;
    &:hover {
        opacity: 0.8;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const ImageContainer = styled.div`
    height: 75%;
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 2;
`;

const ProductInfo = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const ProductTitle = styled.h3`
    font-size: 16px;
    margin: 0;
    text-align: center;
`;

const ProductPrice = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #333;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Home = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // 從完整的商品資料中獲取尺寸資訊
    const fullProduct = allProducts.find(p => p.id === product.id);
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      color: product.colors?.[0] || 'default',
      size: product.sizes?.[0] || 'M',
      quantity: 1,
      sizes: fullProduct ? fullProduct.sizes : []
    });
    toast.success(t('cart.addToCartSuccess'));
  };

  const handleToggleFavorite = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success(t('wishlist.removed'));
    } else {
      addToWishlist(product);
      toast.success(t('wishlist.added'));
    }
  };

  const handleShopNow = (category) => {
    // 滾動到商品區域
    const productsContainer = document.querySelector('.products-container');
    if (productsContainer) {
      productsContainer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 使用 data.js 中的商品數據，並確保標題正確翻譯
  const products = allProducts.map(product => ({
    ...product,
    title: t(product.titleKey) // 使用翻譯函數獲取正確的標題
  }));

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Slider onShopNow={handleShopNow}/>
      <Categories/>
      <ProductsContainer className="products-container">
        {products.map((product) => (
          <Product key={product.id}>
            <Circle />
            <ImageContainer>
              <StyledImage src={product.image} alt={product.title} />
            </ImageContainer>
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>NT$ {product.price}</ProductPrice>
            </ProductInfo>
            <Info>
              <Icon onClick={() => handleToggleFavorite(product)}>
                {isInWishlist(product.id) ? (
                  <Favorite style={{ color: 'red' }} />
                ) : (
                  <FavoriteBorder />
                )}
              </Icon>
              <Icon onClick={() => handleAddToCart(product)}>
                <ShoppingCartOutlined />
              </Icon>
            </Info>
          </Product>
        ))}
      </ProductsContainer>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default Home;