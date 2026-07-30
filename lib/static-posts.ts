export type StaticPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  readingTime: string;
  keywords: string[];
};

export const trPosts: StaticPost[] = [
  {
    slug: "erp-crm-ve-e-ticaret-entegrasyonu",
    title: "ERP, CRM ve e-ticaret entegrasyonu nasıl kurulmalı?",
    excerpt: "Stoktan müşteri deneyimine kadar tüm operasyonu ortak veri modeliyle yöneten sürdürülebilir entegrasyon mimarisi.",
    date: "2026-07-31", category: "Entegrasyon", readingTime: "7 dk",
    keywords: ["ERP CRM entegrasyonu", "e-ticaret entegrasyonu", "sistem entegrasyonu"],
    content: [
      "ERP, CRM ve e-ticaret aynı işletmenin farklı sorumluluklarını taşır. ERP stok, finans ve tedarik süreçlerinin; CRM müşteri ilişkisinin; e-ticaret ise dijital sipariş deneyiminin merkezidir. Bu sistemler birbirinden kopuk çalıştığında stok hatası, çift müşteri kaydı ve geciken sipariş gibi sorunlar kaçınılmaz olur.",
      "Sağlıklı bir entegrasyon için ilk adım hangi verinin hangi sistemde üretileceğini belirlemektir. Ürün ve stok ERP'de, müşteri etkileşimleri CRM'de, sepet ve ödeme akışı e-ticaret katmanında sahiplenilebilir. Bütün sistemler ortak ürün, müşteri ve sipariş kimliklerini kullanmalıdır.",
      "REST API, webhook ve mesaj kuyruğu birlikte değerlendirilmeli; her işlem için gerçek zamanlı iletişim zorunlu tutulmamalıdır. Kritik stok ve sipariş hareketleri anlık, raporlama gibi yüksek hacimli süreçler ise zamanlanmış veya olay tabanlı çalışabilir.",
      "İzlenebilirlik de mimarinin parçasıdır. Tekrar deneme politikaları, idempotent servisler, hata kayıtları ve operasyon ekranları olmadan entegrasyon çalışsa bile sürdürülebilir olmaz. Başarılı sonuç, tüm ekiplerin aynı operasyonel gerçeğe güvenle bakabilmesidir.",
    ],
  },
  {
    slug: "salesforce-customer-360-deger-uretme-rehberi",
    title: "Salesforce Customer 360 ne zaman gerçek değer üretir?",
    excerpt: "Customer 360 yaklaşımını veri vitrini olmaktan çıkarıp satış ve servis ekipleri için karar merkezine dönüştürme rehberi.",
    date: "2026-07-30", category: "Salesforce", readingTime: "6 dk",
    keywords: ["Salesforce Customer 360", "Salesforce CRM", "müşteri deneyimi"],
    content: [
      "Customer 360, tek ekrana çok sayıda alan eklemek değildir. Değer, kullanıcının müşterinin durumunu anlaması ve bir sonraki doğru aksiyonu daha hızlı almasıyla oluşur.",
      "Satış temsilcisi açık fırsatları, son siparişleri, ödenmemiş faturaları ve servis vakalarını aynı bağlamda görebilmelidir. Ancak ekran rol bazlı tasarlanmalı; herkes için her veri gösterilmemelidir.",
      "Salesforce Data Cloud, entegrasyon servisleri ve doğru eşleştirme kuralları farklı kaynaklardaki müşteri kimliklerini birleştirebilir. Veri kalitesi, erişim yetkileri ve güncellik hedefleri tasarımın en başında belirlenmelidir.",
      "Apex, Lightning Web Components ve Flow ile riskleri işaretleyen, onayları yöneten ve sonraki aksiyonu öneren çalışma alanları oluşturulabilir. Böylece Customer 360 rapor değil, günlük karar mekanizması hâline gelir.",
    ],
  },
  {
    slug: "salesforce-apex-lwc-flow-mimari-secimi",
    title: "Apex, LWC ve Flow: Doğru Salesforce mimarisi nasıl seçilir?",
    excerpt: "Deklaratif otomasyon ile özel kod arasında sürdürülebilir, test edilebilir ve performanslı Salesforce çözümü kurma yaklaşımı.",
    date: "2026-07-29", category: "Salesforce", readingTime: "8 dk",
    keywords: ["Apex geliştirme", "Lightning Web Components", "Salesforce Flow"],
    content: [
      "Salesforce geliştirmede doğru soru hangi aracın daha güçlü olduğu değil, iş ihtiyacının hangi araçla en güvenli biçimde karşılanacağıdır. Basit kayıt güncellemeleri Flow ile, karmaşık işlem mantığı ve yüksek hacimli süreçler Apex ile ele alınabilir.",
      "Lightning Web Components, standart arayüzlerin yetmediği durumlarda kullanıcıya görev odaklı deneyimler sağlar. Bileşenler küçük, yeniden kullanılabilir ve erişilebilir tasarlanmalıdır.",
      "Governor limitleri, toplu işlem senaryoları ve paylaşım modeli her teknik kararda hesaba katılmalıdır. Apex testleri yalnızca kod kapsamı için değil, iş kuralını güvence altına almak için yazılmalıdır.",
      "İyi mimari; Flow, Apex ve LWC'nin sorumluluklarını açıkça ayırır. Bu yaklaşım sürüm geçişlerini kolaylaştırır, teknik borcu azaltır ve ekiplerin çözümü güvenle geliştirmesine izin verir.",
    ],
  },
  {
    slug: "salesforce-erp-entegrasyonu-en-iyi-uygulamalar",
    title: "Salesforce ERP entegrasyonu için 9 kritik karar",
    excerpt: "Müşteri, stok, teklif, sipariş ve fatura verisini Salesforce ile ERP arasında güvenilir biçimde taşımanın temel kararları.",
    date: "2026-07-28", category: "Entegrasyon", readingTime: "9 dk",
    keywords: ["Salesforce ERP entegrasyonu", "Salesforce REST API", "CRM ERP"],
    content: [
      "Salesforce ile ERP entegrasyonunun başarısı konektörden önce veri sahipliği kararına bağlıdır. Müşteri, ürün, fiyat, stok, sipariş ve faturanın ana kaynağı açıkça tanımlanmalıdır.",
      "Senkron ve asenkron akışlar iş etkisine göre ayrılmalıdır. Kullanıcının anında yanıt beklediği fiyat sorgusu senkron; yüksek hacimli fatura aktarımı platform event veya kuyruk tabanlı çalışabilir.",
      "External ID, idempotency anahtarı, tekrar deneme, zaman aşımı ve dead-letter yaklaşımı veri tekrarını ve sessiz kayıpları önler. Entegrasyon kullanıcısına yalnızca gereken yetkiler verilmelidir.",
      "Teknik izleme kadar iş izleme de gereklidir. Operasyon ekibi hangi siparişin neden aktarılmadığını kod okumadan görebilmeli ve kontrollü tekrar çalıştırabilmelidir.",
    ],
  },
  {
    slug: "agentforce-yapay-zeka-crm-kullanim-senaryolari",
    title: "Agentforce ile yapay zekâ destekli CRM kullanım senaryoları",
    excerpt: "Agentforce'un satış, servis ve müşteri operasyonlarında güvenli ve ölçülebilir değer üretebileceği pratik senaryolar.",
    date: "2026-07-27", category: "AI & CRM", readingTime: "7 dk",
    keywords: ["Agentforce", "Salesforce yapay zeka", "AI CRM"],
    content: [
      "Agentforce'un amacı yalnızca sorulara cevap veren bir sohbet ekranı oluşturmak değildir. En güçlü kullanım alanları, güvenilir veriye dayanarak belirli iş aksiyonlarını tamamlayan ajanlardır.",
      "Servis tarafında vaka özetleme, bilgi makalesi önerme ve önceliklendirme; satış tarafında fırsat riski, görüşme hazırlığı ve takip görevi oluşturma öne çıkan senaryolardır.",
      "Ajanın erişebileceği veriler, çalıştırabileceği aksiyonlar ve insan onayı gereken sınırlar açıkça tanımlanmalıdır. Prompt güvenliği, denetim kaydı ve kişisel veri politikaları üretim öncesi ele alınmalıdır.",
      "Başarı; cevap sayısıyla değil çözüm süresi, ilk temasta çözüm, temsilci başına iş yükü ve kullanıcı memnuniyeti gibi metriklerle ölçülmelidir.",
    ],
  },
  {
    slug: "r3-erp-kobi-perakende-yonetimi",
    title: "R3 ERP ile KOBİ ve perakende operasyonlarını tek merkezden yönetmek",
    excerpt: "Satış, satın alma, stok, cari, finans, mağazacılık ve e-dönüşüm süreçlerini birleştiren R3 ERP yaklaşımı.",
    date: "2026-07-26", category: "R3 ERP", readingTime: "8 dk",
    keywords: ["R3 ERP", "KOBİ ERP programı", "perakende yönetimi"],
    content: [
      "R3 ERP, KOBİ ve perakende işletmelerinin dağınık operasyonlarını ortak bir çalışma alanında birleştirmek için tasarlanan masaüstü kurumsal yönetim platformudur.",
      "Satış, satın alma, stok, cari, finans, mağazacılık, e-dönüşüm, muhasebe, raporlama ve yönetim modülleri aynı veri modeli üzerinde çalışır. Böylece bir satış işleminin stok, cari ve finans etkisi birbirinden kopmaz.",
      "Rol bazlı ekranlar, merkez ve mağaza ayrımı, SQL tabanlı veri altyapısı ve operasyonel raporlar günlük kararları hızlandırır. Sistem; ürün hareketinden tahsilata kadar izlenebilir bir süreç hedefler.",
      "R3'ün gelişim yönü, masaüstü ERP derinliğini API servisleri, Salesforce CRM ve yapay zekâ destekli operasyon yardımıyla genişletmektir. Amaç işletmenin tüm süreçlerini ölçülebilir ve yönetilebilir kılmaktır.",
    ],
  },
  {
    slug: "e-ticaret-erp-stok-senkronizasyonu",
    title: "E-ticaret ve ERP stok senkronizasyonunda hata nasıl önlenir?",
    excerpt: "Çok kanallı satışta stok doğruluğu, rezervasyon, iptal ve iade süreçleri için uygulanabilir teknik mimari.",
    date: "2026-07-25", category: "E-ticaret", readingTime: "7 dk",
    keywords: ["e-ticaret ERP entegrasyonu", "stok senkronizasyonu", "omnichannel"],
    content: [
      "Web, mobil ve fiziksel mağaza aynı stoğu sattığında tek bir stok sayısını paylaşmak yeterli değildir. Kullanılabilir, rezerve, sevkte ve iade bekleyen miktarlar ayrı izlenmelidir.",
      "Sipariş sırasında kısa süreli rezervasyon oluşturmak ve ödeme sonucuna göre kesinleştirmek fazla satış riskini azaltır. Başarısız ödeme, iptal ve zaman aşımı rezervasyonu kontrollü biçimde serbest bırakmalıdır.",
      "Webhook olayları kaçabilir veya iki kez gelebilir. Bu nedenle işlemler idempotent olmalı, sıra numarası veya güncelleme zamanı kontrol edilmeli ve periyodik mutabakat süreci bulunmalıdır.",
      "Doğru tasarım yalnızca teknik hatayı azaltmaz; müşteriye gerçek teslimat sözü verir ve operasyon ekibinin manuel düzeltme yükünü düşürür.",
    ],
  },
  {
    slug: "crm-otomasyonu-salesforce-flow-rehberi",
    title: "CRM otomasyonu: Salesforce Flow ile sürdürülebilir süreçler",
    excerpt: "Onay, görev, bildirim ve kayıt yönetimini teknik borç üretmeden otomatikleştirmek için Flow tasarım rehberi.",
    date: "2026-07-24", category: "Salesforce", readingTime: "6 dk",
    keywords: ["CRM otomasyonu", "Salesforce Flow", "iş süreci otomasyonu"],
    content: [
      "CRM otomasyonu, her adımı otomatik hâle getirmek değil; tekrarlanan, ölçülebilir ve açık kurallı işleri sistemin güvenle üstlenmesidir.",
      "Flow tasarımında giriş koşulları dar tutulmalı, Get Records çağrıları azaltılmalı ve toplu kayıt senaryoları test edilmelidir. Alt akışlar ortak mantığın tekrarını önler.",
      "Hata yolları, yönetici bildirimleri ve işlem günlükleri üretim ortamında görünürlük sağlar. Kritik finansal veya hukuki aksiyonlarda insan onayı korunmalıdır.",
      "İyi otomasyon satış ekibinin veri girişi yükünü azaltır, servis standardını yükseltir ve yönetimin süreç performansını ölçmesini mümkün kılar.",
    ],
  },
  {
    slug: "mobil-uygulama-erp-api-guvenligi",
    title: "Mobil uygulama ile ERP bağlantısında API güvenliği",
    excerpt: "Flutter veya Swift tabanlı mobil uygulamaları ERP verisine güvenli biçimde bağlamak için kimlik, yetki ve veri koruma ilkeleri.",
    date: "2026-07-23", category: "Mobil", readingTime: "7 dk",
    keywords: ["mobil ERP uygulaması", "API güvenliği", "Flutter ERP"],
    content: [
      "Mobil uygulama doğrudan ERP veritabanına bağlanmamalıdır. Arada kimlik doğrulama, yetkilendirme, doğrulama ve kayıt tutma sorumluluklarını üstlenen güvenli bir API katmanı bulunmalıdır.",
      "Kısa ömürlü erişim belirteçleri, güvenli yenileme akışı ve cihaz tarafında korumalı saklama temel gereksinimlerdir. Her kullanıcı yalnızca rolünün izin verdiği kaynaklara erişebilmelidir.",
      "TLS, hız sınırlama, giriş doğrulama ve hassas veri maskeleme birlikte uygulanmalıdır. Mobil cihaz kaybı ve çevrimdışı önbellek riskleri ayrıca değerlendirilmelidir.",
      "Güvenli mimari kullanıcı deneyimini yavaşlatmak zorunda değildir. İyi tasarlanmış önbellek, sayfalama ve arka plan senkronizasyonu güvenlik ile performansı birlikte sağlar.",
    ],
  },
  {
    slug: "salesforce-gelistirici-secerken-nelere-bakilmali",
    title: "Salesforce geliştirici seçerken nelere dikkat edilmeli?",
    excerpt: "Apex bilgisinden iş analizi yeteneğine kadar sürdürülebilir CRM projesi için değerlendirilmesi gereken teknik ve operasyonel yetkinlikler.",
    date: "2026-07-22", category: "Kariyer", readingTime: "6 dk",
    keywords: ["Salesforce geliştirici", "Bursa Salesforce developer", "Salesforce danışmanlığı"],
    content: [
      "İyi bir Salesforce geliştirici yalnızca Apex yazmaz. İş sürecini anlamalı, standart platform yeteneklerini bilmeli ve özel geliştirme kararının uzun vadeli maliyetini değerlendirmelidir.",
      "LWC, Flow, entegrasyon, güvenlik modeli, test otomasyonu ve veri geçişi deneyimi birlikte sorgulanmalıdır. Adayın governor limitleri ve toplu veri senaryolarına yaklaşımı önemli bir göstergedir.",
      "Teknik iletişim de kritik bir yetkinliktir. Geliştirici karmaşık bir kararı iş ekibine açıkça anlatabilmeli, varsayımları belgelemeli ve ölçülebilir kabul kriterleri oluşturmalıdır.",
      "Doğru seçim; hızlı kod yazan kişiden çok, işletmenin bugününü çözerken yarının bakım maliyetini de düşünen mühendisle çalışmaktır.",
    ],
  },
];

