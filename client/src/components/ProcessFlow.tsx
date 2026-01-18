import { motion } from 'framer-motion';

export default function ProcessFlow() {
  const steps = [
    { num: '01', title: 'Patient Calls', desc: 'Incoming call received' },
    { num: '02', title: 'AI Answers', desc: 'Jenny responds instantly' },
    { num: '03', title: 'Data Capture', desc: 'Information collected' },
    { num: '04', title: 'EHR Update', desc: 'Real-time sync' },
    { num: '05', title: 'Action Taken', desc: 'Appointment scheduled' }
  ];

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 hidden lg:block" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">{step.title}</h3>
              <p className="text-sm text-center text-gray-600">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-purple-400" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
