/**
 * AUTOLUX SHOWROOM - INTERACTIVE SCRIPT
 * High-End Automotive UI & Functionality
 */

// ==========================================
// 1. CAR DATABASE FOR MODAL & SPECIFICATIONS
// ==========================================
const CAR_DATABASE = {
    'bugatti-chiron': {
        title: 'Bugatti Chiron Super Sport',
        category: 'Hypercar',
        image: 'images/bugatti-chiron.jpg',
        price: 'Rp 65 Miliar (Off The Road)',
        rawPrice: 65000000000,
        specs: {
            'Tahun Pembuatan': '2025 (Pristine Collector NIK)',
            'Mesin': '8.0L Quad-Turbocharged W16',
            'Tenaga Maksimal': '1.578 HP @ 7.000 rpm',
            'Torsi Maksimal': '1.600 Nm @ 2.000 - 7.000 rpm',
            'Akselerasi 0-100': '2.4 Detik (0-200 km/h: 5.8s)',
            'Kecepatan Maksimal': '440 km/jam (Electronic Limiter)',
            'Transmisi': '7-Speed Dual-Clutch Ricardo DSG',
            'Sistem Penggerak': 'Permanent All-Wheel Drive',
            'Garansi': 'Bugatti Passeport Tranquillité Resmi'
        },
        desc: 'Puncak mahakarya otomotif dunia dari Molsheim, Prancis. Ditenagai mesin 8.0 liter W16 Quad-Turbo bertenaga 1.578 HP dengan bodi serat karbon aerodinamis longtail. Salah satu mobil tercepat dan paling eksklusif di muka bumi.'
    },
    'mclaren-765lt': {
        title: 'McLaren 765LT Spider',
        category: 'Track Special / Supercar',
        image: 'images/mclaren-765lt.jpg',
        price: 'Rp 12,8 Miliar (OTR)',
        rawPrice: 12800000000,
        specs: {
            'Tahun Pembuatan': '2024 (Limited 765 Units Worldwide)',
            'Mesin': '4.0L Twin-Turbo M840T V8',
            'Tenaga Maksimal': '755 HP (765 PS) @ 7.500 rpm',
            'Torsi Maksimal': '800 Nm @ 5.500 rpm',
            'Akselerasi 0-100': '2.7 Detik (0-200 km/h: 7.0s)',
            'Kecepatan Maksimal': '330 km/jam',
            'Transmisi': '7-Speed Seamless Shift Gearbox (SSG)',
            'Bobot Kering': '1.388 kg (Ultra-Lightweight Carbon)',
            'Garansi': 'McLaren Qualified Pre-Owned'
        },
        desc: 'DNA lintasan balap sejati dalam siluet Longtail yang agresif. McLaren 765LT Spider dibekali knalpot quad-exit full titanium bersuara memekakkan adrenalin, active rear wing serat karbon, dan downforce 25% lebih tinggi dari 720S.'
    },
    'ferrari-sf90': {
        title: 'Ferrari SF90 Stradale Assetto Fiorano',
        category: 'PHEV Hypercar',
        image: 'images/ferrari-sf90.jpg',
        price: 'Rp 17,5 Miliar (OTR)',
        rawPrice: 17500000000,
        specs: {
            'Tahun Pembuatan': '2024 (Assetto Fiorano Pack)',
            'Mesin': '4.0L Twin-Turbo V8 + 3 Motor Listrik',
            'Total Tenaga': '986 HP (1.000 PS Kombinasi)',
            'Torsi Maksimal': '800 Nm @ 6.000 rpm',
            'Akselerasi 0-100': '2.5 Detik',
            'Kecepatan Maksimal': '340 km/jam',
            'Transmisi': '8-Speed F1 Dual-Clutch Transmission',
            'Sistem Penggerak': 'e-4WD (All-Wheel Drive Hybrid)',
            'Garansi': '7 Tahun Ferrari Genuine Maintenance'
        },
        desc: 'Hypercar plug-in hybrid pertama dari Maranello yang memadukan mesin Twin-Turbo V8 dengan 3 motor listrik Formula 1. Paket Assetto Fiorano mencakup suspensi balap Multimatic, spoiler karbon beraliran tinggi, dan pengurangan bobot 30 kg.'
    },
    'pagani-huayra': {
        title: 'Pagani Huayra Roadster BC',
        category: 'Boutique Hypercar / V12',
        image: 'images/pagani-huayra.jpg?v=2',
        price: 'Rp 72 Miliar (Off The Road)',
        rawPrice: 72000000000,
        specs: {
            'Tahun Pembuatan': '2024 (Limited 40 Units Worldwide)',
            'Mesin': '6.0L Mercedes-AMG Twin-Turbo V12 (M158)',
            'Tenaga Maksimal': '791 HP (800 PS) @ 5.900 rpm',
            'Torsi Maksimal': '1.050 Nm @ 2.000 - 5.600 rpm',
            'Akselerasi 0-100': '2.8 Detik',
            'Kecepatan Maksimal': '380 km/jam',
            'Transmisi': '7-Speed Xtrac Transverse Sequential',
            'Bobot Kering': '1.250 kg (Carbo-Triax HP62 Monocoque)',
            'Garansi': 'Pagani Rinascimento Factory Certified'
        },
        desc: 'Karya seni haute horlogerie di atas empat roda dari Horacio Pagani, San Cesario sul Panaro. Dibangun dengan bahan eksotik Carbo-Triax HP62 yang 38% lebih kaku dari serat karbon biasa, knalpot quad-pipe titanium dengan flap aktif, dan interior mekanikal presisi buatan tangan.'
    },
    'aventador-svj': {
        title: 'Lamborghini Aventador SVJ (SuperVeloce Jota)',
        category: 'V12 Supercar',
        image: 'images/lamborghini-svj.jpg',
        price: 'Rp 16,5 Miliar (OTR)',
        rawPrice: 16500000000,
        specs: {
            'Tahun Pembuatan': '2023 (Collector NIK)',
            'Mesin': '6.5L Naturally Aspirated V12',
            'Tenaga Maksimal': '759 HP (770 PS) @ 8.500 rpm',
            'Torsi Maksimal': '720 Nm @ 6.750 rpm',
            'Akselerasi 0-100': '2.8 Detik',
            'Kecepatan Maksimal': '352 km/jam',
            'Transmisi': '7-Speed Independent Shifting Rod (ISR)',
            'Aerodinamika': 'ALA 2.0 (Aerodinamica Lamborghini Attiva)',
            'Garansi': 'Sertifikasi Inspeksi 160 Titik AutoLux'
        },
        desc: 'Ikon V12 murni pemegang rekor legendaris Nürburgring Nordschleife. Mengusung aero aktif ALA 2.0 yang mengarahkan aliran angin secara dinamis untuk traksi menikung maksimal, knalpot titanium sentral, dan monocoque serat karbon penuh.'
    },
    'porsche-gt3rs': {
        title: 'Porsche 911 GT3 RS (992)',
        category: 'Track Weapon',
        image: 'images/porsche-gt3rs.jpg',
        price: 'Rp 9,8 Miliar (OTR)',
        rawPrice: 9800000000,
        specs: {
            'Tahun Pembuatan': '2025 (Brand New NIK 2025)',
            'Mesin': '4.0L High-Revving Naturally Aspirated Boxer 6',
            'Tenaga Maksimal': '518 HP (525 PS) @ 8.500 rpm (Redline 9.000 rpm)',
            'Torsi Maksimal': '465 Nm @ 6.300 rpm',
            'Akselerasi 0-100': '3.2 Detik',
            'Kecepatan Maksimal': '296 km/jam',
            'Transmisi': '7-Speed Porsche Doppelkupplung (PDK)',
            'Fitur Khusus': 'DRS (Drag Reduction System) & Active Aero Wing',
            'Garansi': 'Porsche Approved Official Warranty'
        },
        desc: 'Senjata sirkuit paling murni yang legal dikendarai di jalan raya. Dilengkapi sayap swan-neck aktif bersistem DRS layaknya Formula 1, radiator tengah tunggal ala 911 RSR, 4 tombol putar di setir untuk mengatur suspensi dan diferensial secara real-time.'
    },
    'lotus-emira': {
        title: 'Lotus Emira V6 First Edition',
        category: 'Pure Sports Car / Track',
        image: 'images/lotus-emira.jpg',
        price: 'Rp 3,2 Miliar (OTR)',
        rawPrice: 3200000000,
        specs: {
            'Tahun Pembuatan': '2024 (First Edition)',
            'Mesin': '3.5L Supercharged 24-Valve V6',
            'Tenaga Maksimal': '400 HP @ 6.800 rpm',
            'Torsi Maksimal': '420 Nm @ 3.500 rpm',
            'Akselerasi 0-100': '4.2 Detik',
            'Kecepatan Maksimal': '290 km/jam',
            'Transmisi': '6-Speed Manual with Exposed Mechanical Linkage',
            'Kemudi': 'Hydraulic Power Steering (Pure Road Feedback)',
            'Garansi': 'Lotus Official Warranty 3 Years'
        },
        desc: 'Mobil sport bermesin pembakaran murni terakhir dalam sejarah Lotus Cars Hethel, Inggris. Dirancang untuk purist sejati dengan transmisi manual 6-percepatan bertautan mekanikal terbuka yang indah, sistem kemudi hidrolik presisi tanpa filter elektrik, dan sasis aluminium berbobot ringan legendaris.'
    },
    'koenigsegg-jesko': {
        title: 'Koenigsegg Jesko Attack',
        category: 'Megacar / Hypercar',
        image: 'images/koenigsegg-jesko.jpg',
        price: 'Rp 78 Miliar (Off The Road)',
        rawPrice: 78000000000,
        specs: {
            'Tahun Pembuatan': '2025 (Bespoke Allocation)',
            'Mesin': '5.0L Twin-Turbo Flat-Plane V8',
            'Tenaga Maksimal': '1.600 HP (Bahan Bakar E85) / 1.280 HP (Gasoline)',
            'Torsi Maksimal': '1.500 Nm @ 5.100 rpm',
            'Akselerasi 0-100': '2.5 Detik',
            'Kecepatan Maksimal': '480+ km/jam (Theoretical Top Speed)',
            'Transmisi': '9-Speed Light Speed Transmission (LST)',
            'Downforce': '1.400 kg pada kecepatan tinggi',
            'Garansi': 'Koenigsegg Factory Warranty Worldwide'
        },
        desc: 'Megacar mahakarya teknik Swedia dengan transmisi revolusioner 9-percepatan tanpa kopling tradisional (LST) yang mampu melompat ke gigi mana pun secara instan. Menghasilkan downforce luar biasa 1.400 kg untuk dominasi lintasan sirkuit.'
    },
    'honda-nsx': {
        title: 'Honda NSX Type S Hybrid',
        category: 'Hybrid Supercar / JDM',
        image: 'images/honda-nsx.jpg',
        price: 'Rp 7,5 Miliar (OTR)',
        rawPrice: 7500000000,
        specs: {
            'Tahun Pembuatan': '2024 (Limited Edition #089/350 Worldwide)',
            'Mesin': '3.5L Twin-Turbo V6 + 3 Motor Listrik',
            'Total Tenaga': '600 HP (Kombinasi)',
            'Torsi Maksimal': '667 Nm',
            'Akselerasi 0-100': '2.7 Detik',
            'Kecepatan Maksimal': '307 km/jam',
            'Transmisi': '9-Speed Dual-Clutch Transmission (DCT)',
            'Sistem Penggerak': 'Sport Hybrid SH-AWD (Torque Vectoring)',
            'Garansi': 'AutoLux Supercar Certified'
        },
        desc: 'Edisi pamungkas Type S dari generasi kedua NSX legendaris. Dilengkapi turbocharger dari mobil balap NSX GT3 Evo, transmisi DCT dengan respon paddle shift 50% lebih cepat, atap serat karbon mentah, dan sistem Sport Hybrid SH-AWD revolusioner untuk pengendalian menikung seolah melawan gravitasi.'
    },
    'porsche-911': {
        title: 'Porsche 911 Turbo S (992)',
        category: 'Supercar',
        image: 'images/porsche.jpg',
        price: 'Rp 4,5 Miliar (Off The Road)',
        rawPrice: 4500000000,
        specs: {
            'Tahun Pembuatan': '2025',
            'Mesin': '3.8L Twin-Turbo Boxer 6-Cylinder',
            'Tenaga Maksimal': '640 HP @ 6.750 rpm',
            'Torsi Maksimal': '800 Nm @ 2.500 - 4.000 rpm',
            'Akselerasi 0-100': '2.7 Detik (Sport Chrono)',
            'Kecepatan Maksimal': '330 km/jam',
            'Transmisi': '8-Speed Porsche Doppelkupplung (PDK)',
            'Sistem Rem': 'Porsche Ceramic Composite Brake (PCCB)',
            'Garansi': 'Porsche Approved Warranty'
        },
        desc: 'Tolok ukur utama supercar harian di dunia. Porsche 911 Turbo S menghadirkan cengkeraman all-wheel drive tak tertandingi dengan akselerasi instan 0-100 dalam 2.7 detik. Dilengkapi sistem aero adaptif dan interior kulit Nappa premium.'
    },
    'lamborghini': {
        title: 'Lamborghini Huracán EVO',
        category: 'Supercar',
        image: 'images/lamborghini.jpg',
        price: 'Rp 8,9 Miliar (OTR)',
        rawPrice: 8900000000,
        specs: {
            'Tahun Pembuatan': '2024 (Low KM 1.200 km)',
            'Mesin': '5.2L Naturally Aspirated V10',
            'Tenaga Maksimal': '631 HP @ 8.000 rpm',
            'Torsi Maksimal': '600 Nm @ 6.500 rpm',
            'Akselerasi 0-100': '2.9 Detik',
            'Kecepatan Maksimal': '325 km/jam',
            'Transmisi': '7-Speed Dual Clutch LDF',
            'Warna Eksterior': 'Giallo Inti Pearl Effect',
            'Garansi': 'Sertifikasi Inspeksi 160 Titik AutoLux'
        },
        desc: 'Suara raungan mesin V10 Naturally Aspirated legendaris dari Sant\'Agata Bolognese. Huracán EVO dilengkapi sistem Lamborghini Dinamica Veicolo Integrata (LDVI) yang memprediksi perilaku berkendara secara real-time. Kondisi pristine seperti baru.'
    },
    'audi-r8': {
        title: 'Audi R8 V10 Performance Quattro',
        category: 'Mid-Engine Supercar',
        image: 'images/audi-r8.jpg',
        price: 'Rp 5,4 Miliar (OTR)',
        rawPrice: 5400000000,
        specs: {
            'Tahun Pembuatan': '2024 (Last V10 Edition)',
            'Mesin': '5.2L FSI Naturally Aspirated V10',
            'Tenaga Maksimal': '612 HP @ 8.000 rpm',
            'Torsi Maksimal': '580 Nm @ 6.600 rpm',
            'Akselerasi 0-100': '3.1 Detik',
            'Kecepatan Maksimal': '331 km/jam',
            'Transmisi': '7-Speed S-Tronic Dual Clutch',
            'Sistem Penggerak': 'quattro Permanent All-Wheel Drive',
            'Garansi': 'Audi Sport Warranty & Inspection'
        },
        desc: 'Supercar harian paling dicintai dengan raungan mesin V10 Naturally Aspirated legendaris. Dilengkapi sasis Audi Space Frame (ASF) aluminium dan serat karbon, Audi laser headlights, bucket seats berbalut kulit Nappa, dan Virtual Cockpit digital.'
    },
    'corvette-c8': {
        title: 'Chevrolet Corvette Z06 (C8)',
        category: 'American Mid-Engine Supercar',
        image: 'images/corvette-c8.jpg',
        price: 'Rp 3,9 Miliar (OTR)',
        rawPrice: 3900000000,
        specs: {
            'Tahun Pembuatan': '2024 / 2025',
            'Mesin': '5.5L Flat-Plane Crank LT6 NA V8',
            'Tenaga Maksimal': '670 HP @ 8.400 rpm (Redline 8.600 rpm)',
            'Torsi Maksimal': '623 Nm @ 6.300 rpm',
            'Akselerasi 0-100': '2.6 Detik (Z07 Package)',
            'Kecepatan Maksimal': '314 km/jam',
            'Transmisi': '8-Speed Tremec Dual-Clutch',
            'Suspensi': 'Magnetic Selective Ride Control 4.0',
            'Garansi': 'AutoLux Full Warranty'
        },
        desc: 'Supercar bermesin tengah Amerika dengan raungan eksotis layaknya mobil sport Italia berkat Flat-Plane Crankshaft. Memegang rekor mesin Naturally Aspirated V8 paling bertenaga yang pernah diproduksi massal di dunia.'
    },
    'dodge-demon': {
        title: 'Dodge Challenger SRT Demon 170',
        category: 'Drag Muscle Sport',
        image: 'images/dodge-demon.jpg',
        price: 'Rp 4,6 Miliar (OTR)',
        rawPrice: 4600000000,
        specs: {
            'Tahun Pembuatan': '2024 (Last Call Collector Edition)',
            'Mesin': '6.2L Supercharged HEMI V8 (3.0L Supercharger)',
            'Tenaga Maksimal': '1.025 HP @ 6.500 rpm (Bahan Bakar E85)',
            'Torsi Maksimal': '1.281 Nm @ 4.200 rpm',
            'Akselerasi 0-100': '1.66 Detik (NHRA Certified)',
            '1/4 Mile (402m)': '8.91 Detik @ 243.2 km/jam',
            'Transmisi': '8-Speed TorqueFlite AT with TransBrake 2.0',
            'G-Force Peluncuran': '2.004 G (Akselerasi G Tertinggi Produksi Massal)',
            'Garansi': 'AutoLux Inspection Guarantee'
        },
        desc: 'Raja akselerasi trek lurus legal jalan raya tercepat yang pernah diproduksi di dunia. Memecahkan rekor dengan akselerasi 0-100 km/jam hanya dalam 1.66 detik dan daya dorong 2.004 G. Mobil produksi pertama yang mampu mengangkat kedua roda depan saat peluncuran drag race.'
    },
    'nissan-gtr': {
        title: 'Nissan GT-R Nismo (R35 Godzilla)',
        category: 'JDM High-Performance',
        image: 'images/nissan-gtr.jpg',
        price: 'Rp 4,8 Miliar (OTR)',
        rawPrice: 4800000000,
        specs: {
            'Tahun Pembuatan': '2024 (Nismo Special Edition)',
            'Mesin': '3.8L Twin-Turbo VR38DETT V6 (Takumi Hand-Built)',
            'Tenaga Maksimal': '600 HP @ 6.800 rpm',
            'Torsi Maksimal': '652 Nm @ 3.600 - 5.600 rpm',
            'Akselerasi 0-100': '2.7 Detik',
            'Kecepatan Maksimal': '330 km/jam',
            'Transmisi': '6-Speed Dual Clutch BorgWarner',
            'Sistem Penggerak': 'ATTESA E-TS All-Wheel Drive',
            'Garansi': 'Sertifikasi Nismo & Garansi AutoLux'
        },
        desc: 'Monster lintasan balap legendaris dari Jepang berjuluk "Godzilla". Versi Nismo dilengkapi turbocharger GT3 race-spec, atap dan kap mesin serat karbon mentah, rem karbon keramik Brembo, dan handling luar biasa di segala cuaca.'
    },
    'toyota-supra': {
        title: 'Toyota GR Supra 3.0 Pro',
        category: 'JDM Sport Coupe',
        image: 'images/toyota-supra.jpg',
        price: 'Rp 2,2 Miliar (OTR)',
        rawPrice: 2200000000,
        specs: {
            'Tahun Pembuatan': '2025 (Brand New NIK 2025)',
            'Mesin': '3.0L Inline-6 Twin-Scroll Turbo (B58)',
            'Tenaga Maksimal': '382 HP @ 5.800 rpm',
            'Torsi Maksimal': '500 Nm @ 1.800 - 5.000 rpm',
            'Akselerasi 0-100': '3.9 Detik',
            'Kecepatan Maksimal': '250 km/jam (Electronic Limit)',
            'Transmisi': '8-Speed Sport Automatic with Paddle Shift',
            'Distribusi Bobot': '50:50 Sempurna Depan-Belakang',
            'Garansi': '5 Tahun Garansi Resmi Toyota Astra Motor'
        },
        desc: 'Ikon sportscar Jepang warisan legendaris TOYOTA GAZOO Racing. Distribusi bobot presisi 50:50, sasis kaku dengan pusat gravitasi sangat rendah, Active Differential, dan suspensi adaptif variabel untuk kelincahan menikung tingkat tinggi.'
    },
    'mazda-miata': {
        title: 'Mazda MX-5 Miata RF (Retractable Fastback)',
        category: 'Lightweight JDM Roadster',
        image: 'images/mazda-miata.jpg',
        price: 'Rp 980 Juta (OTR)',
        rawPrice: 980000000,
        specs: {
            'Tahun Pembuatan': '2025 (Brand New NIK 2025)',
            'Mesin': '2.0L Skyactiv-G Naturally Aspirated 4-Cylinder',
            'Tenaga Maksimal': '181 HP @ 7.000 rpm (Redline 7.500 rpm)',
            'Torsi Maksimal': '205 Nm @ 4.000 rpm',
            'Akselerasi 0-100': '5.7 Detik',
            'Transmisi': '6-Speed Short-Throw Manual with Asymmetric LSD',
            'Bobot Kering': '1.050 kg (Distribusi 50:50 Ideal)',
            'Atap': 'Power Retractable Hardtop Fastback (13 Detik)',
            'Garansi': '5 Tahun Garansi Mazda Indonesia (EMI)'
        },
        desc: 'Definisi kenikmatan berkendara murni berfilosofi "Jinba Ittai" (kesatuan kuda dan penunggang). Dengan bobot ultra-ringan 1.050 kg, penggerak roda belakang (RWD), Limited Slip Differential asimetris baru, dan kemudi yang sangat komunikatif, setiap tikungan menghadirkan kepuasan murni.'
    },
    'aston-dbs': {
        title: 'Aston Martin DBS Superleggera',
        category: 'Super GT Coupe',
        image: 'images/aston-dbs.jpg',
        price: 'Rp 8,5 Miliar (OTR)',
        rawPrice: 8500000000,
        specs: {
            'Tahun Pembuatan': '2024 (Pristine Luxury)',
            'Mesin': '5.2L Twin-Turbocharged V12',
            'Tenaga Maksimal': '715 HP @ 6.500 rpm',
            'Torsi Maksimal': '900 Nm @ 1.800 - 5.000 rpm',
            'Akselerasi 0-100': '3.4 Detik',
            'Kecepatan Maksimal': '340 km/jam',
            'Transmisi': '8-Speed ZF Automatic with Shift Paddles',
            'Bodi': 'Full Carbon Fiber Panels (Superleggera)',
            'Garansi': 'Aston Martin Timeless Certified'
        },
        desc: 'Grand Tourer pamungkas asal Gaydon, Inggris. DBS Superleggera memadukan keanggunan desain Britania dengan torsi raksasa 900 Nm dari mesin V12 Twin-Turbo. Interior mewah berbalut kulit Bridge of Weir buatan tangan dan aksen serat karbon satin.'
    },
    'mustang-shelby': {
        title: 'Ford Mustang Shelby GT500',
        category: 'Muscle Sport Coupe',
        image: 'images/mustang-shelby.jpg',
        price: 'Rp 2,8 Miliar (OTR)',
        rawPrice: 2800000000,
        specs: {
            'Tahun Pembuatan': '2024',
            'Mesin': '5.2L Supercharged Cross-Plane V8 (Predator)',
            'Tenaga Maksimal': '760 HP @ 7.300 rpm',
            'Torsi Maksimal': '847 Nm @ 5.000 rpm',
            'Akselerasi 0-100': '3.3 Detik',
            'Kecepatan Maksimal': '290 km/jam',
            'Transmisi': '7-Speed Tremec Dual-Clutch',
            'Pengereman': 'Brembo 6-Piston 420mm Rotor Terbesar',
            'Garansi': 'AutoLux Inspection Certified'
        },
        desc: 'Mustang terkencang dan paling bertenaga legal jalan raya dalam sejarah Ford. Ditenagai mesin V8 Supercharger 5.2L berkode "Predator" yang menghasilkan 760 tenaga kuda dan transmisi dual-clutch secepat kilat dalam 80 milidetik.'
    },
    'bmw-m4': {
        title: 'BMW M4 Competition Coupé',
        category: 'Sport Coupe',
        image: 'images/BMWM4.jpg',
        price: 'Rp 2,4 Miliar (OTR)',
        rawPrice: 2400000000,
        specs: {
            'Tahun Pembuatan': '2025 (NIK 2025)',
            'Mesin': '3.0L M TwinPower Turbo 6-Cylinder',
            'Tenaga Maksimal': '503 HP @ 6.250 rpm',
            'Torsi Maksimal': '650 Nm @ 2.750 - 5.500 rpm',
            'Akselerasi 0-100': '3.8 Detik',
            'Kecepatan Maksimal': '290 km/jam (M Driver\'s)',
            'Transmisi': '8-Speed M Steptronic with Drivelogic',
            'Kapasitas Tangki': '59 Liter',
            'Garansi': '5 Tahun Warranty & Free Service'
        },
        desc: 'BMW M4 Competition memadukan estetika atletis khas M dengan performa lintasan balap sejati. Dilengkapi Carbon Fiber Roof, M Sport Seats, dan knalpot sport quad-tailpipe bertenaga buas. Unit baru dengan kelengkapan dokumen resmi.'
    },
    'ferrari': {
        title: 'Ferrari LaFerrari Hybrid',
        category: 'Hypercar / Collector Item',
        image: 'images/laferarri.jpg',
        price: 'Call for Price (Private Inquiry)',
        rawPrice: 38000000000,
        specs: {
            'Tahun Pembuatan': 'Limited Collector Unit',
            'Mesin': '6.3L V12 + HY-KERS Electric Motor',
            'Total Tenaga': '950 HP (800 HP Mesin + 163 HP Listrik)',
            'Torsi Maksimal': '> 900 Nm',
            'Akselerasi 0-100': '2.4 Detik',
            'Kecepatan Maksimal': '> 350 km/jam',
            'Sasis': 'Carbon Fiber Monocoque F1 Technology',
            'Produksi': 'Terbatas 499 Unit di Seluruh Dunia',
            'Garansi': 'Sertifikat Ferrari Classiche Resmi'
        },
        desc: 'Mahakarya puncak dari Maranello. Ferrari LaFerrari merupakan salah satu anggota \'Holy Trinity\' hypercar modern dengan teknologi Formula 1 KERS hybrid. Investasi koleksi berharga tinggi dengan riwayat perawatan resmi Ferrari.'
    },
    'rolls-royce': {
        title: 'Rolls-Royce Ghost Extended',
        category: 'Ultra Luxury Saloon',
        image: 'images/rollsroyce.jpg',
        price: 'Rp 12,5 Miliar (OTR)',
        rawPrice: 12500000000,
        specs: {
            'Tahun Pembuatan': '2025',
            'Mesin': '6.75L Twin-Turbocharged V12',
            'Tenaga Maksimal': '563 HP @ 5.000 rpm',
            'Torsi Maksimal': '850 Nm @ 1.600 rpm',
            'Akselerasi 0-100': '4.8 Detik',
            'Suspensi': 'Planar Suspension Magic Carpet Ride',
            'Transmisi': '8-Speed Satellite-Aided ZF',
            'Interior': 'Bespoke Starlight Headliner & Champagne Cooler',
            'Garansi': 'Rolls-Royce Ownership Package'
        },
        desc: 'Puncak kemewahan otomotif tanpa kompromi. Rolls-Royce Ghost Extended memberikan ruang kaki belakang yang sangat lapang, insulasi suara lebih dari 100 kg akustik hening, pintu otomatis dengan power assist, dan kenyamanan suspensi karpet terbang.'
    }
};

