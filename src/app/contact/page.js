import Backdrop from "@/components/contact/Backdrop";
import Intro from "@/components/contact/Intro";
import Links from "@/components/contact/Links";
import Form from "@/components/contact/Form";
import Address from "@/components/contact/Address";

export const metadata = {
  title: "Contact | Sagor Music Cassette Company",
  description:
    "Contact Sagor Music Cassette Company on WhatsApp, Messenger, email or phone.",
};

export default function Contact() {
  return (
    <main className="relative isolate overflow-hidden">
      <Backdrop></Backdrop>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:pb-28 sm:pt-20">
        <Intro></Intro>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Links></Links>
          <Form></Form>
        </div>

        {/* Location map, full width under the two cards */}
        <div className="mt-6">
          <Address></Address>
        </div>
      </div>
    </main>
  );
}
