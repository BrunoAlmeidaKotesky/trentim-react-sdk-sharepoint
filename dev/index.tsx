import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { DataTable } from '../src/DataTable/DataTable';
import { GridView } from '../src/GridView/GridView';
import { nodeItem, simpleRow } from './constants';

declare const module: any;
let hmrUpdate: undefined | (() => void);

loadTheme({
  defaultFontStyle: { fontFamily: 'Roboto', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '12px',
    },
    medium: {
      fontSize: '16px',
    },
    large: {
      fontSize: '20px',
    },
    xLarge: {
      fontSize: '24px',
    },
  },
  palette: {
    themePrimary: '#27d6f2',
    themeLighterAlt: '#f6fdfe',
    themeLighter: '#dbf8fd',
    themeLight: '#bcf3fb',
    themeTertiary: '#7be7f7',
    themeSecondary: '#40dcf4',
    themeDarkAlt: '#23c2da',
    themeDark: '#1da3b8',
    themeDarker: '#167888',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#fff',
  },
});


initializeIcons();
const Demo = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = React.useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return (
    <div style={{
      width: '100%', height: '100vh',
      backgroundColor: '#85FFBD',
      backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
    }}>
      <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%" }}>
        <div style={{
          display: "grid",
          padding: "20px",
          placeItems: "center",
          background: 'linear-gradient(90deg, #49ff5f 0%, #23b5b5 100%)',
          borderRadius: '40px',
          border: '2px solid rgba(95,95,95,0.56)'
        }}>
          <DataTable
            type={'div'}
            columns={[{ keyName: 'name', title: 'Name' }, { keyName: 'age', title: 'Age' }, { keyName: 'desc', title: 'Description' }]}
            styles={{
              tableBodyRow: {
                specficRow: { positions: [0, 4], style: { background: 'magenta' } },
                style: { background: 'lightblue' }
              },
              tableCell: {
                specificCells:
                  { keys: ['name'], style: { color: 'yellow' }, positions: [2, 3] }
              }
            }}
            ignoreKeys={['ignoreMe']}
            rows={[
              { age: 21, name: 'Bruno', ignoreMe: true },
              { age: 36, name: 'Jony', ignoreMe: true },
              { age: 23, name: 'Jean', ignoreMe: true },
              { age: 67, name: 'Robert', ignoreMe: true },
              { age: 27, name: 'July', ignoreMe: true },
              { age: 55, name: 'Carl', ignoreMe: true },
              { age: 75, name: 'Mario', ignoreMe: true },
              { age: 88, name: 'Rodney', ignoreMe: true },
            ]} />
        </div>
        <div>
          <GridView
            headerOptions={{
              enableFilter: true, enableCardView: true,
              enableSearch: true, enableGroupBy: true,
              searchKey: 'name'
            }}
            columns={[{ key: 'responsavel', minWidth: 120, name: 'Responsável', fieldName: 'responsavel' }]}
            rowsAsNode={nodeItem}
            listType="folder"
          />
        </div>
        <div>
          <GridView 
            headerOptions={{
              enableSearch: true, enableFilter: true, enableGroupBy: true,
              searchKey: 'Title',
              customButtons: [{text: 'Upload', props: {
                onClick: () => console.log('Clicked')
              }}]
            }}
            listType="list"
            rows={simpleRow}
            onRowClick={(i) => console.log(i)}
            columns={[
              {key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConvertionOptions: {shouldConvertToLocaleString: true}},
            ]}/>
        </div>
      </div>
    </div>);
};

ReactDOM.render(<Demo />, document.getElementById('dyna-module-root'));

// Todo: fixme: callbacks are not called, only page refresh is taking place.
if (module.hot) {
  module.hot.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}