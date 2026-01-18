import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Rocket } from 'lucide-react';

export default function SolutionCards() {
  const solutions = [
    {
      icon: Zap,
      title: 'Sync Automatically',
      desc: 'Update your EHR/PMS systems in real-time',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Follow Your Rules',
      desc: 'Adhere strictly to your custom clinical workflows',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Intelligent Filtering',
      desc: 'Staff only steps in for complex calls',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Rapid ROI',
      desc: 'Deploy with templates in under 30 days',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {solutions.map((solution, i) => {
        const Icon = solution.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`} />
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{solution.title}</h3>
              <p className="text-gray-600">{solution.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
