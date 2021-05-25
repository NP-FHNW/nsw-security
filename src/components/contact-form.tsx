import { Button } from "../elements/button";
import { Input } from "../elements/input";
import { Label } from "../elements/label";

export const ContactForm = () => (
  <form
    className="max-w-full lg:max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-10"
    action=""
  >
    <Input id="firma" label="Firma*" />
    <Input id="name" label="Name*" />
    <Input id="email" label="E-Mail*" />
    <Input id="tel" label="Telefonnummer*" />
    <Input id="betreff" label="Betreff" className="lg:col-span-2" />
    <div className="flex flex-col lg:col-span-2">
      <Label forInput="nachricht">Nachricht</Label>
      <textarea id="nachricht" className="h-32 border rounded-md" />
    </div>
    <Button
      onClick={() => alert("submitted")}
      type="submit"
      className="lg:col-span-2 mx-auto"
    >
      senden
    </Button>
  </form>
);
