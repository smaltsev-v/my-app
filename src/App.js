import React from 'react';
import { Component } from 'react/cjs/react.production.min';
// import PaintingList from './components/PaintingsList';
// import ColorPicker from './components/ColorPiker';
import Section from './components/Section';
// import paintings from './paintings.json';
// import Alert from './components/Alert/Alert';
// import Container from './components/Container/container';
// import Box from './components/Box/Box';
// import Counter from './components/Counter';
// import DropDown from './components/Dropdown/Dropdown';
// import Form from './components/Form/Form.jsx';
// import colorPickerOptions from './data/colorpiker.json';
import TodoList from './components/TodoList';
import initialTodos from './data/todos.json';
import TodoEditor from './components/TodoEdite';
import Filter from './components/Filter'
import shortid from 'shortid';
import Modal from './components/Modal';
import Clock from './components/Clock';
import tabs from './data/tabs.json';
import Tabs from './components/Tabs/Tabs';
import IconButton from './components/IconButton/IconButton';
import {ReactComponent as AddIcon } from './Icons/add.svg'




// export default function App() {
//   return(
//     <div>
//      <Section title="Топ недель" >
//         <PaintingList items={paintings} />
//       </Section>
      
//       <Section title="Лучшее">
//         <PaintingList items={paintings} />
//       </Section>
    
//     </div>
//    );
// }



// export default function App() {
//   return(
//     <div>
//       <ColorPicker options={colorPickerOptions} />
//       <PaintingList items={paintings}/>
//     </div>
//    );
// }


// export default function App() {
//   return (
    
//     <Container>
//       <div>
//      <Section title="Топ недель" >
//         <PaintingList items={paintings} />
//       </Section>
      
//       <Section title="Лучшее">
//         <PaintingList items={paintings} />
//       </Section>
//     <Box type="small"  classNames = "big red"/>
//       <Box type="medium"/>
//       <Box type="large"/>
//       </div>
//       <div >
//       <ColorPicker options={colorPickerOptions} />
//       <PaintingList items={paintings}/>
//     </div>
//       <Alert text="Шеф все пропало! "type='success'/>
//       <Alert text="Шеф все пропало! "type='warning' />
//       <Alert text="Шеф все пропало! "type='error'/>
      
//     </Container>
    

//    );
// }
// export default function App() {
//   return (
    
    
//     <Container>
//       <Box type="small"  classNames = "big red"/>
//       <Box type="medium"/>
//       <Box type="large"/>
//     </Container>
//    );
// }


// Занятие 3.  События и состояние. 
// export default function App() {
//   return (
//     <Container>
//       <Counter initialValue={5}/>
      
//     </Container>
//   )
// }



// Выпадающие меню 
// const App = () => (
//   <>
//     <h1>Меню</h1>
//   <DropDown/>
//   </>
  
  
// )
// export default App;


// Живой ColorPicer
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal:false
  };

  componentDidMount() {
    
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
     }
  }

  

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();   закрытие можалки по кнопки сохрать 
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };
    
  toggleModal = () => {

    this.setState(({ showModal }) => ({

      showModal: !showModal,

    }));

  };

  
  render() {
    const { todos, filter, showModal} = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Section>

        <IconButton onClick={this.toggleModal} arial-label='Добавить Todo'>
          
          <AddIcon width="40" height="40" fill="#fff"/>

        </IconButton>

        <Clock />
        <Tabs items={tabs}/>


        {/* <button type="button" onClick={this.toggleModal}>
          открыть модалку
        </button> */}
        {showModal && <Modal onClose={this.toggleModal}>
          <TodoEditor onSubmit={this.addTodo} />
          <button type="button"onClick={this.toggleModal}>Закрыть</button>
        </Modal>}
        
        {/* TODO: вынести в отдельный компонент */}

        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

      </Section>
    );
  }
}

export default App;