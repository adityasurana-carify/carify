import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { TrendingUp, Target, DollarSign, Calendar } from 'lucide-react';

export default function MetricsDashboard() {
  const items: BentoItem[] = [
    {
      title: '85% Autonomous Resolution',
      meta: 'Industry Leading',
      description: 'Inquiry resolution rate without human intervention, freeing your team for complex cases',
      icon: <Target className="w-4 h-4 text-blue-500" />,
      status: 'Live',
      tags: ['Resolution', 'AI'],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: '400% Preventive Care Growth',
      meta: '4x Increase',
      description: '4x increase in preventive care encounters through proactive patient engagement',
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
      status: 'Verified',
      tags: ['Growth', 'Care'],
    },
    {
      title: '30% Overhead Reduction',
      meta: 'Cost Savings',
      description: 'Administrative cost savings while maintaining superior care quality',
      icon: <DollarSign className="w-4 h-4 text-purple-500" />,
      status: 'Active',
      tags: ['Savings', 'Efficiency'],
    },
    {
      title: '97% Provider Utilization',
      meta: 'Optimal',
      description: 'Optimal scheduling ensures maximum provider productivity and minimal downtime',
      icon: <Calendar className="w-4 h-4 text-orange-500" />,
      status: 'Live',
      tags: ['Scheduling', 'Optimization'],
      colSpan: 2,
    },
  ];

  return <BentoGrid items={items} />;
}
