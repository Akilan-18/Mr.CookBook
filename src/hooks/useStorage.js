import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (image, data) => {
  console.log(image, data);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const createdAt = timestamp();
    const storageRef = projectStorage.ref(image.name);
    const collectionRef = projectFirestore.collection('recipe-data');
    
    storageRef.put(image).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      await collectionRef.add({ url, createdAt, ...data});
      setUrl(url);
    });
  }, [image, data]);

  return { progress, url, error };
}

export default useStorage;