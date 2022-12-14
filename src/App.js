import Site from "./components/Site";

function App() {

  const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Footbal", price: "$399.99", stocked: false, name: "ball"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  return (
    <div className="App">
        <Site products={products}></Site>
    </div>
  );
}

export default App;
