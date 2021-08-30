interface dataType {
  paragraphs: {
    text?: string;
    span?: string;
    ul1?: string;
    ul2?: string;
    li1?: string;
    li2?: string;
    aos?: string;
    aosDuration?: string;
  }[];
}
export const data: dataType["paragraphs"] = [
  {
    text: `1) What is Bullseum?`,
    span: `
    Bullseum is an Art project, which will create 5.000 collectible
            NFTs, which will be randomly generated at the time of mining with
            more than 110 attributes available! Each NFT will be made with the
            deepest dedication, as each attribute is hand-drawn by our
            professional artists.
    `,
    aos: "fade-right",
    aosDuration: "1500",
  },
  {
    text: `2) When do you drop?`,
    span: `The official drop day will be Friday, August 27, 21hs UTC.`,
    aos: "fade-up",
    aosDuration: "1000",
  },
  {
    text: `3) How can I get a Bull?`,
    span: `Our bulls will be able to be bought through our website in an initial sale, at the time of purchase a totally random bull will be assigned, when the initial sale ends, you can buy the collection in Open Sea.`,
    aos: "fade-left",
    aosDuration: "1500",
  },
  {
    text: `4) I have an issue, what do I do?`,
    span: `
  If you're having any problem, you can open a support ticket in our ${(
    <a href="https://discord.com/invite/bullseum">Discord</a>
  )}, there is a text channel called ticket-tool where you can contact our team of professionals.
  `,
    aos: "fade-down",
    aosDuration: "1000",
  },
  {
    text: `5) What is the price of each bull?`,
    span: `The price for each bull will be 0.07 ETH in the initial sale.`,
    aos: "fade-left",
    aosDuration: "1500",
  },
  {
    text: `6) Will there be a Maximum Mint per Tx?`,
    span: `Yes, the maximum of mints per tx will be 25 bulls.`,
    aos: "fade-up",
    aosDuration: "1000",
  },
  {
    text: `7) How can I see my collection of bulls?`,
    span: `You can see your entire collection in Open Sea, connecting the wallet with which you have bought the NFTs.`,
    aos: "fade-right",
    aosDuration: "1500",
  },
  {
    text: `8) Why there are bulls already minted?`,
    span: `There will be 150 NFTs that are for marketing and community giveaways, we make a function for mint them and we only can mint 150 by function definition, you can search it in our contract by the name of mintForPromotion.`,
    aos: "fade-down",
    aosDuration: "1500",
  },
  {
    text: `9) What are the fees on OpenSea?`,
    span: `Total fees: 10%`,
    ul1: `2.5% - Open Sea Platform`,
    ul2: `7.5% - Bullseum`,
    li1: `- 4% Community Chest`,
    li2: `- 3.5% Game Development`,
    aos: "fade-down",
    aosDuration: "1500",
  },
];
