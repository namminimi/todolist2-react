import React,{ useState } from 'react';

//함수형 컴퍼넌트
const TodoTotal = () => {
    //인풋의 값 관리, 버튼클릭시 할일 목록 추가
    const [inputText, setInputText] = useState("");
    console.log(useState("")) //배열 형태 확인용
    const [todoLists, setTodoLists] = useState([
        {id:1, text: "할일1"},
        {id:2, text: "할일2"},
        {id:3, text: "할일3"}
    ]);

    const onAddTodo = () => {
        const newTodoLists = [
            ...todoLists,
            {id: todoLists.length+1, text: inputText}
        ]
        setTodoLists(newTodoLists);
        setInputText("");
    }

    const onChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText)
    }
    const delTodoLists = (id) =>{
        const newTodoLists = todoLists.filter(todo => todo.id != id);
        setTodoLists(newTodoLists);
    }
    return (  //리턴부터는 jsx구문 화면 나타내기
        <div className='todo'>
            
            <div>
                <ul className="todoLists">
                    {todoLists.map(todo=><li key={todo.id}>{todo.text}
                    <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
                    {/* delTodoLists(todo.id) 이렇게 넣으면 호출 함수자체가 들어가야함 */}
                </ul>
            </div>
        </div>
    );
};

export default TodoTotal;