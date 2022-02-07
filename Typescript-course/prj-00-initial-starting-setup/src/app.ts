import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// we call our classes with the keyword new 
// we organized the project, creating the structure of folder, the reason is be more easy to understand
// and scalable the project
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
