import Postform from "./components/Postform";
import Posts from "./components/Posts";
import {Provider} from 'react-redux';

import store from './store.js';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform/>
        <hr></hr>
        <Posts/>
      </div>
     </Provider>
  );
}

export default App;
