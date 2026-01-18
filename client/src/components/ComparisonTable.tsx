import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    { name: '24/7 Availability', traditional: false, carify: true },
    { name: 'Real-time EHR Integration', traditional: false, carify: true },
    { name: 'Multi-language Support', traditional: false, carify: true },
    { name: 'Insurance Verification', traditional: 'Manual', carify: 'Automated' },
    { name: 'Average Response Time', traditional: '5-10 min', carify: '<30 sec' },
    { name: 'Cost per Call', traditional: '$8-12', carify: '$2-3' },
    { name: 'Scalability', traditional: 'Limited', carify: 'Unlimited' },
    { name: 'Setup Time', traditional: '3-6 months', carify: '<30 days' }
  ];

  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
              <th className="px-6 py-4 text-center text-sm font-semibold">Traditional</th>
              <th className="px-6 py-4 text-center text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-700">
                Carify Health
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900">{feature.name}</td>
                <td className="px-6 py-4 text-center text-gray-600">
                  {typeof feature.traditional === 'boolean' ? (
                    feature.traditional ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-red-500">✕</span>
                    )
                  ) : (
                    feature.traditional
                  )}
                </td>
                <td className="px-6 py-4 text-center font-semibold bg-gradient-to-r from-purple-50 to-pink-50">
                  {typeof feature.carify === 'boolean' ? (
                    feature.carify ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-red-500">✕</span>
                    )
                  ) : (
                    <span className="text-purple-600">{feature.carify}</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
