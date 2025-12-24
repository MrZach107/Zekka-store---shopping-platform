import React from 'react';
import styled from "styled-components"; 
import { mobile } from "../responsive";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: center;
  gap: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Category = styled.div`
  flex: 0 0 350px ;       // 固定寬度但不撐滿
  margin: 0 auto;
  width: 250px;
  height: 250px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition-delay: 0.5s;
  }

  ${mobile({ 
    width: "100%", 
    height: "200px",
    marginBottom: "10px"
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: white;
  margin: 0 auto;
  display: block;
  ${mobile({ height: "160px", width: "80%" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Categories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === 'tops') navigate('/tops');
    else if (category === 'bottoms') navigate('/bottoms');
    else if (category === 'accessories') navigate('/accessories');
    else navigate(`/products?category=${category}`);
  };

  return (
    <Container>
      <Category onClick={() => handleCategoryClick('tops')}>
        <Image src="https://res.cloudinary.com/dznblgcdr/image/upload/v1743517353/w5_gu4uaq.png" />
        <Info>
          <Title>{t('categories.tops')}</Title>
          <Button>{t('shopNow')}</Button>
        </Info>
      </Category>
      <Category onClick={() => handleCategoryClick('bottoms')}>
        <Image src="https://res.cloudinary.com/dznblgcdr/image/upload/v1743517352/s5_fbaull.png" />
        <Info>
          <Title>{t('categories.bottoms')}</Title>
          <Button>{t('shopNow')}</Button>
        </Info>
      </Category>
      <Category onClick={() => handleCategoryClick('accessories')}>
        <Image src="https://res.cloudinary.com/dznblgcdr/image/upload/v1743594473/a5_n0odwz.png" />
        <Info>
          <Title>{t('categories.accessories')}</Title>
          <Button>{t('shopNow')}</Button>
        </Info>
      </Category>
    </Container>
  );
};

export default Categories;