import styled from 'styled-components';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import X from '@mui/icons-material/X';
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import MailOutline from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;

const Slogan = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => `#${props.color}`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <Left>
        <Logo>ZAKKA</Logo>
        <Desc>{t('footer.aboutDesc')}</Desc>
        <Slogan>{t('footer.slogan')}</Slogan>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <X />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>{t('footer.usefulLinks')}</Title>
        <List>
          <ListItem onClick={() => navigate('/')}>{t('footer.home')}</ListItem>
          <ListItem onClick={() => navigate('/cart')}>{t('footer.cart')}</ListItem>
          <ListItem onClick={() => navigate('/men')}>{t('footer.manFashion')}</ListItem>
          <ListItem onClick={() => navigate('/women')}>{t('footer.womanFashion')}</ListItem>
          <ListItem onClick={() => navigate('/accessories')}>{t('footer.accessories')}</ListItem>
          <ListItem onClick={() => navigate('/account')}>{t('footer.myAccount')}</ListItem>
          <ListItem onClick={() => navigate('/orders')}>{t('footer.orderTracking')}</ListItem>
          <ListItem onClick={() => navigate('/wishlist')}>{t('footer.wishlist')}</ListItem>
          <ListItem onClick={() => navigate('/terms')}>{t('footer.terms')}</ListItem>
        </List>
      </Center>
      <Right>
        <Title>{t('footer.contact')}</Title>
        <ContactItem>
          <LocationOn style={{marginRight:"10px"}}/> {t('footer.address')}
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> {t('footer.phone')}
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/> {t('footer.email')}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
