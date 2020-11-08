import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (<div>
    <div >
      <Button variant="contained" color="primary">
      Hello World
    </Button><Button variant="contained" color="secondary" onClick={() => { alert('clicked') }}>Click me</Button>
    </div>
    <div>
 

    </div>
    </div>
  );
}

export default App;
