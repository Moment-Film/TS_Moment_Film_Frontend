import { useState, ChangeEvent } from "react";

const useInputValidation = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [userNameError, setUserNameError] = useState<string>('');
  const [phoneNumError, setPhoneNumError] = useState<string>('');

  ////////////////// 유효성 검사////////////////////// 

  // 이메일 유효성검사
  const validateEmail = (input: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!input) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!emailPattern.test(input)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  // 패스워드 유효성 검사
  const validatePassword = (input: string) => {
    if (!input) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (input.length < 5) {
      setPasswordError('비밀번호는 최소 5자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const validateUserName = (input: string) => {
    const userNamePattern = /^[a-zA-Z]{2,10}$/;
    if (!input) {
      setUserNameError('이름을 입력해주세요.');
    } else if (!userNamePattern.test(input)) {
      setUserNameError('이름은 2-10자리 알파벳 문자만 가능합니다.');
    } else {
      setUserNameError('');
    }
  };

  const validatePhoneNum = (input: string) => {
    if (!input) {
      setPhoneNumError('전화번호를 입력해주세요.');
    } else if (input.length !== 11) {
      setPhoneNumError('전화번호는 11자리 숫자여야 합니다.');
    } else {
      setPhoneNumError('');
    }
  };

  ////////////////// 변경 함수////////////////////// 

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    validateUserName(e.target.value);
  };

  const handlePhoneNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
    validatePhoneNum(e.target.value);
  };

  return {
    userName,
    phoneNum,
    email,
    password,
    userNameError,
    phoneNumError,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleUserNameChange,
    handlePhoneNumChange,
  };
}

export default useInputValidation;
