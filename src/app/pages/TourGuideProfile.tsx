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
import { UserCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

export default function TourGuideProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Personal Details", "Qualifications", "Services & Pricing", "Review & Submit"];

  const languages = [
    "Hindi", "English", "Bengali", "Tamil", "Telugu", "Marathi",
    "Gujarati", "Kannada", "Malayalam", "Punjabi", "French", "German",
    "Spanish", "Japanese", "Chinese", "Korean"
  ];

  const specializations = [
    "Historical Sites", "Religious/Spiritual", "Wildlife & Nature",
    "Adventure Activities", "Cultural Tours", "Food & Culinary",
    "Photography Tours", "Trekking & Hiking"
  ];

  const services = [
    "Guided Tour (Walking)", "Guided Tour (Vehicle)", "Ritual Services", 
    "Trek Leading", "Photography Guide", "Bird Watching"
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
                <UserCircle className="h-8 w-8 text-accent" />
                <h1 className="text-3xl">Tour Guide Profile</h1>
              </div>
              <p className="text-muted-foreground">
                Share your expertise and connect with travelers
              </p>
            </div>

            <ProgressSteps steps={steps} currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Personal Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">
                        Full Name
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" className="mt-2" />
                    </div>

                    <div className="md:col-span-2">
                      <FileUpload
                        label="Profile Photo"
                        accept="image/*"
                        required
                        helperText="Professional photo for your profile"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Languages Spoken</Label>
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
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Expertise & Qualifications</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guideType">Guide Type</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regional">Regional Guide</SelectItem>
                          <SelectItem value="state">State Level Guide</SelectItem>
                          <SelectItem value="national">National Guide</SelectItem>
                          <SelectItem value="specialized">Specialized Guide</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="licenseNumber">
                        Guide License/Certification Number
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Input
                        id="licenseNumber"
                        placeholder="License number"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="authority">Issuing Authority</Label>
                      <Input
                        id="authority"
                        placeholder="Ministry of Tourism"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="validity">License Validity Date</Label>
                      <Input id="validity" type="date" className="mt-2" />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Specialization Areas</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {specializations.map((spec) => (
                          <div key={spec} className="flex items-center space-x-2">
                            <Checkbox id={`spec-${spec}`} />
                            <label htmlFor={`spec-${spec}`} className="text-sm cursor-pointer">
                              {spec}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <FileUpload
                        label="Qualification Proof"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        helperText="Guide license certificate"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Adventure/First Aid Certificates"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="If applicable"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <FileUpload
                        label="Police Verification / Character Certificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
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
                      <Label htmlFor="bio">Bio / About Yourself</Label>
                      <Textarea
                        id="bio"
                        placeholder="Share your experience, expertise, and what makes you a great guide..."
                        className="mt-2"
                        rows={5}
                      />
                    </div>

                    <div>
                      <Label>Offered Services</Label>
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
                        <Label htmlFor="pricingModel">Pricing Model</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select pricing" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="per-hour">Per Hour</SelectItem>
                            <SelectItem value="per-day">Per Day</SelectItem>
                            <SelectItem value="per-group">Per Group</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="rate">Rate (₹)</Label>
                        <Input
                          id="rate"
                          type="number"
                          placeholder="2000"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="groupSize">Maximum Group Size</Label>
                        <Input
                          id="groupSize"
                          type="number"
                          placeholder="15"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Review & Submit</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg mb-4">Profile Summary</h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground">
                        Your profile is ready for submission. Our team will review your
                        credentials and verify your documents within 2-3 business days.
                      </p>
                    </div>
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
