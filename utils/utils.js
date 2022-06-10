const fetchData = async (URL, method, data) => {
  const response = await fetch(
    URL,
    method === "POST"
      ? {
          body: JSON.stringify(data),
          method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      : null
  );
  const dataResponse = response.json();
  return dataResponse;
};

export const client = {
  request: async (URL, method = "GET", data = null) => {
    return await fetchData(URL, method, data);
  },
};
