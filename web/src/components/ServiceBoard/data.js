const card = {
  cardColor: '#66ff00',
  cardStyle: {
    borderRadius: 6
  }
};

const laneStyle = {
  backgroundColor: 'transparent',
  width: '9rem',
  height: '90vh',
  margin: '-0.2rem'
};

export const serviceDataEn = [
  // Sun
  {
    cards: [
      {
        ...card,
        id: 'Card11',
        laneId: 'lane1',
        metadata: {
          id: 'Card11'
        },
        name: 'Abdul Cader',
        startDate: '19-2-2020',
        occurences: 3,
        companyName: 'Le Meridian Towers',
        address: 'Kudai-Makkah Kudai road makkah',
        service: {
          complete: false,
          notCompleted: false,
          cancelled: false,
          scheduled: false,
          callOut: false,
          audit: false,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card12',
        laneId: 'lane1',
        metadata: {
          id: 'Card12'
        },
        name: 'Abdul Cader',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'Samba Financial Group Fayha office branch',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card13',
        laneId: 'lane1',
        metadata: {
          id: 'Card13'
        },
        name: 'Abdul Cader',
        startDate: '17-01-2021',
        occurences: 0,
        companyName: 'Tamimi Global Co Ltd (TAFGA) Dialysis centre near red sea mall',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card14',
        laneId: 'lane1',
        metadata: {
          id: 'Card14'
        },
        name: 'Abdul Cader',
        startDate: '19-2-2020',
        occurences: 3,
        companyName: 'Le Meridian Towers Kudai-Makkah Kudai road makkah',
        service: {
          complete: false,
          notCompleted: false,
          cancelled: false,
          scheduled: false,
          callOut: false,
          audit: false,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card15',
        laneId: 'lane1',
        metadata: {
          id: 'Card15'
        },
        name: 'Abdul Cader',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'Samba Financial Group Fayha office branch',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card16',
        laneId: 'lane1',
        metadata: {
          id: 'Card16'
        },
        name: 'Abdul Cader',
        startDate: '17-01-2021',
        occurences: 0,
        companyName: 'Tamimi Global Co Ltd (TAFGA) Dialysis centre near red sea mall',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 1,
    id: 'lane1',
    day: 'Sun',
    date: '14-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Abbas Qureshi', colorCode: '#b5025b' },
      { name: 'Abdul Cader', colorCode: '#66ff00' },
      { name: 'Abdulla Sherieff', colorCode: '#8ad22e' },
      { name: 'Abid Muhammadali', colorCode: '#62f840' }
    ]
  },
  // Mon
  {
    cards: [
      {
        ...card,
        id: 'Card21',
        laneId: 'lane2',
        metadata: {
          id: 'Card21'
        },
        name: 'Abdulla Sherieff',
        startDate: '19-05-2021',
        occurences: 8,
        companyName: 'Panda Retail Company Panda 3',
        service: {
          scheduled: true,
          maintenance: true,
          permitReceived: true
        }
      },
      {
        ...card,
        id: 'Card22',
        laneId: 'lane2',
        metadata: {
          id: 'Card22'
        },
        name: 'Abdulla Sherieff',
        startDate: '19-05-2021',
        occurences: 8,
        companyName: 'Panda Retail Company Panda 1',
        service: {
          scheduled: true,
          highene: true,
          dayJob: true
        }
      }
    ],
    currentPage: 2,
    id: 'lane2',
    day: 'Mon',
    date: '15-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Tughlaque Shaikh', colorCode: '#0000ff' },
      { name: 'Valentine Gonzalves', colorCode: '#ffcc66' },
      { name: 'Venkateshwaru Shri', colorCode: '#cc541f' },
      { name: 'Yaseen Muhammed', colorCode: '#cc9999' }
    ]
  },
  // Tue
  {
    cards: [
      {
        ...card,
        id: 'Card31',
        laneId: 'lane3',
        metadata: {
          id: 'Card31'
        },
        name: 'Abdul Cader',
        startDate: '21-07-2020',
        occurences: 0,
        companyName: 'Samba Financial Groug Bawadi branch',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card32',
        laneId: 'lane3',
        metadata: {
          id: 'Card32'
        },
        name: 'Abdul Cader',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'Samba Financial Group Faiha building branch',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 3,
    id: 'lane3',
    day: 'Tue',
    date: '16-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Praveen', colorCode: '#ac54a1' },
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Riyas', colorCode: '#65839a' },
      { name: 'Roland Talisaysay', colorCode: '#ff9900' }
    ]
  },
  // Wed
  {
    cards: [
      {
        ...card,
        id: 'Card41',
        laneId: 'lane4',
        metadata: {
          id: 'Card41'
        },
        name: 'Abdul Cader',
        startDate: '23-05-2021',
        occurences: 90,
        companyName: 'Panda Retail Company Makkah iskan 220',
        service: {
          scheduled: true,
          refill: true
        }
      },
      {
        ...card,
        id: 'Card42',
        laneId: 'lane4',
        metadata: {
          id: 'Card42'
        },
        name: 'Abdul Cader',
        startDate: '30-01-2020',
        occurences: 1,
        companyName: 'Makkah Clock Royal Tower (Fairmont) Emaar Hotel',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 4,
    id: 'lane4',
    day: 'Wed',
    date: '17-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Christopher Prontes', colorCode: '#8dff42' },
      { name: 'Cornelio Jr. Ferrer', colorCode: '#9933ff' },
      { name: 'Deril Davies', colorCode: '#67f8e2' },
      { name: 'Dinesh Devadhas', colorCode: '#2000e0' },
      { name: 'Eldho', colorCode: '#fa05db' },
      { name: 'Fazal Rahiman', colorCode: '#6eff42' },
      { name: 'Ferdinand Singson', colorCode: '#d911b1' },
      { name: 'Genesis Tulipas', colorCode: '#ca82e8' },
      { name: 'Hamza Khamayseh', colorCode: '#e58589' },
      { name: 'Hussain Pareed', colorCode: '#1b1b1b' }
    ]
  },
  // Thu
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card51',
        laneId: 'lane5',
        metadata: {
          id: 'Card51'
        },
        name: 'Abbas Qureshi',
        startDate: '18-11-2021',
        occurences: 0,
        companyName: 'Panda Retail Company Thahassusi makkah 225',
        service: {
          scheduled: true,
          permitReceived: true,
          morningJob: true
        }
      },
      {
        ...card,
        id: 'Card52',
        laneId: 'lane5',
        metadata: {
          id: 'Card52'
        },
        name: 'Abdul Cader',
        startDate: '23-05-2021',
        occurences: 9,
        companyName: 'Support Services King Abdullah Medical City Makkah',
        service: {
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 5,
    id: 'lane5',
    day: 'Thu',
    date: '18-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Mohammed Mahmood', colorCode: '#6600cc' },
      { name: 'Muftahuddin P', colorCode: '#9dcf16' },
      { name: 'Muhammed Siraj', colorCode: '#12d6ee' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Riyas', colorCode: '#65839a' },
      { name: 'Sharafali Kalat', colorCode: '#ffcc66' },
      { name: 'Shehabudeen', colorCode: '#cc0000' }
    ]
  },
  // Fri
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card61',
        laneId: 'lane6',
        metadata: {
          id: 'Card61'
        },
        name: 'Abbas Qureshi',
        startDate: '23-05-2021',
        occurences: -18,
        companyName: 'Panda Retail Company Thahassusi makkah 225',
        service: {
          scheduled: true,
          audit: true
        }
      },
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card62',
        laneId: 'lane6',
        metadata: {
          id: 'Card62'
        },
        name: 'Abbas Qureshi',
        startDate: '23-05-2021',
        occurences: -18,
        companyName: 'Panda Retail Company Hamdania 242',
        service: {
          audit: true,
          highene: true,
          dayJob: true
        }
      }
    ],
    currentPage: 6,
    id: 'lane6',
    day: 'Fri',
    date: '19-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Marcos Jr. Movida', colorCode: '#666633' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Sameera Perera', colorCode: '#a18bd6' },
      { name: 'Shabab Alikundil', colorCode: '#33ffcc' }
    ]
  },
  // Sat
  {
    cards: [
      {
        ...card,
        cardColor: '#62f840',
        id: 'Card71',
        laneId: 'lane7',
        metadata: {
          id: 'Card71'
        },
        name: 'Anid Muhammadali',
        startDate: '05-05-2021',
        occurences: 2,
        companyName: 'Emirates National Poultry Farms L.L.C Al Ain',
        service: {
          scheduled: true,
          nightJob: true
        }
      },
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card72',
        laneId: 'lane7',
        metadata: {
          id: 'Card72'
        },
        name: 'Afsal Basheer',
        startDate: '24-05-2021',
        occurences: 4,
        companyName: 'Panda Retail Company Panda 46, Jubail',
        service: {
          scheduled: true,
          refill: true,
          morningJob: true
        }
      }
    ],
    currentPage: 7,
    id: 'lane7',
    day: 'Sat',
    date: '20-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Muhammed Siraj', colorCode: '#12d6ee' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Sidheeque Ali', colorCode: '#666633' },
      { name: 'Sonny Magdalena', colorCode: '#ffcc66' }
    ]
  },
  // Sun
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card81',
        laneId: 'lane8',
        metadata: {
          id: 'Card81'
        },
        name: 'Abbas Qureshi',
        startDate: '19-05-2021',
        occurences: 0,
        companyName: 'Panda Retail Comoany Al Awali makkah 20011',
        service: {
          scheduled: true,
          getPermit: true
        }
      },
      {
        ...card,
        id: 'Card82',
        laneId: 'lane8',
        metadata: {
          id: 'Card82'
        },
        name: 'Abdul Cader',
        startDate: '23-03-2021',
        occurences: 10,
        companyName: 'Dr. Amal Zabeedi - Makkah Makkah branch',
        service: {
          scheduled: true,
          highene: true
        }
      }
    ],
    currentPage: 8,
    id: 'lane8',
    day: 'Sun',
    date: '21-11-2021',
    style: laneStyle
  },
  // Mon
  {
    cards: [
      {
        ...card,
        id: 'Card91',
        laneId: 'lane9',
        metadata: {
          id: 'Card91'
        },
        name: 'Abdul Cader',
        startDate: '06-05-2021',
        occurences: 6,
        companyName: 'Mawred Al Baraka Co Hamdania',
        service: {
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card92',
        laneId: 'lane9',
        metadata: {
          id: 'Card92'
        },
        name: 'Abdul Cader',
        startDate: '02-05-2021',
        occurences: 0,
        companyName: 'Elaf Kindah Hotel Makkah ELAF KINDAH',
        service: {
          scheduled: true,
          refill: true
        }
      }
    ],
    currentPage: 9,
    id: 'lane9',
    day: 'Mon',
    date: '22-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Mohammed Faizaan', colorCode: '#74beba' },
      { name: 'Mohammed Mahmood', colorCode: '#6600cc' },
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' }
    ]
  },
  // Tue
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card101',
        laneId: 'lane10',
        metadata: {
          id: 'Card101'
        },
        name: 'Abbas Quresh',
        startDate: '29-09-2020',
        occurences: 0,
        companyName: 'Reza Food Services Co Ltd McDonalds MOHAMEDIA',
        service: {
          audit: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card102',
        laneId: 'lane10',
        metadata: {
          id: 'Card102'
        },
        name: 'Abdul Cader',
        startDate: '14-04-2021',
        occurences: 7,
        companyName: 'Reza Food Services Co Ltd Corniche road branch',
        service: {
          refill: true,
          highene: true,
          getPermit: true
        }
      }
    ],
    currentPage: 10,
    id: 'lane10',
    day: 'Tue',
    date: '23-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' },
      { name: 'Tabish Mirza', colorCode: '#bd7eb4' },
      { name: 'Tughlaque Shaikh', colorCode: '#0000ff' }
    ]
  }
];

