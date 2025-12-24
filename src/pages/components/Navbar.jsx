import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile, tablet } from "../responsive";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

const Container = styled.div`
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  background-color: white;
  ${mobile({ padding: "10px 5px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 0.5 })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  ${mobile({ border: "none" })}
  border-radius: 4px;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: teal;
    box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.2);
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "100px" })}
  padding: 5px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  ${mobile({ display: "none" })}

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: 2px solid teal;
    outline-offset: 2px;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 0.5 })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
  ${tablet({ fontSize: "24px" })}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 0;
  width: 100%;
  max-width: 400px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  ${mobile({ height: "30px" })}
  object-fit: contain;
`;

const LogoText = styled.span`
  flex: 1;
  text-align: left;
  white-space: nowrap;
  ${mobile({ fontSize: "18px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  ${mobile({ flex: 0.5, gap: "10px" })}
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  color: #333;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: 2px solid teal;
    outline-offset: 2px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartItemCount } = useCart();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    toast.info(newLang === 'zh' ? '已切換至中文' : 'Switched to English');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (!searchQuery.trim()) {
        toast.error(t('searchPlaceholder'));
        return;
      }
      toast.info(t('searchResult') + searchQuery);
      navigate('/products');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language 
            onClick={toggleLanguage}
            role="button"
            tabIndex={0}
            aria-label={t('switchLanguage')}
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Language>
          <SearchContainer>
            <Input 
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              aria-label={t('search')}
            />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>
              <LogoImage src={logo} alt="Logo" />
              <LogoText>{t('storeName')}</LogoText>
            </Logo>
          </StyledLink>
        </Center>
        <Right>
          <Menu onClick={handleRegister}>
            {t('register')}
          </Menu>
          <Menu onClick={handleLogin}>
            {t('login')}
          </Menu>
          <Menu onClick={handleCartClick}>
            <Badge badgeContent={getCartItemCount()} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;