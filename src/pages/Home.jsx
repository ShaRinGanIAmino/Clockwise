import { hero, services } from "../assets";
import { Card, Footer } from "../components";
import { newProducts } from "../constants";

const Home = () => {
  return (
    <div>
      <section className="  flex flex-col sm:flex-row justify-between items-center bg-secondary w-screen h-5/6 sm:pl-20 sm:pr-20 sm:pt-24 sm:pb-36 pl-10 pr-10 pb-5 pt-5 ">
        <div className="flex flex-col gap-8 w-[90%] sm:w-[50%] items-center sm:items-start">
          <p className=" font-poppins font-medium text-3xl sm:text-6xl text-primary leading-relaxed sm:leading-normal">
            Time moves forward, so should your style.
          </p>
          <p className=" font-poppins text-primary">
            Clockwise Co is a watch store that offers precision timepieces with
            timeless style. We provide customers with elegant and functional
            watches for every occasion.
          </p>
          <button className=" border-solid border-2 border-primary text-sm sm:text-base font-poppins font-medium text-primary w-[150px] sm:w-[200px] sm:pt-2 sm:pb-2 sm:pl-6 sm:pr-6 pl-3 pr-3 pt-2 pb-2 hover:bg-primary hover:text-secondary">
            <a href={"#collection"}>Get started</a>
          </button>
        </div>
        <div>
          <img
            src={hero}
            alt="Hero"
            className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-contain border-solid border-[1px] border-primary rounded-full sm:mt-0 mt-10"
          />
        </div>
      </section>
      <section
        className="flex flex-col justify-center gap-10 sm:gap-20 items-center mt-36 mb-24"
        id="collection"
      >
        <p className=" font-poppins font-medium text-xl sm:text-3xl text-primary">
          Best Sellers
        </p>
        <div className="flex flex-wrap  gap-16  w-full justify-center items-center">
          {newProducts.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center gap-10 sm:gap-20 items-center mt-36 mb-36 ">
        <p className=" font-poppins font-medium text-xl sm:text-3xl text-primary">
          Our services
        </p>
        <div className=" flex flex-col md:flex-row justify-center items-center bg-secondary">
          <p className="pl-16 pr-16 pt-10 pb-10 font-poppins text-primary text-sm sm:text-base">
            At Clockwise Co, we pride ourselves on providing a highly
            professional service to our customers. From the moment you enter our
            store or visit our website, you can expect to be treated with the
            utmost respect and care. Our team of experts is dedicated to helping
            you find the perfect timepiece that fits your style, needs, and
            budget. We offer a wide range of high-quality watches from top
            brands, and we are committed to ensuring that each product we sell
            is authentic and of the highest quality. Our knowledgeable staff is
            always available to answer any questions you may have and provide
            expert advice to help you make an informed decision. We also offer
            fast and reliable shipping, hassle-free returns, and excellent
            customer support. With Clockwise Co, you can trust that you are
            receiving a professional and trustworthy service every time you shop
            with us.
          </p>
          <img src={services} alt="services" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
