import React from 'react';
// import PaintingList from './components/PaintingsList';
import ColorPicker from './components/ColorPiker/ColorPicker';
// import Section from './components/Section';
// import paintings from './paintings.json';
// import Alert from './components/Alert/Alert';
// import Container from './components/Container/container';
// import Box from './components/Box/Box';
import Counter from './components/Counter';
// import DropDown from './components/Dropdown/Dropdown';

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


// Живой ClorPicer
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => (
 
  <>
    <h1> Состояние компонента </h1>
    <Counter initialValue={5}/>
    {/* <DropDown/> */}
    <ColorPicker options={colorPickerOptions} />
    
  </>
    
   
);
export default App;