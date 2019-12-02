import LoginFrame from "./LoginFrame";

export default function () {
  const login: LoginFrame = new LoginFrame();

  login.checkGuest.checked = false;
  login.checkLogin.checked = true;
  login.textUser.text = 'sample user';
  login.textPass.text = 'password';
}
