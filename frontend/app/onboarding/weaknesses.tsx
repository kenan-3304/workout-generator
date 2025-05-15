import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { styles } from './onboardingStyles';

const weaknesses = ['Chest', 'Back', 'Shoulders', 'Legs', 'Calves', 'Biceps', 'Tricepts'];

export default function WeaknessesScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const handleNext = () => {
    if (selected.length > 0) {
      // Pass the selected weaknesses to the next screen or context (we'll wire that later)
      router.push('./equipment');
    }
  };

  const toggleSelection = (weakness: string) => {
    setSelected(prev => 
      prev.includes(weakness)
        ? prev.filter(item => item !== weakness)
        : [...prev, weakness]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are your largest weaknesses?</Text>
      <Text style={styles.subtitle}>Select all that apply</Text>

      {weaknesses.map((weak) => (
        <TouchableOpacity
          key={weak}
          style={[
            styles.option,
            selected.includes(weak) && styles.selectedOption,
          ]}
          onPress={() => toggleSelection(weak)}
        >
          <Text style={styles.optionText}>{weak}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.nextButton, selected.length === 0 && styles.disabledButton]}
        onPress={handleNext}
        disabled={selected.length === 0}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

