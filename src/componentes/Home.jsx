import Header from "./header";
import Cardpizza from "./Cardpizza";
import Footer from "./footer";

function Home() {
  return (
    <>
      <Header />

      <div className="d-flex justify-content-center flex-wrap">
        <Cardpizza
          name="Napolitana"
          img="https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
          price={5950}
          ingredients={[
            "mozzarella",
            "tomates",
            "jamón",
            "orégano"
          ]}
        />

        <Cardpizza
          name="Española"
          img="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          price={6950}
          ingredients={[
            "mozzarella",
            "gorgonzola",
            "parmesano",
            "provolone"
          ]}
        />
        
        <Cardpizza
          name="Pepperoni"
          img="https://images.unsplash.com/photo-1628840042765-356cda07504e"
          price={6950}
          ingredients={[
            "mozzarella",
            "pepperoni",
            "orégano"
          ]}
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;