import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import RestaurantCard from './Components/RestaurantCard';
import Aboutus from './Components/Aboutus'
function App() {
  return (
    <div className="App">
      <RestaurantCard/>
    </div>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/About",
    element:<Aboutus/>,
  }
])

export default App;
