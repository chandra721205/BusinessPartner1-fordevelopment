import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { PageLayout } from "../components/PageLayout";
import { FileUpload } from "../components/FileUpload";
import { ProgressSteps } from "../components/ProgressSteps";
import { useNavigate } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Plus, Trash2, Car, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

interface Vehicle {
  id: string;
  regNumber: string;
  type: string;
  capacity: number;
  drivers: Driver[];
}

interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  validity: string;
}

export default function TransportProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const steps = ["Operator Details", "Vehicle & Driver Details", "Services & Pricing", "Review & Submit"];

  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      regNumber: "",
      type: "",
      capacity: 0,
      drivers: [],
    };
    setVehicles([...vehicles, newVehicle]);
  };

  const removeVehicle = (id: string) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const addDriver = (vehicleId: string) => {
    const newDriver: Driver = {
      id: Date.now().toString(),
      name: "",
      licenseNumber: "",
      validity: "",
    };
    setVehicles(
      vehicles.map((v) =>
        v.id === vehicleId ? { ...v, drivers: [...v.drivers, newDriver] } : v
      )
    );
  };

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
                <Car className="h-8 w-8 text-secondary" />
                <h1 className="text-3xl">Transport Partner Profile</h1>
              </div>
              <p className="text-muted-foreground">
                Register your vehicles and drivers for our travel network
              </p>
            </div>

            <ProgressSteps steps={steps} currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Operator Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="operatorType">
                        Operator Type
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select operator type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual Owner</SelectItem>
                          <SelectItem value="fleet">Fleet Operator</SelectItem>
                          <SelectItem value="rental">Rental Agency</SelectItem>
                          <SelectItem value="taxi">Taxi Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="vehicleCount">
                        Number of Vehicles
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Input
                        id="vehicleCount"
                        type="number"
                        placeholder="5"
                        min="1"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="serviceArea">Service Area Description</Label>
                      <Textarea
                        id="serviceArea"
                        placeholder="Describe your service area and routes"
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Vehicle & Driver Details</h2>
                    <Button onClick={addVehicle} variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {vehicles.map((vehicle, index) => (
                      <div key={vehicle.id} className="p-6 border-2 border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg">Vehicle {index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeVehicle(vehicle.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <Label>Vehicle Registration Number</Label>
                            <Input placeholder="MH 01 AB 1234" className="mt-2" />
                          </div>

                          <div>
                            <Label>Vehicle Type</Label>
                            <Select>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sedan">Sedan</SelectItem>
                                <SelectItem value="suv">SUV</SelectItem>
                                <SelectItem value="tempo">Tempo Traveller</SelectItem>
                                <SelectItem value="bus">Bus</SelectItem>
                                <SelectItem value="luxury">Luxury Car</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Vehicle Capacity</Label>
                            <Input type="number" placeholder="4" className="mt-2" />
                          </div>

                          <div className="md:col-span-2">
                            <FileUpload
                              label="Registration Certificate (RC)"
                              accept=".pdf,.jpg,.jpeg,.png"
                              required
                            />
                          </div>

                          <FileUpload
                            label="Permit Document"
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                          />

                          <FileUpload
                            label="Fitness Certificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                          />

                          <div className="md:col-span-2">
                            <FileUpload
                              label="Insurance Paper"
                              accept=".pdf,.jpg,.jpeg,.png"
                              required
                            />
                          </div>
                        </div>

                        {/* Driver Details */}
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-md">Driver Details</h4>
                            <Button
                              onClick={() => addDriver(vehicle.id)}
                              variant="outline"
                              size="sm"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Driver
                            </Button>
                          </div>

                          {vehicle.drivers.map((driver, dIndex) => (
                            <div
                              key={driver.id}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded"
                            >
                              <div>
                                <Label>Driver Name</Label>
                                <Input placeholder="John Doe" className="mt-2" />
                              </div>
                              <div>
                                <Label>License Number</Label>
                                <Input placeholder="MH0120120012345" className="mt-2" />
                              </div>
                              <div>
                                <Label>License Validity</Label>
                                <Input type="date" className="mt-2" />
                              </div>
                              <FileUpload label="Driver Photo" accept="image/*" />
                              <FileUpload
                                label="License Copy"
                                accept=".pdf,.jpg,.jpeg,.png"
                              />
                              <FileUpload
                                label="Background Verification"
                                accept=".pdf,.jpg,.jpeg,.png"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {vehicles.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        <Car className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No vehicles added yet. Click "Add Vehicle" to begin.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Services & Pricing</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pricingModel">Pricing Model</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select pricing model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="per-km">Per Kilometer</SelectItem>
                          <SelectItem value="per-hour">Per Hour</SelectItem>
                          <SelectItem value="fixed">Fixed Package</SelectItem>
                          <SelectItem value="day">Per Day</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="baseFare">Base Fare (₹)</Label>
                      <Input
                        id="baseFare"
                        type="number"
                        placeholder="2000"
                        className="mt-2"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label>Service Area</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {["Local City", "State-wide", "North India", "South India", "Pan India"].map(
                          (area) => (
                            <div key={area} className="flex items-center space-x-2">
                              <input type="checkbox" id={area} />
                              <label htmlFor={area} className="text-sm cursor-pointer">
                                {area}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Review & Submit</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg mb-4">Summary</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicles Added:</span>
                        <span>{vehicles.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Drivers:</span>
                        <span>
                          {vehicles.reduce((sum, v) => sum + v.drivers.length, 0)}
                        </span>
                      </div>
                    </div>
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
