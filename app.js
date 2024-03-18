
  const heading = React.createElement("h1",{ id: "heading", xyz:"abc"}, "Hello world from React!");


  const parent = React.createElement("div", {id:"parent" },[
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, "Hwllo! I am Pranjal singh"),
        React.createElement("h1", {}, "Hello! I am software developer")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "Hwllo! I am Pranjal singh"),
        React.createElement("h1", {}, "Hello! I am software developer")
    ]),

  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log(heading);
  console.log(parent);

  
  root.render(heading);
  root.render(parent);
