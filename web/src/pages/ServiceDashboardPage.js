import { useTranslation } from 'react-i18next';
import ServiceBoard from '../components/ServiceBoard/ServiceBoard';

export default function ServiceDashboard() {
  const { t } = useTranslation();

  return <ServiceBoard />;
}
