import { renderRoutes } from 'react-router-config';
import '../styles/index.scss';

function App(props) {
  return renderRoutes(props.route.routes);
}
export default App
