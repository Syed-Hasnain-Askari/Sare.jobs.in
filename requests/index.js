import useSWR from 'swr';
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export function getData(url) {
	const { data, error } = useSWR(url, fetcher);
	return {
		data: data,
		isLoading: !data && !error,
		error: error,
	};
}
