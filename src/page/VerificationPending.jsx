import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../componenets/ui/card";
import { Button } from "../componenets/ui/button";
import { Mail } from "lucide-react";

const VerificationPending = () => {
  const location = useLocation();
  const email = location.state?.email;
  const registrationData = location.state?.registrationData;

  / Store registration data in localStorage as an array
  useEffect(() => {
    if (registrationData) {
      const existingData = JSON.parse(localStorage.getItem('pendingRegistrations') || '[]');
      const newData = [...existingData, {
        ...registrationData,
        status: 'pending',
        registrationDate: new Date().toISOString(),
        verificationToken: Math.random().toString(36).substring(2),
      }];
      localStorage.setItem('pendingRegistrations', JSON.stringify(newData));
    }
  }, [registrationData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
          <CardDescription className="mt-2">
            We've sent verification instructions to:
            <div className="font-medium text-blue-600 mt-1">{email}</div>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            Please check your email and follow the verification link to activate your account.
            You'll receive your login credentials after verification.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.location.href = '/login'}
          >
            Return to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerificationPending;