const lists = document.querySelector(".lists");

export async function fetchData() {
  const url = "https://615485ee2473940017efaed3.mockapi.io/assessment";
  const response = await fetch(url);
  const result = await response.json();
  result.map((item) => {
    lists.insertAdjacentHTML(
      "beforeend",
      `
          <li>
            <div>${item.id} - ${item.name}</div>
            <div><img src="${item.avatar}" /></div>
            <div>${item.createdAt}</div>
          </li>
      `
    );
  });
}

fetchData();
