import { Layout } from "@/shared/ui";
import { Header } from "@/widgets/header";

export const baseLayout = (
  <Layout bottomSlot={<div>footer</div>} headerSlot={<Header />} />
);
