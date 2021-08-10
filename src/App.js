import logo from './logo.svg';
import './App.css';
import ComponentProfil from './profil/ComponentProfil';

function App() {

  const styleObject = {         marginLeft: 100,  color: "red", textAlign: 'center'}

  return (
    <div    >
          <ComponentProfil style={styleObject} fullName='Mohamed Boujneh' bio="Life is way too short for bad vibes."  profession="Ingénieur informatique" >
                <img src={logo} alt=""  />

          </ComponentProfil>
    </div>
  );
}

export default App;
