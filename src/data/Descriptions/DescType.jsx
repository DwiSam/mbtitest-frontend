const descTypes = {
  ISTJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ISTJ adalah seorang perencana dan pemantau, memastikan kualitas dapat
          diprediksi.
        </li>
        <li className="characteristic-point">
          Teliti, sistematis, dan hati-hati.
        </li>
        <li className="characteristic-point">
          Mengidentifikasi ketidaksesuaian, kelalaian, dan jebakan.
        </li>
        <li className="characteristic-point">
          Berpangkal pada kemampuan administrasi dan regulasi.
        </li>
        <li className="characteristic-point">
          Andal, realistis, dan bijaksana.
        </li>
        <li className="characteristic-point">
          Menjaga sumber daya organisasi, kelompok, keluarga, atau budaya, serta
          bertahan menuju tujuan tersebut.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam merencanakan dan menyiapkan.
        </li>
        <li className="characteristic-point">
          Menyukai membantu orang lain melalui peran mereka sebagai orang tua,
          supervisor, rekan tim, dan relawan masyarakat.
        </li>
      </ul>
    </div>
  ),
  ISTP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ISTP adalah seorang yang menjadi pemecahan masalah yang digerakkan
          oleh tindakan.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada kemampuan mengoperasikan berbagai macam alat
          dan instrumen serta menggunakan kerangka kerja untuk memecahkan
          masalah.
        </li>
        <li className="characteristic-point">
          Pengamat yang tajam terhadap lingkungan, mereka adalah gudang data dan
          fakta yang relevan untuk menganalisis dan memecahkan masalah.
        </li>
        <li className="characteristic-point">
          Berkembang dalam situasi yang menantang dan memiliki kebebasan untuk
          menciptakan solusi cerdas dan melakukan apa pun untuk memperbaiki
          berbagai hal dan membuatnya berhasil.
        </li>
        <li className="characteristic-point">
          Bangga dengan keahlian dan kecakapan mereka, yang tampaknya mereka
          peroleh dengan mudah.
        </li>
      </ul>
    </div>
  ),
  ISFJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ISFJ adalah seorang yang melindungi dan merawat, memastikan
          keselamatan orang-orang yang mereka jaga.
        </li>
        <li className="characteristic-point">
          Kemampuan terletak pada memastikan segala sesuatunya terurus sehingga
          orang lain bisa berhasil mencapai tujuan mereka.
        </li>
        <li className="characteristic-point">
          Keinginan untuk melayani kebutuhan individu, sering kali bekerja
          berjam-jam.
        </li>
        <li className="characteristic-point">
          Tenang, ramah, penuh hormat, dan sederhana. Berkembang dalam melayani
          dengan tenang tanpa gembar-gembor.
        </li>
        <li className="characteristic-point">
          Berdedikasi untuk melakukan apa pun yang diperlukan untuk memastikan
          tempat berlindung dan keselamatan, memperingatkan tentang jebakan dan
          bahaya, serta mendukung di sepanjang jalan.
        </li>
      </ul>
    </div>
  ),
  ISFP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ISFP adalah seorang yang bisa menyusun, menggunakan apa pun yang ada
          untuk mendapatkan hasil yang harmonis dan estetis.
        </li>
        <li className="characteristic-point">
          Kemampuan terletak pada menggabungkan, memvariasikan, dan
          mengimprovisasi, seringkali dalam seni tetapi juga dalam bisnis dan
          bidang lainnya.
        </li>
        <li className="characteristic-point">
          Dengan indera mereka yang tajam, mereka menjadi benar-benar terserap
          dalam aksi saat itu, menemukan apa yang sesuai dengan situasi atau
          komposisi.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam memiliki kebebasan untuk memvariasikan apa yang
          mereka lakukan sampai mereka mendapatkan efek yang tepat.
        </li>
        <li className="characteristic-point">
          Mengambil tindakan untuk membantu orang lain dan menunjukkan
          nilai-nilai.
        </li>
        <li className="characteristic-point">
          Ramah dan peka terhadap penderitaan orang lain.
        </li>
      </ul>
    </div>
  ),
  INFJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          INFJ adalah seorang yang mempunyai pandangan ke depan.
        </li>
        <li className="characteristic-point">
          Menggunakan wawasan mereka untuk menghadapi kompleksitas masalah dan
          orang-orang, seringkali dengan rasa "tahu" yang kuat sebelum orang
          lain mengetahui diri mereka sendiri.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada mengembangkan dan membimbing orang lain.
        </li>
        <li className="characteristic-point">
          Percaya dengan inspirasi dan visi mereka, untuk digunakan membantu
          orang lain.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam membantu orang lain menyelesaikan dilema pribadi dan
          etika yang mendalam.
        </li>
        <li className="characteristic-point">
          Pribadi dan kompleks, mereka membawa antusiasme dan industri yang
          tenang pada proyek-proyek yang menjadi bagian dari visi mereka.
        </li>
      </ul>
    </div>
  ),
  INFP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          INFP adalah seorang yang mempunyai sifat integritas dan advokasi.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada membantu orang mengklarifikasi masalah, nilai,
          dan identitas.
        </li>
        <li className="characteristic-point">
          Mendukung apa pun yang memungkinkan pengembangan diri seseorang.
        </li>
        <li className="characteristic-point">
          Mendorong pertumbuhan dan perkembangan dengan antusiasme yang tenang.
        </li>
        <li className="characteristic-point">
          Advokat dan pendukung setia, sangat peduli tentang tujuan mereka dan
          beberapa orang istimewa.
        </li>
        <li className="characteristic-point">
          Tertarik pada merenungkan misteri kehidupan, kebajikan, dan kejahatan
          dalam pencarian keselarasan.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam mengatasi konflik, baik dalam diri sendiri maupun
          antara orang lain, serta membantu orang mencapai pusat diri mereka.
        </li>
      </ul>
    </div>
  ),
  INTJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          INTJ adalah seorang yang merencanakan strategi, membayangkan, dan
          mengatur.
        </li>
        <li className="characteristic-point">
          Kemampuan terletak pada menetapkan tujuan, membuat rencana rinci, dan
          merancang rencana cadangan.
        </li>
        <li className="characteristic-point">
          Merancang strategi, memberikan struktur, menjadikan rencana yang
          kompleks untuk mencapai tujuan jangka panjang yang ditentukan oleh
          visi yang kuat tentang apa yang diperlukan dalam jangka panjang.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam menerapkan teori dan terbuka terhadap segala ide
          yang dapat diintegrasikan ke dalam sistem kompleks yang mereka
          usahakan untuk memahami.
        </li>
        <li className="characteristic-point">
          Mendorong diri mereka sendiri untuk menguasai apa yang dibutuhkan
          untuk mencapai tujuan.
        </li>
      </ul>
    </div>
  ),
  INTP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          INTP adalah seorang yang merancang dan mengkonfigurasi.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada memahami prinsip-prinsip yang mendasari sesuatu
          dan mendefinisikan kualitas-kualitas esensialnya.
        </li>
        <li className="characteristic-point">
          Mencoba mendefinisikan dengan tepat dan memberikan keterpaduan pada
          sistem berdasarkan pola organisasi yang ada secara alami.
        </li>
        <li className="characteristic-point">Mudah melihat inkonsistensi.</li>
        <li className="characteristic-point">
          Menikmati teori-teori dan model-model yang elegan atas kepentingan
          mereka sendiri serta penggunaannya dalam memecahkan masalah teknis dan
          manusiawi.
        </li>
        <li className="characteristic-point">
          Tertarik pada pemikiran teoritis, analisis, dan pembelajaran.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam menjelajah, memahami, dan menjelaskan bagaimana
          dunia ini bekerja.
        </li>
      </ul>
    </div>
  ),
  ESTJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ESTJ adalah seorang yang mengawasi, dengan memperhatikan tradisi dan
          peraturan kelompok.
        </li>
        <li className="characteristic-point">
          Bertanggung jawab, pekerja keras, dan efisien.
        </li>
        <li className="characteristic-point">
          Menginginkan agar standar terpenuhi, sumber daya dilestarikan, dan
          konsekuensi dijalankan.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada keteraturan, struktur, dan penyelesaian.
        </li>
        <li className="characteristic-point">
          Ingin menjaga ketertiban agar organisasi, kelompok, keluarga, atau
          budaya tetap terjaga.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam mengatur dan mengikuti komitmen serta mengajarkan
          orang lain untuk sukses.
        </li>
      </ul>
    </div>
  ),
  ESTP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ENTP adalah seorang yang bisa menemukan solusi yang cemerlang untuk
          masalah manusia dan teknis.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada pengembangan ide menjadi aplikasi fungsional
          dan inovatif yang merupakan yang pertama dari jenisnya.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam menemukan cara baru untuk menggunakan teori-teori
          untuk membuat sistem lebih efisien dan membuat orang-orang menjadi
          lebih baik.
        </li>
        <li className="characteristic-point">
          Selalu ingin mengerjakan proyek-proyek baru.
        </li>
        <li className="characteristic-point">
          Percaya pada kemampuan mereka untuk secara instan menghasilkan
          pendekatan baru yang akan berhasil.
        </li>
        <li className="characteristic-point">
          Insinyur hubungan manusia dan sistem serta dalam domain yang lebih
          ilmiah dan teknologi.
        </li>
      </ul>
    </div>
  ),
  ESFJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ESFJ adalah seorang yang menyediakan dan memastikan kebutuhan fisik
          terpenuhi.
        </li>
        <li className="characteristic-point">
          Bakat terletak pada mendukung orang lain dan menyediakan apa yang
          mereka butuhkan.
        </li>
        <li className="characteristic-point">
          Benar-benar peduli dengan kesejahteraan orang lain, memastikan mereka
          merasa nyaman dan terlibat.
        </li>
        <li className="characteristic-point">
          Menggunakan kemampuan bersosialisasi mereka untuk membina institusi
          yang sudah mapan.
        </li>
        <li className="characteristic-point">
          Hangat, penuh perhatian, bijaksana, ramah.
        </li>
        <li className="characteristic-point">
          Ingin menyenangkan dan menjaga hubungan yang harmonis.
        </li>
        <li className="characteristic-point">
          Senang membantu orang lain dan menyatukan orang-orang.
        </li>
      </ul>
    </div>
  ),
  ESFP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ESFP adalah seorang berkinerja.
        </li>
        <li className="characteristic-point">Hangat, memikat, dan cerdas.</li>
        <li className="characteristic-point">
          Ingin memberikan dampak dan membantu orang lain, membangkitkan
          kesenangan mereka, dan mendorong mereka untuk bertindak.
        </li>
        <li className="characteristic-point">
          Ingin membuat perbedaan dan melakukan sesuatu yang bermakna.
        </li>
        <li className="characteristic-point">
          Sering kali mahir dalam memainkan pertunjukan, menghibur, memotivasi,
          dan mempresentasikan.
        </li>
        <li className="characteristic-point">
          Berkembang dalam interaksi sosial, kehidupan yang menyenangkan, dan
          tantangan yang tidak diketahui.
        </li>
        <li className="characteristic-point">
          Suka membantu orang lain mendapatkan apa yang mereka inginkan dan
          butuhkan, memfasilitasi mereka untuk mendapatkan hasil.
        </li>
      </ul>
    </div>
  ),
  ENFJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ENFJ adalah seorang yang membimbing dan memimpin orang-orang untuk
          mencapai potensi mereka dan menjadi lebih dari diri mereka sendiri.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada kemampuan berempati dengan wawasan
          interpersonal yang mendalam dan mempengaruhi orang lain untuk belajar,
          tumbuh, dan berkembang.
        </li>
        <li className="characteristic-point">
          Memimpin dengan menggunakan kemampuan komunikasi, antusiasme, dan
          kehangatan yang luar biasa untuk mendapatkan kerja sama dalam mencapai
          cita-cita yang mereka pegang baik untuk individu maupun organisasi.
        </li>
        <li className="characteristic-point">
          Katalisator yang mengeluarkan yang terbaik dari orang lain.
        </li>
        <li className="characteristic-point">
          Berkembang dengan koneksi yang empatik.
        </li>
        <li className="characteristic-point">
          Sering dipanggil untuk membantu orang lain dengan masalah pribadi.
        </li>
      </ul>
    </div>
  ),
  ENFP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ENFP adalah seorang yang inspiratif, baik bagi diri mereka sendiri
          maupun orang lain.
        </li>
        <li className="characteristic-point">
          Bakat mereka terletak pada kemampuan menangkap makna yang mendalam,
          mengungkapkan kebenaran, dan memotivasi orang lain.
        </li>
        <li className="characteristic-point">
          Sangat peka terhadap motif dan tujuan tersembunyi orang lain.
        </li>
        <li className="characteristic-point">
          Tertarik pada segala hal tentang individu dan kisah mereka selama itu
          sungguh-sungguh.
        </li>
        <li className="characteristic-point">
          Antusiasme yang menular terhadap "tujuan" yang memajukan kebaikan dan
          mengembangkan potensi laten serta semangat yang sama untuk
          mengungkapkan ketidakjujuran dan ketidakotentikan.
        </li>
        <li className="characteristic-point">
          Seringkali terdorong untuk dengan antusiasme menyampaikan "pesan"
          mereka.
        </li>
      </ul>
    </div>
  ),
  ENTJ: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ENTJ adalah seorang yang mengarahkan dan memobilisasi.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada pengembangan kebijakan, pembuatan rencana,
          koordinasi dan pengurutan acara, serta penerapan strategi.
        </li>
        <li className="characteristic-point">
          Unggul dalam mengarahkan orang lain dalam mencapai tujuan yang
          ditentukan oleh visi mereka yang kuat tentang organisasi.
        </li>
        <li className="characteristic-point">
          Berkembang dalam menggalang kekuatan untuk mewujudkan rencana menjadi
          tindakan.
        </li>
        <li className="characteristic-point">
          Pembangun organisasi yang alami dan hampir selalu menemukan diri
          mereka bertanggung jawab dalam situasi yang tidak efektif.
        </li>
        <li className="characteristic-point">
          Senang menciptakan sistem yang terstruktur secara efisien dan
          menetapkan prioritas untuk mencapai tujuan.
        </li>
      </ul>
    </div>
  ),
  ENTP: (
    <div>
      <ul className="characteristic-points">
        <li className="characteristic-point">
          ENTP adalah seorang yang bisa menemukan solusi yang cemerlang untuk
          masalah manusia dan teknis.
        </li>
        <li className="characteristic-point">
          Bakatnya terletak pada pengembangan ide menjadi aplikasi fungsional
          dan inovatif yang merupakan yang pertama dari jenisnya.
        </li>
        <li className="characteristic-point">
          Bersemangat dalam menemukan cara baru untuk menggunakan teori-teori
          untuk membuat sistem lebih efisien dan membuat orang-orang menjadi
          lebih baik.
        </li>
        <li className="characteristic-point">
          Selalu ingin mengerjakan proyek-proyek baru.
        </li>
        <li className="characteristic-point">
          Percaya pada kemampuan mereka untuk secara instan menghasilkan
          pendekatan baru yang akan berhasil.
        </li>
        <li className="characteristic-point">
          Insinyur hubungan manusia dan sistem serta dalam domain yang lebih
          ilmiah dan teknologi.
        </li>
      </ul>
    </div>
  ),
};

export default descTypes;
