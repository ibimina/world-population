import Header from "./Header";
import Main from "./Main";

function App() {
 const tenHighestPopulation = [
   { country: "World", population: 7693165599 },
   { country: "China", population: 1377422166 },
   { country: "India", population: 1295210000 },
   { country: "USA", population: 323947000 },
   { country: "Indonesia", population: 258705000 },
   { country: "Brazil", population: 206135893 },
   { country: "Pakistan", population: 194125062 },
   { country: "Nigeria", population: 186988000 },
   { country: "Bangladesh", population: 161006790 },
   { country: "Russian", population: 146599183 },
   { country: "Japan", population: 126960000 },
 ];

  return (
    <div className="App">
      <Header title="30 Days Of React" subtitle="World population" heading="World most populated countries"/>
      <Main tenHighestPopulation={tenHighestPopulation}  />
    </div>
  );
}

export default App;
