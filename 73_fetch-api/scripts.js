fetch("https://dummyjson.com/products", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));



fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "I am in love with Meem.",
    userId: 5,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
