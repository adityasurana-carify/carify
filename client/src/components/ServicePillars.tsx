import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { Phone, Calendar, CreditCard, UserCheck, HeartPulse, Stethoscope } from 'lucide-react';

export default function ServicePillars() {
  const items: BentoItem[] = [
    {
      title: 'Intelligent Appointment Management',
      meta: 'Jenny',
      description: 'Full calendars, staff freedom, and auto-scheduling that keeps your practice running at peak efficiency',
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      status: 'Live',
      tags: ['Scheduling', 'Automation'],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: 'Insurance & Benefits Verification',
      meta: 'Jenny',
      description: 'Deep verification ensuring revenue integrity with 20% fewer denials',
      icon: <CreditCard className="w-4 h-4 text-purple-500" />,
      status: 'Active',
      tags: ['Revenue', 'Verification'],
    },
    {
      title: 'Closing Care Gaps',
      meta: 'Jenny',
      description: 'Proactive outreach improving quality metrics and HEDIS scores',
      icon: <HeartPulse className="w-4 h-4 text-emerald-500" />,
      status: 'Active',
      tags: ['Quality', 'Outreach'],
      colSpan: 2,
    },
    {
      title: 'Revenue Cycle & Collections',
      meta: 'Jenny',
      description: 'Reduced DSO with frictionless, empathetic billing outreach',
      icon: <Phone className="w-4 h-4 text-orange-500" />,
      status: 'Live',
      tags: ['Billing', 'Collections'],
    },
    {
      title: 'Transitions of Care',
      meta: 'Jenny',
      description: '24-48hr follow-up with 14-day bridge ensuring TCM billing compliance',
      icon: <UserCheck className="w-4 h-4 text-indigo-500" />,
      status: 'Active',
      tags: ['Follow-up', 'TCM'],
    },
    {
      title: 'Perioperative Care Management',
      meta: 'Ryan',
      description: 'Clinical readiness, remote monitoring, and predictive insights for surgical excellence',
      icon: <Stethoscope className="w-4 h-4 text-pink-500" />,
      status: 'Beta',
      tags: ['Surgery', 'Monitoring'],
      colSpan: 2,
    },
  ];

  return <BentoGrid items={items} />;
}
