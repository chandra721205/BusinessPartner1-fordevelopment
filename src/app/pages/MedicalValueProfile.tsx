import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { PageLayout } from "../components/PageLayout";
import { FileUpload } from "../components/FileUpload";
import { ProgressSteps } from "../components/ProgressSteps";
import { useNavigate } from "react-router";
import { Checkbox } from "../components/ui/checkbox";
import { Plane, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

export default function MedicalValueProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Core Credentials", "Service Profile", "Compliance", "Review"];

  const treatments = [
    "Cardiac Surgery", "Orthopedic Surgery", "Cosmetic Surgery", "Dental Treatment",
    "IVF & Fertility", "Cancer Treatment", "Neurosurgery", "Transplant Surgery",
    "Eye Surgery", "Ayurvedic Treatment", "Wellness & Spa"
  ];

  const languages = [
    "English", "Arabic", "Russian", "French", "Spanish", "German",
    "Chinese", "Japanese", "Korean", "Swahili"
  ];

  const services = [
    "Treatment cost estimation", "Visa assistance", "Airport transfers",
    "Accommodation booking", "Interpreter services", "Post-treatment follow-up",
    "Medical records translation", "Travel insurance guidance"
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
                <Plane className="h-8 w-8 text-accent" />
                <h1 className="text-3xl">Medical Value Travel Facilitator</h1>
              </div>
              <p className="text-muted-foreground">
                Connect international patients with quality healthcare in India
              </p>
            </div>

            <ProgressSteps steps={steps} currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Core Credentials</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nabh">NABH MVTF Empanelment Number</Label>
                      <Input
                        id="nabh"
                        placeholder="Empanelment number"
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Optional but highly recommended</p>
                    </div>

                    <div>
                      <FileUpload
                        label="NABH MVTF Certificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="If empaneled"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="companyProfile">Company Profile / About</Label>
                      <Textarea
                        id="companyProfile"
                        placeholder="Describe your organization, experience in medical tourism, and expertise..."
                        className="mt-2"
                        rows={5}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Service Profile</h2>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label>Types of Treatments Facilitated</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {treatments.map((treatment) => (
                          <div key={treatment} className="flex items-center space-x-2">
                            <Checkbox id={`treatment-${treatment}`} />
                            <label htmlFor={`treatment-${treatment}`} className="text-sm cursor-pointer">
                              {treatment}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="hospitals">Partner Hospital Network</Label>
                      <Textarea
                        id="hospitals"
                        placeholder="List hospitals and medical centers you work with..."
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label>Languages Supported for International Patients</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {languages.map((lang) => (
                          <div key={lang} className="flex items-center space-x-2">
                            <Checkbox id={`lang-${lang}`} />
                            <label htmlFor={`lang-${lang}`} className="text-sm cursor-pointer">
                              {lang}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Services Offered</Label>
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
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Compliance & Documentation</h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <FileUpload
                        label="MoU with Partner Hospitals"
                        accept=".pdf"
                        helperText="Memorandum of Understanding (Optional)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="protocols">International Patient Handling Protocols</Label>
                      <Textarea
                        id="protocols"
                        placeholder="Describe your patient handling and care coordination procedures..."
                        className="mt-2"
                        rows={5}
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Company Registration Certificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        helperText="Business registration proof"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Professional Liability Insurance"
                        accept=".pdf"
                        helperText="If available"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Reference Letters / Success Stories"
                        accept=".pdf"
                        helperText="Patient testimonials or case studies (Optional)"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Review & Submit</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      <li>Medical Value Travel requires additional verification</li>
                      <li>Our team will contact you for additional documentation if needed</li>
                      <li>Verification typically takes 5-7 business days for MVTF profiles</li>
                      <li>NABH accreditation significantly speeds up the process</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-sm">
                      <strong>Data Protection:</strong> We handle all patient information with strict
                      confidentiality and comply with international data protection standards.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                Back
              </Button>
              <Button onClick={handleNext} className="bg-accent hover:bg-accent/90">
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
