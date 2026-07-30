CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);
--> statement-breakpoint
INSERT INTO `posts` (`slug`, `title`, `excerpt`, `content`, `status`, `created_at`, `updated_at`) VALUES
(
  'erp-crm-ve-e-ticaret-neden-ayni-veriyi-konusmali',
  'ERP, CRM ve e-ticaret neden aynı veriyi konuşmalı?',
  'Birbirinden kopuk sistemlerin operasyon maliyetini nasıl artırdığını ve doğru entegrasyon mimarisinin ne kazandırdığını anlatıyorum.',
  'Bir işletmenin web mağazası, mobil uygulaması, ERP sistemi ve CRM platformu aynı müşteriyi farklı şekillerde tanıyorsa sorun yalnızca teknik değildir. Stok hataları, geciken siparişler ve eksik müşteri görünürlüğü doğrudan operasyon kalitesini etkiler.\n\nSağlıklı bir mimaride ERP stok ve finans verisinin kaynağı, CRM müşteri ilişkisinin çalışma alanı, e-ticaret ise sipariş deneyiminin yüzüdür. Bu sistemlerin görevleri ayrıdır; fakat ürün, müşteri ve sipariş kimlikleri ortak bir veri sözleşmesiyle yönetilmelidir.\n\nBen projelerimde entegrasyonu sonradan eklenen bir özellik olarak değil, ürünün temel mimari kararı olarak ele alıyorum. Böylece web, mobil, mağaza ve satış ekipleri aynı gerçeğe bakabiliyor.',
  'published',
  '2026-07-31T08:00:00.000Z',
  '2026-07-31T08:00:00.000Z'
),
(
  'salesforce-customer-360-gercekten-ne-zaman-deger-uretir',
  'Salesforce Customer 360 gerçekten ne zaman değer üretir?',
  'Customer 360 ekranını yalnızca bir veri vitrini olmaktan çıkarıp satış ve servis ekipleri için karar aracına dönüştüren noktalar.',
  'Customer 360, ekrana daha fazla alan eklemek anlamına gelmez. Değer; kullanıcının bir sonraki doğru kararı daha hızlı verebilmesinden doğar.\n\nSatış ekibi müşteri kaydını açtığında açık fırsatları, son siparişleri, ödenmemiş faturaları, servis vakalarını ve stok durumunu aynı bağlamda görebilmelidir. Ancak bu verilerin hepsini göstermek yerine role ve iş akışına göre önceliklendirmek gerekir.\n\nApex, Lightning Web Components ve Flow birlikte kullanıldığında yalnızca bilgi sunan değil; riskleri işaretleyen, onayları yöneten ve sonraki aksiyonu öneren bir çalışma alanı oluşturmak mümkündür.',
  'published',
  '2026-07-30T08:00:00.000Z',
  '2026-07-30T08:00:00.000Z'
);
