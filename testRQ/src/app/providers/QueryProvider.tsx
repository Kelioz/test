import { QueryClient, QueryClientProvider } from 'react-query'

export default function QueryProvider({
    children
}: {
    children: React.ReactNode
}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                enabled: true,
                retryDelay: 500,
                staleTime: 5000,
                refetchInterval: 100
                
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
