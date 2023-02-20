import React from 'react';
import { GlobeIcon } from '@heroicons/react/outline';

function EndFooter() {
  return (
    <div className="items-center">
      <div className="px-8 py-6 grid grid-cols-8 space-x-[20px] mt-[10px] 2xl:ml-[10px] ">
        <div className="space-y-2">
          <p className="text-lg">Udemy Business</p>
          <p className="text-lg">Teach on Udemy</p>
          <p className="text-lg">Get the app</p>
          <p className="text-lg">About us</p>
          <p className="text-lg">Contact us</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg">Careers</p>
          <p className="text-lg">Blog</p>
          <p className="text-lg">Help and Support</p>
          <p className="text-lg">Affiliate</p>
          <p className="text-lg">Investors</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg">Terms</p>
          <p className="text-lg">Privacy policy</p>
          <p className="text-lg">Cookie settings</p>
          <p className="text-lg">Sitemap</p>
          <p className="text-lg">Accessibility statement</p>
        </div>
      </div>
      <div className="flex items-center justify-end px-[65px] space-x-5 2xl:mt-[-150px]">
        <button className="py-2 px-14 outline outline-offset-2 outline-2 grid grid-cols-2">
          <GlobeIcon className="h-6" />
          English
        </button>
      </div>
    </div>
  );
}

export default EndFooter;
