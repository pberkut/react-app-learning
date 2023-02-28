// Example from https://github.com/luxplanjay/react-18/blob/05-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%86%D0%B8%D0%BA%D0%BB/src/App.js
// Video https://youtu.be/w6MW1szKuT4?t=3515

import { Component } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import tabs from './data/tabs.json';

export class TabsApp extends Component {
  render() {
    return (
      <>
        <Tabs items={tabs} />
      </>
    );
  }
}
