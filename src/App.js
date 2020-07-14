import React, { useState } from 'react';
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';
import TableGrid from './Components/TableGrid';
import Form from './Components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [items, setItems] = useState([
    {
      text: 'Apples',
      isCompleted: false,
    },
    {
      text: 'Bananas',
      isCompleted: false,
    },
    {
      text: 'Bread',
      isCompleted: false,      
    },
  ]);

  const addItem = (text) => {
    const newItem = [...items, { text }];
    setItems(newItem);
  }

  const completeItem = index => {
    const newItems = [...items];
    if(!newItems[index].isCompleted){
      newItems[index].isCompleted = true;
    } else {
      newItems[index].isCompleted = false;
    }
    setItems(newItems);
  }

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }



  return (
    <div className="App">
      <Header/>
        <Container>
            <TableGrid item={items} removeItem={removeItem} completeItem={completeItem}/>
            <Form addItem={addItem}/>
        </Container>
    </div>
  );
}

export default App;
