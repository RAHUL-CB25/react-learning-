function customRender(reactElement, container) {
    // Create a DOM element based on the type (e.g., 'a')
    const domElement = document.createElement(reactElement.type);

    // Set the inner text/content from children (corrected from Children → children)
    domElement.innerHTML = reactElement.children;

    // Assign props (like href, target) to the created element
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // skip children, already handled
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the element to the container (e.g., #root)
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google' // fixed Children → children
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
