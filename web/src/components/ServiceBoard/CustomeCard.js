import { Icon } from '@iconify/react';
import heartFill from '@iconify/icons-eva/heart-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';

import { MovableCardWrapper } from './styles/Base';
import DeleteButton from './widgets/DeleteButton';

export default function CustomCard({
  onClick,
  className,
  name,
  startDate,
  occurences,
  address1,
  address2,
  service,
  cardStyle,
  body,
  dueOn,
  cardColor,
  subTitle,
  tagStyle,
  escalationText,
  tags,
  // showDeleteButton = false,
  onDelete
}) {
  const clickDelete = (e) => {
    onDelete();
    e.stopPropagation();
  };

  return (
    <MovableCardWrapper onClick={onClick} style={cardStyle} className={className}>
      <header
        style={{
          borderBottom: '1px solid #eee',
          padding: 5,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#ffffff',
          backgroundColor: cardColor
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</div>
        {/* {showDeleteButton && <DeleteButton onClick={clickDelete} />} */}
      </header>
      <div style={{ fontSize: 12, padding: '10px' }}>
        <div style={{ color: '#4C4C4C' }}>
          {startDate} [{occurences}]
          <span className="service-type-icons">
            {service.isHighene && <Icon icon={heartFill} width={20} height={20} />}
          </span>
          <span className="service-type-icons">{service.type && service.type}</span>
          <span className="service-type-icons">
            {service.isMaintenance && <Icon icon={settings2Fill} width={20} height={20} />}
          </span>
        </div>
        <div style={{ padding: '5px 0px' }}>{address1}</div>
        <div style={{ fontWeight: 'bold' }}>{address2}</div>
      </div>
    </MovableCardWrapper>
  );
}
