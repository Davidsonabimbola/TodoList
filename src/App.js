
import './App.css';
import Form from 'react-bootstrap/Form';
import {Alert, Button} from 'react-bootstrap'
import { useState } from 'react';


const Items = [
  {
    Activity: "study",
    Description: "I want to study Javascript and React",
    Start_time: "8",
    End_time: "10",
    
  },
  {
    Activity:"gym",
    Description: "I want to do some cardio and push up",
    Start_time : "10",
    End_time: "11",
  },

  {
    Activity:"breakfast",
    Description:"I want to take Oats, sausage and omellette",
    Start_time: "11",
    End_time: "12"
  }

];


function App() {
  const [open, setOpen] = useState(false)
  const [list,setList] = useState([Items])

  function handleOpen(){
    setOpen(!open)
  }

  //  Add a function to update the list from AddList
   function updateList(newList) {
     setList([...list, newList]);
   }

//    function deleteTask (index) {
//     const updatedTasks = [...list];
//     setList(updatedTasks.splice(index,1));
// }

const deleteTask = (index) => {
   const updatedItems = list.filter((no, i) => i !== index);
   setList(updatedItems);
 };

  return (
    <div className="app">
      <TodoList provide = {list} deleteTask ={deleteTask}/>
      {open && <AddList added = {updateList} />}
      <Button  className='ht' onClick={handleOpen}>{open? 'close': 'Add to List'}</Button>
    </div>
  );
}

export default App;


function TodoList ({provide, deleteTask}){
  return(
    <div className='todoListTop'>
      <div className='list'>
        <div className='parts'>
<h2 className='head'>Your daily Todo List</h2>
<div>
  <ul>
  {provide.map((prov, index)=> 
     <Display props ={prov} key ={index} onDelete ={()=>deleteTask(index)}/>
    // <Display props ={prov} key ={index} />
  )}
  </ul>
    {/* <Button className='bt' onClick ={deleteTask}>Delete</Button>   */}
</div>
</div>
      </div>
    </div>
  )
}

function Display({props,onDelete}){
  return(
    
      <li className='display'>
      <p2> Activity:{props.Activity}</p2>
      <p2> Description:{props.Description}</p2>
      <p2>Start Time:{props.Start_time}</p2>
      <p2> End time:{props.End_time}</p2>
       <Button className='bt' onClick={onDelete}>Delete</Button>   
</li>
 

    
  )
}

function AddList({added}){
    const[act, SetAct]= useState("")
    const[des, SetDes]= useState("")
    const[st, SetSt] = useState("")
    const[et, SetEt] = useState("")

    
    function handleSubmit (e){
    e.preventDefault()

    
    
const todo = {
       Activity:act,
      Description:des,
      Start_time: st,
      End_time: et,
    }

    if (isNaN(parseInt(st))) {
  alert("Please input an integer for Start Time");
}

if (isNaN(parseInt(et))) {
  alert("Please input an integer for End Time");
}

     added(todo)

    SetAct('');
    SetDes('');
    SetSt('');
    SetEt('');
   
   }
   return(
<div className='add'>
  <Form onSubmit={handleSubmit}>

    {/* <input className='val' type='text' value={act} placeholder='Activity' onChange={(e)=>SetAct(e.target.value)}/> */}

 <Form.Select aria-label="Default select example" onChange={e=>SetAct(e.target.value)}>
      <option>Open this select menu</option>
       <option value="House chores">House chores</option>
       <option value="Gym">Gym</option>
       <option value="Sports">Sports</option>
      <option value="Break">Break</option>
       <option value="Study">Study</option>
       <option value="Date">Date</option>
       <option value="HangOut">HangOut</option>
       <option value="Take a nap">Take a nap</option>
       <option value='Others'>Others</option>
 </Form.Select> 
 <input className='val' type='text' value={des} placeholder='Description' onChange={(e)=>SetDes(e.target.value)}/> 

 <input className='val' type='integer' value={st}  placeholder='Start Time' onChange={(e)=>SetSt(e.target.value)}/> 

 {/* <select
        value={selection} onChange={(e)=> setSelection(Number(e.currentTarget.value))}>     
      {Array.from({length:24},(_, i) => i+ 1).map((num)=> (<optionvalue={num} key={num}>{num}</option>))}
 </select> */}

 <input className='val' type='integer' value={et}  placeholder='End Time' onChange={(e)=>SetEt(e.target.value)}/> 

 <Button className='bt' type='submit'>Submit</Button>

 


</Form>
</div>
   )
 }

  