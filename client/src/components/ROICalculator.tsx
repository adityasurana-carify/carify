import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export default function ROICalculator() {
  const [avgCallTime, setAvgCallTime] = useState(15);
  const [totalPatients, setTotalPatients] = useState(1000);
  const [callsPerPatient, setCallsPerPatient] = useState(3);
  const hourlyRate = 20;

  const totalCalls = totalPatients * callsPerPatient;
  const totalMinutes = totalCalls * avgCallTime;
  const totalHours = Math.round(totalMinutes / 60);
  const totalDollars = Math.round(totalHours * hourlyRate);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl" data-testid="card-roi-calculator">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Calculate Your ROI</CardTitle>
        <CardDescription className="text-base">
          See how much time and money Carify can save your practice
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="call-time" className="text-base font-medium">
                Average Call Time Per Patient
              </Label>
              <span className="text-2xl font-bold text-primary" data-testid="text-call-time-value">
                {avgCallTime} mins
              </span>
            </div>
            <Slider
              id="call-time"
              min={1}
              max={60}
              step={1}
              value={[avgCallTime]}
              onValueChange={(value) => setAvgCallTime(value[0])}
              data-testid="slider-call-time"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="total-patients" className="text-base font-medium">
              Total Number of Patients Annually
            </Label>
            <Input
              id="total-patients"
              type="number"
              min={0}
              value={totalPatients}
              onChange={(e) => setTotalPatients(parseInt(e.target.value) || 0)}
              className="text-lg"
              data-testid="input-total-patients"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="calls-per-patient" className="text-base font-medium">
              Total Number of Calls Per Patient Annually
            </Label>
            <Input
              id="calls-per-patient"
              type="number"
              min={0}
              value={callsPerPatient}
              onChange={(e) => setCallsPerPatient(parseInt(e.target.value) || 0)}
              className="text-lg"
              data-testid="input-calls-per-patient"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
          <div className="bg-primary/10 rounded-lg p-6 text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Hours Saved Per Call</p>
            <p className="text-4xl font-bold text-primary" data-testid="text-hours-per-call">
              {(avgCallTime / 60).toFixed(1)}
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-6 text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Total Hours Saved Annually</p>
            <p className="text-4xl font-bold text-primary" data-testid="text-total-hours">
              {totalHours.toLocaleString()}
            </p>
          </div>
          <div className="bg-chart-3/20 rounded-lg p-6 text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Total Dollars Saved Annually</p>
            <p className="text-4xl font-bold text-chart-3" data-testid="text-total-dollars">
              ${totalDollars.toLocaleString()}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center pt-4">
          The calculator assumes a default industry average rate of ${hourlyRate} per hour for the call handling role to compute the Total Dollars Saved
        </p>
      </CardContent>
    </Card>
  );
}
