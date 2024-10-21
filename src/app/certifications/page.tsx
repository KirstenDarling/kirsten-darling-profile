import * as React from "react";
import backendCertCover from "../../../public/backendCertCover.png";
import CertificationCards from "../components/CertificationCards";
import WebDevCert from "../../../public/webDevCert.png";
import JavaScriptCert from "../../../public/javascriptCert.png";
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
    },
    {
      heading: "JavaScript",
      image: JavaScriptCert,
      subheading:
        "Through Sololearn, Kirsten took courses in basic JavaScript and advanced JavaScript.",
      link: "/certifications",
    },
    {
      heading: "CSS",
      image: CssCert,
      subheading:
        "Through Sololearn, Kirsten took courses in basic CSS and advanced CSS.",
      link: "/certifications",
    },
  ];

  const dataCerts = [
    {
      heading: "Coding for Data",
      image: DataCert,
      subheading:
        "Kirsten learned Python basics, control flow, functions, and data manipulation, before transitioning to SQL querying, database interactions, and advanced data analysis techniques.",
      link: "/certifications",
    },
    {
      heading: "SQL and PostgreSQL",
      image: SQLCert,
      subheading:
        "This course covered core SQL concepts, PostgreSQL specifics, and practical database operations for efficient data manipulation and retrieval.",
      link: "/certifications",
    },
    {
      heading: "Data Visualizations with Tableau",
      image: TableauCert2,
      subheading:
        "Kirsten learned how to create visualizations and dashboards with Tableau.",
      link: "/certifications",
    },
  ];

  const backEndCerts = [
    {
      heading: "C#",
      image: CCert,
      subheading:
        "Kirsten learned the basics of C# programming and C# intermediate.",
      link: "/certifications",
    },
    {
      heading: "PHP",
      image: PHPCert,
      subheading:
        "Kirsten had previous PHP experience with custom WordPress themes and wanted to expand her knowledge.",
      link: "/certifications",
    },
    {
      heading: "Back End Certifications",
      image: backendCertCover,
      subheading: "More coming soon! Currently studying Python.",
      link: "/certifications",
    },
  ];

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
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
      <CertificationCards
        cards={frontEndCerts}
        heading="Front End Certifications"
        subheading=""
      />
    </div>
  );
}
