"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchBooks } from "@/lib/api";

export default function BooksDirectory({ initialPublications = [] }) {
  const [publications, setPublications] = useState(initialPublications);

  useEffect(() => {
    async function loadData() {
      const live = await fetchBooks();
      if (live && live.length > 0) {
        setPublications(live);
      }
    }
    loadData();
  }, []);

  return (
    <section className="latest-books-content" aria-label="Latest NITRA publications">
      <div className="latest-books-feature">
        <Image
          src="/Images/latest-nitra-books-publication-cover.jpeg"
          alt="NITRA book publication cover"
          width={833}
          height={1024}
        />
      </div>

      <div className="latest-books-list">
        {publications.map((publication, idx) => (
          <article className="latest-book-card" key={`${publication.title}-${idx}`}>
            <h2>{publication.title}</h2>
            <p>{publication.price}</p>
            <span className="latest-book-unavailable">
              {publication.file ? (
                <a href={publication.file} target="_blank" rel="noreferrer">
                  Download Sample / Flyer
                </a>
              ) : (
                "Publication available for order via NITRA Library"
              )}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
