import logo from './logo.svg';
import './App.css';
import Sheet from './components/Sheet';

function App() {


  

  return (
    <>
    <Sheet />
    <div className="App">
      <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">State</th>
      <th className="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">Indiana</td>
      <td className="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Ohio</td>
      <td className="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Michigan</td>
      <td className="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
</div>
    
    </>
  );
}

export default App;
