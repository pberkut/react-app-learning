import { Component } from 'react';
import { MaterialEditorForm } from './components/MaterialEditorForm';
import { MaterialList } from './components/MaterialList';
import * as API from './services/api.js';

export class MaterialApp extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <>
        {error && (
          <p>
            Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
            раз.
          </p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'Загружаем материалы'
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </>
    );
  }
}
