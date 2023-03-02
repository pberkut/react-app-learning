import { Component } from 'react';
import { MaterialEditorForm } from './components/MaterialEditorForm';
import * as API from './services/api.js';

export class MaterialApp extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const { isLoading } = this.state;
    return (
      <>
        {this.state.isLoading && <div>LOADING...</div>}
        <MaterialEditorForm
          onSubmit={this.addMaterial}
          //   isSubmitting={isLoading}
        />
      </>
    );
  }
}
