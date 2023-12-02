import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/shared/api";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakraTheme";
import "@fontsource-variable/rubik";
import { ErrorBoundary } from "react-error-boundary";
export const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={AppRouter()} />
        </ChakraProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
