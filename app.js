// creating HTML element from react element
/*
const h1 = React.createElement('h1', {id : 'heading'}, "Hello World using React");
const root = ReactDOM.createRoot(document
    .getElementById('root')
);
root.render(h1);
*/

// Nested Elements
/*
<div id="parent">
    <div id="child">
        <h1>Hello World!</h1>
    </div>
</div>
*/

// react element (object) creation
const parent = React.createElement(
    'div',
    {id:"parent"}, 
    React.createElement(
        'div',
        {id: "child"},
        React.createElement(
            'h1',
            {},
            "Hello World!"
        )
    )
);

// Siblings
// Don't forget to give unique key to siblings
/*
<div id="parent">
    <div id="child">
        <h1 id="child1">Hello World!</h1>
        <h1 id="child2">Good Morning!</h1>
    </div>
</div>
*/

const siblings = React.createElement(
    'div',
    {id : 'parent'},
    React.createElement(
        'div',
        {id : 'child'},
        [
            React.createElement(
                'h1',
                {id : 'child1'},
                "Hello World!"
            ),
            React.createElement(
                'h1',
                {id : 'child2'},
                "Good Morning!"
            )
        ]
    )
)

// multiple siblings
// Don't forget to give unique key to siblings
/*
<div id="parent">
    <div id="child-x">
        <h1 id="child1">Hello World!</h1>
        <h1 id="child2">Good Morning!</h1>
    </div>
    <div id="child-y">
        <p id="y-1">Hello World!</p>
        <p id="y-2">Good Morning!</p>
    </div>
</div>
*/

const multiple = React.createElement(
    'div',
    {id:'parent'},
    [
        React.createElement(
            'div',
            {id : 'child-x'},
            [
                React.createElement(
                    'h1',
                    {id : 'child1'},
                    "Hello World!"
                ),
                React.createElement(
                    'h1',
                    {id : 'child2'},
                    "Good Morning!"
                )
            ]
        ),
        React.createElement(
            'div',
            {id : 'child-y'},
            [
                React.createElement(
                    'p',
                    {id : 'y-1'},
                    "Hello World!"
                ),
                React.createElement(
                    'p',
                    {id : 'y-2'},
                    "Good Morning!"
                )
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// converting the object to HTML element
root.render(multiple);


// The content of the root (index.html) will be replaced by the content of the react element at the time of rendering.