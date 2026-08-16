import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { PageLayout } from "../components/PageLayout";
import { FileUpload } from "../components/FileUpload";
import { ImageGalleryUpload } from "../components/ImageGalleryUpload";
import { ProgressSteps } from "../components/ProgressSteps";
import { useNavigate } from "react-router";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Plus, Trash2, Hotel, ChevronRight, CheckCircle2 } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

interface RoomType {
  id: string;
  name: string;
  count: number;
  basePrice: number;
  amenities: string[];
}

export default function AccommodationProfile() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);

  const steps = ["Property Details", "Rooms & Amenities", "Legal & Compliance", "Review & Submit"];

  const propertyAmenities = [
    "Free WiFi",
    "Parking",
    "Restaurant",
    "24/7 Front Desk",
    "Wheelchair Accessible",
    "Lift/Elevator",
    "Power Backup",
    "Laundry Service",
    "Swimming Pool",
    "Gym/Fitness Center",
    "Spa",
    "Conference Room",
  ];

  const roomAmenities = ["AC", "Attached Bathroom", "TV", "WiFi", "Mini Fridge", "Balcony"];

  const languages = [
    "Hindi",
    "English",
    "Bengali",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
  ];

  const addRoomType = () => {
    const newRoom: RoomType = {
      id: Date.now().toString(),
      name: "",
      count: 0,
      basePrice: 0,
      amenities: [],
    };
    setRoomTypes([...roomTypes, newRoom]);
  };

  const removeRoomType = (id: string) => {
    setRoomTypes(roomTypes.filter((room) => room.id !== id));
  };

  const updateRoomType = (id: string, field: keyof RoomType, value: any) => {
    setRoomTypes(
      roomTypes.map((room) => (room.id === id ? { ...room, [field]: value } : room))
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
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Hotel className="h-8 w-8 text-primary" />
                <h1 className="text-3xl">Accommodation Provider Profile</h1>
              </div>
              <p className="text-muted-foreground">
                Complete your property details to start receiving bookings
              </p>
            </div>

            {/* Progress Steps */}
            <ProgressSteps steps={steps} currentStep={currentStep} />

            {/* Step Content */}
            <div className="mt-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Property Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="propertyName">
                        Property Name
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Input
                        id="propertyName"
                        placeholder="Grand Palace Hotel"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyType">
                        Property Type
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="resort">Resort</SelectItem>
                          <SelectItem value="homestay">Homestay</SelectItem>
                          <SelectItem value="lodge">Lodge</SelectItem>
                          <SelectItem value="guesthouse">Guest House</SelectItem>
                          <SelectItem value="hostel">Hostel</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="apartment">Service Apartment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="starRating">Star Rating</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unrated">Unrated</SelectItem>
                          <SelectItem value="1">1 Star</SelectItem>
                          <SelectItem value="2">2 Star</SelectItem>
                          <SelectItem value="3">3 Star</SelectItem>
                          <SelectItem value="4">4 Star</SelectItem>
                          <SelectItem value="5">5 Star</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="licenseNumber">
                        Official Approval/License Number
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
                      <Label htmlFor="yearEstablished">Year of Establishment</Label>
                      <Input
                        id="yearEstablished"
                        type="number"
                        placeholder="2020"
                        min="1900"
                        max="2026"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="totalRooms">
                        Total Number of Rooms
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Input
                        id="totalRooms"
                        type="number"
                        placeholder="50"
                        min="1"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">
                        Complete Address
                        <span className="text-destructive ml-1">*</span>
                      </Label>
                      <Textarea
                        id="address"
                        placeholder="Street, City, State, PIN"
                        required
                        className="mt-2"
                        rows={3}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <ImageGalleryUpload
                        label="Property Image Gallery"
                        accept="image/*"
                        required
                        helperText="Upload multiple high-quality images of your property (min 5 photos)"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Room Types & Amenities</h2>
                    <Button onClick={addRoomType} variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Room Type
                    </Button>
                  </div>

                  {/* Room Types */}
                  <div className="space-y-6">
                    {roomTypes.map((room, index) => (
                      <div key={room.id} className="p-6 border-2 border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg">Room Type {index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeRoomType(room.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Room Name</Label>
                            <Input
                              placeholder="Deluxe Room"
                              value={room.name}
                              onChange={(e) =>
                                updateRoomType(room.id, "name", e.target.value)
                              }
                              className="mt-2"
                            />
                          </div>

                          <div>
                            <Label>Number of Rooms</Label>
                            <Input
                              type="number"
                              placeholder="10"
                              value={room.count || ""}
                              onChange={(e) =>
                                updateRoomType(room.id, "count", parseInt(e.target.value))
                              }
                              className="mt-2"
                            />
                          </div>

                          <div>
                            <Label>Base Price (₹/night)</Label>
                            <Input
                              type="number"
                              placeholder="3000"
                              value={room.basePrice || ""}
                              onChange={(e) =>
                                updateRoomType(room.id, "basePrice", parseInt(e.target.value))
                              }
                              className="mt-2"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <Label className="mb-3 block">Room Amenities</Label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {roomAmenities.map((amenity) => (
                                <div key={amenity} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`${room.id}-${amenity}`}
                                    checked={room.amenities.includes(amenity)}
                                    onCheckedChange={(checked) => {
                                      const newAmenities = checked
                                        ? [...room.amenities, amenity]
                                        : room.amenities.filter((a) => a !== amenity);
                                      updateRoomType(room.id, "amenities", newAmenities);
                                    }}
                                  />
                                  <label
                                    htmlFor={`${room.id}-${amenity}`}
                                    className="text-sm cursor-pointer"
                                  >
                                    {amenity}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {roomTypes.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                        <Hotel className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No room types added yet. Click "Add Room Type" to begin.</p>
                      </div>
                    )}
                  </div>

                  {/* Property Amenities */}
                  <div className="pt-6 border-t">
                    <h3 className="text-xl mb-4">Property Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {propertyAmenities.map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox id={`property-${amenity}`} />
                          <label htmlFor={`property-${amenity}`} className="text-sm cursor-pointer">
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="pt-6 border-t">
                    <h3 className="text-xl mb-4">Languages Spoken by Staff</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {languages.map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox id={`lang-${language}`} />
                          <label htmlFor={`lang-${language}`} className="text-sm cursor-pointer">
                            {language}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl mb-6">Legal & Compliance Documents</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FileUpload
                      label="Building Plan / Occupancy Certificate"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="PDF or image format"
                    />

                    <FileUpload
                      label="Fire Safety NOC"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="Fire department clearance"
                    />

                    <FileUpload
                      label="Health / Trade License"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="Municipal health/trade license"
                    />

                    <FileUpload
                      label="Police Verification / Lodging License"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      helperText="Police station registration"
                    />

                    <FileUpload
                      label="FSSAI License"
                      accept=".pdf,.jpg,.jpeg,.png"
                      helperText="Required if serving food (Optional)"
                    />

                    <FileUpload
                      label="Bar/Liquor License"
                      accept=".pdf,.jpg,.jpeg,.png"
                      helperText="If serving alcohol (Optional)"
                    />
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
                        <span className="text-muted-foreground">Property Type:</span>
                        <span>Hotel</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Rooms:</span>
                        <span>{roomTypes.reduce((sum, room) => sum + room.count, 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Room Types Added:</span>
                        <span>{roomTypes.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Documents Uploaded:</span>
                        <span>Required documents ready for verification</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-sm">
                      <strong>Note:</strong> After submission, our team will verify your details
                      within 2-3 business days. You'll receive an email notification once your
                      profile is approved.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
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