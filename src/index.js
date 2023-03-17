import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

function renderApp() {
	root.render(App());
}

setInterval(renderApp, 1000);