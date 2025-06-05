
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FooterNav = ({ onTabPress, activeTab }) => {
  return (
    <View style={styles.footerNav}>
      {['Home', 'Tasks', 'Add', 'Profile'].map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabButton, activeTab === tab && styles.activeTab]}
          onPress={() => onTabPress(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8B4513',
    paddingVertical: 10,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: '#5A2E0A',
  },
  activeText: {
    fontWeight: 'bold',
  },
});

export default FooterNav;
