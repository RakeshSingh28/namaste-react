let header = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1", key: "child1" }, [React.createElement("span", { style: { fontWeight: 500 }, id: "heading1", key: 'span1' }, "Hello World from ReactJS!!"), React.createElement("h2", { id: "heading1", key: 'h2_1' }, "I am h2 tag")]), React.createElement("div", { id: "child2", key: "child2" }, [React.createElement("span", { style: { fontWeight: 500 }, id: "heading2", key: 'span2' }, "Hello World from ReactJS!!"), React.createElement("h2", { id: "heading2", key: 'h2_2' }, "I am h2 tag")])]);

// console.log(header); //object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);