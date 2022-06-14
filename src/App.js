import React, { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe';
import RecipeCard from './components/RecipeCard';
import BlogCard from './components/BlogCard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route
          path="/"
          exact
          render={
            () => (
              <Home />
              )
            }
            />
          <Route
          path="/addrecipe"
          render={
            () => (
              <AddRecipe />
              )
            }
          />
          <Route
          path="/allrecipe"
          render={
            () => (
              <>
                <RecipeCard setSelectedRecipe={setSelectedRecipe} />
              </>
              )
            }
          />
          <Route
          path="/recipe/"
          render={
            () => (
              <>
                {selectedRecipe && <BlogCard selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} /> }
                {
                  !selectedRecipe && 
                  <>
                    <h2 className="not-selected">Sorry, No Recipe is Selected!!!</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="not-selected refresh-warning">Do Not Refresh the Page</h2>
                    <div>
                      <Link to={{pathname:"/allrecipe"}}>
                        <button className="back-button">Back</button>
                      </Link>
                    </div>
                  </>
                }
              </>
             )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
