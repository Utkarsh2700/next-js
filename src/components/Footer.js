import React from "react";
const footerItems = [
  ["AGB", "Impressum", "Datenschutz"],
  ["Rezept einlosen", "Live Bestand", "Videosprechstunde", "FAQs", "kontakt"],
  [
    { first: "Standort" },
    { second: "BergstraBe 49-57  69469 Weinheim (3 Glocken Quartier)" },
  ],
  [{ first: "Telefon" }, { second: "0223 545 5250" }],
  [
    { first: "Offnungszeiten" },
    { second: "Mo-Fr" },
    { third: "09:00 - 18:00 Uhr" },
    { fouth: "Sa" },
    { fifth: "09:00 - 14:00 Uhr" },
  ],
];

function Footer() {
  return (
    <footer className=" px-4 sm:px-8 md:px-10 bg-emerald-700 w-full py-4">
      <div className="footer flex md:flex-nowrap flex-wrap w-full">
        <span className="first flex justify-end flex-col mx-2 py-2 md:py-0 w-[10%]">
          {footerItems[0].map((item, index) => (
            <div className="" key={index}>
              <p className="text-gray-100 font-light">{item}</p>
            </div>
          ))}
        </span>
        <span className="flex flex-wrap two mx-2 py-2 md:py-0 w-[35%]">
          {footerItems[1].map((item, index) => (
            <div className="flex items-center mx-2" key={index}>
              <div className="mx-1 w-5 h-5 rounded-tl-3xl rounded-br-3xl bg-emerald-400"></div>
              <p className="text-gray-100 font-light">{item}</p>
            </div>
          ))}
        </span>
        <span className="third mx-2 py-2 md:py-0 w-[20%]">
          <p className="text-gray-100 font-extralight text-sm">
            {footerItems[2][0].first}
          </p>
          <h2 className="text-white font-bold w-full">
            {footerItems[2][1].second}
          </h2>
        </span>
        <span className="fourth mx-2 py-2 md:py-0 w-[15%]">
          <p className="text-gray-100 font-extralight text-sm">
            {footerItems[3][0].first}
          </p>
          <h2 className="text-white font-bold">{footerItems[3][1].second}</h2>
        </span>
        <span className="fifth mx-2 py-2 md:py-0 w-[18%]">
          <p className="text-gray-100 font-extralight text-sm">
            {footerItems[4][0].first}
          </p>
          <p className="text-gray-100 font-extralight text-sm">
            {footerItems[4][1].second}
          </p>
          <h2 className="text-white font-bold">{footerItems[4][2].third}</h2>
          <p className="text-gray-100 font-extralight text-sm">
            {footerItems[4][3].fouth}
          </p>
          <h2 className="text-white font-bold">{footerItems[4][4].fifth}</h2>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
