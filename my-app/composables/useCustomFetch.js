export const useMyFetch = (request, opts) => {
  const config = useRuntimeConfig()
  let data = useFetch(request, { baseURL: config.public.baseURL, ...opts });
  return data.data._rawValue;
}