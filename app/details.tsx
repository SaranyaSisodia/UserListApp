import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { street: string; city: string; zipcode: string };
};

export default function DetailsScreen() {
  const { user } = useLocalSearchParams();
  const userData: User = JSON.parse(user as string);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>
          {userData.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.name}>{userData.name}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Info</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.icon}>✉️</Text>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{userData.email}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.icon}>📞</Text>
            <View>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{userData.phone}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.icon}>🌐</Text>
            <View>
              <Text style={styles.label}>Website</Text>
              <Text style={styles.value}>{userData.website}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.icon}>🏢</Text>
            <View>
              <Text style={styles.label}>Company Name</Text>
              <Text style={styles.value}>{userData.company.name}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.icon}>📍</Text>
            <View>
              <Text style={styles.label}>Street</Text>
              <Text style={styles.value}>{userData.address.street}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.icon}>🏙️</Text>
            <View>
              <Text style={styles.label}>City</Text>
              <Text style={styles.value}>{userData.address.city}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.icon}>📮</Text>
            <View>
              <Text style={styles.label}>Zipcode</Text>
              <Text style={styles.value}>{userData.address.zipcode}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 12,
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 24,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    fontSize: 22,
    width: 30,
  },
  label: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginVertical: 12,
  },
});