// ==========================================
// 2. NAVBAR SCROLL & MOBILE TOGGLE
// ==========================================
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Navbar background blur on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Floating Back to Top Button
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Scrollspy for active nav link
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// 3. CATALOG FILTER & SEARCH FUNCTIONALITY
// ==========================================
const searchInput = document.getElementById('carSearchInput');
const noResultsMsg = document.getElementById('noResultsMsg');

let currentCategory = 'all';

function filterCars() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;
    const cards = document.querySelectorAll('.car-card');

    cards.forEach(card => {
        const carCategory = card.getAttribute('data-category');
        const carName = card.getAttribute('data-name').toLowerCase();
        
        const matchesCategory = (currentCategory === 'all' || (carCategory && carCategory.split(/\s+/).includes(currentCategory)));
        const matchesSearch = carName.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (noResultsMsg) {
        if (visibleCount === 0) {
            noResultsMsg.classList.remove('hidden');
        } else {
            noResultsMsg.classList.add('hidden');
        }
    }
}

// Category tabs event
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        filterCars();
    });
});

// Search input event
if (searchInput) {
    searchInput.addEventListener('input', filterCars);
}

// Function called by footer links
function filterByCategory(category) {
    currentCategory = category;
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterCars();
}

function resetFilter() {
    currentCategory = 'all';
    if (searchInput) searchInput.value = '';
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterCars();
}

