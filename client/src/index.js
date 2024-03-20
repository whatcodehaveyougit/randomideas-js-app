import 'regenerator-runtime/runtime';
import './styles/style.scss'
import Modal from './components/Modal'
import IdeaForm from './components/IdeaForm'
import IdeaList from './components/IdeaList';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
// ideaList.render();
