import Hero from "../components/Layout/Hero";
import CardsSection from "../components/Layout/CardsSection";
import Slider from "../components/Layout/Slider";
import { client } from "../utils/utils";
import Form from "../components/Layout/Form";

export default function Home({ services, testimonials, heroData, formConfig }) {
  // CONSOLE LOG DATA TO CHECK IF EXISTS
  // console.log(services)
  return (
    <>
      <Hero heroData={heroData}></Hero>
      <CardsSection services={services} />
      {/* <Slider testimonials={testimonials} /> */}
      <Form formConfig={formConfig} />
      {/* <MojaComponente services={services}></MojaComponente> */}
    </>
  );
}

export async function getStaticProps() {
  const { data: services } = await client.request(
    "http://localhost:1337/api/services?populate=*"
  );
  const { data: heroData } = await client.request(
    "http://localhost:1337/api/home-page?populate=*"
  );
  const { data: testimonials } = await client.request(
    "http://localhost:1337/api/testimonials"
  );

  const { data: formConfig } = await client.request(
    "http://localhost:1337/api/form-datas?populate=*"
  );

  return {
    props: {
      services,
      testimonials,
      heroData,
      formConfig,
    },
  };
}
