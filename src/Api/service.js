import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
export function loginService(url, formValues) {
  console.log(formValues);
  const { isLoading, error, data } = useQuery({
    queryKey: ["loginData"],
    queryFn: () =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => {
        res.json();
        console.log(res);
      }),
  });

  return { isLoading, error, data };
}
