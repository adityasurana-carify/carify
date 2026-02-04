import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import GlobalFooter from '@/components/GlobalFooter';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
];

const timeZones = [
  'America/New_York (EST)',
  'America/Chicago (CST)',
  'America/Denver (MST)',
  'America/Los_Angeles (PST)',
  'America/Phoenix (MST)',
  'America/Anchorage (AKST)',
  'Pacific/Honolulu (HST)'
];

export default function ScheduleDemoPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<any>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('America/New_York (EST)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('demoFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      setLocation('/book-demo');
    }
  }, [setLocation]);

  const handleSchedule = () => {
    if (!date || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    const emailBody = `
Demo Request Details:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.companyName}
Programs: ${formData.selectedPrograms.join(', ')}
Call Frequency: ${formData.callFrequency.join(', ') || 'Not specified'}
Note: ${formData.note || 'None'}

Scheduled Date: ${format(date, 'MMMM dd, yyyy')}
Scheduled Time: ${selectedTime}
Time Zone: ${selectedTimeZone}
    `.trim();

    const mailtoLink = `mailto:demo@carify.health?subject=Demo Request - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  if (!formData) {
    return null;
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">Demo Scheduled!</h1>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for scheduling a demo with Carify Health. We've sent the details to your email.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will reach out to you shortly to confirm your appointment.
              </p>
              <Button onClick={() => setLocation('/')} size="lg">
                Return to Home
              </Button>
            </div>
          </div>
        </main>
        <GlobalFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden pt-20 md:pt-24">
      <Header />
      <main className="flex-1 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Awesome, you just booked a Demo!
            </h1>
            <p className="text-center text-xl text-gray-600 mb-8">Let us schedule it for you :)</p>

            <div className="mb-8 p-6 bg-blue-50 rounded-xl">
              <h2 className="text-xl font-semibold mb-2">Jenny Carify AI Demo</h2>
              <p className="text-gray-700">Programs: {formData.selectedPrograms.join(', ')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Time</h3>
                  <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Time Zone</h3>
                  <Select value={selectedTimeZone} onValueChange={setSelectedTimeZone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeZones.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button onClick={handleSchedule} className="w-full py-6 text-lg" disabled={!date || !selectedTime}>
              Schedule Demo
            </Button>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
