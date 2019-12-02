import IMediator from "./IMediator";
import ColleagueCheckbox from "./ColleagueCheckbox";
import ColleagueTextField from "./ColleagueTextField";
import ColleagueButton from "./ColleagueButton";

export default class LoginFrame implements IMediator {
  public checkGuest: ColleagueCheckbox = new ColleagueCheckbox('guest', true);
  public checkLogin: ColleagueCheckbox = new ColleagueCheckbox('login', false);
  public textUser: ColleagueTextField = new ColleagueTextField('user', '');
  public textPass: ColleagueTextField = new ColleagueTextField('pass', '');
  public buttonOk: ColleagueButton = new ColleagueButton('ok');
  public buttonCancel: ColleagueButton = new ColleagueButton('cancel');

  constructor() {
    this.createColleagues();
  }
  createColleagues(): void {
    this.checkGuest.setMediator(this);
    this.checkLogin.setMediator(this);
    this.textUser.setMediator(this);
    this.textPass.setMediator(this);
    this.buttonOk.setMediator(this);
    this.buttonCancel.setMediator(this);
  }
  colleagueChanged () {
    if (this.checkGuest.checked) {
      this.textUser.setColleagueEnabled(false);
      this.textPass.setColleagueEnabled(false);
      this.buttonOk.setColleagueEnabled(false);
    } else {
      this.textUser.setColleagueEnabled(true);
      this.userpassChanged();
    }
  }
  private userpassChanged(): void {
    if (this.textUser.text.length > 0) {
      this.textPass.setColleagueEnabled(true);
      this.buttonOk.setColleagueEnabled(this.textPass.text.length > 0)
    } else {
      this.textPass.setColleagueEnabled(false);
      this.buttonOk.setColleagueEnabled(false);
    }
  }
}
