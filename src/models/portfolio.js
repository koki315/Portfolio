const portfolios = [
  {
    title: "本サイト",
    name: "site1",
    description: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    url: 'https://www.google.com/?hl=ja',
  },
  {
    title: "アプリ1",
    name: "site2",
    description: "ccccccccccccccccccccccccccccccc",
    url:'https://ja.wikipedia.org/wiki/Instagram'
  },
];

const portfolio = class portfolio {
  static returnPortfolio(name) {
    console.log(name);
    const returnedPortfolio = portfolios.find(
      (portfolio) => portfolio.name === name
    );
    const details = {
      title: returnedPortfolio.title,
      description: returnedPortfolio.description,
      url: returnedPortfolio.url,
    };
    
    return details;
  }

  static fetchportfolio() {
    return portfolios;
  }
};

export default portfolio;
