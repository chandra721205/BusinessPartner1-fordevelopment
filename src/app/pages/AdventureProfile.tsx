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
import { Mountain, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

export default function AdventureProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Business Eligibility", "Infrastructure", "Safety", "Review"];

  const adventureCategories = [
    "Water Sports", "Aero-sports", "Safaris", "Mountaineering & Trekking",
    "Rock Climbing", "Paragliding", "Rafting", "Scuba Diving"
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
                <Mountain className="h-8 w-8 text-secondary" />
                <h1 className="text-3xl">Adventure Tour Operator Profile</h1>
              </div>
            </div>

            <ProgressSteps steps={steps} currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Business Eligibility</h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label>Adventure Category</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {adventureCategories.map((cat) => (
                          <div key={cat} className="flex items-center space-x-2">
                            <Checkbox id={`cat-${cat}`} />
                            <label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">
                              {cat}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="capital">Paid-up Capital (₹)</Label>
                        <Input id="capital" type="number" placeholder="1000000" className="mt-2" />
                      </div>

                      <div>
                        <Label htmlFor="turnover">Turnover from Adventure Activities (₹)</Label>
                        <Input id="turnover" type="number" placeholder="5000000" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <FileUpload
                        label="Audited Balance Sheet / CA Certificate"
                        accept=".pdf"
                        required
                        helperText="Last financial year"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Infrastructure & Staff</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="officeSpace">Office Space (sq ft)</Label>
                      <Input id="officeSpace" type="number" placeholder="500" className="mt-2" />
                    </div>

                    <div>
                      <FileUpload
                        label="Office Photographs"
                        accept="image/*"
                        helperText="Clear photos of your office"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Qualified Staff Details</Label>
                      <div className="mt-2 p-4 border rounded space-y-3">
                        <Input placeholder="Staff Name" />
                        <Input placeholder="Role" />
                        <FileUpload label="Qualification Certificate" accept=".pdf,.jpg,.jpeg,.png" />
                        <FileUpload label="First-Aid/CPR Certification" accept=".pdf,.jpg,.jpeg,.png" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Safety & Equipment</h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="equipment">Adventure Equipment Inventory</Label>
                      <Textarea id="equipment" placeholder="List all equipment..." className="mt-2" rows={5} />
                    </div>

                    <div>
                      <FileUpload
                        label="Activity-specific SOPs"
                        accept=".pdf"
                        helperText="Standard Operating Procedures (Optional)"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Ministry of Tourism ATO Registration"
                        accept=".pdf,.jpg,.jpeg,.png"
                        helperText="If registered (Optional but recommended)"
                      />
                    </div>

                    <div>
                      <FileUpload
                        label="Insurance Policy"
                        accept=".pdf"
                        required
                        helperText="Liability insurance for adventure activities"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Review & Submit</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-sm">Your adventure operator profile is ready for verification.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                Back
              </Button>
              <Button onClick={handleNext} className="bg-secondary hover:bg-secondary/90">
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
