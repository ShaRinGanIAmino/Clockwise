import { Footer, Card } from "../components";
import { womenProducts } from "../constants";

const Women = () => {
  return (
    <div>
      <section
        className="flex flex-col justify-center gap-20 items-center mt-28 mb-36"
        id="collection"
      >
        <p className=" font-poppins font-medium text-xl sm:text-3xl text-primary ">
          Quality time for women
        </p>
        <div className="flex flex-wrap  gap-16  w-full justify-center items-center">
          {womenProducts.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Women;
