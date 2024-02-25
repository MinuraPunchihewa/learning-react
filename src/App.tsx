import { useState } from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.css' // run `npm install bootstrap` to install and then import it

// components
import Alert from './components/Alert';
import Button from './components/Button';
// import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert!</Alert>}
      <Button type="primary" onClick={() => setAlertVisibility(true)}>Click Me!</Button>
    </div>
  )
}

// function App() {
  // TypeScript is smart enough to infer the type of the items array
  // however, if you want to be explicit, you can do so like this:
  // let items: string[] = [...]
  // const items = [
  //     'Colombo',
  //     'Galle',
  //     'Jaffna',
  //     'Kandy',
  //     'Negombo'
  // ]
  // however, TypeScript requires us to be explicit about the type of the parameter in the situation below
  // because it is not possible to infer the type of the event
  // by including this annotation (it is required), we get autocompletion, type safety, and documentation
  // const handleSelectItem = (item: string) => console.log(item);

  // return <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}></ListGroup>
// }

export default App