// ==========================================
// 4. CAR DETAIL MODAL
// ==========================================
const carModal = document.getElementById('carModal');
const modalDynamicBody = document.getElementById('modalDynamicBody');

function openCarModal(carKey) {
    const car = CAR_DATABASE[carKey];
    if (!car) return;

    let specsHtml = '';
    for (const [key, val] of Object.entries(car.specs)) {
        specsHtml += `
            <div class="modal-spec-box">
                <span>${key}</span>
                <strong>${val}</strong>
            </div>
        `;
    }

    const waText = encodeURIComponent(`Halo AutoLux, saya tertarik dengan informasi mendalam unit ${car.title} (${car.price}). Mohon info ketersediaan & jadwal kunjungan showroom.`);

    modalDynamicBody.innerHTML = `
        <div class="modal-car-hero">
            <img src="${car.image}" alt="${car.title}" onerror="this.onerror=null; this.src='images/bugatti-chiron.jpg';">
        </div>
        <div class="modal-car-details">
            <div class="modal-header-row">
                <div>
                    <span class="car-category-tag">${car.category.toUpperCase()}</span>
                    <h2>${car.title}</h2>
                </div>
                <div class="modal-price">${car.price}</div>
            </div>

            <h4 style="margin-bottom: 12px; color: var(--text-white); font-size: 1.05rem;">
                <i class="fa-solid fa-list-check" style="color: var(--primary); margin-right: 8px;"></i> Spesifikasi Lengkap
            </h4>
            <div class="modal-specs-table">
                ${specsHtml}
            </div>

            <div class="modal-desc-box">
                <h4 style="margin-bottom: 8px; color: var(--text-white);">Deskripsi & Keistimewaan Unit</h4>
                <p>${car.desc}</p>
            </div>

            <div class="modal-actions">
                <a href="https://wa.me/6283161040759?text=${waText}" target="_blank" class="btn btn-primary" style="flex: 1;">
                    <i class="fa-brands fa-whatsapp"></i> Jadwalkan Private Viewing via WhatsApp
                </a>
                <button class="btn btn-glass" onclick="closeCarModal()">Tutup</button>
            </div>
        </div>
    `;

    carModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCarModal() {
    carModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(e) {
    if (e.target === carModal) {
        closeCarModal();
    }
}

// ESC Key listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && carModal.classList.contains('active')) {
        closeCarModal();
    }
});

