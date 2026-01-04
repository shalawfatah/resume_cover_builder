interface ContactSectionProps {
  website: string;
  email: string;
  github: string;
  phone: string;
  address: string;
  linkedin: string;
}
export default function ContactSection({
  website,
  email,
  github,
  phone,
  address,
  linkedin,
}: ContactSectionProps) {
  return (
    <div>
      <div className="flex flex-row items-center">
        <p className="font-bold text-xs">Website: </p>
        <a target="_blanket" href={website}>
          {website}
        </a>
      </div>
      <div className="flex flex-row items-center">
        <p className="font-bold text-xs">Email: </p>
        <p>{email}</p>
      </div>
    </div>
  );
}
