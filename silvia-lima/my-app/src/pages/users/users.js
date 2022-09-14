import React, {useState, useEffect} from 'react'

import "./users.scss"

export default function Users() {

//     const [photos, setPhotos] = useState([]);
//     const [users, setUsers] = useState([]);

//    // const [data, setData] = useState([]);

//     useEffect(()=> {
//      fetch('https://jsonplaceholder.typicode.com/photos')
//        .then(response => response.json())
//        .then(result => {
//          setPhotos(result);
//        })
//     }, [])

//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/users')
//           .then(response => response.json())
//           .then(result => {
//             setUsers(result);
//           })
//        }, [])

//        //const data = photos.concat(users);
    

  return (
    <div className="users">
    {/* <h1 className="users__headline">Welcome to Users</h1>
    {!data.length ? (
      <p className="users__loading">Loading data... </p>
    ) : (
      <div className="users__list">
        {photos.map((item) => (
          <article key={item.users.id} className="users__article">
            <a className="users__link" href="#nowhere">
                <img key={photos.id} className="users__image" src={photos.url} alt={photos.thumbnailUrl}></img>
              <h2 className="users__name">{item.users.name}</h2>
              <p className="users__mail">{item.users.email}</p>
              <p className="users__description">{item.users.body}</p>
            </a>
          </article>
        ))}
      </div>
    )} */}
  </div>
  )
}
