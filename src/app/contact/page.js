import Links from "@/components/contact/Links";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact | Sagor Music Cassette Company",
  description:
    "Contact Sagor Music Cassette Company on WhatsApp, Messenger, email or phone.",
};

export default function Contact() {
  return (
    <main>
      <Links></Links>
      <Form></Form>
    </main>
  );
}
