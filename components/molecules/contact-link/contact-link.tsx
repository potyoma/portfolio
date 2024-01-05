import Link from "@/components/atoms/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactLink() {
  return (
    <Link
      href="mailto:artyomnovosyolov254@gmail.com"
      className="group flex items-center gap-2"
      external
    >
      Say hi
      <FontAwesomeIcon
        className="group-hover:translate-x-2 group-hover:scale-x-150 transition-transform"
        icon={faArrowRight}
      />
    </Link>
  );
}
