import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Updates() {
  return (
    <View 
      style={styles.container}
      accessible={true}
      accessibilityLabel="Updates screen main content"
    >
      <View 
        accessible={true}
        accessibilityRole="header"
      >
        <Text 
          style={styles.heading}
          accessible={true}
          accessibilityLabel="Updates and notifications"
        >
          Updates Screen
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});