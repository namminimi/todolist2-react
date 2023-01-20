import './App.css';
//import TodoTotal from './components/TodoTotal';
import {useState} from 'react';
import HeaderInput from './components/HeaderInput';
import Todolists from './components/Todolists';
//import './components/TodoTotal.css';

function App() {
  const [todoState, setTodoState] = useState({
    todoLists: [
      {id: 1, text: "할일1", isDone: false},
      {id: 2, text: "할일2", isDone: true}
    ],
    inputText: ""  //인풋텍스트 빈문자열
  });
  const [id, setId] = useState(3);  //구조분해할당
  const onChange = (e) => {  //체인지 함수
    setTodoState({  // 업데이트 
      ...todoState,   //useState 배열 객체 스프레드
      inputText: e.target.value // 인풋값 추가
    });
    
}
const onAddTodo = () => {
  const newTodoLists = [ 
      ...todoState.todoLists, // 
      {id: id, text: todoState.inputText, isDone: false}
  ]
  setTodoState({
    todoLists:newTodoLists,
    inputText: ""
  })
  setId(id+1)
  console.log(todoState.todoLists)
}
const delTodoLists = (id) =>{
  const newTodoLists = todoState.todoLists.filter(todo => todo.id != id);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
}

const onIsDoneToggle = (id) => {
  const newTodoLists = todoState.todoLists.map(todo=>
    todo.id === id ? {
      ...todo,
       isDone: !todo.isDone}:todo)
    setTodoState({
      ...todoState,
      todoLists: newTodoLists
    });
}
  return (
    <div className="App todo">
      <HeaderInput 
      inputText={todoState.inputText}  // 키이름 = 벨유값
      onChange={onChange} 
      onAddTodo={onAddTodo}/>
      <Todolists todoLists={todoState.todoLists} delTodoLists={delTodoLists} 
      onIsDoneToggle={onIsDoneToggle}/>
    </div>
  );
}

export default App;
