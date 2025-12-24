import styled from 'styled-components';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { ShoppingCartOutlined, Favorite, DeleteOutline } from '@mui/icons-material';
import { mobile } from './responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 90px;
  ${mobile({ padding: "10px", marginTop: "80px" })}
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-size: 18px;
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
  ${mobile({ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" })}
`;

const WishlistItem = styled.div`
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 280px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  ${mobile({ padding: "12px", maxWidth: "100%" })}
`;

const ItemImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: #f8f9fa;
  border: 1px solid #eee;
  ${mobile({ height: "140px" })}
`;

const ItemTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
  line-height: 1.3;
  ${mobile({ fontSize: "14px" })}
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
  ${mobile({ fontSize: "16px" })}
`;

const ItemActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 32px;

  &.add-to-cart {
    background-color:rgb(242, 159, 128);
    color: white;

    &:hover {
      background-color:rgb(222, 150, 124);
    }
  }

  &.remove {
    background-color:rgb(116, 205, 172);
    color: white;

    &:hover {
      background-color: rgb(104, 194, 161);
    }
  }

  &:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  ${mobile({ padding: "6px 8px", fontSize: "11px", minHeight: "28px" })}
`;

const ClearAllButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin: 0 auto;
  display: block;
  transition: background-color 0.2s ease;
  font-size: 14px;

  &:hover {
    background-color: #c0392b;
  }

  &:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  ${mobile({ padding: "8px 16px", fontSize: "13px" })}
`;

const Wishlist = () => {
  const { t } = useTranslation();
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.sizes?.[0] || 'M',
      color: item.colors?.[0] || 'default',
      sizes: item.sizes || []
    });
    toast.success(t('cart.addToCartSuccess'));
  };

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishlist(itemId);
    toast.success(t('wishlist.removed'));
  };

  const handleClearAll = () => {
    if (window.confirm(t('wishlist.clearAllConfirm', { defaultValue: '確定要清空所有願望清單嗎？' }))) {
      clearWishlist();
      toast.success(t('wishlist.cleared', { defaultValue: '願望清單已清空' }));
    }
  };

  if (wishlist.length === 0) {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>{t('footer.wishlist')}</Title>
          <EmptyMessage>
            {t('wishlist.empty', { defaultValue: '您的願望清單是空的' })}
          </EmptyMessage>
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
        <Title>{t('footer.wishlist')} ({wishlist.length})</Title>
        
        <WishlistGrid>
          {wishlist.map((item) => (
            <WishlistItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>NT$ {item.price}</ItemPrice>
              <ItemActions>
                <ActionButton 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCartOutlined style={{ fontSize: '16px' }} />
                  {t('addToCart')}
                </ActionButton>
                <ActionButton 
                  className="remove"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  <DeleteOutline style={{ fontSize: '16px' }} />
                  {t('wishlist.removeItem')}
                </ActionButton>
              </ItemActions>
            </WishlistItem>
          ))}
        </WishlistGrid>

        {wishlist.length > 1 && (
          <ClearAllButton onClick={handleClearAll}>
            {t('wishlist.clearAll', { defaultValue: '清空願望清單' })}
          </ClearAllButton>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist; 