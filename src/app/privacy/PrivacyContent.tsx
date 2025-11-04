import React from "react";

/**
 * Bilingual Privacy Policy rendered in a strict TWO-COLUMN GRID.
 * English (left) ↔ Bahasa Indonesia (right), kept in lockstep.
 * Tailwind-only. No PDF/viewers.
 */

type Section = {
  enTitle?: string;
  idTitle?: string;
  en?: string;
  id?: string;
};

const SECTIONS: Section[] = [
  {
    enTitle: "Privacy Policy",
    idTitle: "Kebijakan Privasi",
  },
  {
    en: `Your privacy is critically important to us.`,
    id: `Privasi anda sangat penting bagi kami.`,
  },
  {
    enTitle: "General Provisions",
    idTitle: "Ketentuan Umum",
  },
  {
    en: `BengkelHub or PT Bengkelku Parts Indonesia ("BengkelHub") is a company that provides a web portal and/or digital platform that connects vehicle owners with trusted workshops and spare parts sellers. This Privacy Policy is drafted in accordance with Law No. 27 of 2022 on Personal Data Protection ("PDP Law") and other relevant regulations. This Privacy Policy applies to the BengkelHub application and the https://bengkelhub.id website.\n\nBy accessing and using the application and/or platform, and by giving explicit consent via the available mechanisms (including clicking "Agree" when registering), the User confirms that they have read, understood, and agreed to this Privacy Policy and consents to BengkelHub collecting, using, storing, disclosing, and/or processing their Personal Data as described herein.`,
    id: `BengkelHub atau PT Bengkelku Parts Indonesia ("BengkelHub") adalah perusahaan penyedia portal web dan/atau platform digital yang menghubungkan pemilik kendaraan dengan bengkel dan penjual suku cadang terpercaya. Kebijakan Privasi ini disusun sesuai dengan Undang‑Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi ("UU PDP") dan peraturan terkait lainnya. Kebijakan Privasi ini berlaku untuk aplikasi BengkelHub dan situs https://bengkelhub.id.\n\nDengan mengakses dan menggunakan aplikasi dan/atau platform BengkelHub, serta memberikan persetujuan secara eksplisit melalui mekanisme yang disediakan (termasuk mengklik tombol "Setuju" saat pendaftaran akun), Pengguna menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi ini serta memberikan izin kepada BengkelHub untuk mengumpulkan, menggunakan, menyimpan, mengungkapkan, dan/atau memproses Data Pribadi sebagaimana dijelaskan di sini.`,
  },
  {
    enTitle: "Scope of Personal Data",
    idTitle: "Ruang Lingkup Data Pribadi",
  },
  {
    en: `"User" means any individual or legal entity using, registering for, or utilizing BengkelHub application and/or platform, including but not limited to customers, partners, vendors, and other parties transacting on the platform.\n\n"Personal Data" means data regarding an individual who is identified or can be identified, either independently or with other information, whether directly or indirectly, through electronic or non‑electronic systems. The data collected by BengkelHub may include, but is not limited to: (1) Full name, email, phone, domicile; (2) Vehicle info (plate number, make, model, year, engine number, ownership); (3) Workshop/seller info (business name/address/licenses, legal entity documents, location, contacts, services, payment account); (4) Service & transaction history; (5) Auto‑parts purchase records, payment methods, transaction history; (6) Geolocation data; (7) Loyalty/referral/promotional program data; (8) Other data relevant to BengkelHub services such as ID (KTP), Passport, KITAS, NPWP, bank account details, as required by law or for BengkelHub’s legitimate interests.\n\nUsers must update their Personal Data in the application and/or platform on a regular basis if changes occur.`,
    id: `"Pengguna" adalah setiap individu atau badan hukum yang menggunakan, mendaftarkan diri, dan/atau memanfaatkan aplikasi dan/atau platform BengkelHub, termasuk namun tidak terbatas pada pelanggan, mitra, vendor, serta pihak lain yang bertransaksi di platform.\n\n"Data Pribadi" adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasikan dengan informasi lain baik secara langsung maupun tidak langsung melalui sistem elektronik atau nonelektronik. Data yang dikumpulkan BengkelHub dapat meliputi antara lain: (1) Nama lengkap, email, nomor telepon, domisili; (2) Informasi kendaraan (nomor polisi, merek, model, tahun, nomor mesin, kepemilikan); (3) Informasi bengkel/penjual (nama usaha, alamat, perizinan, dokumen badan usaha, lokasi, kontak, layanan, rekening pembayaran); (4) Riwayat layanan dan transaksi; (5) Catatan pembelian suku cadang, metode pembayaran, riwayat transaksi; (6) Data geolokasi; (7) Data program loyalitas/referral/promosi; (8) Data lain yang relevan seperti KTP, Paspor, KITAS, NPWP, atau informasi rekening bank, sesuai ketentuan hukum atau kepentingan sah BengkelHub.\n\nDalam hal terjadi perubahan Data Pribadi, Pengguna wajib memperbarui data tersebut secara berkala.`,
  },
  {
    enTitle: "Legal Basis for Processing Personal Data",
    idTitle: "Dasar Hukum Pengolahan Data Pribadi",
  },
  {
    en: `Collection and processing of Personal Data are based on: (1) Explicit consent; (2) Performance of contractual obligations; (3) Compliance with legal obligations; (4) Legitimate interests of BengkelHub without overriding Users’ fundamental rights and freedoms.`,
    id: `Pengumpulan dan pemrosesan Data Pribadi dilakukan berdasarkan: (1) Persetujuan eksplisit; (2) Pemenuhan kewajiban kontraktual; (3) Kepatuhan pada kewajiban hukum; (4) Kepentingan sah BengkelHub dengan tetap menghormati hak dan kebebasan fundamental Pengguna.`,
  },
  {
    enTitle: "Purposes of Personal Data Use",
    idTitle: "Tujuan Penggunaan Data Pribadi",
  },
  {
    en: `BengkelHub uses Personal Data to: (1) Create and manage accounts; (2) Process transactions, service searches/bookings, product sale/purchase; (3) Facilitate communication between Users; (4) Verify identity and business legitimacy for workshop owners; (5) Manage loyalty, referral, marketing, and promotional programs; (6) Provide relevant recommendations based on preferences and history; (7) Conduct evaluations and improvements (surveys, research, feature development); (8) Detect, prevent, and respond to abuse, legal violations, or suspicious activity; (9) Maintain internal records for documentation, audits, reporting; (10) Ensure security and system/service development; (11) Comply with laws and regulations.`,
    id: `BengkelHub menggunakan Data Pribadi untuk: (1) Membuat dan mengelola akun; (2) Memproses transaksi, pencarian/pemesanan layanan, penjualan/pembelian produk; (3) Memfasilitasi komunikasi antar Pengguna; (4) Memverifikasi identitas dan legalitas usaha bagi pemilik bengkel; (5) Mengelola program loyalitas, referral, pemasaran, dan promosi; (6) Memberikan rekomendasi relevan berdasarkan preferensi dan riwayat; (7) Melakukan evaluasi dan peningkatan layanan (survei, riset, pengembangan fitur); (8) Mendeteksi, mencegah, dan menangani penyalahgunaan/pelanggaran hukum/aktivitas mencurigakan; (9) Menyimpan arsip internal untuk dokumentasi, audit, pelaporan; (10) Keamanan dan pengembangan sistem/layanan; (11) Mematuhi hukum dan peraturan yang berlaku.`,
  },
  {
    enTitle: "User Rights",
    idTitle: "Hak Pengguna",
  },
  {
    en: `Subject to applicable laws (including PDP Law), Users have the right to: (1) Access, update, correct, and/or delete their Personal Data; (2) Withdraw consent at any time (with service consequences); (3) Obtain information on purposes/types/methods of processing; (4) Object to certain processing (incl. direct marketing); (5) Submit complaints/requests through official channels provided by BengkelHub.`,
    id: `Sesuai ketentuan yang berlaku (termasuk UU PDP), Pengguna berhak untuk: (1) Mengakses, memperbarui, membetulkan, dan/atau menghapus Data Pribadi; (2) Menarik persetujuan kapan saja (dengan konsekuensi layanan); (3) Mendapatkan informasi mengenai tujuan/jenis/cara pengolahan; (4) Mengajukan keberatan atas pengolahan tertentu (termasuk pemasaran langsung); (5) Menyampaikan pengaduan/permintaan melalui saluran resmi BengkelHub.`,
  },
  {
    enTitle: "Disclosure of Personal Data",
    idTitle: "Pengungkapan Data Pribadi",
  },
  {
    en: `Personal Data may be disclosed to: (1) Workshops, sellers, partners, affiliates, or trusted vendors to fulfill bookings, services, and/or purchase requests; (2) Third parties supporting core functions (payment gateways, delivery services, analytics) under appropriate data‑protection commitments; (3) Government or law enforcement as required by law. BengkelHub will not share Personal Data for other purposes without explicit consent or legal obligation.`,
    id: `Data Pribadi dapat diungkapkan kepada: (1) Bengkel, penjual suku cadang, mitra, afiliasi, atau vendor terpercaya untuk pemesanan, penyelesaian layanan, dan/atau permintaan pembelian; (2) Pihak ketiga pendukung fungsi utama (payment gateway, pengiriman, analytics) dengan komitmen perlindungan data yang memadai; (3) Instansi pemerintah atau penegak hukum sesuai kewajiban hukum. BengkelHub tidak akan membagikan Data Pribadi untuk tujuan lain tanpa persetujuan eksplisit atau kewajiban hukum.`,
  },
  {
    enTitle: "Data Storage and Security",
    idTitle: "Penyimpanan dan Keamanan Data",
  },
  {
    en: `(1) Data is stored as long as necessary for the purposes of collection and to comply with laws; when no longer needed, it will be deleted or anonymized. (2) BengkelHub implements technical and organizational measures (access controls, encryption, audits, employee access restrictions) to ensure security, integrity, and confidentiality. (3) Any data‑breach incidents will be reported to Users according to the PDP Law. From the outset of system development, BengkelHub prioritizes security and privacy.`,
    id: `(1) Data disimpan selama diperlukan untuk tujuan pengumpulan serta kepatuhan hukum; jika tidak lagi diperlukan, akan dihapus atau dianonimkan. (2) BengkelHub menerapkan langkah teknis dan organisasi (kontrol akses, enkripsi, audit, pembatasan akses pegawai) untuk menjamin keamanan, integritas, dan kerahasiaan. (3) Insiden pelanggaran data akan dilaporkan kepada Pengguna sesuai UU PDP. Sejak awal pengembangan sistem, BengkelHub memprioritaskan keamanan dan privasi.`,
  },
  {
    enTitle: "Cross‑Border Data Transfer",
    idTitle: "Transfer Data ke Luar Negeri",
  },
  {
    en: `If Personal Data is transferred outside Indonesia (e.g., via cloud providers), BengkelHub will comply with notification and data‑protection obligations and implement safeguards equivalent to Indonesian standards, and will inform Users of destination country and legal basis upon request.`,
    id: `Jika terjadi transfer Data Pribadi ke luar Indonesia (misalnya melalui penyedia cloud), BengkelHub akan memenuhi kewajiban notifikasi dan perlindungan data serta menerapkan pengamanan setara standar Indonesia, dan akan memberi tahu Pengguna mengenai negara tujuan dan dasar hukum jika diminta.`,
  },
  {
    enTitle: "Cookies and Digital Tracking",
    idTitle: "Cookies dan Pelacakan Digital",
  },
  {
    en: `BengkelHub may use cookies and digital tracking to enhance experience (preferences, traffic analytics, content personalization). Users can configure preferences and reject non‑essential cookies via browser or app/platform settings.`,
    id: `BengkelHub dapat menggunakan cookies dan alat pelacakan digital untuk meningkatkan pengalaman (preferensi, analisis trafik, personalisasi konten). Pengguna dapat mengatur preferensi dan menolak cookies non‑esensial melalui pengaturan browser atau pengaturan dalam aplikasi/platform.`,
  },
  {
    enTitle: "Changes to Privacy Policy",
    idTitle: "Perubahan Kebijakan Privasi",
  },
  {
    en: `This Policy may be updated from time to time. Updates will be communicated through the application/platform and/or via email. Continued use after notification constitutes acceptance of the updates.`,
    id: `Kebijakan ini dapat diperbarui sewaktu‑waktu. Perubahan akan diinformasikan melalui aplikasi/platform dan/atau email. Penggunaan berkelanjutan setelah pemberitahuan dianggap sebagai persetujuan atas perubahan tersebut.`,
  },
  {
    enTitle: "Integration",
    idTitle: "Integrasi",
  },
  {
    en: `This Privacy Policy must be read together with the Terms of Service and any other applicable policy documents related to the use of BengkelHub’s application and/or platform.`,
    id: `Kebijakan Privasi ini harus dibaca bersama dengan Syarat dan Ketentuan serta dokumen kebijakan lain yang berlaku terkait penggunaan aplikasi dan/atau platform BengkelHub.`,
  },
  {
    enTitle: "Contact and Complaints",
    idTitle: "Kontak dan Pengaduan",
  },
  {
    en: `For questions, access, updates, deletion requests, or complaints related to Personal Data protection, contact: Email: admin@bengkelhub.id`,
    id: `Untuk pertanyaan, permintaan akses/pembaruan/penghapusan, atau pengaduan terkait perlindungan Data Pribadi, hubungi: Email: admin@bengkelhub.id`,
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

const PrivacyContent: React.FC<{ className?: string } & React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...rest }) => {
  return (
    <div {...rest} className={["mx-auto h-full w-full max-w-6xl p-6", className].join(" ") }>
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Privacy Policy / Kebijakan Privasi
          </h1>
        </header>
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

export default PrivacyContent;
