import {useState} from 'react'
import './App.css'
import Counter from './Counter'
function App() {
  const [count,setCount]=useState(0)
  
  const addCount =()=>{
    
    setCount(count+1)
 
  }
  const minusCount =()=>{
    if(count<=0){
      setCount(0)
    }else{
      setCount(count-1)
    }
    
 
  }

  let obj={
    title:'',
    count
  }
  return (
   <div className="App" >
    <div>
    <button onClick={minusCount} className='MinusButton' >-</button>
    </div>

    
    <Counter {...obj}/>

   

   <div>
    <button onClick={addCount} className='AddButton' >+</button>
    </div>

   </div>
   
  );
}

export default App;
