/**
 * NITRA API Client
 * Interfaces with the Laravel Headless Backend API
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.nitratextile.org/api/v1";

/**
 * Generic safe fetcher with timeout and error tolerance
 */
async function apiFetch(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`API call to ${url} responded with status ${res.status}`);
      return null;
    }

    const json = await res.json();
    return json.data !== undefined ? json.data : json;
  } catch (err) {
    // Return null on failure so components can fall back to local seed data
    return null;
  }
}

/**
 * Fetch Tenders
 */
export async function fetchTenders() {
  const data = await apiFetch("/tenders?per_page=100");
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    title: item.title,
    lastDate: item.last_date,
    extended: item.extended_date,
    file: item.file_path,
    source: item.file_path,
    referenceNo: item.reference_no,
    category: item.category,
    status: item.status,
  }));
}

/**
 * Fetch Announcements / News Ticker
 */
export async function fetchAnnouncements() {
  const data = await apiFetch("/announcements");
  if (!Array.isArray(data) || data.length === 0) return null;

  return data.map((item) => ({
    title: item.marqueeText || item.title,
    href: item.externalUrl || item.external_url || `/news/${item.slug || ""}`,
    openInNewTab: Boolean(item.externalUrl || item.external_url),
  }));
}

/**
 * Fetch Bulletins (New Bulletin archive)
 */
export async function fetchBulletins() {
  const data = await apiFetch("/publications?category=New+Bulletin");
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    month: item.period || item.reporting_period || "General",
    year: String(item.year),
    file: item.download_url && item.download_url !== "#" ? item.download_url : null,
    title: item.title,
  }));
}

/**
 * Fetch R&D Projects
 */
export async function fetchResearchProjects() {
  const data = await apiFetch("/projects");
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    id: item.projectCode || item.project_code || item.slug,
    title: item.title,
    year: String(item.year || item.implementationPeriod || ""),
    report: item.reportFile || item.report_file || (item.documents && item.documents[0]) || null,
  }));
}

/**
 * Fetch Products Developed
 */
export async function fetchProductsDeveloped() {
  const data = await apiFetch("/products-developed");
  if (!Array.isArray(data)) return null;

  return data.map((item) => item.title || item.name);
}

/**
 * Fetch Instruments Developed
 */
export async function fetchInstrumentsDeveloped() {
  const data = await apiFetch("/instruments-developed");
  if (!Array.isArray(data)) return null;

  return data.map((item) => item.name);
}

/**
 * Fetch Patents
 */
export async function fetchPatents() {
  const res = await apiFetch("/patents");
  if (!res) return null;

  const all = Array.isArray(res) ? res : (res.data || []);
  const granted = all.filter((p) => p.status === "granted").map((p) => {
    let text = p.title;
    if (p.patent_no) text += ` – Patent No. ${p.patent_no}`;
    if (p.grant_date) text += ` dt. ${p.grant_date}`;
    if (p.inventors) text += ` (Inventors: ${p.inventors})`;
    if (p.application_no) text += ` (Patent Application no. ${p.application_no})`;
    return text;
  });

  const filed = all.filter((p) => p.status === "filed").map((p) => {
    let text = p.title;
    if (p.application_no) text += `, Indian patent application no.: ${p.application_no}`;
    if (p.filing_date) text += `, dt.: ${p.filing_date}`;
    if (p.inventors) text += `, Inventors: ${p.inventors}`;
    return text;
  });

  return { granted, filed };
}

/**
 * Fetch Who's Who & Committee Members
 */
export async function fetchTeamMembers(committee = "who_is_who") {
  const data = await apiFetch(`/team-members?committee=${encodeURIComponent(committee)}`);
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    name: item.name,
    designation: item.designation,
    qualification: item.qualification,
    email: item.email,
    phone: item.phone,
    photo: item.photo,
  }));
}

/**
 * Fetch Testing Laboratories
 */
export async function fetchTestingLaboratories() {
  const data = await apiFetch("/testing-laboratories");
  if (!Array.isArray(data)) return null;
  return data;
}

/**
 * Fetch Single Testing Laboratory by Slug
 */
export async function fetchTestingLaboratory(slug) {
  const data = await apiFetch(`/testing-laboratories/${encodeURIComponent(slug)}`);
  if (!data || !data.title) return null;
  return {
    title: data.title,
    description: data.description,
    image: data.image,
    imageAlt: data.title,
    testedMaterials: data.tested_materials || data.testedMaterials || [],
    instruments: data.instruments || [],
    accreditation: data.accreditation,
  };
}

/**
 * Fetch Powerloom Service Centres
 */
export async function fetchPowerloomCentres() {
  const data = await apiFetch("/powerloom-centres");
  if (!Array.isArray(data)) return null;
  return data;
}

/**
 * Fetch Single Powerloom Service Centre by Slug
 */
export async function fetchPowerloomCentre(slug) {
  const data = await apiFetch(`/powerloom-centres/${encodeURIComponent(slug)}`);
  if (!data || !data.name) return null;
  return {
    name: data.name,
    title: data.title,
    introduction: data.introduction,
    testingGroups: data.testing_groups || data.testingGroups || [],
    address: data.address,
    contactPerson: data.contact_person,
  };
}

/**
 * Fetch Annual Reports
 */
export async function fetchAnnualReports() {
  const data = await apiFetch("/publications?category=Annual+Report");
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    title: item.title,
    year: String(item.year),
    file: item.download_url && item.download_url !== "#" ? item.download_url : null,
  }));
}

/**
 * Fetch Latest Books
 */
export async function fetchBooks() {
  const data = await apiFetch("/publications?category=Book");
  if (!Array.isArray(data)) return null;

  return data.map((item) => ({
    title: item.title,
    price: item.price || "Contact NITRA",
  }));
}

/**
 * Fetch Careers / Job Openings
 */
export async function fetchCareers() {
  const data = await apiFetch("/careers");
  if (!Array.isArray(data)) return [];
  return data;
}

/**
 * Submit Contact Inquiry to Backend
 */
export async function submitContactInquiry(formData) {
  try {
    const res = await fetch(`${API_BASE_URL}/contact-inquiries`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    return { ok: res.ok, data: json };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
