import { WrapperPage } from "../WrapperPage";
import { AppDownload } from "./AppDownload";
import { CompanyInformation } from "./CompanyInfomation";
import { LegalLinks } from "./LegalLinks";
import { SitemapLinks } from "./SitemapLinks";
import { StoreSystem } from "./StoreSystem";

const Footer = () => {
  return (
    <WrapperPage>
      <StoreSystem />

      <div className="flex gap-28">
        <CompanyInformation />
        <SitemapLinks />
        <LegalLinks />
        <AppDownload />
      </div>
    </WrapperPage>
  );
};

export default Footer;
