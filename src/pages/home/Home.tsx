import "./homeStyle.css";
import homeImage from "../../assets/images/home-image.png";
import calvin from "../../assets/images/logos/CalvinKlein.png";
import gucci from "../../assets/images/logos/Gucci.png";
import prada from "../../assets/images/logos/prada.png";
import versace from "../../assets/images/logos/Versace.png";
import zara from "../../assets/images/logos/zara.png";
import start from "../../assets/images/Star.png";
import Card from "../../components/card";
import Loading from "../../components/loading";
import useClothingData from "../../hooks/useClothingData";
import party from "../../assets/images/Party.png";
import gym from "../../assets/images/gym.png";
import formal from "../../assets/images/formal.png";
import casual from "../../assets/images/Casual.png";
import ReviewCard from "../../components/reviewCard/ReviewCard";




type homeProps = {
  onLoadingComplete: () => void;
};

export default function Home({ onLoadingComplete }: homeProps) {
  const {clothing, loading, error} = useClothingData();

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  onLoadingComplete();
  return (
    <div className="home">
        <div className="first-bg-color">
          <div className="home-first-section container">
              <div className="description">
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>
                  Browse through our diverse range of meticulously crafted garments,
                  designed to bring out your individuality and cater to your
                  sense of style.
                </p>
                <button>
                  Shop Now
                </button>

                <div className="numbers">
                  <div>
                    <h2>200+</h2>
                    <p>International Brands</p>
                  </div>
                    <div className="line"></div>
                  <div>
                    <h2>2,000+</h2>
                    <p>High-Quality Products</p>
                  </div>
                  <div className="line"></div>
                  <div>
                    <h2>30,000+</h2>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>

              <div className="interface-picture">
                <img className="star-two" src={start} alt="" />
                <img className="star-one" src={start} alt="" />
                <img src={homeImage} alt="" />
              </div>
          </div>
        </div>

        <div className="home-first-section">
          <div className="brands">
            <div className="container">
              <img src={calvin} alt ="" />
              <img src={gucci} alt ="" />
              <img src={prada} alt ="" />
              <img src={versace} alt ="" />
              <img src={zara} alt ="" />
            </div>
          </div>
        </div>
      
        <div className="home-second-section container">
          <h1>NEW ARRIVALS</h1>
          <div className="products">
            {
              clothing.slice(4,8).map((item) => (
                <Card 
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating.rate}
                />
              ))
            }
          </div>
          <div className="view-all">
            <button>
              View All
            </button>
          </div>
          <div className="line"></div>
        </div>
        
        <div className="home-therd-section container">
          <h1>TOP SELLING</h1>
          <div className="products">
            {
              clothing.slice(0,4).map((item) => (
                <Card 
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating.rate}
                />
              ))
            }
          </div>
          <div className="view-all">
            <button>
              View All
            </button>
          </div>
        </div>

        <div className="home-fourth-section container">
            <h1>BROWSE BY DRESS STYLE</h1>
            <div className="clothes-styles-one">
              <div className="casual">
                <h3>Casual</h3>
                <img src={casual} alt="" />
              </div>
              <div className="formal">
                <h3>Formal</h3>
                <img src={formal} alt="" />
              </div>
              <div className="party">
                <h3>Party</h3>
                <img src={party} alt="" />
              </div>
              <div className="gym">
                <h3>Gym</h3>
                <img src={gym} alt="" />
              </div>
            </div>
        </div>

        <div className="customer-review container">
          <h1>OUR HAPPY CUSTOMERS</h1>
          <div className="review">
            <ReviewCard
              name="Sarah M." 
              review={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
            />
            <ReviewCard 
              name="Alex K." 
              review={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
            />
            <ReviewCard 
              name="James L." 
              review={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
            />
          </div>
        </div>
       
    </div>
  )
}
