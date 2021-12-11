import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from './Home';
import { Recipe } from "./Recipe";


const recipe = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "French Fries",
    desc: "Potato Fries",
    time:"10mins"
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Choclate Cake",
    desc: "Yummy & Tasty",
    time: "45mins",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "French Fries",
    desc: "Potato Fries",
    time:"10mins"
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Choclate Cake",
    desc: "Yummy & Tasty",
    time: "45mins",
  },
];

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route exact path="/recipes">
          <Recipe item={recipe}/>
      </Route>
      </Switch>
   </Router>
   </div>
  )
}

export default App;
