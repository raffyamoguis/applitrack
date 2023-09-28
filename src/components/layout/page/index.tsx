import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import PageHeader from "./page-header";
import PageTitle from "./page-title";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export { Page, PageHeader, PageTitle };
