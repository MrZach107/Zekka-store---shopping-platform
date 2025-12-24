import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import Favorite from '@mui/icons-material/Favorite';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

import styled from 'styled-components';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { toast } from 'react-toastify';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.07);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Plate = styled.div`
    width: 220px;
    height: 220px;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    object-fit: contain;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color:rgb(252, 252, 255);
        transform: scale(1.1);
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3)

    }
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  text-align: center;
  background: rgba(0,0,0,0.55);
  color: #fff;
  pointer-events: none; /* 不攔截滑鼠，避免觸發 Icon 的 mouseleave 導致閃爍 */
  border-radius: 5%;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 0.4s ease;
  transition-delay: ${props => (props.visible ? '0.3s' : '0s')};
`;

const DescTitle = styled.h4`
  margin: 0;
  font-size: 18px;
`;

const DescText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const Product = ({ item, t }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const titleKey = item?.titleKey;
  const descKey = titleKey ? titleKey.replace('.title', '.desc') : undefined;
  const title = t ? t(titleKey) : '';
  const description = t && descKey ? t(descKey) : '';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: item.id,
      title: title,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.sizes?.[0] || 'M', // 預設第一個尺寸
      color: item.colors?.[0] || 'default'
    });
    toast.success(t ? t('cart.addToCartSuccess') : '商品已加入購物車');
  };

  return (
    <Container onMouseLeave={() => setShowDesc(false)}>
      <Plate/>
      <Image src={item.image} alt={title}/>
      <Info>
        <Icon
          onClick={handleAddToCart}
          aria-label={t ? t('addToCart') : '加入購物車'}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleAddToCart(e); }}
        >
            <ShoppingCartOutlined/>
        </Icon>
        <Icon
          onMouseEnter={() => setShowDesc(true)}
          onClick={(e) => e.preventDefault()}
          aria-label={t ? t('viewDescription', { defaultValue: '查看商品說明' }) : '查看商品說明'}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowDesc(true); }}
        >
            <SearchOutlined/>
        </Icon>
        <Icon
          onClick={() => {
            if (isInWishlist(item.id)) {
              removeFromWishlist(item.id);
              toast.success(t ? t('wishlist.removed') : '已從願望清單移除');
            } else {
              addToWishlist({
                id: item.id,
                title: title,
                price: item.price,
                image: item.image,
                sizes: item.sizes || [],
                colors: item.colors || []
              });
              toast.success(t ? t('wishlist.added') : '已加入願望清單');
            }
          }}
        >
            {isInWishlist(item.id) ? (
              <Favorite style={{ color: 'red' }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
        </Icon>
      </Info>
      <DescriptionOverlay visible={showDesc}>
        <DescTitle>{title}</DescTitle>
        <DescText>{description}</DescText>
      </DescriptionOverlay>
    </Container>
  )
};

export default Product;
