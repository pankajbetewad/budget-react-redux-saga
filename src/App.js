import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryform from './components/NewEntryform';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance color="red" label="your balance" value="2012.12" />

      <MainHeader title="History" type='h3' />

      <DisplayBalances />


      <EntryLine isExpense title="something" value="400" />
      <EntryLine color="green" title="something" value="200" />
      <EntryLine isExpense title="something" value="123" />


      <MainHeader title="Add new transaction" type='h3' />

      <NewEntryform />
    </Container>
  );
}

export default App;
