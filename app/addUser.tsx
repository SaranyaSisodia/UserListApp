import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddUserScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [company, setCompany] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSave = async () => {
    if (!name || !email || !phone) {
      Alert.alert('Missing Fields', 'Name, Email and Phone are required!');
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      website,
      company: { name: company },
      address: { street, city, zipcode },
      isCustom: true,
    };

    try {
      const existing = await AsyncStorage.getItem('customUsers');
      const customUsers = existing ? JSON.parse(existing) : [];
      customUsers.unshift(newUser);
      await AsyncStorage.setItem('customUsers', JSON.stringify(customUsers));
      Alert.alert('Success!', 'User added successfully!', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save user. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Required Info</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Full Name *"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Email *"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Phone *"
          placeholderTextColor="#9CA3AF"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <Text style={styles.sectionTitle}>Optional Info</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Website"
          placeholderTextColor="#9CA3AF"
          value={website}
          onChangeText={setWebsite}
          autoCapitalize="none"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          placeholderTextColor="#9CA3AF"
          value={company}
          onChangeText={setCompany}
        />
      </View>

      <Text style={styles.sectionTitle}>Address</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Street"
          placeholderTextColor="#9CA3AF"
          value={street}
          onChangeText={setStreet}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#9CA3AF"
          value={city}
          onChangeText={setCity}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Zipcode"
          placeholderTextColor="#9CA3AF"
          value={zipcode}
          onChangeText={setZipcode}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save User</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    paddingVertical: 14,
    fontSize: 15,
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  saveButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});