export const serviceDataAr = [
  // Sun
  {
    cards: [
      {
        ...card,
        id: 'Card11',
        laneId: 'lane1',
        metadata: {
          id: 'Card11'
        },
        name: 'عبد القادر',
        startDate: '19-2-2020',
        occurences: 3,
        companyName: 'أبراج الميريديان طريق كدي - مكة كدي مكة',
        service: {
          complete: false,
          notCompleted: false,
          cancelled: false,
          scheduled: false,
          callOut: false,
          audit: false,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card12',
        laneId: 'lane1',
        metadata: {
          id: 'Card12'
        },
        name: 'عبد القادر',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'فرع مكتب مجموعة سامبا المالية بالفيحاء',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card13',
        laneId: 'lane1',
        metadata: {
          id: 'Card13'
        },
        name: 'عبد القادر',
        startDate: '17-01-2021',
        occurences: 0,
        companyName: 'التميمي العالمية المحدودة (TAFGA) مركز غسيل الكلى بالقرب من رد سي مول',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card14',
        laneId: 'lane1',
        metadata: {
          id: 'Card14'
        },
        name: 'عبد القادر',
        startDate: '19-2-2020',
        occurences: 3,
        companyName: 'أبراج الميريديان طريق كدي - مكة كدي مكة',
        service: {
          complete: false,
          notCompleted: false,
          cancelled: false,
          scheduled: false,
          callOut: false,
          audit: false,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card15',
        laneId: 'lane1',
        metadata: {
          id: 'Card15'
        },
        name: 'عبد القادر',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'فرع مكتب مجموعة سامبا المالية بالفيحاء',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card16',
        laneId: 'lane1',
        metadata: {
          id: 'Card16'
        },
        name: 'عبد القادر',
        startDate: '17-01-2021',
        occurences: 0,
        companyName: 'التميمي العالمية المحدودة (TAFGA) مركز غسيل الكلى بالقرب من رد سي مول',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 1,
    id: 'lane1',
    day: 'شمس',
    date: '14-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'عباس قريشي', colorCode: '#b5025b' },
      { name: 'عبد القادر', colorCode: '#66ff00' },
      { name: 'Abdulla Sherieff', colorCode: '#8ad22e' },
      { name: 'Abid Muhammadali', colorCode: '#62f840' }
    ]
  },
  // Mon
  {
    cards: [
      {
        ...card,
        id: 'Card21',
        laneId: 'lane2',
        metadata: {
          id: 'Card21'
        },
        name: 'Abdulla Sherieff',
        startDate: '19-05-2021',
        occurences: 8,
        companyName: 'شركة بنده للتجزئة 3',
        service: {
          scheduled: true,
          maintenance: true,
          permitReceived: true
        }
      },
      {
        ...card,
        id: 'Card22',
        laneId: 'lane2',
        metadata: {
          id: 'Card22'
        },
        name: 'Abdulla Sherieff',
        startDate: '19-05-2021',
        occurences: 8,
        companyName: 'شركة بنده للتجزئة 1',
        service: {
          scheduled: true,
          highene: true,
          dayJob: true
        }
      }
    ],
    currentPage: 2,
    id: 'lane2',
    day: 'الاثنين',
    date: '15-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Tughlaque Shaikh', colorCode: '#0000ff' },
      { name: 'Valentine Gonzalves', colorCode: '#ffcc66' },
      { name: 'Venkateshwaru Shri', colorCode: '#cc541f' },
      { name: 'Yaseen Muhammed', colorCode: '#cc9999' }
    ]
  },
  // Tue
  {
    cards: [
      {
        ...card,
        id: 'Card31',
        laneId: 'lane3',
        metadata: {
          id: 'Card31'
        },
        name: 'عبد القادر',
        startDate: '21-07-2020',
        occurences: 0,
        companyName: 'سامبا المالية جروج فرع البوادي',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card32',
        laneId: 'lane3',
        metadata: {
          id: 'Card32'
        },
        name: 'عبد القادر',
        startDate: '20-07-2020',
        occurences: 0,
        companyName: 'مجموعة سامبا المالية فرع الفيحاء',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 3,
    id: 'lane3',
    day: 'الثلاثاء',
    date: '16-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Praveen', colorCode: '#ac54a1' },
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Riyas', colorCode: '#65839a' },
      { name: 'Roland Talisaysay', colorCode: '#ff9900' }
    ]
  },
  // Wed
  {
    cards: [
      {
        ...card,
        id: 'Card41',
        laneId: 'lane4',
        metadata: {
          id: 'Card41'
        },
        name: 'عبد القادر',
        startDate: '23-05-2021',
        occurences: 90,
        companyName: 'شركة بنده للتجزئة مكة اسكان 220',
        service: {
          scheduled: true,
          refill: true
        }
      },
      {
        ...card,
        id: 'Card42',
        laneId: 'lane4',
        metadata: {
          id: 'Card42'
        },
        name: 'عبد القادر',
        startDate: '30-01-2020',
        occurences: 1,
        companyName: 'برج ساعة مكة الملكي (فيرمونت) فندق إعمار',
        service: {
          scheduled: true,
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 4,
    id: 'lane4',
    day: 'الاربعاء',
    date: '17-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Christopher Prontes', colorCode: '#8dff42' },
      { name: 'Cornelio Jr. Ferrer', colorCode: '#9933ff' },
      { name: 'Deril Davies', colorCode: '#67f8e2' },
      { name: 'Dinesh Devadhas', colorCode: '#2000e0' },
      { name: 'Eldho', colorCode: '#fa05db' },
      { name: 'Fazal Rahiman', colorCode: '#6eff42' },
      { name: 'Ferdinand Singson', colorCode: '#d911b1' },
      { name: 'Genesis Tulipas', colorCode: '#ca82e8' },
      { name: 'Hamza Khamayseh', colorCode: '#e58589' },
      { name: 'Hussain Pareed', colorCode: '#1b1b1b' }
    ]
  },
  // Thu
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card51',
        laneId: 'lane5',
        metadata: {
          id: 'Card51'
        },
        name: 'عباس قريشي',
        startDate: '18-11-2021',
        occurences: 0,
        companyName: 'شركة بنده للتجزئة Thahassusi مكة 225',
        service: {
          scheduled: true,
          permitReceived: true,
          morningJob: true
        }
      },
      {
        ...card,
        id: 'Card52',
        laneId: 'lane5',
        metadata: {
          id: 'Card52'
        },
        name: 'عبد القادر',
        startDate: '23-05-2021',
        occurences: 9,
        companyName: 'الخدمات المساندة مدينة الملك عبدالله الطبية بمكة المكرمة',
        service: {
          refill: true,
          highene: true
        }
      }
    ],
    currentPage: 5,
    id: 'lane5',
    day: 'الخميس',
    date: '18-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Mohammed Mahmood', colorCode: '#6600cc' },
      { name: 'Muftahuddin P', colorCode: '#9dcf16' },
      { name: 'Muhammed Siraj', colorCode: '#12d6ee' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Riyas', colorCode: '#65839a' },
      { name: 'Sharafali Kalat', colorCode: '#ffcc66' },
      { name: 'Shehabudeen', colorCode: '#cc0000' }
    ]
  },
  // Fri
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card61',
        laneId: 'lane6',
        metadata: {
          id: 'Card61'
        },
        name: 'عباس قريشي',
        startDate: '23-05-2021',
        occurences: -18,
        companyName: 'شركة بنده للتجزئة Thahassusi مكة 225',
        service: {
          scheduled: true,
          audit: true
        }
      },
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card62',
        laneId: 'lane6',
        metadata: {
          id: 'Card62'
        },
        name: 'عباس قريشي',
        startDate: '23-05-2021',
        occurences: -18,
        companyName: 'شركة بنده للتجزئة الحمدانية 242',
        service: {
          audit: true,
          highene: true,
          dayJob: true
        }
      }
    ],
    currentPage: 6,
    id: 'lane6',
    day: 'الجمعه',
    date: '19-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Marcos Jr. Movida', colorCode: '#666633' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Sameera Perera', colorCode: '#a18bd6' },
      { name: 'Shabab Alikundil', colorCode: '#33ffcc' }
    ]
  },
  // Sat
  {
    cards: [
      {
        ...card,
        cardColor: '#62f840',
        id: 'Card71',
        laneId: 'lane7',
        metadata: {
          id: 'Card71'
        },
        name: 'عنيد محمدي',
        startDate: '05-05-2021',
        occurences: 2,
        companyName: 'مزارع الإمارات الوطنية للدواجن ش.ذ.م.م العين',
        service: {
          scheduled: true,
          nightJob: true
        }
      },
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card72',
        laneId: 'lane7',
        metadata: {
          id: 'Card72'
        },
        name: 'افسال بشير',
        startDate: '24-05-2021',
        occurences: 4,
        companyName: 'شركة بنده للتجزئة بنده 46 الجبيل',
        service: {
          scheduled: true,
          refill: true,
          morningJob: true
        }
      }
    ],
    currentPage: 7,
    id: 'lane7',
    day: 'جلس',
    date: '20-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Muhammed Siraj', colorCode: '#12d6ee' },
      { name: 'Rey Formoso', colorCode: '#ff0066' },
      { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
      { name: 'Sidheeque Ali', colorCode: '#666633' },
      { name: 'Sonny Magdalena', colorCode: '#ffcc66' }
    ]
  },
  // Sun
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card81',
        laneId: 'lane8',
        metadata: {
          id: 'Card81'
        },
        name: 'عباس قريشي',
        startDate: '19-05-2021',
        occurences: 0,
        companyName: 'بنده للتجزئة كوموني العوالي مكة 20011',
        service: {
          scheduled: true,
          getPermit: true
        }
      },
      {
        ...card,
        id: 'Card82',
        laneId: 'lane8',
        metadata: {
          id: 'Card82'
        },
        name: 'عبد القادر',
        startDate: '23-03-2021',
        occurences: 10,
        companyName: 'د.امل الزبيدي - فرع مكة المكرمة',
        service: {
          scheduled: true,
          highene: true
        }
      }
    ],
    currentPage: 8,
    id: 'lane8',
    day: 'شمس',
    date: '21-11-2021',
    style: laneStyle
  },
  // Mon
  {
    cards: [
      {
        ...card,
        id: 'Card91',
        laneId: 'lane9',
        metadata: {
          id: 'Card91'
        },
        name: 'عبد القادر',
        startDate: '06-05-2021',
        occurences: 6,
        companyName: 'Mawred Al Baraka Co Hamdania',
        service: {
          refill: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card92',
        laneId: 'lane9',
        metadata: {
          id: 'Card92'
        },
        name: 'عبد القادر',
        startDate: '02-05-2021',
        occurences: 0,
        companyName: 'فندق إيلاف كندة مكة إيلاف كندة',
        service: {
          scheduled: true,
          refill: true
        }
      }
    ],
    currentPage: 9,
    id: 'lane9',
    day: 'الاثنين',
    date: '22-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Mohammed Faizaan', colorCode: '#74beba' },
      { name: 'Mohammed Mahmood', colorCode: '#6600cc' },
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' }
    ]
  },
  // Tue
  {
    cards: [
      {
        ...card,
        cardColor: '#b5025b',
        id: 'Card101',
        laneId: 'lane10',
        metadata: {
          id: 'Card101'
        },
        name: 'عباس قريشي',
        startDate: '29-09-2020',
        occurences: 0,
        companyName: 'شركة رضا للخدمات الغذائية المحدودة ماكدونالدز المحمدية',
        service: {
          audit: true,
          highene: true
        }
      },
      {
        ...card,
        id: 'Card102',
        laneId: 'lane10',
        metadata: {
          id: 'Card102'
        },
        name: 'عبد القادر',
        startDate: '14-04-2021',
        occurences: 7,
        companyName: 'شركة رضا للخدمات الغذائية المحدودة فرع طريق الكورنيش',
        service: {
          refill: true,
          highene: true,
          getPermit: true
        }
      }
    ],
    currentPage: 10,
    id: 'lane10',
    day: 'الثلاثاء',
    date: '23-11-2021',
    style: laneStyle,
    serviceMensOnLeave: [
      { name: 'Ramshad Thazhath', colorCode: '#98ff1f' },
      { name: 'Tabish Mirza', colorCode: '#bd7eb4' },
      { name: 'Tughlaque Shaikh', colorCode: '#0000ff' }
    ]
  }
];

