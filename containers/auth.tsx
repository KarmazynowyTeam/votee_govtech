import { Container } from "unstated";

type State = {
  isLoggedIn: boolean;
  search?: string;
  readonly url: string;
  voted?: boolean;
};

export class AuthContainer extends Container<State> {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      url: "http://104.46.60.5:3000/fetch_user",
      voted: false
    };
  }
}

const authContainer = new AuthContainer();
export default authContainer;
