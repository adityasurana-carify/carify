import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone } from 'lucide-react';

const programs = [
  'RPM',
  'Health Data Collection',
  'Health Monitoring Checkin',
  'Remote Patient Care',
  'Healthcare Marketing',
  'Post Discharge Workflows and Data Collection',
  'Pre-hospitalization Support',
  'Health Device Monitoring & Patient Walkthrough'
];

const callFrequencies = [
  '10-50 calls/day',
  '50-100 calls/day',
  '100-200 calls/day',
  '200+ calls/day',
  '50-100 calls/week',
  '100-200 calls/week',
  '200+ calls/week'
];

export default function BookDemoPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    selectedPrograms: [] as string[],
    callFrequency: [] as string[],
    note: ''
  });

  const handleProgramToggle = (program: string) => {
    setFormData(prev => ({
      ...prev,
      selectedPrograms: prev.selectedPrograms.includes(program)
        ? prev.selectedPrograms.filter(p => p !== program)
        : [...prev.selectedPrograms, program]
    }));
  };

  const handleFrequencyToggle = (freq: string) => {
    setFormData(prev => ({
      ...prev,
      callFrequency: prev.callFrequency.includes(freq)
        ? prev.callFrequency.filter(f => f !== freq)
        : [...prev.callFrequency, freq]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage to pass to schedule page
    sessionStorage.setItem('demoFormData', JSON.stringify(formData));
    setLocation('/schedule-demo');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fill & Submit your info
            </h1>
            <p className="text-center text-gray-600 mb-8">Complete the form below to book your demo</p>

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
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Select Your Programs (select multiple) *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {programs.map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <Checkbox
                        id={program}
                        checked={formData.selectedPrograms.includes(program)}
                        onCheckedChange={() => handleProgramToggle(program)}
                      />
                      <label htmlFor={program} className="text-sm cursor-pointer">
                        {program}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>How Many Calls per Day/Week? (Optional)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {callFrequencies.map((freq) => (
                    <div key={freq} className="flex items-center space-x-2">
                      <Checkbox
                        id={freq}
                        checked={formData.callFrequency.includes(freq)}
                        onCheckedChange={() => handleFrequencyToggle(freq)}
                      />
                      <label htmlFor={freq} className="text-sm cursor-pointer">
                        {freq}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Leave a Note (Optional)</Label>
                <Textarea
                  id="note"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={4}
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button type="submit" className="w-full py-6 text-lg">
                Continue to Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer
        logo={<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>}
        brandName="Carify Health"
        socialLinks={[{ icon: <Phone className="h-5 w-5" />, href: "tel:+1-555-0123", label: "Call Us" }]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/why-carify", label: "Why Carify" },
          { href: "/use-cases", label: "Use Cases" }
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" }
        ]}
        copyright={{ text: "© 2024 Carify Health", license: "All rights reserved" }}
      />
    </div>
  );
}
