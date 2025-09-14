import React from "react";
import "./OmOss.css";

export default function OmOss() {
  return (
    <div className="om-oss-page">
    

      {/* Bakgrundsbox */}
      <div className="background-box"></div>

      {/* Rubriker och texter */}
      <h1 className="headline">Vad menar vi med blixtsnabbt?</h1>
      <h2 className="sub-headline">Hett, gott och levererat blixtsnabbt.</h2>

      <h2 className="drone-delights">Drone Delights</h2>
      <p className="text-1">
        På Drone Delights får dina cravings bokstavligen vingar. Våra autonoma
        drönare levererar din beställning direkt när den är klar, förbi trafik,
        förseningar och mellanhänder. Resultatet? Varma måltider på några
        minuter – rakt från luften till ditt bord innan hungern hinner ikapp
        dig.
      </p>

      <p className="text-2">
        Drone Delights är en modern leveranstjänst som använder drönare för att
        snabbt och smidigt leverera mat och gods direkt till dig. Med fokus på
        effektivitet, hållbarhet och en unik upplevelse tar vi leveranser till
        nya höjder.
      </p>

      <h2 className="delivery-system">Vårt leveranssystem</h2>
      <p className="text-3">
        Vi använder en högteknologisk drönarflotta som följer leveranser i
        realtid, planerar smarta rutter och levererar på rekordtid. Snabbt,
        miljövänligt och alltid med fokus på att ge våra kunder en upplevelse
        utöver det vanliga.
      </p>

      <h2 className="omos-highlight">Om oss</h2>
    </div>
  );
}