const englishContents: string[][] = [
  [
    "ERP, CRM and e-commerce serve different responsibilities. ERP owns inventory and finance, CRM manages customer relationships, and commerce delivers the ordering experience. Disconnected systems create stock errors, duplicate customers and delayed orders.",
    "A reliable design starts by assigning a system of record for every domain. Product and stock may belong to ERP, engagement to CRM, and checkout to commerce, while all platforms share stable product, customer and order identifiers.",
    "REST APIs, webhooks and queues should be selected by business urgency. Inventory and order events may need near-real-time delivery, while reporting workloads can run asynchronously.",
    "Retries, idempotency, monitoring and operational recovery screens make the integration sustainable. The goal is one trusted operational truth for every team.",
  ],
  [
    "Customer 360 is not a screen filled with more fields. It creates value when a user understands the customer and chooses the next correct action faster.",
    "Sales teams need opportunities, recent orders, unpaid invoices and service cases in one context. Information should still be prioritized by role instead of exposing everything to everyone.",
    "Data Cloud, integration services and identity rules can unify customer records across sources. Data quality, access and freshness targets must be defined early.",
    "Apex, Lightning Web Components and Flow can highlight risk, manage approvals and recommend actions, turning Customer 360 into a daily decision workspace.",
  ],
  [
    "The right Salesforce tool depends on risk, scale and maintainability. Straightforward record automation fits Flow, while complex transaction logic and high-volume processing may require Apex.",
    "Lightning Web Components provide task-focused experiences when standard pages are insufficient. Components should remain small, reusable and accessible.",
    "Governor limits, bulk behavior and the sharing model belong in every design decision. Apex tests should protect business behavior rather than merely reach a coverage number.",
    "A sound architecture separates the responsibilities of Flow, Apex and LWC, reducing technical debt and making future releases safer.",
  ],
  [
    "Salesforce ERP integration starts with data ownership, not a connector. The source of truth for customers, products, pricing, inventory, orders and invoices must be explicit.",
    "Synchronous and asynchronous flows should follow business expectations. Interactive price checks may be synchronous, while invoice transfers can use queues or platform events.",
    "External IDs, idempotency keys, retries, timeouts and dead-letter handling prevent duplicates and silent data loss. Integration users should have least-privilege access.",
    "Business users need monitoring as much as engineers do. They should see why an order failed and restart it safely without reading code.",
  ],
  [
    "Agentforce is most useful when an agent can complete a bounded business action using trusted data, not simply answer conversational questions.",
    "Service scenarios include case summaries and knowledge suggestions; sales scenarios include opportunity risk, meeting preparation and follow-up creation.",
    "Data access, allowed actions and human approval boundaries must be explicit. Prompt security, audit trails and privacy policies belong in the production design.",
    "Measure success through resolution time, first-contact resolution, workload and satisfaction rather than message volume.",
  ],
  [
    "R3 ERP is a desktop enterprise platform designed to unify fragmented SMB and retail operations in one workspace.",
    "Sales, purchasing, inventory, accounts, finance, retail, e-transformation, accounting, reporting and management modules share one data model.",
    "Role-based screens, headquarters and branch separation, SQL-backed data and operational reports help teams follow every movement from product to collection.",
    "R3's direction combines desktop ERP depth with APIs, CRM connectivity and AI-assisted operations to make business processes measurable and manageable.",
  ],
  [
    "When web, mobile and physical stores sell the same inventory, one quantity is not enough. Available, reserved, shipping and return-pending stock need distinct states.",
    "Short-lived reservations during checkout reduce overselling. Failed payment, cancellation and timeout paths must release reservations safely.",
    "Webhook events can be missing or duplicated, so consumers must be idempotent and periodic reconciliation must verify the final state.",
    "Accurate synchronization improves delivery promises while reducing manual corrections for the operations team.",
  ],
  [
    "CRM automation is not about automating every step. It means letting the system handle repeatable, measurable work governed by clear rules.",
    "Flow entry conditions should be narrow, record queries limited and bulk scenarios tested. Subflows prevent repeated logic.",
    "Fault paths, administrator alerts and execution logs provide production visibility. Human approval should remain for critical financial or legal actions.",
    "Good automation reduces data-entry load, increases service consistency and makes process performance measurable.",
  ],
  [
    "A mobile application should never connect directly to an ERP database. A secure API layer must own authentication, authorization, validation and audit logging.",
    "Short-lived access tokens, a secure refresh flow and protected device storage are foundational. Each user should access only resources allowed by their role.",
    "TLS, rate limiting, input validation and sensitive-data masking work together. Device loss and offline cache risks also require explicit controls.",
    "Security does not have to slow the experience: caching, pagination and background synchronization can preserve both safety and performance.",
  ],
  [
    "A strong Salesforce developer does more than write Apex. They understand business processes, know standard platform capabilities and evaluate the lifetime cost of customization.",
    "Experience with LWC, Flow, integrations, security, automated tests and data migration should be considered together. Their approach to governor limits and bulk data is revealing.",
    "Technical communication matters. A developer should explain decisions clearly, document assumptions and create measurable acceptance criteria.",
    "The right engineer solves today's requirement while reducing tomorrow's maintenance cost.",
  ],
];

