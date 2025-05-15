import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { styles } from './onboardingStyles';
const equipment = ['Barbell', 'Dumbbell', 'Kettlebell', 'Bodyweight', 'Machine'];

export default function EquipmentScreen() {
    const[selected, setSelected] = useState<string | null>(null);
    const router = useRouter();

    const handleNext = () => {
        if (selected) {
            //pass to weaknesses
            router.push('./injuries');

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What equipment do you have access to?</Text>
           
            {equipment.map((equip) => (
                <TouchableOpacity
                    key={equip}
                    style={[styles.option, selected === equip && styles.selectedOption]}
                    onPress={() => setSelected(equip)}
                >
                    <Text style={styles.optionText}>{equip}</Text>
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