export const serviceMens = [
  { name: 'Abbas Qureshi', colorCode: '#b5025b' },
  { name: 'Abdul Cader', colorCode: '#66ff00' },
  { name: 'Abdulla Sherieff', colorCode: '#8ad22e' },
  { name: 'Abid Muhammadali', colorCode: '#62f840' },
  { name: 'Afsal Basheer', colorCode: '#c53b7f' },
  { name: 'Afsala', colorCode: '#857a7b' },
  { name: 'Amjad Pambodan', colorCode: '#777777' },
  { name: 'Arnel Autentico', colorCode: '#1b1b1b' },
  { name: 'Arun Kumar', colorCode: '#d9e029' },
  { name: 'Ashar kunnath', colorCode: '#462b3a' },
  { name: 'Bruno Menezes', colorCode: '#e9a6f7' },
  { name: 'Burhanudeen', colorCode: '#3300ff' },
  { name: 'Carlos Jr. Duria', colorCode: '#ccff00' },
  { name: 'Chandan Suter', colorCode: '#66cccc' },
  { name: 'Christopher Prontes', colorCode: '#8dff42' },
  { name: 'Cornelio Jr. Ferrer', colorCode: '#9933ff' },
  { name: 'Deril Davies', colorCode: '#67f8e2' },
  { name: 'Dinesh Devadhas', colorCode: '#2000e0' },
  { name: 'Eldho', colorCode: '#fa05db' },
  { name: 'Fazal Rahiman', colorCode: '#6eff42' },
  { name: 'Ferdinand Singson', colorCode: '#d911b1' },
  { name: 'Genesis Tulipas', colorCode: '#ca82e8' },
  { name: 'Hamza Khamayseh', colorCode: '#e58589' },
  { name: 'Hussain Pareed', colorCode: '#1b1b1b' },
  { name: 'Jabir Vayyattu Siddique', colorCode: '#2929ad' },
  { name: 'Jaseel Samad', colorCode: '#279eb0' },
  { name: 'Javad Veettil', colorCode: '#339966' },
  { name: 'Leo', colorCode: '#fee902' },
  { name: 'Marcos Jr. Movida', colorCode: '#666633' },
  { name: 'Michael Mago', colorCode: '#bbf34e' },
  { name: 'Mohammed Faizaan', colorCode: '#74beba' },
  { name: 'Mohammed Mahmood', colorCode: '#6600cc' },
  { name: 'Muftahuddin P', colorCode: '#9dcf16' },
  { name: 'Muhammed Siraj', colorCode: '#12d6ee' },
  { name: 'Nabeel Pallippurath', colorCode: '#8d72b2' },
  { name: 'Najeeb', colorCode: '#1f02fc' },
  { name: 'Narciso Jr. Sulat', colorCode: '#66ff00' },
  { name: 'Nawaz Khan', colorCode: '#99ff33' },
  { name: 'Neil', colorCode: '#677999' },
  { name: 'Niyas Bishry', colorCode: '#00cc99' },
  { name: 'Nizarudeen Sharafudeen', colorCode: '#003300' },
  { name: 'Paramarajah Sellathurai', colorCode: '#9dcf16' },
  { name: 'Praveen', colorCode: '#ac54a1' },
  { name: 'Ramshad Thazhath', colorCode: '#98ff1f' },
  { name: 'Rey Formoso', colorCode: '#ff0066' },
  { name: 'Rinshad Said Ali', colorCode: '#ffcc33' },
  { name: 'Riyas', colorCode: '#65839a' },
  { name: 'Roland Talisaysay', colorCode: '#ff9900' },
  { name: 'Sabry Mohammed', colorCode: '#cc0033' },
  { name: 'Sagubar Sathik', colorCode: '#669933' },
  { name: 'Sameera Perera', colorCode: '#a18bd6' },
  { name: 'Shabab Alikundil', colorCode: '#33ffcc' },
  { name: 'Shahid Aboobacker', colorCode: '#336666' },
  { name: 'Shameer Sakeer', colorCode: '#ffcc66' },
  { name: 'Sharafali Kalat', colorCode: '#ffcc66' },
  { name: 'Shehabudeen', colorCode: '#cc0000' },
  { name: 'Sidheeque Ali', colorCode: '#666633' },
  { name: 'Sonny Magdalena', colorCode: '#ffcc66' },
  { name: 'Sudhagar Neelakandan', colorCode: '#d6ff33' },
  { name: 'Tabish Mirza', colorCode: '#bd7eb4' },
  { name: 'Tughlaque Shaikh', colorCode: '#0000ff' },
  { name: 'Valentine Gonzalves', colorCode: '#ffcc66' },
  { name: 'Venkateshwaru Shri', colorCode: '#cc541f' },
  { name: 'Yaseen Muhammed', colorCode: '#cc9999' }
];

