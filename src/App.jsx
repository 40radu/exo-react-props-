import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserList } from './components/UserList';
import { CSSProperties } from "react";
import { BarLoader } from 'react-spinners';


export function App() {
  const [users, setUsers] = useState([]);

  const [waiting, setWaiting] = useState(true);

  function fetchUser() {

    const takeData = fetch("https://jsonplaceholder.typicode.com/users").then(async (data) => {
      const allData = await data.json();
      setUsers(allData)
    })
  }


  useEffect(() => {

    setTimeout(() => {
      fetchUser()
      setWaiting (false)
    }, 3000)



  }, [])

  return (
    <>
      <header className='header'> <h1>Liste des agents</h1></header>
      <main>
        <section className="categorie">
          <div className='categorie__name'>Nom</div>
          <div className="categorie__email">Email</div>
          <div className="categorie__company">Compagnie</div>
        </section>
        {waiting && <BarLoader color="#36d7b7" width={"100%"} />}
        <UserList data={users} />
      </main>



    </>
  )
}


