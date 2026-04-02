
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Home/Banner'
import { Suspense, useState } from 'react';
import Players from './Components/Players/Players';
  import { ToastContainer, toast } from 'react-toastify';
import Footer from './Components/Footer/Footer';

const fetchPlayers =async()=>{
  const res = await fetch("/data.json")
  const data = await res.json()
return data;
}

const playerPromise = fetchPlayers()
function App() {
 const [coin,setCoin] =useState(0)

  return (
    <>
<Navbar coin={coin}></Navbar>
<Banner setCoin={setCoin}></Banner>
<Suspense fallback={<span className="loading loading-dots loading-xl"></span>} >
<Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
</Suspense>
<Footer></Footer>
       <ToastContainer position="top-center"
       autoClose={2000}
       />
    </>
  )
}

export default App
