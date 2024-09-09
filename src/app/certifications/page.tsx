import * as React from "react";
import ComingSoonSection from "../components/ComingSoonSection";
import dataCertCover from "../../../public/dataCertCover.png";
import backendCertCover from "../../../public/backendCertCover.png";
import frontendCertCover from "../../../public/frontendCertCover.png";
import CertificationCards from "../components/CertificationCards";
import WebDevCert from "../../../public/webDevCert.png";
import JavaScriptCert from "../../../public/javaScriptCert.png";
import CssCert from "../../../public/cssCerts.png";
import DataCert from "../../../public/dataCert.png";
import SQLCert from "../../../public/sqlCert.jpg";
import TableauCert2 from "../../../public/tableauCert2.png";
import CCert from "../../../public/cCert.png";
import PHPCert from "../../../public/phpCert.png";

export default function Home() {
  const frontEndCerts = [
    {
      heading: "Front End Bootcamp",
      subheading:
        "At Skillcrush, Kirsten took classes on HTML, CSS, and JavaScript, Git and GitHub, and responsive development.",
      image: WebDevCert,
      // come back to this and add a jump # to the specific section id once certifications page is up
      // link: "/certifications",
    },
    {
      heading: "JavaScript",
      image: JavaScriptCert,
      subheading:
        "Through Sololearn, Kirsten took courses in basic JavaScript and advanced JavaScript.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "CSS",
      image: CssCert,
      subheading:
        "Through Sololearn, Kirsten took courses in basic CSS and advanced CSS.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
  ];

  const dataCerts = [
    {
      heading: "Coding for Data",
      image: DataCert,
      subheading:
        "Kirsten learned Python basics, control flow, functions, and data manipulation, before transitioning to SQL querying, database interactions, and advanced data analysis techniques.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "SQL and PostgreSQL",
      image: SQLCert,
      subheading:
        "This course covered core SQL concepts, PostgreSQL specifics, and practical database operations for efficient data manipulation and retrieval.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "Data Visualizations with Tableau",
      image: TableauCert2,
      subheading:
        "Kirsten learned how to create visualizations and dashboards with Tableau.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
  ];

  const backEndCerts = [
    {
      heading: "C#",
      image: CCert,
      subheading:
        "Kirsten learned the basics of C# programming and C# intermediate.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "PHP",
      image: PHPCert,
      subheading:
        "Kirsten had previous PHP experience with custom WordPress themes and wanted to expand her knowledge.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "Back End Certifications",
      image: backendCertCover,
      subheading: "More coming soon! Currently studying Python.",
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
  ];

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <ComingSoonSection />
      <CertificationCards
        cards={frontEndCerts}
        heading="Front End Certifications"
        subheading=""
      />
      <CertificationCards
        cards={dataCerts}
        heading="Data Certifications"
        subheading=""
      />
      <CertificationCards
        cards={backEndCerts}
        heading="Back End Certifications"
        subheading=""
      />
    </div>
  );
}
