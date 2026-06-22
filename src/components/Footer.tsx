import { WHATSAPP_LINK } from "../constants";

type FooterProps = {
  onSecretClick?: () => void;
};

export default function Footer({ onSecretClick }: FooterProps) {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-10 px-4 border-t border-sky-100 text-center">
      <div className="max-w-4xl mx-auto">
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-2 rounded-full font-bold text-sm mb-8 hover:bg-brand-red-hover transition-colors"
          >
            Join WhatsApp Group
        </a>
        
        <p className="text-brand-navy font-medium text-sm">
          &copy; <span onDoubleClick={onSecretClick} className="cursor-default">{year}</span> AHAVA DIGITAL. All Rights Reserved.
        </p>
        <p className="text-gray-500 mt-2 text-xs">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}
