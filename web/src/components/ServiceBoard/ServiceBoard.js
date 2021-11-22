import { useTranslation } from 'react-i18next';
import Board from 'react-trello';

import CustomCard from './CustomeCard';
import CustomLaneHeader from './CustomLaneHeader';

import './ServiceBoard.css';

export default function ServiceBoard() {
  const { t } = useTranslation();
  const data = {
    lanes: [
      {
        cards: [
          {
            body: 'Thanks. Please schedule me for an estimate on Monday.',
            cardColor: '#66ff00',
            cardStyle: {
              borderRadius: 6,
              boxShadow: '0 0 6px 1px #BD3B36',
              marginBottom: 15
            },
            dueOn: 'due in a day',
            escalationText: 'Escalated to OPS-ESCALATIONS!',
            id: 'Card1',
            laneId: 'lane1',
            metadata: {
              id: 'Card1'
            },
            name: 'Abdul Cader',
            subTitle: 'SMS received at 12:13pm today',
            startDate: '19.2.2020',
            occurences: 3,
            address1: 'Le Meridian Towers Kudai-Makkah',
            address2: 'Kudai road makkah',
            service: {
              isMaintenance: false,
              type: 'R',
              isHighene: true
            }
          },
          {
            body: 'Is the estimate free, and can someone call me soon?',
            cardColor: '#66ff00',
            cardStyle: {
              borderRadius: 6,
              boxShadow: '0 0 6px 1px #E08521',
              marginBottom: 15
            },
            dueOn: 'due now',
            escalationText: 'Escalated to Admin',
            id: 'Card2',
            laneId: 'lane1',
            metadata: {
              id: 'Card1'
            },
            name: 'Abdul Cader',
            subTitle: 'Email received at 1:14pm',
            startDate: '19.05.2021',
            occurences: 8,
            address1: 'Panda Retail Company',
            address2: 'Panda 3',
            service: {
              isMaintenance: true,
              type: 'R',
              isHighene: true
            }
          }
        ],
        currentPage: 1,
        id: 'lane1',
        day: 'Sun',
        date: '14.11.2021',
        style: {
          backgroundColor: '#424242'
        }
        // titleStyle: {
        //   fontSize: 20,
        //   marginBottom: 15
        // }
      },
      {
        cards: [
          {
            body: 'You are welcome. Interested in doing business with you again',
            cardColor: '#b5025b',
            cardStyle: {
              borderRadius: 6,
              boxShadow: '0 0 6px 1px #BD3B36',
              marginBottom: 15
            },
            dueOn: 'due in a day',
            escalationText: 'Escalated to OPS-ESCALATIONS!',
            id: 'Card3',
            laneId: 'lane2',
            metadata: {
              id: 'Card1'
            },
            name: 'Abbas Qureshi',
            subTitle: 'Email received at 4:23pm today',
            startDate: '18.11.2021',
            occurences: 0,
            address1: 'Panda Retail Company',
            address2: 'Thahassusi makkah 225',
            service: {
              isMaintenance: true,
              type: 'M',
              isHighene: false
            }
          }
        ],
        currentPage: 2,
        id: 'lane2',
        day: 'Thu',
        date: '18.11.2021',
        style: {
          backgroundColor: '#424242'
        }
      }
    ]
  };

  return (
    <Board
      components={{ Card: CustomCard, LaneHeader: CustomLaneHeader }}
      data={data}
      draggable
      tagStyle={{ fontSize: '80%' }}
      style={{
        backgroundColor: '#1b1b1b'
      }}
    />
  );
}
