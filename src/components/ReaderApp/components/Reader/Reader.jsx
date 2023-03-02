import { Component } from 'react';
import { Controls } from '../Controls';
import { Progress } from '../Progress';
import { Publication } from '../Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
      return;
    }

    this.setState({ index: 0 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.index));
    }
  }

  changePublicationsIndex = value => {
    this.setState(prevState => ({
      index: prevState.index + value,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;

    const currentItem = items[index];
    // Вот так достаём публикации
    console.log(currentItem);

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changePublicationsIndex}
        />

        <Progress current={index + 1} total={totalItems} />

        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
