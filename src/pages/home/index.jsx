import BannerSection from "./banner";
import ThemeSection from "./theme";
import FeaturedArticlesSection from "./featured-articles";
import CallToActionSection from "./call-to-action";
import HotsSection from "./hots";
import LifeSection from "./life";
import ProjectsSection from "./projects";
import ContactSection from "./contact";

import { useMediaQuery } from "../../lib/media-query-utils";

const PREFIX_CLASS = "home";

export default function Home() {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <div className={PREFIX_CLASS}>
      <BannerSection />
      <ThemeSection />
      <FeaturedArticlesSection isLargeScreen={isLargeScreen} />
      <CallToActionSection />
      <HotsSection isLargeScreen={isLargeScreen} />
      <LifeSection />
      <ProjectsSection isLargeScreen={isLargeScreen} />
      <ContactSection />
    </div>
  );
}
