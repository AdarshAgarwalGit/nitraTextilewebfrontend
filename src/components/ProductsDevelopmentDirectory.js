"use client";

import { useMemo, useState } from "react";

const products = [
  "Molten metal splash resistant workwear for Steel Industry workers",
  "Jute/ Polypropylene composite headliner & parcel tray for automobiles",
  "Re-generated Cellulosic Fibre from Indian was developed indigenously",
  "Value added products from pine needle fibres",
  "New approaches to reduce water consumption in textile wet processing",
  "Flame retardant CHEF uniform",
  "Technology to Process Raw Banana Fibre",
  "Reusable sanitary pads and diapers",
  "Coat combat disruptive",
  "Improved version of Body protector for riots control",
  "Flash resistance hood for Indian Navy",
  "Air cleaner home textiles",
  "Multi layered flame and thermal resistance fabric for fire fighter clothing",
  "Protective work wear for cement porter",
  "Self-stitched garments",
  "Seamless jute carry bags",
  "Military and paramilitary uniforms from NYCO",
  "Products from corn husks",
  "Speciality embroidery yarn for application in stretchable fabrics like knitted fabrics",
  "Fabric for stab resistant vest",
  "Knitted fabric for comfort",
  "Cut resistant gloves from composite metallic yarn",
  "UV resistant fabric",
  "Energy efficient textile spindle oil (servo-super EE10) – in association with Indian Oil Corporation Ltd.",
  "Anti static finish oil for processing synthetic fibres",
  "X-ray opaque fabric",
  "Anti-microbial fabric",
  "Special functional fabric for bedding and sports wear",
];

export default function ProductsDevelopmentDirectory() {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return query
      ? products.filter((product) => product.toLowerCase().includes(query))
      : products;
  }, [search]);

  return (
    <section className="products-development-directory" aria-label="NITRA products">
      <label className="products-development-search">
        <span>Search:</span>
        <input
          type="search"
          placeholder="Type to search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>

      <div className="products-development-table-wrap">
        <table className="products-development-table">
          <thead>
            <tr>
              <th scope="col">Products</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product}>
                <td>{product}</td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td className="products-development-empty">
                  No products match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="products-development-result-count" aria-live="polite">
        Showing {filteredProducts.length} of {products.length} products
      </p>
    </section>
  );
}
