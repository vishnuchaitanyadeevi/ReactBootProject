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
        address: 'Le Meridian Towers Kudai-Makkah Kudai road makkah',
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
        address: 'Samba Financial Group Fayha office branch',
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
        address: 'Tamimi Global Co Ltd (TAFGA) Dialysis centre near red sea mall',
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
        address: 'Le Meridian Towers Kudai-Makkah Kudai road makkah',
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
        address: 'Samba Financial Group Fayha office branch',
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
        address: 'Tamimi Global Co Ltd (TAFGA) Dialysis centre near red sea mall',
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
        address: 'Panda Retail Company Panda 3',
        service: {
          scheduled: true,
          maintenance: true
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
        address: 'Panda Retail Company Panda 1',
        service: {
          scheduled: true,
          highene: true
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
        address: 'Samba Financial Groug Bawadi branch',
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
        address: 'Samba Financial Group Faiha building branch',
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
        address: 'Panda Retail Company Makkah iskan 220',
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
        address: 'Makkah Clock Royal Tower (Fairmont) Emaar Hotel',
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
        address: 'Panda Retail Company Thahassusi makkah 225',
        service: {
          scheduled: true
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
        address: 'Support Services King Abdullah Medical City Makkah',
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
        address: 'Panda Retail Company Thahassusi makkah 225',
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
        address: 'Panda Retail Company Hamdania 242',
        service: {
          audit: true,
          highene: true
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
        address: 'Emirates National Poultry Farms L.L.C Al Ain',
        service: {
          scheduled: true
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
        address: 'Panda Retail Company Panda 46, Jubail',
        service: {
          scheduled: true,
          refill: true
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
        address: 'Panda Retail Comoany Al Awali makkah 20011',
        service: {
          scheduled: true
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
        address: 'Dr. Amal Zabeedi - Makkah Makkah branch',
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
        address: 'Mawred Al Baraka Co Hamdania',
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
        address: 'Elaf Kindah Hotel Makkah ELAF KINDAH',
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
        address: 'Reza Food Services Co Ltd McDonalds MOHAMEDIA',
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
        address: 'Reza Food Services Co Ltd Corniche road branch',
        service: {
          refill: true,
          highene: true
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
        address: 'أبراج الميريديان طريق كدي - مكة كدي مكة',
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
        address: 'فرع مكتب مجموعة سامبا المالية بالفيحاء',
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
        address: 'التميمي العالمية المحدودة (TAFGA) مركز غسيل الكلى بالقرب من رد سي مول',
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
        address: 'أبراج الميريديان طريق كدي - مكة كدي مكة',
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
        address: 'فرع مكتب مجموعة سامبا المالية بالفيحاء',
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
        address: 'التميمي العالمية المحدودة (TAFGA) مركز غسيل الكلى بالقرب من رد سي مول',
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
        address: 'شركة بنده للتجزئة 3',
        service: {
          scheduled: true,
          maintenance: true
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
        address: 'شركة بنده للتجزئة 1',
        service: {
          scheduled: true,
          highene: true
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
        name: 'عبد القادر',
        startDate: '21-07-2020',
        occurences: 0,
        address: 'سامبا المالية جروج فرع البوادي',
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
        address: 'مجموعة سامبا المالية فرع الفيحاء',
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
        name: 'عبد القادر',
        startDate: '23-05-2021',
        occurences: 90,
        address: 'شركة بنده للتجزئة مكة اسكان 220',
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
        address: 'برج ساعة مكة الملكي (فيرمونت) فندق إعمار',
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
        name: 'عباس قريشي',
        startDate: '18-11-2021',
        occurences: 0,
        address: 'شركة بنده للتجزئة Thahassusi مكة 225',
        service: {
          scheduled: true
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
        address: 'الخدمات المساندة مدينة الملك عبدالله الطبية بمكة المكرمة',
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
        name: 'عباس قريشي',
        startDate: '23-05-2021',
        occurences: -18,
        address: 'شركة بنده للتجزئة Thahassusi مكة 225',
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
        address: 'شركة بنده للتجزئة الحمدانية 242',
        service: {
          audit: true,
          highene: true
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
        name: 'عنيد محمدي',
        startDate: '05-05-2021',
        occurences: 2,
        address: 'مزارع الإمارات الوطنية للدواجن ش.ذ.م.م العين',
        service: {
          scheduled: true
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
        address: 'شركة بنده للتجزئة بنده 46 الجبيل',
        service: {
          scheduled: true,
          refill: true
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
        name: 'عباس قريشي',
        startDate: '19-05-2021',
        occurences: 0,
        address: 'بنده للتجزئة كوموني العوالي مكة 20011',
        service: {
          scheduled: true
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
        address: 'د.امل الزبيدي - فرع مكة المكرمة',
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
        name: 'عبد القادر',
        startDate: '06-05-2021',
        occurences: 6,
        address: 'Mawred Al Baraka Co Hamdania',
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
        address: 'فندق إيلاف كندة مكة إيلاف كندة',
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
        name: 'عباس قريشي',
        startDate: '29-09-2020',
        occurences: 0,
        address: 'شركة رضا للخدمات الغذائية المحدودة ماكدونالدز المحمدية',
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
        address: 'شركة رضا للخدمات الغذائية المحدودة فرع طريق الكورنيش',
        service: {
          refill: true,
          highene: true
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
  { name: 'Completed', colorCode: '#70a239', type: 'complete' },
  { name: 'Scheduled', colorCode: '#88cfed', type: 'scheduled' },
  { name: 'NotCompleted', colorCode: '#e3aa20', type: 'notCompleted' },
  { name: 'Canceled', colorCode: '#ee3327', type: 'cancelled' },
  { name: 'Refill', colorCode: '#d5dfe5', type: 'refill' },
  { name: 'Maintainance', colorCode: '#d5dfe5', type: 'maintenance' },
  { name: 'CallOut', colorCode: '#009fda', type: 'callOut' },
  { name: 'Audit', colorCode: '#d5dfe5', type: 'audit' }
];

export const COLOR_CODES = {
  DRK: {
    CARD: {
      BG: '#424242',
      TXT: '#f1f1f1'
    },
    FILTER_BOX: {
      BORDER: '#323232'
    }
  },
  LGT: {
    CARD: {
      BG: '#dedede',
      TXT: '#767575'
    },
    FILTER_BOX: {
      BORDER: '#e2e2e7'
    }
  }
};
