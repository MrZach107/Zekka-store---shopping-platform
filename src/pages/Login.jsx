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
  height: 120vh;
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
  padding: 20px;
  width: 32%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  ${mobile({ width: "75%" })}
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
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const RedDot = styled.h1`
  color: red;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 5px;
  color: #333;
  width: 150px;
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 40%;
  padding: 5px;
  border: 1.5px solid lightgray;
  border-radius: 5px;
  outline: none;
  padding-left: 8px;
  flex-grow: 1;

  &:focus {
    border-color: teal;
  }
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

const Link = styled.a`
  font-size: 12px;
  color: teal;
  text-decoration: underline;
  margin-top: 10px; // 增加與表單的間距
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 8px;
`;

const RememberMeLabel = styled.label`
  font-size: 14px;
  color: #666;
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

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  useEffect(() => {
    // 檢查是否有保存的登入資訊
    const savedUsername = localStorage.getItem("rememberedUsername");
    const savedPassword = localStorage.getItem("rememberedPassword");
    if (savedUsername && savedPassword) {
      setFormData({
        username: savedUsername,
        password: savedPassword,
        rememberMe: true
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理記住密碼
    if (formData.rememberMe) {
      localStorage.setItem("rememberedUsername", formData.username);
      localStorage.setItem("rememberedPassword", formData.password);
    } else {
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }
    
    // TODO: 處理登入邏輯
    toast.success("登入成功！");
  };

  const handleGoogleSuccess = (credentialResponse) => {
    // TODO: 處理 Google 登入邏輯
    toast.success("Google 登入成功！");
  };

  const handleGoogleError = () => {
    toast.error("Google 登入失敗，請稍後再試");
  };

  return (
    <Container>
      <BackToHomeButton onClick={() => navigate('/')}>
        <HomeIcon />
        {t('backToHome')}
      </BackToHomeButton>
      <WhiteBoard>
        <Wrapper>
          <Title>{t('login')}</Title>
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
              <Label>{t('password')}：</Label>
              <Input 
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('passwordPlaceholder')}
              />
            </FormGroup>

            <RememberMeContainer>
              <RememberMeCheckbox
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <RememberMeLabel>{t('rememberMe')}</RememberMeLabel>
            </RememberMeContainer>

            <Button type="submit">{t('login')}</Button>

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

            <Link href="/forgot-password">{t('forgotPassword')}</Link>
            <Link href="/register">{t('createAccount')}</Link>
          </Form>
        </Wrapper>
      </WhiteBoard>
      <ToastContainer position="top-right" />
    </Container>
  );
};

export default Login;