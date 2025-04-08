import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data.userData.subscription)

export function useSubscription(email) {

  const { data, error, mutate } = useSWR(
    email ? `/api/client/data?email=${email}` : null,
    fetcher,
    { refreshInterval: 60000 }
  )

  return {
    subscription: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
}
