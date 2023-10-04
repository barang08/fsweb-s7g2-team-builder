import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Form from "./components/Form"
import UyeListeleme from "./components/UyeListeleme"


function App() {




  const [memberList, setMemberList] = useState([])

  const uyeEkle = (e) => {
    const newMemberList = [...memberList, e]
    setMemberList(newMemberList)

  }



  return (
    <div className="App">
      <img src={logo} width="80px" className="App-logo" alt="logo" />
      {memberList.length === 0 ?
        <div>Henüz üye eklenmedi.</div> : (
          <UyeListeleme UyeListelemePrp={memberList} />
        )}

      <Form UyeEklemePrp={uyeEkle} />

    </div>
  );
}

export default App;
