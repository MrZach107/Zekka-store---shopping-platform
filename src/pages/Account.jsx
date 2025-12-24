import styled from 'styled-components';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const Content = styled.div`
  padding: 0 20px 40px;
`;

const Account = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{t('footer.myAccount')}</Title>
      <Content>
        {t('comingSoon', { defaultValue: '內容建置中，敬請期待。' })}
      </Content>
      <Footer />
    </Container>
  );
};

export default Account; 