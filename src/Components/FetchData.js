import React, { useEffect, useState } from 'react';
import {firestore} from "../firebase-config"
import { collection, getDocs } from 'firebase/firestore';
const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const dataCollection = collection(firestore, 'binItems'); // Replace with your Firestore collection name
            const querySnapshot = await getDocs(dataCollection);
            const newData = [];
            querySnapshot.forEach((doc) => {
              newData.push({ id: doc.id, ...doc.data() });
            });
            setData(newData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        
    }, []);
    
  return (
    <div>
      <h2>Fetched Firestore Data:</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((item) => (
             <li key={item.name}>{item.email_id}{item.password}</li> // Adjust the key and data fields as needed
           ))}
         </ul>
      )}
    </div>
  )
}
//console.log(newData)
export default FetchData
//export {newData}