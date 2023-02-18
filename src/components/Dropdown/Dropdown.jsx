import { Component } from 'react';
import { DropdownDiv, DropdownMenu } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <DropdownDiv className="Dropdown">
        <button type="button" onClick={this.show}>
          Visible
        </button>
        <button type="button" onClick={this.hide}>
          Hide
        </button>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? '🟢 Hide' : '🔴 Visible'}
        </button>
        <button type="button" onMouseOver={this.toggle}>
          Hover
        </button>

        {this.state.visible && (
          <DropdownMenu className="Dropdown__menu">Dropdown menu</DropdownMenu>
        )}
      </DropdownDiv>
    );
  }
}
