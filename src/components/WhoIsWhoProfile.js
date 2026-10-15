import Image from "next/image";

const profileUrl = "/intellectual-capital-2/";

export default function WhoIsWhoProfile({ showReadMore = false }) {
  return (
    <div className="about-who-profile">
      <Image
        className="about-who-portrait"
        src="/Images/director-general.jpeg"
        width={275}
        height={410}
        alt="Dr. M. S. Parmar, Director General of NITRA"
      />

      <div className="about-who-bio">
        <h2 id="about-who-title">Dr. M.S.Parmar</h2>
        <p className="about-who-role">Director General</p>
        <p className="about-who-description">
          Dr. M.S. Parmar, Director General, has been working at NITRA for the
          last 32 years in various capacities. He has been Director NITRA for
          about two years. He has also been Head of Chemical Quality Evaluation
          Division, Research &amp; Development (Products) Division and Polymer
          &amp; Technical Textiles Division.           He has been coordinating COE-PROTECH
          activities. His areas of expertise include Textile Chemistry,
          Protective &amp; Automotive Textiles, unconventional fibres and
          Quality Control of Textiles. Besides this, he has also been
          instrumental in establishing Heat &amp; Flame and Microbiology Labs.
          As Director (Labs), he has looked after all seven NABL-accredited and
          BIS-recognized labs of NITRA. His recent research on Milkweed Fibres
          and technical textiles has earned many laurels for NITRA and the
          textile fraternity. He is one of the renowned textile researchers in
          the country.
        </p>
      </div>

      <div className="about-who-details">
        <p><strong>Experience:</strong> 32&nbsp; + years</p>
        <p><strong>Qualification:</strong> M.Sc., Ph.D., PGDMM, DCPA</p>
        <div className="about-who-social" aria-label="Social media">
          <span className="about-social-icon facebook" aria-label="Facebook">f</span>
          <span className="about-social-icon twitter" aria-label="Twitter">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 5.9a8 8 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99A4.08 4.08 0 0 0 11.8 8.05c0 .32.04.64.11.94a11.58 11.58 0 0 1-8.4-4.26 4.1 4.1 0 0 0 1.27 5.46 4.03 4.03 0 0 1-1.85-.51v.05a4.1 4.1 0 0 0 3.28 4.01 4.1 4.1 0 0 1-1.84.07 4.1 4.1 0 0 0 3.82 2.84A8.2 8.2 0 0 1 2.1 18.4c-.33 0-.65-.02-.97-.06A11.55 11.55 0 0 0 7.4 20.1c7.56 0 11.7-6.26 11.7-11.7v-.53A8.4 8.4 0 0 0 22 5.9Z" />
            </svg>
          </span>
          <span className="about-social-icon youtube" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
            </svg>
          </span>
        </div>
        {showReadMore && (
          <a className="about-who-read-more" href={profileUrl}>
            Read More
          </a>
        )}
      </div>
    </div>
  );
}
