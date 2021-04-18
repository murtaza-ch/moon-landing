import React from "react";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Layout, ConnectWalletModal } from "./components";
import { Home } from "./Pages";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0,
    };
    this.afterOpen = this.afterOpen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal = () => {
    this.setState({ opacity: 0, isOpen: !this.state.isOpen });
  };

  afterOpen() {
    this.setState({ opacity: 1 });
  }

  beforeClose() {
    return new Promise((resolve) => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 300);
    });
  }

  render() {
    const FadingBackground = styled(BaseModalBackground)`
      opacity: ${(props) => props.opacity};
      transition: all 0.3s ease-in-out;
    `;

    return (
      <ModalProvider backgroundComponent={FadingBackground}>
        <Router>
          <Layout toggleModal={this.toggleModal}>
            <ConnectWalletModal
              afterOpen={this.afterOpen}
              opacity={this.state.opacity}
              beforeClose={this.beforeClose}
              isOpen={this.state.isOpen}
              toggleModal={this.toggleModal}
            />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </ModalProvider>
    );
  }
}

export default App;
