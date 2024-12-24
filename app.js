function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        className: 'App-logo',
        alt: 'logo',
      }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        'Learn React'
      )
    )
  );
}

window.onload = function () {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  root.render(React.createElement(App));
};
