import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";

const galleryItems = [
  { src: "/Images/gallery-01.png", alt: "NITRA event photo" },
  { src: "/Images/gallery-03.png", alt: "NITRA campus photo" },
  { src: "/Images/gallery-04.jpg", alt: "NITRA workshop photo" },
  { src: "/Images/gallery-06.jpg", alt: "NITRA training program photo" },
  { src: "/Images/gallery-08.jpg", alt: "NITRA research event photo" },
  { src: "/Images/gallery-10.jpg", alt: "NITRA faculty and guests photo" },
  { src: "/Images/gallery-12.jpg", alt: "NITRA inspection and testing photo" },
  { src: "/Images/gallery-14.jpg", alt: "NITRA campus technology photo" },
  { src: "/Images/gallery-16.jpg", alt: "NITRA lab and training photo" },
  { src: "/Images/gallery-18.jpg", alt: "NITRA industry interaction photo" },
  { src: "/Images/gallery-20.jpg", alt: "NITRA campus event photo" },
  { src: "/Images/gallery-22.jpg", alt: "NITRA innovation meeting photo" },
  { src: "/Images/gallery-24.jpg", alt: "NITRA technology showcase photo" },
];

export default function PhotoVideoGalleryPage() {
  return (
    <>
      <Header />

      <main className="gallery-page-shell">
        <section className="gallery-page-banner" aria-labelledby="photo-video-gallery-title">
          <div className="gallery-page-inner">
            <p className="gallery-page-breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true"> / </span>
              <span>Photo / Video Gallery</span>
            </p>
            <h1 id="photo-video-gallery-title">Photo / Video Gallery</h1>
          </div>
        </section>

        <section className="gallery-page-content" aria-label="NITRA photo gallery">
          <div className="gallery-grid">
            {galleryItems.map(({ src, alt }, index) => (
              <figure className="gallery-item" key={`${src}-${index}`}>
                <div className="gallery-item-media">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
