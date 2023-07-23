import { useQuery } from 'react-query';

// Define the interface for your application object
interface Application {
  $id: string;
  $createdAt: string;
  name: string;
  info: string;
  position_applied: string;
  status: string;
}

// Custom hook to filter an array of objects by status using React Query
const useFilterByStatus = (data: Application[], status: string) => {
  // Define a unique key for React Query based on the status value
  const queryKey = ['applications', status];

  // Use React Query to fetch and cache the filtered data
  const { data: filteredData, isLoading } = useQuery<Application[], Error>(
    queryKey,
    async () => {
      // Simulate asynchronous filtering (Replace this with your actual data filtering process)
      await new Promise(resolve => setTimeout(resolve, 500));
      return data.filter(application => application.status === status);
    }
  );

  return { filteredData, loading: isLoading };
};

export default useFilterByStatus;
