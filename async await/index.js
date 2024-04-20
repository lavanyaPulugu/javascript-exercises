async function fetchData() {
  const [data1, data2] = await Promise.all([
    fetch("https://api.example.com/data1").then((response) => response.json()),
    fetch("https://api.example.com/data2").then((response) => response.json()),
  ]);
  console.log("Data 1:", data1);
  console.log("Data 2:", data2);
}

fetchData();
