// import React, { useState, useEffect } from 'react'
// import { db } from '../firebase-config';
// import { collection, getDocs } from 'firebase/firestore';

// export default function states() {
//     const [expenses, setExpenses] = useState([])
//     const userCollectRef = collection(db, 'expenses')
//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(userCollectRef)
//             console.log(data);
//         }

//         getUsers()
//     },[])

//     return (
//         <div>
            
//         </div>
//     )
// }

export const expenses = [
    {id:1, name:'Tiktok coins', amount: 120},
    {id:2, name:'Clothes', amount: -10},
    {id:3, name:'Dish', amount: 13}
]
