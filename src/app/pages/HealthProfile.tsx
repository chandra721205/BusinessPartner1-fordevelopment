import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { PageLayout } from "../components/PageLayout";
import { FileUpload } from "../components/FileUpload";
import { ProgressSteps } from "../components/ProgressSteps";
import { useNavigate } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Stethoscope, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

export default function HealthProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Provider Type", "Credentials", "Services", "Review"];

  const services = [
    "On-tour doctor", "Tele-consultation", "Pre-trip health checkup",
    "Ayurvedic treatment package", "Yoga retreat", "Diagnostic test booking",
    "Pharmacy delivery", "Emergency medical services"
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/verification/pending");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <PageLayout showBack>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
                <h1 className="text-3xl">Health & Wellness Provider Profile</h1>
              </div>
            </div>

            <ProgressSteps steps={steps} currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Provider Type</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="providerType">Provider Type</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select provider type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor-allopathy">Individual Doctor (Allopathy)</SelectItem>
                          <SelectItem value="doctor-ayush">Individual Doctor (AYUSH)</SelectItem>
                          <SelectItem value="nurse">Nurse/Paramedic</SelectItem>
                          <SelectItem value="health-assistant">Health Assistant</SelectItem>
                          <SelectItem value="wellness-center">Wellness Center</SelectItem>
                          <SelectItem value="clinic">Clinic/Hospital</SelectItem>
                          <SelectItem value="diagnostic">Diagnostic Center</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="providerName">Name of Practitioner / Center</Label>
                      <Input id="providerName" placeholder="Dr. Name or Center Name" className="mt-2" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Credentials & Qualifications</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="regNumber">Registration / Council Number</Label>
                      <Input id="regNumber" placeholder="MCI/DCI Number" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="council">Issuing Council</Label>
                      <Input id="council" placeholder="e.g., Medical Council of India" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="regValidity">Registration Validity Date</Label>
                      <Input id="regValidity" type="date" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="qualification">Qualification / Degree</Label>
                      <Input id="qualification" placeholder="MBBS, MD, etc." className="mt-2" />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input id="specialization" placeholder="e.g., Cardiology, Ayurveda" className="mt-2" />
                    </div>

                    <div>
                      <FileUpload
                        label="Degree Certificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Registration Certificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <FileUpload
                        label="AYUSH / NABH Accreditation"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="If applicable"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Services & Pricing</h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label>Type of Service Offered</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox id={`service-${service}`} />
                            <label htmlFor={`service-${service}`} className="text-sm cursor-pointer">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="consultationFee">Consultation/Treatment Fee (₹)</Label>
                        <Input id="consultationFee" type="number" placeholder="500" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <FileUpload
                        label="Professional Indemnity Insurance"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="Required for medical practitioners"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Clinic/Hospital License"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="If applicable"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio / Description</Label>
                      <Textarea id="bio" placeholder="Describe your services and expertise..." className="mt-2" rows={4} />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Review & Submit</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-sm">Your profile is ready for verification.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                Back
              </Button>
              <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
                {currentStep === steps.length - 1 ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    Submit
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
