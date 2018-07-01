console.log('App is running');

// JSX - Javascript XML
 
var template = React.createElement(
    "h1",
    { id: "test" },
    "Something new"
  );
var appRoot =document.getElementById('app');

ReactDOM.render(template,appRoot);
