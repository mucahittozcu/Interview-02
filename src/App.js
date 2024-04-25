import "./styles.css";
import { useEffect, useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [roboInput,setRoboInput] = useState("")
  const [items, setItems] = useState([])

      // yeni bir öğe ekler.
    function handleAddItem(value) {
       const createItem = {id: crypto.randomUUID() ,url:`https://robohash.org/${value}`}
       setItems([...items,createItem])
      }
      const handleClick = (id) => {
        // // Filtreledikten sonra id'ye ait nesneyi listeden çıkarıyoruz.
        const deleteFilter = items.filter((item) =>{
           return item.id !== id
        })
        setItems(deleteFilter)
       }
useEffect(() =>{
  if(roboInput.trim().length > 0) {
    handleAddItem()
  }
},[])

  const handleRoboInputSubmit = (event) => {
    event.preventDefault()
    if(roboInput.trim().length > 0) {
      handleAddItem(roboInput)
      setRoboInput("")
    }
  }

  return(
    <div className="container">
    <form onSubmit={handleRoboInputSubmit}>
      <input 
        className="input"
        type="text"
        placeholder="Generate Robot"
        value={roboInput}
        onChange={(event) =>  setRoboInput(event.target.value)} />
      <button className="btn" >Generate</button>
    </form>
      
      <h1>Robot List</h1>
      <ul className="list">
        {items.map((item) => (
          <li className="listt" key={item.id}>
             <img onClick={() =>handleClick(item.id)} src={item.url} alt="robot" />
          </li>
      ))}
      </ul>
    </div>
  ) 
}
export default App

  // const fetchRobotApi = async () => {
  //   try{
  //       const response = await fetch(`https://robohash.org/${roboInput}`)
  //       setRobo(response) 
  //       console.log(response)
  //     }
  //     catch(err){
  //       console.error(`Robot api alınamadı ${err.message}`)
  //     }
  //   }

  //   useEffect(() => {
  //     fetchRobotApi()
  //   },[])
  

//////////////////////////////////////////
// import "./styles.css";

// import { useEffect, useState } from "react";

// function App() {
//   return <RobotList />;
// }

// const RobotList = () => {
//   const [roboInput,setRoboInput] = useState("")
//   const [robo,setRobo] = useState([])
//   const [items, setItems] = useState([])

//       // yeni bir öğe ekler.
//     function handleAddItem(value) {
//        const createItem = {id: crypto.randomUUID() ,robo:`https://robohash.org/${value}`}
//        setItems([...items,createItem])
//       }

//   const fetchRobotApi = async () => {
//     try{
//         const response = await fetch(`https://robohash.org/${roboInput}`)
//         setRobo(response) 
//         console.log(response)
//       }
//       catch(err){
//         console.error(`Robot api alınamadı ${err.message}`)
//       }
//     }

//     useEffect(() => {
//       fetchRobotApi()
//     },[])
  
  
//   const handleRoboInputSubmit = (event) => {
//     event.preventDefault()
//     fetchRobotApi()

//     if(roboInput.trim().length > 0) {
//       handleAddItem(roboInput)
//       setRoboInput("")
//     }
//   }

//   return(
//     <div>
//     <form onSubmit={handleRoboInputSubmit}>
//       <input 
//         className="input"
//         type="text"
//         placeholder="Generate Robot"
//         value={roboInput}
//         onChange={(event) =>  setRoboInput(event.target.value)} />
//       <button className="btn" >Generate</button>
//     </form>
      
//       <h1>Robot List</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//              <img src={item.url} alt="robot" />
//           </li>
//       ))}
//       </ul>
//     </div>
//   ) 
// }
// export default App;