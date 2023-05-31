const jobData = [
  {
    title: "Web Developer & Digital Designer",
    description:
      "Web developers membuat dan memelihara situs web. Desainer digital mengembangkan, membuat, dan menguji tata letak situs web atau antarmuka, fungsi, dan navigasi untuk kegunaannya.",
    tasks: [
      "Bertemu dengan klien atau manajemen untuk mendiskusikan kebutuhan, desain, dan fungsionalitas situs web atau antarmuka.",
      "Membuat dan menguji aplikasi, antarmuka, dan menu navigasi untuk situs web.",
      "Bekerja dengan desainer grafis dan desainer lain untuk menentukan tata letak situs web.",
      "Merancang dan mengembangkan grafis dan memelihara situs web. Desainer digital mengembangkan, membuat, dan menguji tata letak situs web atau antarmuka, fungsi, dan navigasi untuk kegunaannya.",
    ],
    skills:
      "HTML, CSS, Javascript Framework, Rest Apis, SQL Server, UI/UX, PHP, Laravel, Node, Javascript.",
    matkul: "Pemorgraman Web Lanjut",
  },
  {
    title: "Computer System Analysts",
    description:
      "Mempelajari sistem prosedur komputer organisasi dan merancang peningkatannya. membantu organisasi beroperasi dengan lebih efisien dan membuat diagram untuk membantu programmer dan arsitek membangun sistem komputer.",
    tasks: [
      "Menganalisis biaya dan manfaat sistem TI dan peningkatan untuk membantu manajer memutuskan mana yang akan dipasang.",
      "Merancang cara untuk menambahkan fungsionalitas ke sistem komputer yang sudah ada.",
      "Merancang sistem baru dengan mengonfigurasi perangkat keras dan perangkat lunak.",
      "Mengawasi instalasi dan konfigurasi sistem baru dan menyesuaikannya untuk organisasi.",
      "Menguji sistem untuk memastikan bahwa sistem tersebut bekerja seperti yang diharapkan.",
      "Menulis instruksi manual dan melatih pengguna akhir sistem",
    ],
    skills:
      "Business Analysis, Data Analysis, Project Management, System Analysis, Analytical Skills, Data Visualization, Agile Project Management",
    matkul: "Sistem Informasi Geografis Energi Ketenagalistrikan",
  },
  {
    title: "Software Developer, Quality Assurance Analysts, and Testers",
    description:
      "SD Membuat aplikasi komputer yang memungkinkan pengguna melakukan tugas tertentu dan sistem yang mendasari berjalannya perangkat lunak atau mengontrol jaringan. QAT Merancang dan melaksanakan pengujian perangkat lunak untuk mengidentifikasi masalah dan mempelajari cara kerja perangkat lunak.",
    tasks: [
      "Menganalisis kebutuhan pengguna, merancang dan mengembangkan perangkat lunak untuk memenuhi kebutuhan tersebut.",
      "Merancang setiap bagian dari aplikasi atau sistem dan merencanakan bagaimana bagian-bagian tersebut dapat bekerja bersama.",
      "Membuat berbagai model dan diagram yang menunjukkan kepada programmer perangkat lunak yang diperlukan untuk suatu aplikasi.",
      "Mengidentifikasi risiko proyek dan merekomendasikan langkah-langkah untuk meminimalkan risiko tersebut.",
      "Menguji sistem untuk memastikan bahwa sistem tersebut bekerja seperti yang diharapkan.",
      "Menguji software.",
    ],
    skills:
      "Software Testing, Test Automation, Quality Assurance, Software Development, Project Management, Product Management, Python, Java Spring, Frameworks.",
    matkul: "Manajemen Proyek Perangkat Lunak, Software Quality and Metric",
  },
  {
    title: "Information Security Analysts",
    description:
      "Merencanakan dan melaksanakan langkah-langkah keamanan untuk melindungi jaringan, sistem komputer organisasi dan memasang perangkat lunak seperti firewall untuk melindungi jaringan komputer.",
    tasks: [
      "Memeriksa kerentanan pada sistem komputer dan jaringan.",
      "Meneliti tren keamanan teknologi informasi (TI) terbaru.",
      "Menyiapkan laporan yang mendokumentasikan metrik umum, percobaan serangan, dan pelanggaran keamanan.",
      "Mengembangkan standar keamanan dan praktik terbaik untuk organisasi mereka.",
      "Membantu pengguna komputer saat mereka perlu menginstal atau mempelajari produk dan prosedur keamanan baru.",
    ],
    skills:
      "Information Security, Cyber Security, Net Security, Application Security, Security Engineer, Infrastructure Security, Osi Layer, Security Analyst",
    matkul: "Pengantar Teknologi Scada",
  },
  {
    title: "Computer Programmers",
    description:
      "Computer programmer menulis, memodifikasi, dan menguji kode dan skrip yang memungkinkan perangkat lunak dan aplikasi komputer berfungsi dengan baik. Jika produk tidak bekerja dengan benar, programmer memeriksa kode atau skrip untuk mencari kesalahan dan memodifikasinya.",
    tasks: [
      "Membuat program dalam berbagai bahasa komputer, seperti C++, Java dan lainnya.",
      "Memperbarui dan mengembangkan program yang sudah ada.",
      "Menguji program untuk mencari kesalahan dan memperbaiki baris kode komputer yang salah.",
      "Membuat, memodifikasi, dan menguji kode atau skrip dalam perangkat lunak yang menyederhanakan pengembangan.",
    ],
    skills:
      "Object Oriented Programming, HTML, CSS, Rest Apis, Software Development, Java, Javascript, Python, Mobile Developer, UI/UX Design, Fullstack Developer",
    matkul: "Pemorgraman Mobile Lanjut",
  },
  {
    title: "Computer Support Specialists",
    description:
      "Membantu pengguna komputer, organisasi, memelihara jaringan komputer atau memberikan bantuan teknis secara langsung kepada pengguna komputer serta menganalisis, memecahkan masalah, dan memelihara jaringan komputer.",
    tasks: [
      "Menguji dan mengevaluasi sistem jaringan yang ada.",
      "Menganalisis masalah komputer pelanggan untuk mendiagnosis dan menentukan penyebabnya.",
      "Mendokumentasikan deskripsi pelanggan tentang masalah komputer mereka.",
      "Memandu pelanggan melalui langkah-langkah pemecahan masalah yang direkomendasikan",
    ],
    skills:
      "Hardware, Software, Technical Support, Application Support, Computer System, Computer Hardware, Computer Net, LAN, WAN, Net Problem, Installation Configuration, Education Computer",
    matkul: "Pengantar Teknologi Scada",
  },
  {
    title: "Database Administrators and Architects",
    description:
      "Membuat atau mengatur sistem untuk menyimpan dan mengamankan berbagai data, seperti informasi keuangan dan catatan pengiriman pelanggan. Memastikan bahwa data tersebut tersedia bagi pengguna yang berwenang.",
    tasks: [
      "Mengidentifikasi kebutuhan pengguna untuk membuat dan mengelola database.",
      "Merancang dan membangun basis data baru.",
      "Membuat dan menguji modifikasi pada struktur basis data bila diperlukan.",
      "Memelihara basis data dan memperbarui izin update.",
    ],
    skills:
      "Database Administrator, SQL Server, Database Design, Backup Recovery, Backup Restore, Database System, Database Management.",
    matkul:
      "Optimasi Basis Data, Basis Data Lanjut, Sistem Informasi Geografis Energi Ketenagalistrikan",
  },
  {
    title: "Computer And Information Reserch Scientists",
    description:
      "Merancang penggunaan inovatif untuk teknologi baru dan yang sudah ada, mempelajari dan memecahkan masalah kompleks dalam komputasi untuk bisnis, sains, kedokteran, dan bidang lainnya.",
    tasks: [
      "Mengeksplorasi masalah dalam komputasi dan mengembangkan teori dan model untuk mengatasi masalah.",
      "Berkolaborasi dengan para ilmuwan dan engineers untuk memecahkan masalah komputasi yang kompleks.",
      "Mengembangkan bahasa komputasi baru, sistem perangkat lunak, dan alat bantu lainnya untuk meningkatkan cara orang bekerja dengan komputer.",
      "Merancang dan melakukan eksperimen untuk menguji pengoperasian sistem perangkat lunak, sering kali menggunakan teknik dari data science dan machine learning.",
      "Menganalisis hasil eksperimen mereka.",
    ],
    skills:
      "Data Science, Data Scientist, Machine Learning, Data Analysis, Data management, Data Visualization",
    matkul:
      "Data Mining dan Warehousing, Pengantar Data Science, Embedded System, Soft Computing, Programmable Logic Controller, Big Data Energi Ketenagalistrikan, Dataset Develompent, Mikrocontroller",
  },
  {
    title: "Computer Network Architects",
    description:
      "Merancang dan membangun jaringan komunikasi data, termasuk jaringan area lokal (LAN), jaringan area luas (WAN), dan Intranet harus memiliki pengetahuan yang luas tentang rencana bisnis organisasi untuk merancang jaringan yang dapat membantu organisasi mencapai tujuannya.",
    tasks: [
      "Membuat rencana dan tata letak untuk jaringan komunikasi data.",
      "Mempresentasikan rencana kepada manajemen dan menjelaskan mengapa rencana tersebut merupakan kepentingan terbaik organisasi untuk dilaksanakan.",
      "Meningkatkan perangkat keras, seperti router atau adaptor, dan perangkat lunak, seperti driver jaringan, sesuai kebutuhan untuk mendukung jaringan komputer.",
      "Meneliti teknologi jaringan baru untuk menentukan apa yang terbaik untuk mendukung organisasi mereka di masa depan.",
    ],
    skills:
      "Net Engineer, Net Security, Red Hat, Net Infrastructure, Solution Architect, Router Switch, Architecture Design, Cloud Technology, Azure, Devops, Cloud Technology, Deploy Functional, Net, LAN, WLAN",
    matkul: "Pengantar Teknologi Scada",
  },
  {
    title: "Network and Computer System Administrator",
    description:
      "Bertanggung jawab atas pengoperasian jaringan sehari-hari. Mengatur, memasang, dan mendukung sistem komputer organisasi, termasuk jaringan area lokal (LAN), jaringan area luas (WAN), segmen jaringan, intranet, dan sistem komunikasi data lainnya masalah server komputer.",
    tasks: [
      "Menjaga keamanan jaringan dan sistem komputer.",
      "Mengevaluasi dan mengoptimalkan kinerja jaringan atau sistem.",
      "Melatih pengguna dalam penggunaan perangkat keras dan perangkat lunak yang tepat.",
      "Menafsirkan dan memecahkan masalah ketika pengguna atau sistem pemantauan otomatis memberi tahu mereka bahwa ada masalah.",
    ],
    skills:
      "Network Engineer, System Administrator, Operate System, Hardware, Software, Network Administrator, Computer Network, Router Switch, Server Network, System Security",
    matkul: "Pengantar Teknologi Scada",
  },
];

export default jobData;