export const serviceTypes = [
  { colorCode: '#70a239', type: 'complete' },
  { colorCode: '#88cfed', type: 'scheduled' },
  { colorCode: '#e3aa20', type: 'notCompleted' },
  { colorCode: '#ee3327', type: 'cancelled' },
  { colorCode: '#d5dfe5', type: 'refill' },
  { colorCode: '#d5dfe5', type: 'maintenance' },
  { colorCode: '#009fda', type: 'callOut' },
  { colorCode: '#d5dfe5', type: 'audit' },
  { colorCode: '#d5dfe5', type: 'getPermit' },
  { colorCode: '#d5dfe5', type: 'permitReceived' },
  { colorCode: '#d5dfe5', type: 'morningJob' },
  { colorCode: '#d5dfe5', type: 'dayJob' },
  { colorCode: '#d5dfe5', type: 'nightJob' }
];

export const COLOR_CODES = {
  DRK: {
    CARD: {
      BG: '#424242',
      TXT: '#f1f1f1'
    },
    FILTER_BOX: {
      BORDER: '#323232',
      BTN_TEXT: '#424242'
    }
  },
  LGT: {
    CARD: {
      BG: '#dedede',
      TXT: '#767575'
    },
    FILTER_BOX: {
      BORDER: '#e2e2e7',
      BTN_TEXT: '#f1f1f1'
    }
  }
};

