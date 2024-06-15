
import './App.css';

const todos = [
  {name: "study", time: 2},
  {name: "Pray", time: 2},
  {name: "Bible reading", time: 3}
]

export default function App() {

  function AddNewTask(){
    todos.push()
  }


  return (
    <>
    <div className='container'>

    <h1>Welcome in My toDoListe App</h1>
    <br/>
    <ul>
      {todos.map((todo)=>{
        return <li>
          <span>{todo.name}</span>
          <small>{todo.time} H </small>
          <button className='delete'>X</button>
          <br/>
        </li>
      })}
    </ul>

    <div>
      <form className='form'>
        <input type="text" placeholder='nouvelle taches'/>
        <br/>
        <button onClick={AddNewTask}>Ajouter</button>
      </form>
      
    </div>

    </div>
    </>
  );
}


