"use client";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

export default function BotaoClient() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/projetos");
      }}
    >
      Ver mais
    </Button>
  );
}
