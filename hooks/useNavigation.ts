import { useRouter } from 'expo-router';

export function useNavigation() {
  const router = useRouter();

  const navigateTo = (route: Parameters<typeof router.push>[0]) => {
    router.push(route);
  };

  const goBack = () => {
    router.back();
  };

  return {
    navigateTo,
    goBack,
  };
} 