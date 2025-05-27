import { AppDownload } from "./AppDownload";
import { CompanyInformation } from "./CompanyInfomation";
import { LegalLinks } from "./LegalLinks";
import { SitemapLinks } from "./SitemapLinks";
import { StoreSystem } from "./StoreSystem";

const Footer = () => {
  return (
    <>
      <StoreSystem />

      <div className="flex gap-28">
        <CompanyInformation />
        <SitemapLinks />
        <LegalLinks />
        <AppDownload />
      </div>
    </>
  );
};

export default Footer;
