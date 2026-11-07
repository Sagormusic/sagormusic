// Shared site data. Only data repeated across many components lives here.
// Leave a value as "" if it is not known yet; components hide empty items.

const SITE = {
  name: "Sagor Music Cassette Company",
  shortName: "Sagor Music",

  // Existing shop (orders)
  shopUrl:
    "https://rafiulislam-shop.fourthwall.com/?utm_medium=product_shelf&utm_source=youtube",

  // Contact (WhatsApp number in local format, link is built below)
  whatsapp: "01828627226",
  email: "sagormusiccompany2@gmail.com",
  phone: "01828627226",
  messenger: "https://m.me/rafiulislamsagorbd", // full Messenger link, e.g. https://m.me/username

  // Payment numbers (Bangladesh)
  bkash: "01828627226",
  nagad: "01828627226",

  // Social links
  social: {
    youtubeLabel: "https://youtube.com/@sagormusiccassettecompany",
    youtubeRafiul: "https://www.youtube.com/@RafiulislamBGM",
    facebook: "https://www.facebook.com/rafiulislamsagorbd",
    instagram:
      "https://www.instagram.com/officialrafiulislam?cplk=MXJmemZoZXkwcWE5bQ==",
    spotify: "https://open.spotify.com/artist/4tkrUlehTC8ArzMDCkPxIF",
    // Net TV News artist page
    nettv: "https://nettv4u.com/celebrity/bengali/composer/rafiul-islam-sagor",
  },
};

// Bangladesh country code 880, drop the leading 0 of the local number
export const whatsappLink = SITE.whatsapp
  ? `https://wa.me/880${SITE.whatsapp.replace(/^0/, "")}`
  : "";

export default SITE;
