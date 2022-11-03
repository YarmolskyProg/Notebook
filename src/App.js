import { useSelector } from 'react-redux';
import List from './components/List';
import Title from './components/Title';
import './index.scss';

function App() {
  let active = useSelector(state => {
    return state.notes.activenote
  })
  return (
    <div className="App">
      <List />
      <div className="content">
        {
          !Object.keys(active).length == 0 &&
          <Title active={active} />
        }
      </div>
    </div>
  );
}

export default App;
