var firebaseConfig = {
  apiKey: "AIzaSyAqgdjj8tepCG_Fmx6y30H1RP3TDfbA4zs",
  authDomain: "wikipedia-search-d69e4.firebaseapp.com",
  databaseURL: "https://wikipedia-search-d69e4.firebaseio.com",
  // projectId: "wikipedia-search-d69e4",
  storageBucket: "wikipedia-search-d69e4.appspot.com",
  // messagingSenderId: "216046526757",
  // appId: "1:216046526757:web:4c944ac8bdf4e45278bacc",
  measurementId: "G-6ZYHD6SQ77"
};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

function addItem() {
  var ul = document.getElementById("history-list");
  var input = document.querySelector(".searchForm-input").value;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
}

$("#clear-history-button").on("click", function() {
  $("#history-list").empty();
});

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  // get the value of the input field
  const input = document.querySelector(".searchForm-input").value;
  // remove whitespace from the input
  const searchQuery = input.trim();
  // call `fetchResults` and pass it the `searchQuery`
  fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const results = data.query.search;
      displayResults(results);
    });

  const endpoint2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=${searchQuery}&gpslimit=20`;
  fetch(endpoint2)
    .then(response => response.json())
    .then(data => {
      const results = data.query.search;
      console.log("here is my result ******* ", results);
      displayResults(results);
    });
}

function displayResults(results) {
  // Store a reference to `.searchResults`
  const searchResults = document.querySelector(".searchResults");
  // Remove all child elements
  searchResults.innerHTML = "";
  // Loop over results array
  results.forEach(result => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="resultItem">
            <div class="resultImg">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Article_icon_cropped.svg/512px-Article_icon_cropped.svg.png' class='responsive-img valign articleIcon'>
            </div>
            <h3 class="resultItem-title">
                <a href="${url}" target="_blank">${result.title}</a>
            </h3>
            <span class="resultItem-snippet">${result.snippet}</span><br>
            <a href="${url}" class="resultItem-link" target="_blank">${url}</a>
            </div>`
    );
  });
}

function showHistory() {
  var x = document.getElementById("history-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const form = document.querySelector(".searchForm");
form.addEventListener("submit", handleSubmit);
