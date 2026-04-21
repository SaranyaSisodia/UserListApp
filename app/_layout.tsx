import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Users',
          headerStyle: { backgroundColor: '#4F46E5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'User Details',
          headerStyle: { backgroundColor: '#4F46E5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="adduser"
        options={{
          title: 'Add User',
          headerStyle: { backgroundColor: '#4F46E5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack>
  );
}