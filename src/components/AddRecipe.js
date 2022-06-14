import React, { useState } from 'react';
import Progress from './Progress';
import uuid from 'react-uuid';

const AddRecipe = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [youtubeurl, setYoutubeurl] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [measures, setMeasures] = useState(null);
  const [tags, setTags] = useState(null);
  const [upload, setUpload] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const data = {name, category, instructions, youtubeurl, ingredients, measures, tags};

  const handleUpload = (e) => {
    {image && name && category && instructions && youtubeurl && ingredients && measures && tags && setUpload(true);}
  }
  const handleImageChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      var reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('image-file')
              .src = e.target.result;
      };
      reader.readAsDataURL(selected);
      const file = selected.slice(0, selected.size, 'image/png'); 
      const filename = uuid() + ".png";
      selected = new File([file], filename, {type: 'image/png'});
      setImage(selected);
      setError('');
    } else {
      setImage(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  const handleNameChange = (e) => {
    let selected = e.target.value;
    setName(selected);
  };
  const handleCategoryChange = (e) => {
    let selected = e.target.value;
    setCategory(selected);
  };
  const handleIngredientsChange = (e) => {
    let selected = e.target.value;
    setIngredients(selected);
  };
  const handleMeasuresChange = (e) => {
    let selected = e.target.value;
    setMeasures(selected);
  };
  const handleInstructionChange = (e) => {
    let selected = e.target.value;
    setInstructions(selected);
  };
  const handleYTURLChangeChange = (e) => {
    let selected = e.target.value;
    setYoutubeurl(selected);
  };
  const handleTagsChange = (e) => {
    let selected = e.target.value;
    setTags(selected);
  };

  return (
    <form>
      <div className="blog-card">
        <h5>Recipe Image</h5>
        <div className="image-block">
          {!image && 
          <>
            <div className="add-image-button">
              <label>
                <input type="file" onChange={handleImageChange} />
                <span>+</span>
              </label>
            </div>
          </>
          }
          {image &&
            <img id="image-file" alt="your-image" src="" width="200" height="200"/>
          }
        </div>
        <div className="output">
          { error && <div className="error">{ error }</div> }
          { image && <div>{ image.name }</div> }
        </div>
        <div className="input-data">
          <label>
            <span>Recipe Name:</span>
            <input type="text" onChange={handleNameChange} />
          </label>
          <br />
          <label>
            <span>Recipe Category:</span>
            <input type="text" onChange={handleCategoryChange} />
          </label>
          <br />
          <label>
            <span>Recipe Ingredients:</span>
            <input type="text" data-role="tagsinput" onChange={handleIngredientsChange} />
          </label>
          <br />
          <label>
            <span>Recipe Measures:</span>
            <input type="text" onChange={handleMeasuresChange} />
          </label>
          <br />
          <label>
            <span>Recipe Instructions:</span>
            <input type="text" onChange={handleInstructionChange} />
          </label>
          <br />
          <label>
            <span>Recipe Youtube Video URL:</span>
            <input type="text" onChange={handleYTURLChangeChange} />
          </label>
          <br />
          <label>
            <span>Recipe Tags:</span>
            <input type="text" onChange={handleTagsChange} />
          </label>
          <br />
        </div>
        <div>
          <input className="add-recipe-button" id="submit" type="button" onClick={handleUpload} value="Add Recipe" />
          {upload && image && name && category && instructions && youtubeurl && ingredients && measures && tags && <Progress image={image} setImage={setImage} data = {data}/>}
        </div>
      </div>
    </form>
  );
}

export default AddRecipe;