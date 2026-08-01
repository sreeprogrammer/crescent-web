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
import { pgProgrammes, ugProgrammes, certificationProgrammes } from "@/data/site";
import { useState } from "react";

export function EnquiryForm({ idPrefix = "enq" }: { idPrefix?: string }) {
  const [sent, setSent] = useState(false);
  const [programme, setProgramme] = useState("");

  const options = [
    ...ugProgrammes.map((p) => p.name),
    ...pgProgrammes.map((p) => p.name),
    ...certificationProgrammes.map((p) => p.name),
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-name`}>Student name</Label>
        <Input id={`${idPrefix}-name`} name="name" required autoComplete="name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-email`}>Email address</Label>
          <Input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone number</Label>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            pattern="[0-9+\s-]{8,15}"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-programme`}>Programme of interest</Label>
        <Select value={programme} onValueChange={setProgramme} name="programme">
          <SelectTrigger id={`${idPrefix}-programme`} className="rounded-xl">
            <SelectValue placeholder="Select a programme" />
          </SelectTrigger>
          <SelectContent>
            {options.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-message`}>Message</Label>
        <Textarea id={`${idPrefix}-message`} name="message" rows={4} />
      </div>
      <Button type="submit" variant="hero" size="pill-lg" className="w-full">
        Submit enquiry
      </Button>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        {sent ? "Thank you — our counsellor will contact you shortly." : ""}
      </p>
    </form>
  );
}
