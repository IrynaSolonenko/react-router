import { Link } from "react-router-dom";
import ContactsBook from './Contact-components/ContactsBook';
import Todo from './Todo-components/Todo';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
          <p>this is home page</p>
            <ul>
                <Link to={'/contacts'}>Contacts</Link><br/>
                <Link to={'/todo'}>Todo</Link>
            </ul>
        </div>
    );
};

export default Home;