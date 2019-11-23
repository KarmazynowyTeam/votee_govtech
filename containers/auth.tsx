import { Container } from "unstated";

type State = {
  isLoggedIn: boolean;
  search?: string;
};

export class AuthContainer extends Container<State> {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
  }
}

const authContainer = new AuthContainer();
export default authContainer;
