import { Component } from 'react';
import { Reader } from './components/Reader/Reader';
import publications from './data/publications.json';

export class ReaderApp extends Component {
  render() {
    return <Reader items={publications} />;
  }
}
