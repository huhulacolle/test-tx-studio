import Image from "next/image";
import profil from "@/assets/images/thispersondoesnotexist.jpg";

export default function Avatar() {
  return (
    <Image src={profil} alt="Claudette" className="size-16 rounded-full" />
  );
}
