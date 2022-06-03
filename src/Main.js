
function Main(props) {


  const countryList = props.tenHighestPopulation.map((pop) => (
    <li key={pop.country} className="country">{pop.country.toUpperCase()}</li>
  ));
 const popWidth = props.tenHighestPopulation[0].population 
 ;

const len = props.tenHighestPopulation.map((pop) => (
  <li
    key={pop.country}
    style={{ maxWidth: (Number(pop.population)/ Number(popWidth)).toFixed(3) * 100 +'%'}}
    className="bar"
  >
    {/* {" "}
    {((Number(pop.population) / Number(popWidth)) * 100).toFixed(1)}
    {"% "} */}
  </li>
));

   

  const populationList = props.tenHighestPopulation.map((pop) => (
    <li key={pop.population} className="population">{pop.population.toLocaleString("en-US")}</li>
  ));

  return (
    <ul>
      <div >{countryList}</div>
      <div className="set"> {len}</div>
      <div > {populationList}</div>
    </ul>
  );
 
}

export default Main;