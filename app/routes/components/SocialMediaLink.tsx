import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SocialMediaLinkProps {
  icon: IconDefinition;
  link: string;
}

export default function SocialMediaLink({ icon, link }: SocialMediaLinkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className="mr-2" />
    </a>
  );
}
