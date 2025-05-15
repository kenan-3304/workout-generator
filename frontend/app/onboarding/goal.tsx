// app/onboarding/goal.tsx

import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { styles } from './onboardingStyles';

const goals = ['Muscle Gain', 'Cardio', 'Weight Loss', 'Maintenance'];

export default function GoalScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selected) {
      // Pass the selected goal to the next screen or context (we’ll wire that later)
      router.push('./experience');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your primary fitness goal?</Text>

      {goals.map((goal) => (
        <TouchableOpacity
          key={goal}
          style={[
            styles.option,
            selected === goal && styles.selectedOption,
          ]}
          onPress={() => setSelected(goal)}
        >
          <Text style={styles.optionText}>{goal}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.nextButton, !selected && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selected}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

