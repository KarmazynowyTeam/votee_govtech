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
      url: "https://pz.gov.pl/dt/login/login?urlt=xvm9g2cfhrf31gwp40ay",
      voted: false
    };
  }
}

const authContainer = new AuthContainer();
export default authContainer;
