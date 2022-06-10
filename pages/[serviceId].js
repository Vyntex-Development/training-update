import { useRouter } from "next/router";

const service = ({ service }) => {
  return <h1>Tite 1</h1>;
};

export default service;

// BAKEND LOGIC ZA DINAMICKE STRANICE

// export async function getStaticProps(context) {
//   const id = context.params.serviceId;
//   console.log(id);
//   const response = await fetch(`http://localhost:1337/api/services/${id}`);
//   const data = await response.json();

//   return {
//     props: {
//       service: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const response = await fetch("http://localhost:1337/api/services?populate=*");
//   const { data } = await response.json();
//   const paths = data.map((service) => {
//     return {
//       params: {
//         serviceId: `${service.id}`,
//       },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false, // false or 'blocking'
//   };
// }
