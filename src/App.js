import PaintingList from './components/PaintingsList';
import Section from './components/Section';
import paintings from './paintings.json';


export default function App() {
  return(
    <div>
     <Section title="Топ недель" >
        <PaintingList items={paintings} />
      </Section>
      
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    
    </div>
   );
}
