"use client";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
export default function BotaoCTA() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/projetos");
      }}
    >
      Ver projetos
    </Button>
  );
}
