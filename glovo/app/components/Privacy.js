import React from 'react';

const Privacy = ({ title, description, moreInfoText, rejectText, acceptText }) => {
  return (
    <div className="w-full fixed bottom-0 z-50 bg-white border-t border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2">
            🍪 {title}
          </h3>
          <p className="text-sm text-gray-700 mt-1 max-w-2xl">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <a href="#" className="text-[#00a082] font-semibold hover:underline">{moreInfoText}</a>
          <a href="#" className="text-[#00a082] font-semibold hover:underline">{rejectText}</a>
          <a
            href="#"
            className="bg-[#00a082] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#008e73] transition"
          >
            {acceptText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
