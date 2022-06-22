
function App() {
    const [todos, setTodos] = React.useState(
        [{
            text: 'Learn react',
            isCompleted: false,
        },
        {
            text: 'Understand it all',
            isCompleted: false,
        },
        {
            text: 'Eat and Stay Hydrated',
            isCompleted: false,
        },
        {
            text: 'Complete this week',
            isCompleted: false,         
        }]
    );
   
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }
  
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
  
    return (
        <div className="app">
            <div className="todo-list">
        {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
           <TodoForm addTodo={addTodo} />
            </div>
        </div>
   
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )