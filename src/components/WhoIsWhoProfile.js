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
          Dr. M.S. Parmar, Director General, has been working at NITRA for the last 32 years in various capacities. He has been Director NITRA for about two  years. He has also been Head of Chemical Quality Evaluation Division, Research & Development (Products) Division and Polymer & Technical Textiles Div. He has been coordinating COE-PROTECH activities. His main areas of expertise are Textile Chemistry, Protective & Automotive Textiles, unconventional fibres and Quality Control of Textiles. Besides this, he has also been instrumental in establishing Heat & Flame Lab and the Microbiology Lab. As Director (Labs), he has looked after all seven NABL accredited/BIS recognized labs of NITRA. His recent research work on Milkweed Fibres and the development of Technical Textiles out of these fibres has earned many laurels for NITRA and the textile fraternity. He is one of the renowned textile researchers in the country.
        </p>
      </div>

      <div className="about-who-details">
        <p><strong>Experience:</strong> 32&nbsp; + years</p>
        <p><strong>Qualification:</strong> M.Sc., Ph.D., PGDMM, DCPA</p>
        <div className="about-who-social" aria-label="Social media">
          <span className="about-social-icon facebook" aria-label="Facebook">f</span>
          <span className="about-social-icon twitter" aria-label="Twitter">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.5h7.6l5.24 6.93zm-1.29 19.33h2.04L6.49 3.55H4.3z" />
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
