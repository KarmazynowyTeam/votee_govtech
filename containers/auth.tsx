import { Container } from "unstated";

type State = {
  isLoggedIn: boolean;
  search?: string;
  readonly url: string;
};

export class AuthContainer extends Container<State> {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      url: "http://0f6c2a68.ngrok.io/fetch_user"
    };
  }
}

const authContainer = new AuthContainer();
export default authContainer;
