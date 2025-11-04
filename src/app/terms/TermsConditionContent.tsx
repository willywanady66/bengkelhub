import React from "react";

/**
 * Bilingual Terms rendered in a proper TWO-COLUMN GRID (not CSS multi-columns).
 * This keeps English on the left and Indonesian on the right, row by row.
 *
 * Why this vs the previous version?
 * - CSS `columns` flows content top-to-bottom then into the next column (like a newspaper),
 *   which scrambles bilingual pairs and makes headings jump across columns.
 * - A grid guarantees side-by-side alignment and predictable page breaks.
 */

type Section = {
  enTitle?: string;
  idTitle?: string;
  en?: string;
  id?: string;
};

// Minimal seed from your PDF. Add more sections as needed.
const SECTIONS: Section[] = [
  {
    enTitle: "Terms of Service",
    idTitle: "Syarat dan Ketentuan Layanan",
  },
  {
    en: `Effective Date: August 1, 2025\n\nThese Terms of Service ("Terms") govern your access to and use of BengkelHub digital platform ("Platform") operated by BengkelHub or PT Bengkelku Parts Indonesia ("BengkelHub", "We", or "Our"). The Platform is available via application and/or website, enabling User to search for workshops or spare parts sellers, book Services, and purchase Products.\n\nBy using the Platform, you represent that you are at least 18 years old or legally competent, and you agree to these Terms and Our Privacy Policy.`,
    id: `Tanggal Efektif: 1 Agustus 2025\n\nSyarat dan Ketentuan Layanan ("Syarat dan Ketentuan") ini mengatur akses dan penggunaan Anda atas platform digital BengkelHub ("Platform") yang dioperasikan oleh BengkelHub atau PT Bengkelku Parts Indonesia ("BengkelHub", "Kami", atau "Milik Kami"). Platform tersedia melalui aplikasi dan/atau situs web, memungkinkan Pengguna mencari bengkel atau penjual suku cadang, memesan Layanan, dan membeli Produk.\n\nDengan menggunakan Platform, Anda menyatakan telah berusia minimal 18 tahun atau cakap secara hukum, serta setuju dengan Syarat ini dan Kebijakan Privasi Kami.`,
  },
  {
    enTitle: "1. Definitions",
    idTitle: "1. Definisi",
  },
  {
    en: `"Platform" means the digital platform owned and operated by BengkelHub, including websites, mobile applications, systems, and related services.\n\n"User" means any individual or entity that accesses or uses the Platform, including customers seeking Services or Products.\n\n"Partner" means third-party workshops, mechanics, service providers, or sellers registered on the Platform.\n\n"Services" means services related to vehicles, including maintenance, repair, and other mechanical/technical services provided by Partners via the Platform.\n\n"Personal Data" means data regarding an individual who is identified or can be identified as described in Our Privacy Policy.`,
    id: `"Platform" berarti platform digital yang dimiliki dan dioperasikan oleh BengkelHub, termasuk situs web, aplikasi seluler, sistem, dan layanan terkait.\n\n"Pengguna" berarti setiap individu atau entitas yang mengakses atau menggunakan Platform, termasuk pelanggan yang mencari Layanan atau Produk.\n\n"Mitra" berarti bengkel, montir, penyedia layanan, atau penjual pihak ketiga yang terdaftar pada Platform.\n\n"Layanan" berarti layanan terkait kendaraan, termasuk perawatan, perbaikan, serta layanan mekanik/teknis lainnya yang disediakan oleh Mitra melalui Platform.\n\n"Data Pribadi" berarti data mengenai individu yang diidentifikasi atau dapat diidentifikasi sebagaimana dijelaskan dalam Kebijakan Privasi Kami.`,
  },
  {
    enTitle: "2. Scope of Services",
    idTitle: "2. Ruang Lingkup Layanan",
  },
  {
    en: `BengkelHub provides a Platform to connect Users with Partners for Services and Products. BengkelHub is not a workshop and does not provide Services directly.\n\nThe availability, quality, and performance of Services/Products are the responsibility of Partners.`,
    id: `BengkelHub menyediakan Platform untuk menghubungkan Pengguna dengan Mitra untuk Layanan dan Produk. BengkelHub bukan bengkel dan tidak menyediakan Layanan secara langsung.\n\nKetersediaan, kualitas, dan kinerja Layanan/Produk merupakan tanggung jawab Mitra.`,
  },
  {
    enTitle: "3. Account Registration",
    idTitle: "3. Pendaftaran Akun",
  },
  {
    en: `Users must create an account with accurate information and maintain the confidentiality of their credentials. You are responsible for all activities under your account and must notify BengkelHub of unauthorized use.`,
    id: `Pengguna harus membuat akun dengan informasi yang akurat dan menjaga kerahasiaan kredensialnya. Anda bertanggung jawab atas semua aktivitas pada akun Anda dan harus memberi tahu BengkelHub jika ada penggunaan yang tidak sah.`,
  },
  {
    enTitle: "4. Orders and Bookings",
    idTitle: "4. Pemesanan dan Janji",
  },
  {
    en: `Users may request quotes, place orders, or book appointments with Partners via the Platform, subject to availability and Partner acceptance. Cancellations, rescheduling, and no‑show policies are determined by each Partner and will be shown during checkout.`,
    id: `Pengguna dapat meminta penawaran, melakukan pemesanan, atau membuat janji dengan Mitra melalui Platform sesuai ketersediaan dan persetujuan Mitra. Kebijakan pembatalan, penjadwalan ulang, dan ketidakhadiran ditetapkan oleh masing‑masing Mitra dan akan ditampilkan saat checkout.`,
  },
  {
    enTitle: "5. Prohibited Conduct",
    idTitle: "5. Larangan Penggunaan",
  },
  {
    en: `User agrees not to misuse the Platform, including illegal activities, rights infringement, operational interference, unauthorized access attempts, or reverse engineering.`,
    id: `Pengguna setuju untuk tidak menyalahgunakan Platform, termasuk melakukan kegiatan ilegal, pelanggaran hak, mengganggu operasional, mencoba mengakses tanpa otorisasi, atau melakukan rekayasa balik.`,
  },
];

function Cell({ title, body }: { title?: string; body?: string }) {
  return (
    <div className="break-inside-avoid">
      {title && (
        <h2 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      )}
      {body && (
        <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300">{body}</p>
      )}
    </div>
  );
}

const TermsConditionContent: React.FC<{ className?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...rest }) => {
  return (
    <div {...rest} className={["mx-auto h-full w-full max-w-6xl p-6", className].join(" ") }>
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Terms of Service / Syarat dan Ketentuan Layanan
          </h1>
        </header>

        {/* Grid: two columns on md+, one column on small screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <React.Fragment key={i}>
              <Cell title={s.enTitle} body={s.en} />
              <Cell title={s.idTitle} body={s.id} />
            </React.Fragment>
          ))}
        </div>
      </article>
    </div>
  );
};

export default TermsConditionContent;
