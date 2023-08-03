import axios from "axios";

interface SocialLoginParams {
  credential: string;
  social: string;
}

interface ELoginParams {
  email: string;
  password: string;
}

export const socialLogin = async ({ credential, social }: SocialLoginParams): Promise<any> => {
  // 아직 주소 안정해짐 

  console.log(credential, social);
  const response = await axios.post(`/api/user/signup/${social}`, {
    headers: {
      Authorization: credential,
    },
  });
  //성공이면 로그인 화면 or 홈화면을 보내버리자
  /*     if(response.data.success){
        return await socialLogin({credential})
      }
      else
        return response; */
};

export const ELogin = async ({ email, password }: ELoginParams): Promise<any> => {
  // 아직 주소 안정해짐 
  console.log(email, password);
  const response = await axios.post('http://3.38.191.164/login', {
    id: email,
    password: password,
  });

  console.log(response.status);
  //성공이면 로그인 화면 or 홈화면을 보내버리자
  if (response.status === 201) {
    return response;
  } else {
    alert("로그인 실패한 이유");
    throw new Error('로그인 실패');
  }
};
