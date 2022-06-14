import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
//      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let recipes = [];
        snap.forEach(recipe => {
          recipes.push({...recipe.data(), id: recipe.id});
        });
        setRecipes(recipes);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { recipes };
}

export default useFirestore;