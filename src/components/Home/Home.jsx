import { Outlet } from 'react-router-dom';
import homeImage from '../../.././public/assets/images/home2.jpeg'
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <img src={homeImage} alt="" />
            <h1>This is our awesome home components </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;