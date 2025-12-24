import styled from "styled-components";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { products as allProducts } from '../data';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    padding: 0 20px;
`;

const Filter = styled.div`
    margin: 10px 0;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;

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

const SIZE_ORDER = { 'XS': 0, 'S': 1, 'M': 2, 'L': 3, 'XL': 4, 'XXL': 5 };
function sortSizes(a, b) {
  const na = Number(a), nb = Number(b);
  const aIsNum = !isNaN(na), bIsNum = !isNaN(nb);
  if (aIsNum && bIsNum) return na - nb;
  if (aIsNum) return 1;
  if (bIsNum) return -1;
  return (SIZE_ORDER[a] ?? 999) - (SIZE_ORDER[b] ?? 999);
}

const ProductList = ({ defaultCategory }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const queryCategory = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('category');
  }, [location.search]);

  const category = defaultCategory || queryCategory || 'tops';

  const [filters, setFilters] = useState({ colorGroup: 'all', size: 'all' });
  const [sort, setSort] = useState('newest');

  const derivedSizes = useMemo(() => {
    const base = allProducts.filter(p => p.category === category)
      .filter(p => matchesColorGroup(p.colors, filters.colorGroup));
    const sizes = new Set();
    base.forEach(p => (p.sizes || []).forEach(s => sizes.add(s)));
    return Array.from(sizes).sort(sortSizes);
  }, [category, filters.colorGroup]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>{
        category === 'tops' ? t('categories.tops') :
        category === 'bottoms' ? t('categories.bottoms') :
        t('categories.accessories')
      }</Title>
      <FilterContainer>
        <Filter>
          <FilterText>{t('filter', { defaultValue: i18n.language === 'zh' ? '篩選器:' : 'Filters:' })}</FilterText>
          <Select name="colorGroup" value={filters.colorGroup} onChange={handleFilterChange}>
            <Option value="all">{i18n.language === 'zh' ? '全部色系' : 'All Tones'}</Option>
            <Option value="earth">{i18n.language === 'zh' ? '大地色' : 'Earth Tones'}</Option>
            <Option value="dark">{i18n.language === 'zh' ? '深色' : 'Dark'}</Option>
            <Option value="light">{i18n.language === 'zh' ? '淺色' : 'Light'}</Option>
          </Select>
          <Select name="size" value={filters.size} onChange={handleFilterChange}>
            <Option value="all">{t('size', { defaultValue: i18n.language === 'zh' ? '尺寸' : 'Size' })}</Option>
            {derivedSizes.map(s => (
              <Option key={s} value={s}>{s}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>{t('sortLabel', { defaultValue: i18n.language === 'zh' ? '排序功能:' : 'Sort by:' })}</FilterText>
          <Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">{t('sort.newest')}</Option>
            <Option value="priceAsc">{t('sort.priceAsc')}</Option>
            <Option value="priceDesc">{t('sort.priceDesc')}</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
};

export default ProductList;
