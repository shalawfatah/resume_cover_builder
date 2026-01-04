import { personal_data } from "../utils/personal_data";
import ContactLink from "./ContactLink";
import ContactSimple from "./ContactSimple";

export default function ContactSection() {
  return (
    <div className="flex flex-row justify-between my-4">
      <div>
        <ContactLink
          text={personal_data.website.label}
          source={personal_data.website.source}
          link={personal_data.website.link}
        />
        <ContactSimple
          text={personal_data.email.label}
          source={personal_data.email.source}
        />
        <ContactLink
          text={personal_data.github.label}
          source={personal_data.github.source}
          link={personal_data.github.link}
        />
      </div>
      <div>
        <ContactSimple
          text={personal_data.phone.label}
          source={personal_data.phone.source}
        />
        <ContactSimple
          text={personal_data.address.label}
          source={personal_data.address.source}
        />
        <ContactLink
          text={personal_data.linkedin.label}
          source={personal_data.linkedin.source}
          link={personal_data.linkedin.link}
        />
      </div>
    </div>
  );
}
