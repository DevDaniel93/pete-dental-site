import './App.css';
 
import AdminRouter from './Routers';
 
import store from './store/store';
import { Provider } from 'react-redux'; 
function App() {
   
  




  return (
    
    <Provider store={store}>
    <AdminRouter />
    </Provider>
  );
}

export default App;
