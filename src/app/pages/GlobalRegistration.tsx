import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { PageLayout } from "../components/PageLayout";
import { FileUpload } from "../components/FileUpload";
import { useNavigate } from "react-router";
import { 
  Mail, Building, FileText, User, Phone, Landmark, 
  CheckCircle2, Eye, EyeOff
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";

export default function GlobalRegistration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions");
      return;
    }
    // Show success message and navigate
    navigate("/service-selection");
  };

  return (
    <PageLayout showBack>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl mb-2">Partner Registration</h1>
              <p className="text-muted-foreground">
                Complete your business profile to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Account Credentials */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Mail className="h-5 w-5 text-primary" />
                  <h2 className="text-xl">Account Credentials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="email">
                      Email Address
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="business@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">
                      Password
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      At least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">
                      Confirm Password
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Identity */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Building className="h-5 w-5 text-primary" />
                  <h2 className="text-xl">Business Identity</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="businessName">
                      Business/Company Name
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      placeholder="ABC Tourism Pvt Ltd"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pan">
                      Business PAN Number
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="pan"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="entityType">
                      Business Entity Type
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select entity type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="llp">LLP</SelectItem>
                        <SelectItem value="pvt-ltd">Private Limited</SelectItem>
                        <SelectItem value="public-ltd">Public Limited</SelectItem>
                        <SelectItem value="individual">Individual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <FileUpload
                      label="GST Registration Certificate"
                      accept=".pdf,.jpg,.jpeg,.png"
                      helperText="PDF, JPG, or PNG (max 5MB) - Optional"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Entity Registration Proof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="Certificate of Incorporation/Registration"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Business Address Proof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="Electricity bill, rent agreement, etc."
                    />
                  </div>
                </div>
              </section>

              {/* Contact Person */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <User className="h-5 w-5 text-primary" />
                  <h2 className="text-xl">Contact Person</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">
                      Primary Contact Full Name
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="contactName"
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="designation">
                      Designation
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="designation"
                      placeholder="CEO / Manager / Owner"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile">
                      Mobile Number
                      <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This will remain private
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="altPhone">Alternate Phone</Label>
                    <Input
                      id="altPhone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>
                </div>
              </section>

              {/* Financial Information */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Landmark className="h-5 w-5 text-primary" />
                  <h2 className="text-xl">Financial Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <FileUpload
                      label="Cancelled Cheque / Bank Statement"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="For payment settlements"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Latest Income Tax Return"
                      accept=".pdf"
                      helperText="Optional - helps expedite verification"
                    />
                  </div>
                </div>
              </section>

              {/* Compliance */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <FileText className="h-5 w-5 text-primary" />
                  <h2 className="text-xl">Compliance</h2>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="terms" className="text-sm cursor-pointer">
                      <span className="text-destructive">* </span>
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and confirm that all information provided is true and accurate. I understand
                      that false information may lead to account termination.
                    </label>
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
