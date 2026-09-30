      
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  pgProgrammes,
  ugProgrammes,
  certificationProgrammes,
} from "@/data/site";

import { useState } from "react";


// ==================================================
// TYPES
// ==================================================

interface EnquiryFormProps {
  idPrefix?: string;
  onSubmitted?: () => void;
}


// ==================================================
// COMPONENT
// ==================================================

export function EnquiryForm({
  idPrefix = "enq",
  onSubmitted,
}: EnquiryFormProps) {

  // ------------------------------------------------
  // STATE
  // ------------------------------------------------

  const [programme, setProgramme] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");


  // ------------------------------------------------
  // PROGRAMME OPTIONS
  // ------------------------------------------------

  const options = [
    ...ugProgrammes.map(
      (p) => p.name
    ),

    ...pgProgrammes.map(
      (p) => p.name
    ),

    ...certificationProgrammes.map(
      (p) => p.name
    ),
  ];


  // ==================================================
  // SUBMIT FORM
  // ==================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    // ----------------------------------------------
    // Prevent double submission
    // ----------------------------------------------

    if (loading) {
      return;
    }


    // ----------------------------------------------
    // Get form
    // ----------------------------------------------

    const form =
      e.currentTarget;


    // ----------------------------------------------
    // Browser validation
    // ----------------------------------------------

    if (!form.reportValidity()) {

      setError(
        "Please complete all required fields."
      );

      return;
    }


    // ----------------------------------------------
    // Programme validation
    // ----------------------------------------------

    if (!programme.trim()) {

      setError(
        "Please select a programme."
      );

      return;
    }


    // ----------------------------------------------
    // Start loading
    // ----------------------------------------------

    setLoading(true);

    setMessage("");

    setError("");


    // ----------------------------------------------
    // Get FormData
    // ----------------------------------------------

    const formData =
      new FormData(form);


    // ----------------------------------------------
    // Create submission ID
    // ----------------------------------------------

    const submissionId =
      crypto.randomUUID();


    // ----------------------------------------------
    // Create API payload
    // ----------------------------------------------

    const data = {

      submissionId,

      name:
        String(
          formData.get("name") || ""
        ).trim(),

      email:
        String(
          formData.get("email") || ""
        ).trim(),

      phonenumber:
        String(
          formData.get("phonenumber") || ""
        ).trim(),

      program:
        programme.trim(),

      message:
        String(
          formData.get("message") || ""
        ).trim(),
    };


    // ==================================================
    // API URL
    // ==================================================

    const API_URL =
      (
        import.meta.env
          .VITE_CONTACT_API_URL ||
        "http://localhost:5000"
      ).replace(/\/$/, "");


    try {

      // ----------------------------------------------
      // Send request to Express
      // ----------------------------------------------

      const response =
        await fetch(
          `${API_URL}/api/contact`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(data),
          }
        );


      // ----------------------------------------------
      // Read response safely
      // ----------------------------------------------

      const result =
        await response.json();


      // ----------------------------------------------
      // Check API response
      // ----------------------------------------------

      if (
        !response.ok ||
        !result.success
      ) {

        throw new Error(
          result.message ||
          "Failed to submit enquiry."
        );
      }


      // ==================================================
      // SUCCESS
      // ==================================================

      setMessage(
        result.message ||
        "Thank you! Your enquiry has been submitted successfully."
      );


      // ----------------------------------------------
      // Reset HTML form
      // ----------------------------------------------

      form.reset();


      // ----------------------------------------------
      // Reset React Select
      // ----------------------------------------------

      setProgramme("");


      // ----------------------------------------------
      // Clear ONLY form-related storage
      // ----------------------------------------------

      localStorage.removeItem(
        "enquiryForm"
      );

      sessionStorage.removeItem(
        "enquiryForm"
      );


      // ----------------------------------------------
      // Close modal
      // ----------------------------------------------

      if (onSubmitted) {

        onSubmitted();

      }


    } catch (err) {

      // ==================================================
      // ERROR
      // ==================================================

      console.error(
        "Enquiry submission error:",
        err
      );


      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit enquiry. Please try again."
      );


    } finally {

      // ----------------------------------------------
      // Stop loading
      // ----------------------------------------------

      setLoading(false);
    }
  };


  // ==================================================
  // UI
  // ==================================================

  return (

    <form
      onSubmit={handleSubmit}
      className="grid gap-5"
    >

      {/* ============================================
          NAME
          ============================================ */}

      <div className="grid gap-2">

        <Label
          htmlFor={`${idPrefix}-name`}
        >
          Student name
        </Label>

        <Input
          id={`${idPrefix}-name`}
          name="name"
          required
          autoComplete="name"
          disabled={loading}
        />

      </div>


      {/* ============================================
          EMAIL + PHONE
          ============================================ */}

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">

        {/* EMAIL */}

        <div className="grid gap-2">

          <Label
            htmlFor={`${idPrefix}-email`}
          >
            Email address
          </Label>

          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={loading}
          />

        </div>


        {/* PHONE */}

        <div className="grid gap-2">

          <Label
            htmlFor={`${idPrefix}-phone`}
          >
            Phone number
          </Label>

          <Input
            id={`${idPrefix}-phone`}
            name="phonenumber"
            type="tel"
            required
            pattern="[0-9+\s-]{8,15}"
            autoComplete="tel"
            disabled={loading}
          />

        </div>

      </div>


      {/* ============================================
          PROGRAMME
          ============================================ */}

      <div className="grid gap-2">

        <Label
          htmlFor={`${idPrefix}-programme`}
        >
          Programme of interest
        </Label>

        <Select
          value={programme}
          onValueChange={setProgramme}
          disabled={loading}
        >

          <SelectTrigger
            id={`${idPrefix}-programme`}
            className="rounded-xl"
            aria-required="true"
          >

            <SelectValue
              placeholder="Select a programme"
            />

          </SelectTrigger>


          <SelectContent>

            {options.map((option) => (

              <SelectItem
                key={option}
                value={option}
              >
                {option}
              </SelectItem>

            ))}

          </SelectContent>

        </Select>

      </div>


      {/* ============================================
          MESSAGE
          ============================================ */}

      <div className="grid gap-2">

        <Label
          htmlFor={`${idPrefix}-message`}
        >
          Message
        </Label>

        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          required
          disabled={loading}
        />

      </div>


      {/* ============================================
          SUBMIT BUTTON
          ============================================ */}

      <Button
        type="submit"
        variant="hero"
        size="pill-lg"
        className="w-full"
        disabled={loading}
      >

        {loading
          ? "Submitting..."
          : "Submit enquiry"}

      </Button>


      {/* ============================================
          SUCCESS MESSAGE
          ============================================ */}

      {message && (

        <p
          aria-live="polite"
          className="text-sm text-green-600"
        >
          {message}
        </p>

      )}


      {/* ============================================
          ERROR MESSAGE
          ============================================ */}

      {error && (

        <p
          aria-live="assertive"
          className="text-sm text-red-600"
        >
          {error}
        </p>

      )}

    </form>
  );
}

