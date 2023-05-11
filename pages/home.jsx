import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Home = () => {
    

    return (
        <div>
            <Navbar />
                <CreatePost />
            <Posts />
        </div>
    );

}

export default Home;

