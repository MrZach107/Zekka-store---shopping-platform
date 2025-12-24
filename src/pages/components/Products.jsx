import styled from 'styled-components';
import { products as allProducts } from '../../data';
import Product from './Product';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

const COLOR_GROUPS = {
  earth: ['khaki', 'brown', 'beige', 'tan', 'olive', 'plaid'],
  dark: ['black', 'grey', 'darkGrey', 'navy'],
  light: ['white', 'lightBlue', 'lightGrey', 'beige'],
};

function matchesColorGroup(productColors, group) {
  if (!group || group === 'all') return true;
  const palette = COLOR_GROUPS[group] || [];
  return (productColors || []).some(c => palette.includes(c));
}

const Products = ({ category, filters = {}, sort = 'newest' }) => {
  const { t } = useTranslation();

  const visibleProducts = useMemo(() => {
    let list = [...allProducts];

    if (category) {
      list = list.filter(p => p.category === category);
    }

    if (filters.gender) {
      list = list.filter(p => p.gender === filters.gender || p.gender === 'unisex');
    }

    const colorGroup = filters.colorGroup || filters.color;
    if (colorGroup && colorGroup !== 'all') {
      list = list.filter(p => matchesColorGroup(p.colors, colorGroup));
    }

    if (filters.size && filters.size !== 'all') {
      list = list.filter(p => Array.isArray(p.sizes) && p.sizes.includes(filters.size));
    }

    if (sort === 'newest') {
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (sort === 'priceAsc') {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === 'priceDesc') {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list;
  }, [category, filters.gender, filters.colorGroup, filters.color, filters.size, sort]);

  return (
    <Container>
      {visibleProducts.map(item => (
        <Product item={item} key={item.id} t={t} />
      ))}
    </Container>
  );
};

export default Products;
