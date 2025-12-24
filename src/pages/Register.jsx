import styled from "styled-components";
import Bg from "../assets/images/bg.png";
import { mobile } from "./responsive";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
  width: 100vw; 
  height: 150vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.2)
  ), 
  url(${Bg}) no-repeat center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteBoard = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
    padding: 20px; // 保持內部的 padding
    width: 36%; // 調整寬度，比 Wrapper 寬
`;

const Wrapper = styled.div`
    width: 90%; // 調整寬度，比 Background 窄
    margin: 0 auto; // 水平居中
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
    color: teal;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const FormGroup = styled.div`
    display: flex;
    align-items: center; // 垂直居中對齊
    width: 100%;
    margin-bottom: 15px;
`;

const RedDot = styled.h1`
    color: red;
    font-weight: bold;
    font-size: 18px;
    margin-right: 10px;
`

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-right: 5px;
    color: #333;
    width: 150px; // 設定 Label 寬度
    flex-shrink: 0; // 防止 Label 縮小
`;

const Input = styled.input`
    width: 40%; // 調整 Input 寬度
    padding: 5px;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    outline: none;
    padding-left: 8px;
    flex-grow: 1; // 讓 Input 填滿剩餘空間

    &:focus {
        border-color: teal;
    }
`;

const GenderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px; // 增加間距
`;

const GenderLabel = styled.label` // 新增 GenderLabel
    font-size: 14px;
    font-weight: bold;
    color: #333;
    flex-shrink: 0; // 防止縮小
`;

const InputGender = styled.input`
    width: 12px;
    height: 12px;
    margin-right: 5px; // 增加輸入框與文字間距
`;

const AgreementContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0px 10px 0px;
`;

const AgreementCheckbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 5px;
`;

const AgreementText = styled.span`
    font-size: 14px;
    text-align: left;
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
        background-color: darkcyan;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const GoogleButton = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 10px 0;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1px 0;
  color: #666;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  &::before {
    margin-right: 10px;
  }
  
  &::after {
    margin-left: 10px;
  }
`;

const BackToHomeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: teal;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  ${mobile({ top: "10px", left: "10px", padding: "8px 16px", fontSize: "14px" })}
`;

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 驗證密碼
    if (formData.password !== formData.confirmPassword) {
      toast.error(t('passwordMismatch'));
      return;
    }

    // 驗證同意條款
    if (!formData.agreement) {
      toast.error(t('agreementRequired'));
      return;
    }

    // TODO: 處理註冊邏輯
    toast.success(t('registerSuccess'));
  };

  const handleGoogleSuccess = (credentialResponse) => {
    // TODO: 處理 Google 註冊邏輯
    toast.success("Google 註冊成功！");
  };

  const handleGoogleError = () => {
    toast.error("Google 註冊失敗，請稍後再試");
  };

  return (
    <Container>
      <BackToHomeButton onClick={() => navigate('/')}>
        <HomeIcon />
        {t('backToHome')}
      </BackToHomeButton>
      <WhiteBoard>
        <Wrapper>
          <Title>{t('register')}</Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <RedDot>*</RedDot>
              <Label>{t('username')}：</Label>
              <Input 
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder={t('usernamePlaceholder')}
              />
            </FormGroup>
            
            <FormGroup>
              <RedDot>*</RedDot>
              <Label>{t('email')}：</Label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('emailPlaceholder')}
              />
            </FormGroup>
            
            <FormGroup>
              <RedDot>*</RedDot>
              <Label>{t('password')}：</Label>
              <Input 
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('passwordPlaceholder')}
              />
            </FormGroup>
            
            <FormGroup>
              <RedDot>*</RedDot>
              <Label>{t('confirmPassword')}：</Label>
              <Input 
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t('confirmPasswordPlaceholder')}
              />
            </FormGroup>

            <FormGroup>
              <RedDot>*</RedDot>
              <Label>{t('gender')}：</Label>
              <GenderContainer>
                <div>
                  <InputGender 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <GenderLabel>{t('male')}</GenderLabel>
                </div>
                <div>
                  <InputGender 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <GenderLabel>{t('female')}</GenderLabel>
                </div>
                <div>
                  <InputGender 
                    type="radio" 
                    name="gender" 
                    value="nonbinary"
                    checked={formData.gender === "nonbinary"}
                    onChange={handleChange}
                  />
                  <GenderLabel>{t('nonbinary')}</GenderLabel>
                </div>
                <div>
                  <InputGender 
                    type="radio" 
                    name="gender" 
                    value="prefer_not_to_say"
                    checked={formData.gender === "prefer_not_to_say"}
                    onChange={handleChange}
                  />
                  <GenderLabel>{t('preferNotToSay')}</GenderLabel>
                </div>
              </GenderContainer>
            </FormGroup>

            <AgreementContainer>
              <RedDot>*</RedDot>
              <AgreementCheckbox
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              <AgreementText>
                {t('agreementText')} <strong>{t('terms')}</strong> {t('and')} <strong>{t('privacy')}</strong>。
              </AgreementText>
            </AgreementContainer>

            <Button type="submit">{t('submit')}</Button>

            <Divider>{t('or')}</Divider>

            <GoogleButton>
              <GoogleOAuthProvider clientId="446028312922-6u6k0a1eg9vj46khhd27358bsucmlcr8.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                  theme="outline"
                  size="large"
                  width="100%"
                />
              </GoogleOAuthProvider>
            </GoogleButton>
          </Form>
        </Wrapper>
      </WhiteBoard>
      <ToastContainer position="top-right" />
    </Container>
  );
};

export default Register;