// ==========================================
// 5. CAR LOAN / CREDIT CALCULATOR
// ==========================================
let currentTenor = 3; // default 3 years

function setTenor(years) {
    currentTenor = years;
    const tenorButtons = document.querySelectorAll('.tenor-btn');
    tenorButtons.forEach(btn => {
        if (parseInt(btn.getAttribute('data-tenor')) === years) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    calculateLoan();
}

function updateCalcFromCar() {
    calculateLoan();
}

function formatRupiah(number) {
    return 'Rp ' + Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculateLoan() {
    const carSelect = document.getElementById('carSelect');
    const dpSlider = document.getElementById('dpPercent');
    const dpPercentVal = document.getElementById('dpPercentVal');
    
    const resOtr = document.getElementById('resOtr');
    const resDp = document.getElementById('resDp');
    const resLoan = document.getElementById('resLoan');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const calcWaBtn = document.getElementById('calcWaBtn');

    if (!carSelect || !dpSlider) return;

    const otrPrice = parseFloat(carSelect.value);
    const dpPercent = parseInt(dpSlider.value);
    
    dpPercentVal.textContent = dpPercent + '%';

    // Calculations
    const dpAmount = otrPrice * (dpPercent / 100);
    const loanPrincipal = otrPrice - dpAmount;
    
    // Flat interest rate: 5.5% per annum
    const annualInterestRate = 0.055;
    const totalInterest = loanPrincipal * annualInterestRate * currentTenor;
    const totalLoanWithInterest = loanPrincipal + totalInterest;
    const months = currentTenor * 12;
    const monthly = totalLoanWithInterest / months;

    // Display
    resOtr.textContent = formatRupiah(otrPrice);
    resDp.textContent = formatRupiah(dpAmount);
    resLoan.textContent = formatRupiah(loanPrincipal);
    monthlyInstallment.innerHTML = `${formatRupiah(monthly)} <small>/ bulan</small>`;

    // Update WhatsApp pre-filled text
    const selectedCarName = carSelect.options[carSelect.selectedIndex].text;
    const waText = encodeURIComponent(`Halo AutoLux, saya tertarik dengan simulasi kredit:\n- Unit: ${selectedCarName}\n- DP (${dpPercent}%): ${formatRupiah(dpAmount)}\n- Tenor: ${currentTenor} Tahun\n- Est. Cicilan: ${formatRupiah(monthly)} / bulan\nMohon info proses pengajuan pembiayaannya.`);
    calcWaBtn.href = `https://wa.me/6283161040759?text=${waText}`;
}

// Initial calculation run
calculateLoan();

// ==========================================
// 6. CONTACT FORM SUBMISSION TO WHATSAPP
// ==========================================
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const wa = document.getElementById('clientWa').value.trim();
    const car = document.getElementById('carInterested').value;
    const msg = document.getElementById('clientMsg').value.trim();

    let messageText = `Halo AutoLux Showroom,\n\nSaya ingin berkonsultasi mengenai mobil mewah:\n- Nama: ${name}\n- No. WhatsApp: ${wa}\n- Unit yang Diminati: ${car}`;
    if (msg) {
        messageText += `\n- Pesan Khusus: ${msg}`;
    }

    const waUrl = `https://wa.me/6283161040759?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
}

console.log("AutoLux Premium Showroom Loaded Successfully!");