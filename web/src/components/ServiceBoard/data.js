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
  ],
  CALL_OUT_REASONS: [
    { name: { en: 'Abuse', ar: 'تعاطي' }, value: 'abuse' },
    { name: { en: 'Warranty', ar: 'ضمان' }, value: 'warranty' },
    { name: { en: 'Not been completed', ar: 'لم تكتمل' }, value: 'notBeenCompleted' },
    {
      name: {
        en: 'Break down of acidental damage FOL Scheduled Return',
        ar: 'انهيار التلف العرضي للإرجاع المجدول'
      },
      value: 'breakDown'
    },
    { name: { en: 'FOL Unscheduled Return', ar: 'FOL عودة غير مجدولة' }, value: 'folUnscheduledReturn' }
  ],
  CUSTOMERS: [
    {
      name: { en: 'Makan Restaurant', ar: 'مطعم مكان' },
      address: {
        en: 'Fares Ibn Al Nudur St. Opp. Rashid Male Gat# 6 Al-Khobar-34428',
        ar: 'شارع فارس بن النضر مقابل. راشد مالي جات # 6 الخبر - 34428'
      },
      value: 'makanRestaurant',
      contracts: [
        {
          code: 'HSDCJD_0001',
          name: { en: 'Retal Dental Clinic | General Contract', ar: 'عيادة ريتال لطب الاسنان | عقد عام' },
          value: 'HSDCJD_0001'
        },
        {
          code: 'HSDCJD_0023',
          name: {
            en: 'Dar Al Hijra Intercontinental Hotel | General Contract',
            ar: 'فندق دار الهجرة انتركونتيننتال | عقد عام'
          },
          value: 'HSDCJD_00023'
        }
      ]
    },
    {
      name: { en: 'Walid Ben Mafih Bin Mohammed Al Qsaini', ar: 'وليد بن مافح بن محمد القصيني' },
      address: {
        en: 'PO Box.# 620 10Th Cross St. Alameen Al-Aqrabhiah-Al-Knobar-31952',
        ar: 'ص.ب 620 تقاطع 10 شارع الامين العقربية -النوبر 31952'
      },
      value: 'walidBenMafihBinMohammedAlQsaini',
      contracts: [
        {
          code: 'HSDCJD_0027',
          name: {
            en: 'Restaurant Of Oriental Cusine Co Ltd - Chop Stick',
            ar: 'شركة مطعم المأكولات الشرقية المحدودة - عيدان الطعام'
          },
          value: 'HSDCJD_00027'
        }
      ]
    },
    {
      name: { en: 'Asia Trading Company', ar: 'شركة آسيا التجارية' },
      address: { en: 'PO Box.# 156 Al-Jafr Road Al-Hafof-31982', ar: 'ص.ب رقم 156 طريق الجفر الهفوف 31982' },
      value: 'asiaTradingCompany',
      contracts: [
        {
          code: 'HSDCJD_0030',
          name: { en: 'Alireza Travels | General Contract', ar: 'علي رضا للسفريات | عقد عام' },
          value: 'HSDCJD_00030'
        }
      ]
    },
    {
      name: {
        en: 'Quality First Catering Service Corporation....',
        ar: 'شركة الجودة الأولى لخدمات التموين ....'
      },
      address: { en: 'P.O Box: 12281.Al Aarid Diriyah.Riyadh.', ar: 'ص.ب: 12281 العارض الدرعية الرياض.' },
      value: 'qualityFirstCateringServiceCorporation',
      contracts: [
        {
          code: 'HSDCJD_0022',
          name: { en: 'Premium Food Company Ltd I General Contract', ar: 'شركة بريميوم فود المحدودة أنا العقد العام' },
          value: 'HSDCJD_00022'
        }
      ]
    },
    {
      name: { en: 'Magenta Investments L.L.C', ar: 'ماجنتا للاستثمارات ذ' },
      address: {
        en: 'PO Box: 32449 4903 Aspin Commercial Tower, SZR.Dubai UAE',
        ar: 'ص.ب: 32449 4903 برج آسبن التجاري ، SZR ، دبي ، الإمارات العربية المتحدة'
      },
      value: 'magentaInvestmentsLLC',
      contracts: [
        {
          code: 'HSDCJD_0020',
          name: {
            en: 'Islamic Development Bank Group | General Contract',
            ar: 'مجموعة البنك الاسلامي للتنمية | عقد عام'
          },
          value: 'HSDCJD_00020'
        }
      ]
    },
    {
      name: { en: 'Al Jabalain Plastic Products Est.', ar: 'مؤسسة الجبلين للمنتجات البلاستيكية.' },
      address: { en: 'P.O Box:55411.Hail.', ar: 'P.O Box:55411.Hail.' },
      value: 'alJabalainPlasticProductsEst',
      contracts: [
        {
          code: 'HSDCJD_0021',
          name: {
            en: 'Movenpick Hotel & Resort Yanbu | General Contract',
            ar: 'فندق ومنتجع موفنبيك ينبع | عقد عام'
          },
          value: 'HSDCJD_00021'
        }
      ]
    },
    {
      name: { en: 'Basmat Alaeela Est. Trading', ar: 'مؤسسة بسمة العيلة تجارة' },
      address: { en: 'Qatif-32632', ar: 'القطيف 32632' },
      value: 'basmatAlaeelaEstTrading',
      contracts: [
        {
          code: 'HSDCJD_0016',
          name: { en: 'Kinan Intemational | General Contract', ar: 'كنان الدولية | عقد عام' },
          value: 'HSDCJD_00016'
        }
      ]
    },
    {
      name: { en: '66 Cups', ar: '66 كوب' },
      address: {
        en: 'P.O.Box 23514, King Abdulaziz Road, Alshatia,Jeddah',
        ar: 'ص.ب 23514 ، طريق الملك عبد العزيز ، الشاطئ ، جدة'
      },
      value: '66Cups',
      contracts: [
        {
          code: 'HSDCJD_0015',
          name: { en: 'Keen Rite I General Contract', ar: 'Keen Rite I العقد العام' },
          value: 'HSDCJD_00015'
        }
      ]
    },
    {
      name: { en: 'Al Alameen Intemational School', ar: 'مدرسة العلمين الدولية' },
      address: {
        en: 'P.O.Box:6687 Salah Ad Din Ayyubi Road,Al Zahra, Riyadh 12332.',
        ar: 'ص.ب .: 6687 طريق صلاح الدين الأيوبي ، الزهراء ، الرياض 12332.'
      },
      value: 'alAlameenIntemationalSchool',
      contracts: [
        {
          code: 'HSDCJD_0009',
          name: { en: 'Pepsico Services LLC | General Contract', ar: 'بيبسيكو للخدمات ذ م م | عقد عام' },
          value: 'HSDCJD_0009'
        }
      ]
    },
    {
      name: { en: 'Perfect Body Sports Company (Calistheni...', ar: 'شركة بيرفكت بودي الرياضية (كاليسثين ...' },
      address: {
        en: 'Perfect Body Sports Company(Calisthenics). Prince Muhammed Ibn Saad Ibn,. Riyadh. Mr. Imad-',
        ar: 'شركة بيرفكت بودي سبورتس (تمارين رياضية). الأمير محمد بن سعد بن. الرياض. السيد عماد-'
      },
      value: 'perfectBodySportsCompanyCalistheni',
      contracts: [
        {
          code: 'HSDCJD_0007',
          name: { en: 'Cafe Aroma | General Contract', ar: 'كافيه أروما | عقد عام' },
          value: 'HSDCJD_0007'
        }
      ]
    },
    {
      name: { en: 'Altima Contracting and Industrial Service...', ar: 'التيما للمقاولات والخدمات الصناعية ...' },
      address: { en: 'Al-Jubail-31901', ar: 'الجبيل 31901' },
      value: 'altimaContractingIndustrialService',
      contracts: [
        {
          code: 'HSDCJD_0006',
          name: { en: 'Al Waiba Restaurant | General Contract', ar: 'مطعم الويبة | عقد عام' },
          value: 'HSDCJD_0006'
        }
      ]
    },
    {
      name: { en: 'The Modem Dish Company (NAYA DUR)', ar: 'شركة صحن المودم (نيا دور)' },
      address: {
        en: 'Al-Rakah Prince Turkev St. Al-Khobar-31952',
        ar: 'الراكة شارع الامير تركيف الخبر 31952'
      },
      value: 'theModemDishCompanyNAYADUR',
      contracts: [
        {
          code: 'HSDCJD_0005',
          name: { en: 'Jotun Paints | General Contract', ar: 'دهانات جوتن | عقد عام' },
          value: 'HSDCJD_0005'
        }
      ]
    },
    {
      name: { en: 'Mays & Reem Coffee Shop', ar: 'مقهى ميس وريم' },
      address: {
        en: 'Al•Agrabiyah Al-Mashoora St. Al-Knobar-31952',
        ar: '• Agrabiyah Al-Mashoora - الخبر - 31952'
      },
      value: 'maysReemCoffeeShop',
      contracts: [
        {
          code: 'HSDCJD_0004',
          name: {
            en: 'Nestle Saudi Arabia LLC | General Contract',
            ar: 'نستله المملكة العربية السعودية ذ م م | عقد عام'
          },
          value: 'HSDCJD_0004'
        }
      ]
    },
    {
      name: { en: 'Hessa Abdullah Al Besher for Proving M...', ar: 'حصة عبدالله البشر لإثبات ...' },
      address: {
        en: 'P.O.Box:11512. Khalid Bin Al Waleed Riyadh.',
        ar: 'صندوق بريد: 11512. خالد بن الوليد الرياض.'
      },
      value: 'hessaAbdullahAlBesherProvingM',
      contracts: [
        {
          code: 'HSDCJD_0003',
          name: { en: 'Bouthaina Beauty I General Contract', ar: 'عقد عام بثينة للتجميل 1' },
          value: 'HSDCJD_0003'
        }
      ]
    },
    {
      name: { en: 'Caesars Bluewaters Dubai LLC', ar: 'سيزرز بلوواترز دبي ذ' },
      address: {
        en: 'PO Box: 36555 Caesars Bluewaters Dubai, Bluewaters Island Duba',
        ar: 'صندوق بريد: 36555 Caesars Bluewaters Dubai، Bluewaters Island، Duba'
      },
      value: 'caesarsBluewatersDubaiLLC',
      contracts: [
        {
          code: 'HSDCJD_0002',
          name: { en: 'Marhaba Restaurant | General Contract', ar: 'مطعم مرحبا | عقد عام' },
          value: 'HSDCJD_0002'
        }
      ]
    }
  ],
  CURRENCYS: [
    { name: { en: 'Euro', ar: 'اليورو' }, code: { en: 'EUR', ar: 'يورو' }, value: 'EUR' },
    { name: { en: 'US Dollar', ar: 'الدولار الأمريكي' }, code: { en: 'USD', ar: 'دولار أمريكي' }, value: 'USD' },
    { name: { en: 'Bahraini Dinar', ar: 'دينار بحريني' }, code: { en: 'BHD', ar: 'دينار بحريني' }, value: 'BHD' },
    { name: { en: 'Qatari Rial', ar: 'ريال قطري' }, code: { en: 'QAR', ar: 'ريال قطري' }, value: 'QAR' },
    { name: { en: 'UAE Dirham', ar: 'درهم إماراتي' }, code: { en: 'AED', ar: 'درهم إماراتي' }, value: 'AED' },
    { name: { en: 'Fu Dollar', ar: 'فو دولار' }, code: { en: 'FJD', ar: 'FJD' }, value: 'FJD' },
    {
      name: { en: 'Falkland Islands (lslas Malvinas) Pound', ar: 'جزر فوكلاند ( lslas مالفيناس ) جنيه' },
      code: { en: 'EKP', ar: 'EKP' },
      value: 'EKP'
    },
    { name: { en: 'Pound Sterling', ar: 'الجنيه الاسترليني' }, code: { en: 'GBP', ar: 'GBP' }, value: 'GBP' },
    { name: { en: 'Lari', ar: 'لاري' }, code: { en: 'GEL', ar: 'جل' }, value: 'GEL' },
    { name: { en: 'Ghana Cedi', ar: 'غانا سيدي' }, code: { en: 'GHS', ar: 'GHS' }, value: 'GHS' },
    { name: { en: 'Gibraltar Pound', ar: 'جبل طارق الجنيه' }, code: { en: 'GIP', ar: 'GIP' }, value: 'GIP' }
  ],
  PROJECTS: [
    {
      code: 'HSDPJD_0001_001_001',
      value: 'HSDPJD_0001_001_001',
      name: {
        en: 'Retal Dental Clinic | Gazzaz center | Refill Washroom',
        ar: 'عيادة ريتال لطب الاسنان | مركز القزاز | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Retal Dental Clinic | Gazzaz center | Refill Washroom',
        ar: 'عيادة ريتال لطب الاسنان | مركز القزاز | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        {
          code: '638171',
          name: {
            en: 'Prolitec Wall Mount Appliance RZAQ570 Black',
            ar: 'جهاز بروليتيك للتثبيت على الحائط RZAQ570 أسود'
          },
          value: 'prolitecWallMountApplianceRZAQ570Black'
        },
        { code: '611113', name: { en: 'Ads 4', ar: 'الإعلانات 4' }, value: 'ads4' },
        { code: 'D02023', name: { en: 'W5000 Diffuser', ar: 'الناشر W5000' }, value: 'W5000Diffuser' }
      ]
    },
    {
      code: 'HSDPJD_0002_001_001',
      value: 'HSDPJD_0002_001_001',
      name: {
        en: 'Marhaba Restaurant | Andalus branch | Refill Washroom',
        ar: 'مطعم مرحبا | فرع الأندلس | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Marhaba Restaurant | Andalus branch | Refill Washroom',
        ar: 'مطعم مرحبا | فرع الأندلس | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        { code: '611113', name: { en: 'Ads 4', ar: 'الإعلانات 4' }, value: 'ads4' },
        { code: '611089', name: { en: 'Insect Inn Ultra II', ar: 'إنسيكت إن ألترا 2' }, value: 'InsectInnUltraII' },
        {
          code: 'D01047',
          name: {
            en: 'Automatic Liquid Soap Dispenser refillable',
            ar: 'موزع صابون سائل أوتوماتيكي قابل لإعادة التعبئة'
          },
          value: 'automaticLiquidSoapDispenserRefillable'
        }
      ]
    },
    {
      code: 'HSDPJD_0003_001_001',
      value: 'HSDPJD_0003_001_001',
      name: {
        en: 'Bouthaina Beauty | Prince Sultan street branch | Refill Washroom',
        ar: 'بثينة للتجميل | فرع شارع الأمير سلطان | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Bouthaina Beauty | Prince Sultan street branch | Refill Washroom',
        ar: 'بثينة للتجميل | فرع شارع الأمير سلطان | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        {
          code: '638171',
          name: {
            en: 'Prolitec Wall Mount Appliance RZAQ570 Black',
            ar: 'جهاز بروليتيك للتثبيت على الحائط RZAQ570 أسود'
          },
          value: 'prolitecWallMountApplianceRZAQ570Black'
        },
        {
          code: 'D01047',
          name: {
            en: 'Automatic Liquid Soap Dispenser refillable',
            ar: 'موزع صابون سائل أوتوماتيكي قابل لإعادة التعبئة'
          },
          value: 'automaticLiquidSoapDispenserRefillable'
        }
      ]
    },
    {
      code: 'HSDPJD_0004_001_001',
      value: 'HSDPJD_0004_001_001',
      name: {
        en: 'Nestle Saudi Arabia LLC | 4th floor bin sulaiman center | Refill Washroom',
        ar: 'نستله المملكة العربية السعودية ذ م م | الدور الرابع سنتر بن سليمان | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Nestle Saudi Arabia LLC | 4th floor bin sulaiman center | Refill Washroom',
        ar: 'نستله المملكة العربية السعودية ذ م م | الدور الرابع سنتر بن سليمان | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        {
          code: '638171',
          name: {
            en: 'Prolitec Wall Mount Appliance RZAQ570 Black',
            ar: 'جهاز بروليتيك للتثبيت على الحائط RZAQ570 أسود'
          },
          value: 'prolitecWallMountApplianceRZAQ570Black'
        },
        { code: '611089', name: { en: 'Insect Inn Ultra II', ar: 'إنسيكت إن ألترا 2' }, value: 'InsectInnUltraII' }
      ]
    },
    {
      code: 'HSDPJD_0005_001_001',
      value: 'HSDPJD_0005_001_001',
      name: {
        en: 'Jotun Paints | Warehouse industrial city I Refill Washroom',
        ar: 'دهانات جوتن | المستودع الصناعي بالمدينة الأول إعادة تعبئة الحمام'
      },
      location: {
        en: 'Jotun Paints | Warehouse industrial city I Refill Washroom',
        ar: 'دهانات جوتن | المستودع الصناعي بالمدينة الأول إعادة تعبئة الحمام'
      },
      serviceSubject: [
        { code: 'D02023', name: { en: 'W5000 Diffuser', ar: 'الناشر W5000' }, value: 'W5000Diffuser' },
        {
          code: '621065',
          name: {
            en: 'Auto Janitor System Toilet Odor Treatment 1818138',
            ar: 'نظام التنظيف التلقائي لرائحة المرحاض 1818138'
          },
          value: 'autoJanitorSystemToiletOdorTreatment1818138'
        }
      ]
    },
    {
      code: 'HSDPJD_0005_002_001',
      value: 'HSDPJD_0005_002_001',
      name: {
        en: 'Jotun Paints | Office beside Red sea paint factory | Refill Washroom',
        ar: 'دهانات جوتن | مكتب بجوار مصنع دهانات البحر الاحمر | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Jotun Paints | Office beside Red sea paint factory | Refill Washroom',
        ar: 'دهانات جوتن | مكتب بجوار مصنع دهانات البحر الاحمر | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        { code: 'D02023', name: { en: 'W5000 Diffuser', ar: 'الناشر W5000' }, value: 'W5000Diffuser' },
        {
          code: '611007',
          name: { en: 'RM T-Cell Dispenser Chrome', ar: 'موزع RM T-Cell كروم' },
          value: 'RM T-CellDispenserChrome'
        },
        {
          code: '610024',
          name: { en: 'MX Type Mixing Center SS 4 Prod Fleci Gap', ar: 'MX نوع خلط مركز SS 4 برود Fleci الفجوة' },
          value: 'mXTypeMixingCenterSS4ProdFleciGap'
        }
      ]
    },
    {
      code: 'HSDPJD_0006_001_001',
      value: 'HSDPJD_0006_001_001',
      name: {
        en: 'Al Waba Restaurant I Hindawiya district I Refill Washroom',
        ar: 'مطعم الوابا 1 حي الهنداوية 1 إعادة ملء دورة المياه'
      },
      location: {
        en: 'Al Waba Restaurant I Hindawiya district I Refill Washroom',
        ar: 'مطعم الوابا 1 حي الهنداوية 1 إعادة ملء دورة المياه'
      },
      serviceSubject: [
        { code: '611113', name: { en: 'Ads 4', ar: 'الإعلانات 4' }, value: 'ads4' },
        {
          code: '621065',
          name: {
            en: 'Auto Janitor System Toilet Odor Treatment 1818138',
            ar: 'نظام التنظيف التلقائي لرائحة المرحاض 1818138'
          },
          value: 'autoJanitorSystemToiletOdorTreatment1818138'
        }
      ]
    },
    {
      code: 'HSDPJD_0007_001_001',
      value: 'HSDPJD_0007_001_001',
      name: {
        en: 'Cafe Aroma | Al hamra branch | Refill Washroom',
        ar: 'كافيه أروما | فرع الحمرا | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Cafe Aroma | Al hamra branch | Refill Washroom',
        ar: 'كافيه أروما | فرع الحمرا | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        {
          code: '611239',
          name: {
            en: 'EC030 Catcher - Genus Insect Light Trap 220V',
            ar: 'EC030 الماسك - مصيدة الحشرات من الجنس بجهد 220 فولت'
          },
          value: 'eC030Catcher-GenusInsectLightTrap220V'
        },
        {
          code: '610340',
          name: { en: 'Aifforce Hand Dryer Chrome 220 - 240V', ar: 'آيف فورس مجفف يد كروم 220-240 فولت' },
          value: 'aifforceHandDryerChrome220-240V'
        },
        {
          code: '610024',
          name: { en: 'MX Type Mixing Center SS 4 Prod Fleci Gap', ar: 'MX نوع خلط مركز SS 4 برود Fleci الفجوة' },
          value: 'mXTypeMixingCenterSS4ProdFleciGap'
        }
      ]
    },
    {
      code: 'HSDPJD_0009_001_001',
      value: 'HSDPJD_0009_001_001',
      name: {
        en: 'Pepsico Services LLC I Talia street I Refill Washroom',
        ar: 'Pepsico Services LLC I شارع Talia I إعادة ملء الحمام'
      },
      location: {
        en: 'Pepsico Services LLC I Talia street I Refill Washroom',
        ar: 'Pepsico Services LLC I شارع Talia I إعادة ملء الحمام'
      },
      serviceSubject: [
        { code: '611113', name: { en: 'Ads 4', ar: 'الإعلانات 4' }, value: 'ads4' },
        {
          code: '611007',
          name: { en: 'RM T-Cell Dispenser Chrome', ar: 'موزع RM T-Cell كروم' },
          value: 'RMT-CellDispenserChrome'
        }
      ]
    },
    {
      code: 'HSDPJD_0015_001_001',
      value: 'HSDPJD_0015_001_001',
      name: {
        en: 'Keen Rite | Ana Gheir Center | Refill Washroom',
        ar: 'كين رايت | مركز أنا غير | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Keen Rite | Ana Gheir Center | Refill Washroom',
        ar: 'كين رايت | مركز أنا غير | إعادة تعبئة الحمام'
      },
      serviceSubject: [{ code: 'D02023', name: { en: 'W5000 Diffuser', ar: 'الناشر W5000' }, value: 'W5000Diffuser' }]
    },
    {
      code: 'HSDPJD_0015_002_001',
      value: 'HSDPJD_0015_002_001',
      name: {
        en: 'Keen Rite I Auto mall king road I Refill Washroom',
        ar: 'كين رايت أنا السيارات مول الملك الطريق أنا إعادة ملء الحمام'
      },
      location: {
        en: 'Keen Rite I Auto mall king road I Refill Washroom',
        ar: 'كين رايت أنا السيارات مول الملك الطريق أنا إعادة ملء الحمام'
      },
      serviceSubject: [
        {
          code: '611007',
          name: { en: 'RM T-Cell Dispenser Chrome', ar: 'موزع RM T-Cell كروم' },
          value: 'RMT-CellDispenserChrome'
        },
        {
          code: '610340',
          name: { en: 'Aifforce Hand Dryer Chrome 220 - 240V', ar: 'آيف فورس مجفف يد كروم 220-240 فولت' },
          value: 'aifforceHandDryerChrome220-240V'
        }
      ]
    },
    {
      code: 'HSDPJD_0015_003_001',
      value: 'HSDPJD_0015_003_001',
      name: {
        en: 'Keen Rite | Al khalidiya bin salman center | Refill Washroom',
        ar: 'كين رايت | مركز الخالدية بن سلمان | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Keen Rite | Al khalidiya bin salman center | Refill Washroom',
        ar: 'كين رايت | مركز الخالدية بن سلمان | إعادة تعبئة الحمام'
      },
      serviceSubject: [
        {
          code: '621065',
          name: {
            en: 'Auto Janitor System Toilet Odor Treatment 1818138',
            ar: 'نظام التنظيف التلقائي لرائحة المرحاض 1818138'
          },
          value: 'autoJanitorSystemToiletOdorTreatment1818138'
        }
      ]
    },
    {
      code: 'HSDPJD_0016_001_001',
      value: 'HSDPJD_0016_001_001',
      name: {
        en: 'Knan Intemational | Saudi Business Center | Refill Washroom',
        ar: 'كنان | غير المعتدل مركز الأعمال السعودي | إعادة تعبئة الحمام'
      },
      location: {
        en: 'Knan Intemational | Saudi Business Center | Refill Washroom',
        ar: 'كنان | غير المعتدل مركز الأعمال السعودي | إعادة تعبئة الحمام'
      }
    },
    {
      code: 'HSDPJD_0016_002_001',
      value: 'HSDPJD_0016_002_001',
      name: {
        en: 'Kinan Intemational | Saudi Business Center | Refill Rezaroma',
        ar: 'كينان | غير المعتدل مركز الأعمال السعودي | إعادة تعبئة ريزاروما'
      },
      location: {
        en: 'Kinan Intemational | Saudi Business Center | Refill Rezaroma',
        ar: 'كينان | غير المعتدل مركز الأعمال السعودي | إعادة تعبئة ريزاروما'
      },
      serviceSubject: [
        {
          code: '611239',
          name: {
            en: 'EC030 Catcher - Genus Insect Light Trap 220V',
            ar: 'EC030 الماسك - مصيدة الحشرات من الجنس بجهد 220 فولت'
          },
          value: 'eC030Catcher-GenusInsectLightTrap220V'
        }
      ]
    },
    {
      code: 'HSDPJD_0016_003_001',
      value: 'HSDPJD_0016_003_001',
      name: {
        en: 'Kinan Intemational | Asfan Medina Road I Refill Rezaroma',
        ar: 'كينان | غير المعتدل شارع أسفان مدينا أعيد ملء ريزاروما'
      },
      location: {
        en: 'Kinan Intemational | Asfan Medina Road I Refill Rezaroma',
        ar: 'كينان | غير المعتدل شارع أسفان مدينا أعيد ملء ريزاروما'
      },
      serviceSubject: [
        {
          code: '621065',
          name: {
            en: 'Auto Janitor System Toilet Odor Treatment 1818138',
            ar: 'نظام التنظيف التلقائي لرائحة المرحاض 1818138'
          },
          value: 'autoJanitorSystemToiletOdorTreatment1818138'
        }
      ]
    },
    {
      code: 'HSDPJD_0020_001_001',
      value: 'HSDPJD_0020_001_001',
      name: {
        en: 'Islamic Development Bank Group I ITFC Building Refill Washroom/',
        ar: 'مجموعة البنك الإسلامي للتنمية I ITFC إعادة تعبئة المبنى مرحاض /'
      },
      location: {
        en: 'Islamic Development Bank Group I ITFC Building Refill Washroom/',
        ar: 'مجموعة البنك الإسلامي للتنمية I ITFC إعادة تعبئة المبنى مرحاض /'
      },
      serviceSubject: [
        {
          code: '611007',
          name: { en: 'RM T-Cell Dispenser Chrome', ar: 'موزع RM T-Cell كروم' },
          value: 'RMT-CellDispenserChrome'
        },
        {
          code: '611239',
          name: {
            en: 'EC030 Catcher - Genus Insect Light Trap 220V',
            ar: 'EC030 الماسك - مصيدة الحشرات من الجنس بجهد 220 فولت'
          },
          value: 'eC030Catcher-GenusInsectLightTrap220V'
        }
      ]
    }
  ],
  STOCK_CODES: [
    {
      serviceId: 16,
      uniteRatio: 16,
      stockCode: 611074,
      value: 611074,
      name: { en: 'RM Microburst 3000 Anticipations 75ml 1981053', ar: 'آر إم ميكروبيرست 3000 توقعات 75 مل 1981053' }
    },
    {
      serviceId: 17,
      uniteRatio: 16,
      stockCode: 611074,
      value: 611074,
      name: { en: 'RM Microburst 3000 Anticipations 75ml 1981053', ar: 'آر إم ميكروبيرست 3000 توقعات 75 مل 1981053' }
    },
    {
      serviceId: 18,
      uniteRatio: 16,
      stockCode: 611074,
      value: 611074,
      name: { en: 'RM Microburst 3000 Anticipations 75ml 1981053', ar: 'آر إم ميكروبيرست 3000 توقعات 75 مل 1981053' }
    },
    {
      serviceId: 19,
      uniteRatio: 16,
      stockCode: 611074,
      value: 611074,
      name: { en: 'RM Microburst 3000 Anticipations 75ml 1981053', ar: 'آر إم ميكروبيرست 3000 توقعات 75 مل 1981053' }
    },
    {
      serviceId: 20,
      uniteRatio: 16,
      stockCode: 611074,
      value: 611074,
      name: { en: 'RM Microburst 3000 Anticipations 75ml 1981053', ar: 'آر إم ميكروبيرست 3000 توقعات 75 مل 1981053' }
    },
    {
      serviceId: 21,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 21,
      uniteRatio: 8,
      stockCode: 611061,
      value: 611061,
      name: { en: 'RM Microburst 3000 Inspiration 75ml 1980900', ar: 'RM Microburst 3000 Inspiration 75ml 1980900' }
    },
    {
      serviceId: 33,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 33,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 34,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 34,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 35,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 35,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 36,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 36,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 37,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 37,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 38,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 38,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    },
    {
      serviceId: 39,
      uniteRatio: 8,
      stockCode: 611067,
      value: 611067,
      name: { en: 'Auto Janitor Refill Expression 600ml', ar: 'عبوة تعبئة السيارات 600 مل' }
    },
    {
      serviceId: 39,
      uniteRatio: 8,
      stockCode: 611048,
      value: 611048,
      name: {
        en: 'RM Microburst 3000 Radiant Sense 75ml 1980898',
        ar: 'آر إم ميكروبرست 3000 راديانت سينس 75 مل 1980898'
      }
    }
  ],
  RATIOS: [
    { id: 1, value: '100 ml', title: { en: '100 ml', ar: '100 مل ' }, roatio: '0.10000000' },
    { id: 2, value: '150 ml', title: { en: '150 ml', ar: '150 مل' }, roatio: '0.1500000C' },
    { id: 3, value: '200 ml', title: { en: '200 ml', ar: '200 مل' }, roatio: '0.20000000' },
    { id: 4, value: '250 ml', title: { en: '250 ml', ar: '250 مل' }, roatio: '0.2500000C' },
    { id: 5, value: '300 ml', title: { en: '300 ml', ar: '300 مل' }, roatio: '0.3000000C' },
    { id: 6, value: '400 ml', title: { en: '400 ml', ar: '400 مل' }, roatio: '0.4000000C' },
    { id: 7, value: '500 ml', title: { en: '500 ml', ar: '500 مل' }, roatio: '0.5000000C' },
    { id: 8, value: '1.000 Ltr', title: { en: '1.000 Ltr', ar: '1.000 ' }, roatio: '1.0000000C' },
    { id: 9, value: '1.200 Ltr', title: { en: '1.200 Ltr', ar: '1.200 لتر' }, roatio: '1.2000000C' },
    { id: 10, value: '1.500 Ltr', title: { en: '1.500 Ltr', ar: '1.500 لتر' }, roatio: '1.50000006' },
    { id: 11, value: '2.000 Ltr', title: { en: '2.000 Ltr', ar: '2.000 لتر' }, roatio: '2.0000000C' },
    { id: 12, value: '2.200 Ltr', title: { en: '2.200 Ltr', ar: '2.200 لتر' }, roatio: '2.20000000' },
    { id: 13, value: '2.500 Ltr', title: { en: '2.500 Ltr', ar: '2.500 لتر' }, roatio: '2.5000000C' },
    { id: 14, value: '3.000 Ltr', title: { en: '3.000 Ltr', ar: '3.000 لتر' }, roatio: '3.00000000' },
    { id: 15, value: '5.000 Ltr', title: { en: '5.000 Ltr', ar: '5.000 لتر' }, roatio: '5.0000000C' },
    { id: 16, value: 'Each', title: { en: 'Each', ar: 'كل' }, roatio: '1.0000000C' },
    { id: 17, value: '600 ml', title: { en: '600 ml', ar: '600 مل' }, roatio: '0.6000000C' },
    { id: 18, value: '700 ml', title: { en: '700 ml', ar: '700 مل' }, roatio: '0.70000000' },
    { id: 19, value: '800 ml', title: { en: '800 ml', ar: '800 مل' }, roatio: '0.80000000' },
    { id: 20, value: '850 ml', title: { en: '850 ml', ar: '850 مل' }, roatio: '0.85000000' }
  ],
  CUSTOMERNUMBER: [
    { name: { en: 'HSD_RUH_00604', ar: 'HSD_RUH_00604' }, value: 'HSD_RUH_00604' },
    { name: { en: 'HSD_ABH_00001', ar: 'HSD_ABH_00001' }, value: 'HSD_ABH_00001' },
    { name: { en: 'HSD_ABH_00002', ar: 'HSD_ABH_00002' }, value: 'HSD_ABH_00002' },
    { name: { en: 'HSD_ABH_00003', ar: 'HSD_ABH_00003' }, value: 'HSD_ABH_00003' },
    { name: { en: 'HSD_ABH_00004', ar: 'HSD_ABH_00004' }, value: 'HSD_ABH_00004' },
    { name: { en: 'HSD_RUH_00604', ar: 'HSD_RUH_00604' }, value: 'HSD_RUH_00604' }
  ],
  ROLE: [
    { name: { en: 'Primary', ar: 'خبرات' }, value: 'Primary' },
    { name: { en: 'Role 1', ar: 'الدور 1' }, value: 'Role 1' },
    { name: { en: 'Role 2', ar: 'الدور 2' }, value: 'Role 2' },
    { name: { en: 'Role 3', ar: 'الدور 3' }, value: 'Role 3' }
  ],
  FUNDING_TYPE: [
    { name: { en: 'Customer', ar: 'عميل' }, value: 'Customer' },
    { name: { en: 'Third Party', ar: 'الحفلة الثالثة' }, value: 'Third Party' }
  ]
};

export const PAYMENT_TYPE = [
  { name: { en: 'Billable', ar: 'قابل للفوترة' }, value: 'billable' },
  { name: { en: 'Non Billable', ar: 'غير قابل للفوترة' }, value: 'nonBillable' }
];

export const TASKS = [
  { name: { en: 'Task 1', ar: '1 مهمة' }, value: 'task1' },
  { name: { en: 'Task 2', ar: '2 مهمة' }, value: 'task2' },
  { name: { en: 'Task 3', ar: '3 مهمة' }, value: 'task3' },
  { name: { en: 'Task 4', ar: '4 مهمة' }, value: 'task4' },
  { name: { en: 'Task 5', ar: '5 مهمة' }, value: 'task5' },
  { name: { en: 'Task 6', ar: '6 مهمة' }, value: 'task6' }
];
