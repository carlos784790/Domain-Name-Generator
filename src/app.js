let pronouns = ["the", "our", "my", "your", "his", "her"];
let adjectives = [
  "great",
  "big",
  "orange",
  "spooky",
  "terrific",
  "wonderful",
  "amazing",
  "painted",
  "pretty",
  "excellent",
  "tasty",
  "humble",
  "gentle",
  "quiet",
  "loud"
];
let nouns = [
  "jogger",
  "racoon",
  "saloon",
  "palace",
  "cafe",
  "farm",
  "hamster",
  "deer",
  "smokehouse",
  "bar",
  "music hall",
  "beauty shop",
  "castle",
  "hotel",
  "diner",
  "theater"
];
let domains = [];

const generateDomains = () => {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let domain = pronouns[i] + adjectives[j] + nouns[k] + ".com";
        domains.push(domain);
      }
    }
  }
  displayDomains();
};

const displayDomains = () => {
  const domainContainer = document.getElementById("domainContainer");
  domainContainer.innerHTML = "";

  domains.forEach(domain => {
    const domainElement = document.createElement("p");
    domainElement.textContent = domain;
    domainContainer.appendChild(domainElement);
  });
};

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateDomains);
