const domContainer = document.querySelector('#root');

const myElement = React.createElement('div', null, [
    React.createElement('p', null, 'Hello world'),
]);


ReactDOM.render(myElement, domContainer);