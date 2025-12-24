import styled from 'styled-components';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const Section = styled.section`
  padding: 0 20px 16px;
  line-height: 1.8;
`;

const Terms = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{t('footer.terms')}</Title>
      <Section>
        <h3>使用條款</h3>
        <p>歡迎使用本網站。使用本網站即表示您同意遵循以下條款與細則。</p>
      </Section>
      <Section>
        <h3>隱私權政策</h3>
        <p>我們重視您的隱私，僅在必要情況下收集及使用您的資訊。</p>
      </Section>
      <Section>
        <h3>退換貨政策</h3>
        <p>商品於七日內享有鑑賞期，詳情請參閱客服說明。</p>
      </Section>
      <Footer />
    </Container>
  );
};

export default Terms; 