export const SEVICE_DASHBOARD_FILTER_MASTER_DATA = {
  COUNTRY: [
    { name: { en: 'Bahrain', ar: 'البحرين' }, value: 'bh' },
    { name: { en: 'Qatar', ar: 'دولة قطر' }, value: 'qt' },
    { name: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' }, value: 'sa' },
    { name: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' }, value: 'uae' }
  ],
  OFFICE: [
    { country: 'bh', offices: [{ name: { en: 'Bahrain Region', ar: 'منطقة البحرين' }, value: 'bahrain-region' }] },
    {
      country: 'sa',
      offices: [
        { name: { en: 'Abha', ar: 'أبها' }, value: 'abha' },
        { name: { en: 'Jeddah ', ar: 'جدة' }, value: 'jeddah' },
        { name: { en: 'Khobar ', ar: 'مدينه الخبر ' }, value: 'khobar' },
        { name: { en: 'Riyadh ', ar: 'الرياض' }, value: 'riyadh' }
      ]
    },
    { country: 'qt', offices: [{ name: { en: 'Qatar Region', ar: 'منطقة قطر' }, value: 'qatar-region' }] },
    {
      country: 'uae',
      offices: [
        { name: { en: 'Abu Dhabi ', ar: 'أبو ظبي' }, value: 'abu-dhabi' },
        { name: { en: 'Dubai', ar: 'دبي' }, value: 'dubai' },
        { name: { en: 'Sharjah', ar: 'الشارقة' }, value: 'sharjah' }
      ]
    }
  ],
  BUSINESS: [
    { name: { en: 'Audit', ar: 'مراجعة' }, value: 'audit' },
    { name: { en: 'Maintenance', ar: 'اعمال صيانة' }, value: 'maintenance' },
    { name: { en: 'Refill', ar: 'اعادة تعبئه' }, value: 'refill' },
    { name: { en: 'Services', ar: 'خدمات' }, value: 'services' },
    { name: { en: 'Specialized Cleaning', ar: 'التنظيف المتخصص' }, value: 'specialized-claning' }
  ],
  PROJECT_STATUS: [
    { name: { en: 'Active', ar: 'نشيط' }, value: 'active' },
    { name: { en: 'Hold - Customer Request', ar: 'عقد - طلب العميل' }, value: 'hold-cust-req' },
    { name: { en: 'Hold – Stock availability', ar: 'عقد - توافر المخزون' }, value: 'hold-sock-availability' },
    { name: { en: 'Hold - Credit Hold', ar: 'عقد - عقد الائتمان' }, value: 'hold-credit-hold' },
    { name: { en: 'Inactive', ar: 'غير نشط' }, value: 'inactive' },
    {
      name: { en: 'Pending – Financial Closing', ar: 'معلق – إغلاق مالي' },
      value: 'pending-financial-closing'
    },
    { name: { en: 'Pending - Renewal', ar: 'معلق - التجديد' }, value: 'pending-renewal' },
    { name: { en: 'Pending – Uninstallation', ar: 'معلق – إلغاء التثبيت' }, value: 'pending-uninstallation' }
  ],
  STATUS: [
    { name: { en: 'CallOut', ar: 'شرح' }, value: 'callOut' },
    { name: { en: 'CallOut Cancelled', ar: 'تم إلغاء الشرح' }, value: 'callOut-cancelled' },
    { name: { en: 'CallOut Complete', ar: 'اكتملت عملية الشرح' }, value: 'callOut-complete' },
    { name: { en: 'Cancelled', ar: 'الغاء' }, value: 'cancelled' },
    { name: { en: 'Credit Hold', ar: 'عقد الائتمان' }, value: 'credit-hold' },
    { name: { en: 'Complete', ar: 'اكمل' }, value: 'complete' },
    { name: { en: 'On Hold', ar: 'في الانتظار' }, value: 'on-hold' },
    { name: { en: 'Scheduled', ar: 'موضوع على سلم الاوليات' }, value: 'scheduled' }
  ],
  CONTRACT: [
    {
      name: { en: 'Holiday Villa Madina | General Contract', ar: 'هوليداي فيلا المدينة | العقد العام' },
      value: 'holiday-villa-madina_general-contract'
    },
    {
      name: { en: 'Sahareej Aden Restaurent | General Contract', ar: 'سهريج عدن ريستورنت | العقد العام' },
      value: 'sahareej-aden-restaurent_general-contract'
    }
  ],
  LOCATION: [
    { name: { en: 'Business Office', ar: 'مكتب الأعمال' }, value: 'business-office' },
    { name: { en: 'Service Company', ar: 'شركة الخدمات' }, value: 'service-company' },
    { name: { en: 'Support Company', ar: 'شركة الدعم' }, value: 'support-company' }
  ],
  SERVICEMAN: [
    { name: { en: 'Abid Muhammadali', ar: 'عابد محمدلي' }, value: 'abid-muhammadali' },
    { name: { en: 'Arnold J Maben', ar: 'أرنولد جي مابن' }, value: 'arnold-j-maben' },
    { name: { en: 'Shareef Mohammed', ar: 'شريف محمد' }, value: 'shareef -mohammed' },
    { name: { en: 'Venkateshwarlu Shri', ar: 'فينكاتيشوارلو شري' }, value: 'venkateshwarlu-shri' }
  ]
};
