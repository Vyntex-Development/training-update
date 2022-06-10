import PricingPage from "../components/Pages/PricingPage/PricingPage";
import { client } from "../utils/utils";

const pricing = ({ data: faqs }) => {
  return (
    <div>
      <PricingPage faqs={faqs} />
    </div>
  );
};

export default pricing;

export async function getStaticProps() {
  const data = await client.request(
    "http://localhost:1337/api/faqs?populate=*"
  );

  return {
    props: data,
  };
}
