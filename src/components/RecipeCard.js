import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const RecipeCard = ({setSelectedRecipe }) => {
  const { recipes } = useFirestore('recipe-data');
  return (
    <div className="recipe-card-holder">
      {recipes && recipes.map(recipe => (
        <div
        key={recipe.id}>
        <Link to={{pathname: `/recipe/${recipe.id}`}}>
          <motion.div
            className="recipe-card"
            key={recipe.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedRecipe(recipe)}
          >
            <motion.img
              src={recipe.url}
              alt="recipe image"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}              
            />
            <p>{recipe.name}</p>
            </motion.div>
        </Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard;