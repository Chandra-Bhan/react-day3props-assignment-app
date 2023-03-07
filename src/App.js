import logo from './logo.svg';
import './App.css';
import RegisterationComp from './Components/Challenge1/RegisterationComp';
import Comp1 from './Components/Challenge2/Comp1';
import Comp2 from './Components/Challenge2/Comp2';
import Comp3 from './Components/Challenge2/Comp3';

function App() {
  const headingText="Register here ...";
  const buttonText="Submit";
  return (
    <div className="Regborder">



{/* 
      <RegisterationComp hText={headingText} bText={buttonText}/> */}




    <Comp1 hText={headingText}/>
    <Comp2/>
    <Comp3 bText={buttonText}/>
    </div>
  );
}

export default App;
