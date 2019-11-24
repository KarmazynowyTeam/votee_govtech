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
      url: "http://localhost:3000/fetch_user"
    };
  }
}

const authContainer = new AuthContainer();
export default authContainer;
