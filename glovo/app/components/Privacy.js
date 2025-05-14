import React from 'react';

const Privacy = ({
  title = "Gestisci i tuoi cookie",
  description = (
    <>
      Utilizziamo cookie propri e di terze parti e altre tecnologie per offrirti il miglior servizio possibile, analizzare l'utilizzo della nostra piattaforma e fornirti annunci personalizzati.<br />
      Puoi modificare le impostazioni dei cookie in qualsiasi momento <a href="#" className="text-[#00a082] underline">qui</a>.
    </>
  ),
  moreInfoText = "Ulteriori informazioni",
  rejectText = "Rifiuta",
  acceptText = "Accetta tutti"
}) => {
  return (
    <div className="w-full fixed bottom-0 z-50 bg-white border-t border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-semibold text-xl flex items-center gap-2">
            <span role="img" aria-label="cookie">🍪</span> {title}
          </h3>
          <p className="text-base text-black mt-2 max-w-2xl">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
          <a href="#" className="text-[#00a082] font-semibold text-lg hover:underline">{moreInfoText}</a>
          <a href="#" className="text-[#00a082] font-semibold text-lg hover:underline">{rejectText}</a>
          <a
            href="#"
            className="bg-[#00a082] text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#008e73] transition"
          >
            {acceptText}
          </a>
        </div>
      </div>
      <div className="px-4 pb-2 pt-4 text-xs text-gray-500">
        Powered by Usercentrics Consent Management
      </div>
    </div>
  );
};

export default Privacy;
