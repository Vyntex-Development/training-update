import { client } from "../utils/utils";

const about = ({ attributes }) => {
  const filteredData = attributes.Slice.find((slice) => slice.isVisible);
  console.log(filteredData);

  return (
    <div>
      <h1>{filteredData.Title}</h1>
      <h3>{filteredData.description}</h3>
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const { data: attributes } = await client.request(
    "http://localhost:1337/api/about-page?populate=*"
  );

  return {
    props: attributes,
    revalidate: 10,
  };
}
