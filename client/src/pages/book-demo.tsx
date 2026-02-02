import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import GlobalFooter from '@/components/GlobalFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Phone } from 'lucide-react';

const solutionInterests = [
  'Clinical Operations (RPM, Pre/Post-Op, Chronic Care)',
  'Front Desk Admin (Scheduling, Insurance Verification)',
  'Patient Experience (Concierge, Wellness, Marketing)'
];

const patientVolumes = [
  '< 500',
  '500 - 2,500',
  '2,500+'
];

export default function BookDemoPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    preferredDate: '',
    preferredTime: '',
    solutionInterests: [] as string[],
    patientVolume: '',
    note: ''
  });

  const handleSolutionToggle = (solution: string) => {
    setFormData(prev => ({
      ...prev,
      solutionInterests: prev.solutionInterests.includes(solution)
        ? prev.solutionInterests.filter(s => s !== solution)
        : [...prev.solutionInterests, solution]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage to pass to schedule page
    sessionStorage.setItem('demoFormData', JSON.stringify(formData));
    setLocation('/schedule-demo');
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              See Jenny & Joe in Action
            </h1>
            <p className="text-center text-gray-600 mb-8">Book a personalized demo to see how much time your practice can save.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Practice / Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Input
                    id="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Which solutions interest you? (Select all that apply) *</Label>
                <div className="space-y-3">
                  {solutionInterests.map((solution) => (
                    <div key={solution} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={solution}
                        checked={formData.solutionInterests.includes(solution)}
                        onCheckedChange={() => handleSolutionToggle(solution)}
                        className="mt-1"
                      />
                      <label htmlFor={solution} className="text-sm cursor-pointer flex-1">
                        {solution}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Patient Volume (Calls/Month)</Label>
                <RadioGroup value={formData.patientVolume} onValueChange={(value) => setFormData({ ...formData, patientVolume: value })}>
                  {patientVolumes.map((volume) => (
                    <div key={volume} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value={volume} id={volume} />
                      <label htmlFor={volume} className="text-sm cursor-pointer flex-1">
                        {volume}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Additional Notes (Optional)</Label>
                <Textarea
                  id="note"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={4}
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button type="submit" className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
                Continue to Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
