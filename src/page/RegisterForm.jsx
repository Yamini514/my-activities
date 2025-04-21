import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, ChevronsUpDown, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radioGroup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Separator } from "../components/ui/seperator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textArea";
import { Switch } from "../components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
// import { Value } from "@radix-ui/react-select";

// Update the form schema first (near the top of the file)
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  education: z.string().min(1, { message: "Education is required" }),
  institution: z.string().min(1, { message: "Institution name is required" }),
  graduationYear: z.string().min(4, { message: "Graduation year is required" }),
  programType: z.enum(["free", "paid"]),
  track: z.string().min(1, { message: "Please select a track" }),
  duration: z.string().min(1, { message: "Please select a duration" }),
  resume: z.any().optional(),
  coverLetter: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const RegisterForm = ({ onSubmit = (data) => console.log(data) }) => {
  const [currentStep, setCurrentStep] = useState("personal");
  const [isPremium, setIsPremium] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    const formErrors = Object.keys(errors).length;
    if (formErrors === 0) {
      console.log(data);
      navigate('/Login');
    }
  };

  // Update the form state to include error tracking
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    watch,
    setValue,
    clearErrors,  // Add this
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: "",
      institution: "",
      graduationYear: "",
      programType: "free",
      track: "",
      duration: "",
      coverLetter: "",
      agreeToTerms: false,
    },
  });

  const programType = watch("programType");

  const handleProgramTypeChange = (value) => {
    setValue("programType", value);
    setIsPremium(value === "paid");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setValue("resume", e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Company Title Section */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-800 p-8">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Srinishtha Technologies
        </h1>
        <p className="text-xl text-white/90 text-center max-w-md drop-shadow">
          Empowering the next generation of tech talent through our comprehensive internship program
        </p>
      </div>

      {/* Registration Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-grey p-8">
            <CardTitle className="text-3xl font-bold text-center">
              Internship Registration
            </CardTitle>
            <CardDescription className="text-blue-100 text-center text-lg mt-2">
              Join Srinishtha's internship program to kickstart your career
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Tabs
                value={currentStep}
                onValueChange={setCurrentStep}
                className="w-full"
              >
                <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-8 mx-auto w-full text-black">
                  <TabsTrigger
                    value="personal"
                    className="text-sm whitespace-nowrap border-y-indigo-800 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    Personal Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="text-sm whitespace-nowrap py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    Education & Background
                  </TabsTrigger>
                  <TabsTrigger
                    value="program"
                    className="text-sm whitespace-nowrap py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    Program Selection
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-black">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-black">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-black">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-black">
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        className={errors.password ? "border-red-500" : ""}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-black">
                        Confirm Password <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        {...register("confirmPassword")}
                        className={errors.confirmPassword ? "border-red-500" : ""}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep("education")}
                    >
                      Next: Education
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="education" className="text-black">
                        Highest Education <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => {
                          setValue("education", value);
                          clearErrors("education");
                        }}
                        defaultValue={watch("education")}
                      >
                        <SelectTrigger
                          className={`${errors.education ? "border-red-500" : ""}`}
                        >
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectItem value="bachelors">
                            Bachelor's Degree
                          </SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="highschool">High School</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.education && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.education.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution" className="text-black">
                        Institution Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="institution"
                        placeholder="Enter your institution name"
                        {...register("institution")}
                        className={errors.institution ? "border-red-500" : ""}
                      />
                      {errors.institution && (
                        <p className="text-red-500 text-sm">
                          {errors.institution.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="graduationYear" className="text-black">
                        Graduation Year <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => {
                          setValue("graduationYear", value);
                          clearErrors("graduationYear");
                        }}
                        defaultValue={watch("graduationYear")}
                      >
                        <SelectTrigger
                          className={errors.graduationYear ? "border-red-500" : ""}
                        >
                          <SelectValue placeholder="Select graduation year" />
                        </SelectTrigger>
                        <SelectContent className="bg-white max-h-[200px] overflow-y-auto">
                          {Array.from(
                            { length: 20 },
                            (_, i) => new Date().getFullYear() + 5 - i
                          ).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.graduationYear && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.graduationYear.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Upload Resume</Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you want to join this internship program"
                      className="min-h-[120px]"
                      {...register("coverLetter")}
                    />
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("personal")}
                    >
                      Back: Personal Details
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep("program")}
                    >
                      Next: Program Selection
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="program" className="space-y-4">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>
                        Program Type <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        defaultValue={programType}
                        onValueChange={(value) =>
                          handleProgramTypeChange(
                            value === "free" ? "free" : "paid"
                          )
                        }
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="free" id="free" />
                          <Label htmlFor="free" className="font-normal">
                            Free Internship
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paid" id="paid" />
                          <Label htmlFor="paid" className="font-normal">
                            Paid Mentorship (Premium)
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-4 w-4 text-blue-500 cursor-pointer" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">
                                  Premium features include job readiness modules,
                                  resume building, and mock interviews
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </RadioGroup>
                    </div>

                    {isPremium && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-50 p-4 rounded-md border border-blue-200"
                      >
                        <h3 className="font-medium text-blue-800 mb-2">
                          Premium Features Include:
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Job Readiness Modules</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Resume Building Assistance</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Mock Interview Sessions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Priority Mentor Support</span>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="track">
                        Select Track <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => {
                          setValue("track", value);
                          clearErrors("track");
                        }}
                        defaultValue={watch("track")}
                      >
                        <SelectTrigger className={errors.track ? "border-red-500" : ""}>
                          <SelectValue placeholder="Choose your internship track" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="fullstack">
                            Full Stack Development
                          </SelectItem>
                          <SelectItem value="frontend">
                            Frontend Development
                          </SelectItem>
                          <SelectItem value="backend">
                            Backend Development
                          </SelectItem>
                          <SelectItem value="sales">
                            Sales & Marketing (MBA)
                          </SelectItem>
                          <SelectItem value="ai">
                            AI & Machine Learning
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.track && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.track.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">
                        Program Duration <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => {
                          setValue("duration", value);
                          clearErrors("duration");
                        }}
                        defaultValue={watch("duration")}
                      >
                        <SelectTrigger className={errors.duration ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select program duration" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="1month">1 Month</SelectItem>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.duration && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm"
                        >
                          {errors.duration.message}
                        </motion.p>
                      )}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4  p-4 rounded-lg border border-gray-200">
                      <div className="text-sm text-gray-700">
                        <h4 className="font-semibold mb-2">Terms Agreement</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>I understand this is an internship program with learning objectives</li>
                          <li>I commit to completing all assigned tasks and projects</li>
                          <li>I agree to maintain professional conduct throughout the program</li>
                          <li>I acknowledge that the program certificate will be issued based on performance</li>
                        </ul>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="agreeToTerms"
                          checked={watch("agreeToTerms")}
                          onCheckedChange={(checked) => {
                            setValue("agreeToTerms", checked);
                            if (checked) clearErrors("agreeToTerms");
                          }}
                          className={`${
                            errors.agreeToTerms ? "border-red-500" : ""
                          } ${
                            watch("agreeToTerms") 
                              ? "bg-green-500" 
                              : "bg-gray-200"
                          }`}
                        />
                        <Label
                          htmlFor="agreeToTerms"
                          className={`font-normal text-sm ${errors.agreeToTerms ? "text-red-500" : "text-black"}`}
                        >
                          I agree to the terms and conditions of the internship program
                        </Label>
                      </div>
                      {errors.agreeToTerms && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.agreeToTerms.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep("education")}
                    >
                      Back: Education
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleSubmit(handleLogin)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                      disabled={Object.keys(errors).length > 0}
                    >
                      Complete Registration
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
            Already registered?{" "}
            <Button
              variant="link"
              className="text-blue-600 hover:underline p-0"
              onClick={() => navigate('/login')}
            >
              Login here
            </Button>
          </CardFooter>
        </Card>
      </div>
      </div>
    );
};

export default RegisterForm;
