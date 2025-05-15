import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { styles } from './onboardingStyles';
const experience = ['Beginner', 'Intermediate', 'Advanced'];

export default function ExperienceScreen() {
    const[selected, setSelected] = useState<string | null>(null);
    const router = useRouter();

    const handleNext = () => {
        if (selected) {
            //pass to weaknesses
            router.push('./weaknesses');

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is your experience level?</Text>
           
            {experience.map((level) => (
                <TouchableOpacity
                    key={level}
                    style={[styles.option, selected === level && styles.selectedOption]}
                    onPress={() => setSelected(level)}
                >
                    <Text style={styles.optionText}>{level}</Text>
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

