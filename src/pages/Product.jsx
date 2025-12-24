import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Add, Remove, SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { mobile } from "./responsive";
import { products as allProducts } from '../data';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
    ${mobile({ padding: "10px", flexDirection: "column", gap: "20px" })}
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 80vh;
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    ${mobile({ height: "40vh" })}
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "100%" })}
    background-color: #f5f5f5;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
    ${mobile({ fontSize: "24px" })}
`;

const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({ fontSize: "14px" })}
`;

const Price = styled.span`
    font-size: 20px;
    font-weight: bold;
    ${mobile({ fontSize: "18px" })}
`;

const FilterContainer = styled.div`
    width: 100%;
    max-width: 350px;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${mobile({ width: "100%", height: "auto" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    ${mobile({ flexDirection: "column", alignItems: "flex-start" })}
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    ${mobile({ fontSize: "16px" })}
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    transition: all 0.08s ease;
    border: 2px solid transparent;

    &:focus {
        outline: 2px solid #000;
        outline-offset: 2px;
    }

    &:active {
        border: 2px solid teal;
    }
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    ${mobile({ marginLeft: "0", width: "100%" })}
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    color: #333;

    &:focus {
        outline: 2px solid teal;
        outline-offset: 2px;
    }
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    align-items: center;
    gap: 20px;
    ${mobile({ width: "100%", flexDirection: "column" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    ${mobile({ justifyContent: "center" })}
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    ${mobile({ width: "100%" })}
    color: teal;

    &:hover{
        background-color: #f0f0f0;
    }

    &:focus {
        outline: 2px solid teal;
        outline-offset: 2px;
    }
`;

const Product = () => {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 根據產品 ID 獲取產品信息
    const product = {
        id: id,
        title: t(`products.${id}.title`),
        desc: t(`products.${id}.desc`),
        price: 1280, // 這裡可以根據實際情況設置價格
        image: t(`products.${id}.image`)
    };

    const productImages = [
        product.image,
        product.image, // 可以添加更多顏色變體
        product.image
    ];

    const handleSizeSelect = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('請選擇尺寸');
            return;
        }

        const productToAdd = {
            ...product,
            size: selectedSize,
            quantity: quantity,
            sizes: allProducts.find(p => p.id === product.id)?.sizes || [] // 添加尺寸資訊
        };

        addToCart(productToAdd);
        toast.success(t('cart.addToCartSuccess'));
        setQuantity(1); // 重置數量
    };

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <img
                        src={productImages[currentImageIndex]}
                        alt={product.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            maxHeight: '80vh',
                            backgroundColor: '#f5f5f5'
                        }}
                    />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>NT$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>顏色：</FilterTitle>
                            {productImages.map((color, index) => (
                                <FilterColor 
                                    key={index} 
                                    color={color} 
                                    onClick={() => setCurrentImageIndex(index)}
                                    onKeyPress={(e) => e.key === 'Enter' && setCurrentImageIndex(index)}
                                    style={{ border: currentImageIndex === index ? "2px solid teal" : "none"}}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`選擇顏色${index + 1}`}
                                    aria-pressed={currentImageIndex === index}
                                />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>尺寸：</FilterTitle>
                            <FilterSize
                                value={selectedSize}
                                onChange={handleSizeSelect}
                                aria-label="選擇尺寸"
                            >
                                <FilterSizeOption value="">請選擇尺寸</FilterSizeOption>
                                {/* 動態生成尺寸選項，根據商品本身的可用尺寸 */}
                                {allProducts.find(p => p.id === product.id)?.sizes?.map((size) => (
                                    <FilterSizeOption key={size} value={size}>{size}</FilterSizeOption>
                                )) || (
                                    <>
                                        <FilterSizeOption value="S">S</FilterSizeOption>
                                        <FilterSizeOption value="M">M</FilterSizeOption>
                                        <FilterSizeOption value="L">L</FilterSizeOption>
                                        <FilterSizeOption value="XL">XL</FilterSizeOption>
                                    </>
                                )}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove 
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))} 
                                style={{ cursor: "pointer" }}
                                aria-label="減少數量"
                            />
                            <Amount>{quantity}</Amount>
                            <Add 
                                onClick={() => setQuantity(prev => prev + 1)} 
                                style={{ cursor: "pointer" }}
                                aria-label="增加數量"
                            />
                        </AmountContainer>
                        <Button 
                            onClick={handleAddToCart}
                            aria-label="加入購物車"
                        >
                            {t('addToCart')}
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/> 
        </Container>
    );
};

export default Product;