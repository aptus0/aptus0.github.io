export type StaticPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
};

export const trPosts: StaticPost[] = [
  {
    slug: "erp-crm-ve-e-ticaret-neden-ayni-veriyi-konusmali",
    title: "ERP, CRM ve e-ticaret neden aynı veriyi konuşmalı?",
    excerpt:
      "Birbirinden kopuk sistemlerin operasyon maliyetini nasıl artırdığını ve doğru entegrasyon mimarisinin ne kazandırdığını anlatıyorum.",
    date: "2026-07-31",
    content: [
      "Bir işletmenin web mağazası, mobil uygulaması, ERP sistemi ve CRM platformu aynı müşteriyi farklı şekillerde tanıyorsa sorun yalnızca teknik değildir. Stok hataları, geciken siparişler ve eksik müşteri görünürlüğü doğrudan operasyon kalitesini etkiler.",
      "Sağlıklı bir mimaride ERP stok ve finans verisinin kaynağı, CRM müşteri ilişkisinin çalışma alanı, e-ticaret ise sipariş deneyiminin yüzüdür. Bu sistemlerin görevleri ayrıdır; fakat ürün, müşteri ve sipariş kimlikleri ortak bir veri sözleşmesiyle yönetilmelidir.",
      "Ben projelerimde entegrasyonu sonradan eklenen bir özellik olarak değil, ürünün temel mimari kararı olarak ele alıyorum. Böylece web, mobil, mağaza ve satış ekipleri aynı gerçeğe bakabiliyor.",
    ],
  },
  {
    slug: "salesforce-customer-360-gercekten-ne-zaman-deger-uretir",
    title: "Salesforce Customer 360 gerçekten ne zaman değer üretir?",
    excerpt:
      "Customer 360 ekranını yalnızca bir veri vitrini olmaktan çıkarıp satış ve servis ekipleri için karar aracına dönüştüren noktalar.",
    date: "2026-07-30",
    content: [
      "Customer 360, ekrana daha fazla alan eklemek anlamına gelmez. Değer; kullanıcının bir sonraki doğru kararı daha hızlı verebilmesinden doğar.",
      "Satış ekibi müşteri kaydını açtığında açık fırsatları, son siparişleri, ödenmemiş faturaları, servis vakalarını ve stok durumunu aynı bağlamda görebilmelidir. Ancak bu verilerin hepsini göstermek yerine role ve iş akışına göre önceliklendirmek gerekir.",
      "Apex, Lightning Web Components ve Flow birlikte kullanıldığında yalnızca bilgi sunan değil; riskleri işaretleyen, onayları yöneten ve sonraki aksiyonu öneren bir çalışma alanı oluşturmak mümkündür.",
    ],
  },
];

export const enPosts: StaticPost[] = [
  {
    slug: "why-erp-crm-and-ecommerce-should-share-the-same-data",
    title: "Why should ERP, CRM and e-commerce share the same data?",
    excerpt:
      "How disconnected systems increase operational cost—and what a sound integration architecture changes.",
    date: "2026-07-31",
    content: [
      "When a web store, mobile application, ERP and CRM identify the same customer differently, the problem is not merely technical. Stock errors, delayed orders and incomplete customer visibility directly affect operational quality.",
      "In a healthy architecture, ERP is the source of inventory and finance data, CRM is the customer engagement workspace, and e-commerce is the ordering experience. Their responsibilities differ, but product, customer and order identities must follow a shared data contract.",
      "I treat integration as a foundational product decision rather than an add-on. This allows web, mobile, store and sales teams to work from the same operational truth.",
    ],
  },
  {
    slug: "when-does-salesforce-customer-360-create-real-value",
    title: "When does Salesforce Customer 360 create real value?",
    excerpt:
      "The principles that turn Customer 360 from a data showcase into a decision workspace for sales and service teams.",
    date: "2026-07-30",
    content: [
      "Customer 360 does not mean adding more fields to a screen. Its value comes from helping a user make the next correct decision faster.",
      "When a salesperson opens a customer record, open opportunities, recent orders, unpaid invoices, service cases and stock information should be available in the same context. The interface should prioritize this information by role and workflow.",
      "Apex, Lightning Web Components and Flow can create a workspace that not only displays information, but also highlights risk, manages approvals and recommends the next action.",
    ],
  },
];
