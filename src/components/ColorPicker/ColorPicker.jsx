import { PickerBtn } from './ColorPicker.styled';
import { Component } from 'react';
import './ColorPicker.css';

// npm classnames
import classNames from 'classnames';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // variant # 2. на много проще поставить вычисляемый класс. Можно поставить инлайн
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // console.log(clsx);

    //Variant # 1
    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }

    // return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    //   Вычисляемые данные делаются в render и это нормально
    const activeOption = options[activeOptionIdx];

    console.log(activeOption);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* Вычисляемые данные в state  дожно зранится минимальные данные */}
        <p>Selected color: {activeOption.label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <PickerBtn
                // !  https://www.youtube.com/watch?v=terXi4NlcoI&t=4861s
                //   ! index доступен через замыкание. мы передаём inline функцию, которая вызвится во время клика и вызовет нашу функцию (метод класса)
                onClick={() => this.setActiveIdx(index)}
                key={label}
                className={classNames('ColorPicker__option', {
                  'ColorPicker__option--active': index === activeOptionIdx,
                })}
                // className={this.makeOptionClassName(index)} // для примера
                style={{
                  backgroundColor: color,
                  border:
                    index === activeOptionIdx ? '3px solid black' : 'none',
                }}
              ></PickerBtn>
            );
          })}
        </div>
      </div>
    );
  }
}
