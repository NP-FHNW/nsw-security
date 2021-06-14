import { Button } from "../elements/button";
import { Input } from "../elements/input";
import { Label } from "../elements/label";

export const ContactForm = () => (
  <form
    className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10"
    action=""
  >
    <Input id="firma" label="Firma*" />
    <Input id="betreff" label="Betreff" className="md:col-start-2" />
    <Input id="name" label="Name*" className="row-start-2" />
    <Input id="email" label="E-Mail*" className="row-start-3" />
    <Input id="tel" label="Telefonnummer*" className="row-start-4" />
    <div className="flex flex-col md:col-start-2 md:row-span-3">
      <Label forInput="nachricht">Nachricht</Label>
      <textarea id="nachricht" className="h-48 md:h-full border rounded-md" />
    </div>
    <Button
      onClick={() => alert("submitted")}
      type="submit"
      className="md:col-span-2 ml-auto"
    >
      senden
    </Button>
  </form>
);
