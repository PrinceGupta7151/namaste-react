    //    const heading = React.createElement(
    //     "h1",
    //     {id:"heading ",key:"abc"},
    //     "Hello WOrld From React!"
    // );

    //     const root = ReactDOM.createRoot(document.getElementById("root"));

    //     root.render(heading);


    const parent = React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", { id: "heading" }, "I am H1 Tag"),
            React.createElement("h2", {}, " I am h2 Tag"),
        ]),
    ]);
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);