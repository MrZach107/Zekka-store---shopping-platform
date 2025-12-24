import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding: 0 20px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Announcement = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      {t('announcement')}
    </Container>
  )
};

export default Announcement;