export const enPosts: StaticPost[] = trPosts.map((post, index) => ({
  ...post,
  slug: [
    "erp-crm-ecommerce-integration-architecture",
    "when-salesforce-customer-360-creates-value",
    "choosing-apex-lwc-and-flow",
    "salesforce-erp-integration-best-practices",
    "agentforce-ai-crm-use-cases",
    "r3-erp-for-smb-and-retail",
    "ecommerce-erp-inventory-synchronization",
    "salesforce-flow-crm-automation-guide",
    "mobile-erp-api-security",
    "how-to-choose-a-salesforce-developer",
  ][index],
  title: [
    "How should ERP, CRM and e-commerce integration be designed?",
    "When does Salesforce Customer 360 create real value?",
    "Apex, LWC and Flow: choosing the right Salesforce architecture",
    "9 critical decisions for Salesforce ERP integration",
    "Practical AI-powered CRM use cases with Agentforce",
    "Managing SMB and retail operations with R3 ERP",
    "Preventing errors in e-commerce ERP inventory synchronization",
    "CRM automation: sustainable processes with Salesforce Flow",
    "API security between mobile applications and ERP",
    "What to consider when choosing a Salesforce developer",
  ][index],
  excerpt: [
    "A sustainable integration architecture that manages inventory, customers and orders through a shared data model.",
    "Turning Customer 360 from a data showcase into a decision workspace for sales and service teams.",
    "Balancing declarative automation and custom code for maintainable Salesforce solutions.",
    "Moving customer, inventory, quote, order and invoice data reliably between Salesforce and ERP.",
    "Where Agentforce can create safe, measurable value across sales and service operations.",
    "How R3 unifies sales, purchasing, inventory, finance, retail and e-transformation.",
    "A practical architecture for inventory accuracy, reservations, cancellations and returns.",
    "A design guide for automating approvals, tasks, notifications and record management.",
    "Identity, authorization and data protection principles for connecting mobile apps to ERP.",
    "Technical and operational capabilities behind a sustainable Salesforce implementation.",
  ][index],
  category: ["Integration", "Salesforce", "Salesforce", "Integration", "AI & CRM", "R3 ERP", "Commerce", "Salesforce", "Mobile", "Career"][index],
  readingTime: `${[7, 6, 8, 9, 7, 8, 7, 6, 7, 6][index]} min`,
  content: englishContents[index],
}));
