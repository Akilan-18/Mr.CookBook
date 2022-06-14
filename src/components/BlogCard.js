import React, { useEffect } from 'react';
const BlogCard = ({ setSelectedRecipe, selectedRecipe }) => {
  /*name, category, instructions, youtubeurl, ingredients, measures, tags*/
  useEffect(() => {
    function my_onkeydown_handler( event ) {
      switch (event.keyCode) {
          case 116 : // 'F5'
              event.preventDefault();
              window.status = "F5 disabled";
              break;
      }
  }
  document.addEventListener("keydown", my_onkeydown_handler);
  });
  return (
    <div className="RecipeBlog">
      <h1 className="RecipeHeading">{selectedRecipe.name}</h1>
      <div className="BlogHeader">
        <div className="RecipeImage">
          <img src={selectedRecipe.url} alt ="recipe"/>
        </div>
        <div className="headerButton">
          <a href="#description"><button className="RecipeBlogButton1" value="Description">Description</button></a>
          <a href="#youtube_video"><button className="RecipeBlogButton2" value="Video Tutorials">Video Tutorials</button></a>
        </div>
      </div>
      <div className="RecipeDescription">
      <h3>Name:</h3>
        <p>{selectedRecipe.name}</p>
        <h3>Author:</h3>
        <p>{selectedRecipe.author}</p>
        <h3>Category:</h3>
        <p>{selectedRecipe.category}</p>
        <h3>Ingredients and Measures:</h3>
        <p>{selectedRecipe.ingredients}</p>
        <h3>Measures:</h3>
        <p>{selectedRecipe.measures}</p>
        <h3 id="description">Description:</h3>
        <p>{selectedRecipe.instructions}</p>
        <h3>Tags:</h3>
        <p>{selectedRecipe.tags}</p>
        <h3 id="youtube_video">Youtube Video:</h3>
        <div className="YTPlayer-div">
          <iframe className="YTPlayer" src={selectedRecipe.youtubeurl.replace("watch?v=", "embed/")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
)
}

export default BlogCard;