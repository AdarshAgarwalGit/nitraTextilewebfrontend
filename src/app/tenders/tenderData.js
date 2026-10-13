const tenders = [
  {
    title: "Sealed Bids are invited for purchase of ‘Contact Angle Goniometer’",
    lastDate: "29th May, 2026 upto 12.00 pm",
    extended: "04-06-2026 (Thursday) at 03.00 pm",
    file: "tender-01-sealed-bids-are-invited-for-purchase-of-contact.pdf",
  },
  {
    title:
      "Sealed Quotation required for infrastructure for One Day Event at NITRA",
    lastDate: "25 March 2026 by 1.00 PM",
    file:
      "tender-02-sealed-quotation-required-for-infrastructure-for.pdf",
  },
  {
    title: "Sealed Bids are invited for purchase of ‘Pilot Quilting Machine’",
    lastDate: "20th March, 2026 upto 12.00 pm",
    file:
      "tender-03-sealed-bids-are-invited-for-purchase-of-pilot-qu.docx",
  },
  {
    title: "Sealed Quotation are invited for construction of two washroom",
    lastDate: "6th March 2026 by 1.00 pm",
    file:
      "tender-04-sealed-quotation-are-invited-for-construction-of.pdf",
  },
  {
    title:
      "Tender for Fabrication of Knittability Tester for Milkweed Yarn",
    lastDate: "8th December, 2025 upto 12.00 pm",
    file:
      "tender-05-tender-for-fabrication-of-knittability-tester-fo.pdf",
  },
  {
    title:
      "Sealed quotations are invited for the construction of three store rooms: (A) Store Room 1st (behind the bamboo plant), (B) Store Room 2nd (on the top roof above the convocation hall), and (C) Store Room 3rd (on the top roof above the DG Office).",
    lastDate: "21st November 2025 by 1.00 PM",
    file:
      "tender-06-sealed-quotations-are-invited-for-the-constructi.pdf",
  },
  {
    title: 'Sealed Bids are invited for purchase of "GENSET"',
    lastDate: "24th November, 2025 by 12:00pm",
    extended: "29-12-2025 by 03.00 pm",
    file: "tender-07-sealed-bids-are-invited-for-purchase-of-genset.pdf",
  },
  {
    title:
      'Sealed Bids are invited for purchase of "Limiting Oxygen Index (LOI) Tester"',
    lastDate: "24th October 2025, up to 12:00 PM",
    file:
      "tender-08-sealed-bids-are-invited-for-purchase-of-limiting.pdf",
  },
  {
    title:
      "Sealed Bids are invited for purchase of 'Hydraulic Bale- Press Machine'",
    lastDate: "10th Sept, 2025 by 12:00 PM",
    extended: "17-9-2025 by 03.00 pm",
    file:
      "tender-09-sealed-bids-are-invited-for-purchase-of-hydrauli.pdf",
  },
  {
    title:
      "Sealed Quotation Proposal for Interlocking Cement Concrete Paver Block Installation & Rainwater Discharge Works at NITRA Technical Campus, Ghaziabad",
    lastDate: "13th August 2025 by 1:00 PM",
    file:
      "tender-10-sealed-quotation-proposal-for-interlocking-cemen.pdf",
  },
  {
    title: "Sealed Bids are invited for purchase of Bale-Press",
    lastDate: "15th July 2025 by 12.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/06/Bids-Tender.pdf",
  },
  {
    title: "Sealed Bids are invited for purchase of ‘Fiber Filling Machine”",
    lastDate: "20th June. 2025 by 12.00 PM",
    extended: "27-6-2025 (Friday) at 03.00 pm",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/05/Tender-Fiber-Filling-Machine-Under-Project-sponsored-by-MOTGOI.pdf",
  },
  {
    title:
      "Sealed Quotation for (i) Fabrication of Scrap Store Room; and(ii) Construction of Temporary Aluminum Room for Catering services at NITRA",
    lastDate: "22nd May. 2025 by 12.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/05/SCRAP-STORE-ROOM-AND-TEMP-ROOM-TENDER-MAY-2025.pdf",
  },
  {
    title:
      "Sealed Bids are invited for ‘Fabrication of Milkweed Floss and Seed Separator",
    lastDate: "9th May. 2025 by 12.00 PM",
    extended: "26th May. 2025 by 3.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/04/Milkweed-Project.pdf",
  },
  {
    title: "Sealed Quotation for Security Services Contract",
    lastDate: "19th Mar. 2025 by 2.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/03/NITRA-SECURITY-CONTRACT-QUOTATION-MARCH-2025.pdf",
  },
  {
    title:
      "Tender for purchase of Equipment the “Thermal Analyser” Under the National Technical Textile Mission(NTTM)",
    lastDate: "18th Feb. 2025 by 12.00 PM",
    extended: "4th Mar. 2025 by 3.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2025/01/tender-Thermal-Analyser.pdf",
  },
  {
    title:
      "Tender document for purchase of Equipment the “Thermal Analyser” Under the National Technical Textile Mission(NTTM)",
    lastDate: "24th Dec. 2024 by 12.00 PM",
    extended: "01 Jan. 2025 by 03.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/12/tender-thermal.pdf",
  },
  {
    title:
      "Tender Document For Setup of 100 Kilo Watt Solar Roof Top On Grid Power Plant",
    lastDate: "10th Dec. 2024 by 12.00 PM",
    extended: "16th Dec. 2024 by 12.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/11/Tender-Document-for-Setup-of-100KW-Solar-Roof-Top.pdf",
  },
  {
    title: "Sealed Bids are invited for ‘Lab Scale Reactor",
    lastDate: "25th sep. 2024 by 12.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/09/Tender-for-Lab-Scale-.pdf",
  },
  {
    title: "Sealed Quotation for Road Construction Work in NITRA Main Building",
    lastDate: "21st sep. 2024 by 1.00 PM",
    source: "https://nitratextile.org/wp-content/uploads/2024/09/ROAD-.pdf",
  },
  {
    title: "QUOTATION IN RESPECT OF MESS CONTRACT",
    lastDate: "9th sep. 2024 by 4.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/09/31.8.24-QUOTATION-IN-RESPECT-OF-MESS-CONTRACT.pdf",
  },
  {
    title: "Tender Form Sale & Material Inspection",
    lastDate: "4th sep. 2024 by 2.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/08/scrap-tender.pdf",
  },
  {
    title:
      "Sealed Quotation for Oil Bound Distemper (OBD) Double coat work in:NITRA & NTC-",
    lastDate: "113th Aug. 2024 by 1.00 PM",
    extended: "30th August 2024 by 1.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/08/tender-paint.pdf",
  },
  {
    title:
      "Tender Document for Manufacturing of Testing Instruments under NTTM Projects",
    lastDate: "1-Sep.-2024 up to 12.00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/08/Limited-Tender-under-NTTM.pdf",
  },
  {
    title:
      "Limited Tender Document for Manufacturing of Testing Instruments under NTTM Projects",
    lastDate: "Canceled",
  },
  {
    title: "NOTICE INVITING TENDER FOR SCRAP",
    lastDate: "15-03-2024 up to 2:00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/03/TENDER-DOCUMENT-MARCH-2024.pdf",
  },
  {
    title: "Limited Tender for Machines require for Polymer Pellet preparation",
    lastDate: "02-05-2024 up to 12.00 PM",
    extended: "08-05-2024 up to 12.00 PM",
    file:
      "tender-27-limited-tender-for-machines-require-for-polymer.pdf",
  },
  {
    title: "NOTICE INVITING TENDER FOR SCRAP",
    lastDate: "15-03-2024 up to 2:00 PM",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/03/TENDER-DOCUMENT-MARCH-2024.pdf",
  },
  {
    title: "Sealed Bids are invited for ‘Fire Fighter Suit or Fire Entry Suit’",
    lastDate: "07-03-2024 (up to 12.00 pm)",
    source:
      "https://nitratextile.org/wp-content/uploads/2024/02/Fire-Fighter-Suit-tender.pdf",
  },
  {
    title:
      "TENDER DOCUMENT For purchase of Testing Equipment/Machines & Accessories Under the “National Technical Textile Mission (NTTM) Projects” & “DST-SEED Project”",
    lastDate: "24-08-2023 (up to 12.00 pm)",
    file:
      "tender-30-tender-document-for-purchase-of-testing-equipmen.pdf",
  },
  {
    title:
      "TENDER DOCUMENT-For purchase of Testing Equipment/Machines & Accessories Under the NTTM",
    lastDate: "31 May 2023 up to 12.00 pm",
    file:
      "tender-31-tender-document-for-purchase-of-testing-equipmen.pdf",
  },
  {
    title:
      "Sealed Bids are invited for ‘Computer Colour Matching System (Spectrophotometer Dual-beam spectrophotometer illumination Source- pulsed xenon’",
    lastDate: "14-February-2018",
    extended: "21-February-2018",
    file:
      "tender-32-sealed-bids-are-invited-for-computer-colour-matc.pdf",
  },
  {
    title:
      "E-Tender for purchase of Machines and Testing Equipment & Accessories under the project CoE",
    lastDate: "08-November-2017",
    extended: "24-November-2017",
    file:
      "tender-33-e-tender-for-purchase-of-machines-and-testing-eq.pdf",
  },
  {
    title:
      "Sealed quotations are invited for electrical works including supply & erection of electrical items, Distribution Panels, Cabling, earthing etc for Focus Incubation Centre, NITRA, Ghaziabad",
    lastDate: "07-October-2017",
    file:
      "tender-34-sealed-quotations-are-invited-for-electrical-wor.pdf",
  },
  {
    title:
      "For purchase of Machines and Testing Equipment & Accessories for PLSCs",
    lastDate: "22-September-2017",
    file:
      "tender-35-for-purchase-of-machines-and-testing-equipment-a.pdf",
  },
  {
    title:
      "E-Tender for purchase of Machines and Testing Equipment & Accessories under the project CoE",
    lastDate: "27-September-2017",
    file:
      "tender-36-e-tender-for-purchase-of-machines-and-testing-eq.pdf",
  },
  {
    title:
      "For purchase of Machines and Testing Equipment & Accessories under the project CoE",
    lastDate: "23-Aug-2017",
    file:
      "tender-37-for-purchase-of-machines-and-testing-equipment-a.pdf",
  },
  {
    title:
      "For purchase of Machines and Testing Equipment & Accessories for PLSCs",
    lastDate: "23-Aug-2017",
    file:
      "tender-38-for-purchase-of-machines-and-testing-equipment-a.pdf",
  },
  {
    title:
      "For purchase of flax spinning machines & instrument under the project ‘development of value added product from different fibers produced in Himalayan region (basic research)’ to be installed at Almora, Uttrakhand",
    lastDate: "09-Aug-2017",
    extended: "17-Aug-2017",
    file:
      "tender-39-for-purchase-of-flax-spinning-machines-instrumen.pdf",
  },
  {
    title:
      "Tender for setting up 150 KLD- Common Effluent Treatment Plant (CETP) at Block Printing Cluster in Ajrakhpur, Bhuj (Gujarat) Corrigendum to tender No. NITRA/Pur/P-3/2017-18, Ref No. 2171 for setting up 150 KLD CETP at Ajrakhpur, Bhuj (Gujarat)",
    lastDate: "19-July-2017",
    extended: "26-July-2017",
    file:
      "tender-40-tender-for-setting-up-150-kld-common-effluent-tr.pdf",
  },
  {
    title:
      "For purchase of Flax Spinning Machines & Instruments Under the Projects ‘Development of Value Added Product from different fibers produced in Himalayan Region (Basic Research)’ to be installed at Almora, Uttrakhand",
    lastDate: "21-June-2017",
    extended: "21-June-2017",
    file:
      "tender-41-for-purchase-of-flax-spinning-machines-instrumen.pdf",
  },
  {
    title:
      "Sealed quotations are invited for supply, erection & commissioning of Main Distribution Panel and Internal Electrical Work for Focus Incubation Centre, NITRA, Ghaziabad",
    lastDate: "20-Jan-2017",
    file:
      "tender-42-sealed-quotations-are-invited-for-supply-erectio.pdf",
  },
  {
    title:
      "Tender for purchase of Garmenting Machines, Looms, Machines and Testing Equipment & Accessories Under the Projects CoE & PLSCs",
    lastDate: "28-Dec-2016",
    extended: "16-Jan-2017",
    file:
      "tender-43-tender-for-purchase-of-garmenting-machines-looms.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "05-Oct-2016",
    file:
      "tender-44-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title: "For purchase of Testing Equipment & Accessories Under the Projects CoE",
    lastDate: "05-Oct-2016",
    file:
      "tender-45-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      "FOR CONSTRUCTION OF FOCUS INCUBATION CENTRE (F.I.C.) - EXTERNAL WORK AND REST ROOM AT NITRA GHAZIABAD",
    lastDate: "17-Aug-2016",
    file:
      "tender-46-for-construction-of-focus-incubation-centre-f-i.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/ Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "27-July-2016",
    file:
      "tender-47-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/, ISDS/ Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "16-March-2016",
    file:
      "tender-48-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      "For Construction of Work Shed for Focus Incubation Center at NITRA, Sector-23, Ghaziabad.",
    lastDate: "06-Jan-2016",
    file:
      "tender-49-for-construction-of-work-shed-for-focus-incubati.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/ Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "06-Jan-2016",
    file:
      "tender-50-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/, ISDS/ Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "15-July-2015",
    file:
      "tender-51-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      'For purchase of Instruments / Machines & Accessories Under the Project "Center of Excellence" (CoE)',
    lastDate: "15-June-2015",
    source:
      "http://nitra.ac.in/Userfiles/Documents/Tender%20Document.pdf",
  },
  {
    title: "Sealed quotations are invited for supply of Furniture & other items",
    lastDate: "23-July-2015",
    extended: "27-July-2015",
    source: "http://www.nitratextile.org/download.php?id=110",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/, Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "09-Sep-2015",
    file:
      "tender-54-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
  {
    title:
      "For purchase of Testing Equipment & Accessories Under the Projects CoE/ Modernization/up gradation of Power Loom Service Centers (PLSCs)",
    lastDate: "18-Nov-2015",
    extended: "03-Dec-2015",
    file:
      "tender-55-for-purchase-of-testing-equipment-accessories-un.pdf",
  },
];

export default tenders;
