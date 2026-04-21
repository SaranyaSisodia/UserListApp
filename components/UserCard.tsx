import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  isCustom?: boolean;
};

type Props = {
  user: User;
  onPress: () => void;
};

export default function UserCard({ user, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>
          {user.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{user.name}</Text>
          {user.isCustom && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Custom</Text>
            </View>
          )}
        </View>
        <Text style={styles.detail}>✉️ {user.email}</Text>
        <Text style={styles.detail}>📞 {user.phone}</Text>
        <Text style={styles.detail}>🏢 {user.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  detail: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 2,
  },
  badge: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4F46E5",
  },
  badgeText: {
    fontSize: 10,
    color: "#4F46E5",
    fontWeight: "600",
  },
});
