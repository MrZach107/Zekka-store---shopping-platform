import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Container = styled.div`
    height: 45vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.form`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: teal;
    box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.2);
  }
`;

const Input = styled.input`
  border: none;
  flex: 1;
  padding: 0 15px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  padding: 0 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #006666;
  }

  &:focus {
    outline: none;
    background-color: #006666;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(t('emailPlaceholder'));
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error(t('invalidEmail'));
      return;
    }
    setIsSubmitting(true);
    // TODO: 實作訂閱邏輯
    toast.success(t('subscribeSuccess'));
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <Container>
      <Title>{t('subscribeNewsletter')}</Title>
      <Desc>{t('subscribeDesc')}</Desc>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label={t('emailPlaceholder')}
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
          aria-label={t('subscribe')}
        >
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
};

export default Newsletter;
