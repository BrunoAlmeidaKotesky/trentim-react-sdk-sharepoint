import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import {useSPConnection} from './hooks/useSPConnection';

let hmrUpdate: undefined | (() => void);
initializeIcons();

const Demo = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = React.useState<number>(0);
  const bs = useSPConnection();

  React.useEffect(() => {
    bs.getItems('ListaProjetos', {}).then(r => console.log(r));
  }, []);

  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return (
    <div style={{
      width: '100%', height: '100vh',
      backgroundColor: '#85FFBD',
      backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
    }}>
      <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%" }}>
      </div>
    </div>);
};

ReactDOM.render(<Demo />, document.getElementById('dyna-module-root'));

// Todo: fixme: callbacks are not called, only page refresh is taking place.
if (module?.hot) {
  module?.hot?.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}