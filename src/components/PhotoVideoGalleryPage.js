import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  "IMG-20260521-WA0016.jpg",
  "IMG-20260521-WA0031.jpg",
  "IMG-20260521-WA0025.jpg",
  "IMG-20260521-WA0023.jpg",
  "IMG-20260521-WA0024.jpg",
  "IMG-20260521-WA0026.jpg",
  "IMG-20260521-WA0027.jpg",
  "IMG-20260521-WA0028.jpg",
  "IMG-20260521-WA0029.jpg",
  "IMG-20260521-WA0030.jpg",
  "IMG-20260521-WA0032.jpg",
  "IMG-20260521-WA0033.jpg",
  "IMG-20260521-WA0039.jpg",
  "IMG-20260521-WA0038.jpg",
  "IMG-20260521-WA0037.jpg",
  "IMG-20260521-WA0036.jpg",
  "IMG-20260521-WA0035.jpg",
  "IMG-20260521-WA0040.jpg",
  "IMG-20260521-WA0041.jpg",
  "IMG-20260521-WA0045.jpg",
  "IMG-20260521-WA0042.jpg",
  "IMG-20260521-WA0043.jpg",
  "IMG-20260521-WA0044.jpg",
  "IMG-20260521-WA0047.jpg",
  "IMG-20260521-WA0046.jpg",
  "IMG-20260521-WA0048.jpg",
  "IMG-20260521-WA0049.jpg",
];

const videoItems = [
  { id: "NnqtCM0lMVo", title: "NITRA video gallery 1" },
  { id: "a7_u6RMhDmg", title: "NITRA video gallery 2" },
  { id: "JPFVGdCeE-4", title: "NITRA video gallery 3" },
];

export default function PhotoVideoGalleryPage() {
  return (
    <>
      <Header />

      <main className="gallery-page-shell">
        <section className="gallery-page-banner" aria-labelledby="photo-video-gallery-title">
          <div className="gallery-page-inner">
            <p className="gallery-page-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Photo / Video Gallery</span>
            </p>
            <h1 id="photo-video-gallery-title">Photo / Video Gallery</h1>
          </div>
        </section>

        <section className="gallery-page-content" aria-label="NITRA photo and video gallery">
          <section className="gallery-section" aria-labelledby="gallery-photo-title">
            <h2 className="gallery-section-title" id="gallery-photo-title">
              Photo
            </h2>
            <div className="gallery-grid">
              {galleryItems.map((filename) => {
                const src = `/Images/${filename}`;

                return (
                  <figure className="gallery-item" key={filename}>
                    <a
                      className="gallery-item-link"
                      href={src}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${filename} in a new tab`}
                    >
                      <div className="gallery-item-media">
                        <Image
                          src={src}
                          alt={`NITRA gallery photo ${filename.replace(".jpg", "")}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                        />
                      </div>
                    </a>
                  </figure>
                );
              })}
            </div>
          </section>

          <section className="gallery-section gallery-video-section" aria-labelledby="gallery-video-title">
            <h2 className="gallery-section-title" id="gallery-video-title">
              Video
            </h2>
            <div className="gallery-video-grid">
              {videoItems.map(({ id, title }) => (
                <div className="gallery-video-item" key={id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?feature=oembed`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
