import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChooseUs from "../ChosseUs/ChooseUs";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <div className=" dark:bg-black">
          
            <Banner></Banner>
            <Categories></Categories>
            <ChooseUs></ChooseUs>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;