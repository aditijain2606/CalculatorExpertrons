
import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

const Calculator = (props) => {

    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)

    return (
        <SafeAreaView >
            <Text style={styles.heading}>Calculator</Text>

            <TextInput
                style={styles.input}
                onChangeText={setNum1}
                value={num1}
                placeholder="Number 1"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={setNum2}
                value={num2}
                placeholder="Number 2"
                keyboardType="numeric"
            />

            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { 
                        props.reduxAdd(num1, num2)
                     }}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { 
                        props.reduxSubtract(num1, num2)
                    }}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { 
                        props.reduxMultiply(num1, num2)
                    }}
                >
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { 
                        props.reduxDivide(num1, num2)
                    }}
                >
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                value={props.result + ''}
                editable={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        margin: 15,
        alignSelf: "center",
        fontSize: 25
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
    },
    button: {
        alignItems: "center",
        width: 50,
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 15,
    },
    buttonText: {
        fontWeight: "bold"
    }
});

const mapStateToProps = (state) => {
    return {
        ...state,
        result: state.result.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxAdd: (num1, num2) => dispatch({
            type: 'ADD',
            val1: num1,
            val2: num2
        }),
        reduxSubtract: (num1, num2) => dispatch({
            type: 'SUBTRACT',
            val1: num1,
            val2: num2
        }),
        reduxMultiply: (num1, num2) => dispatch({
            type: 'MULTIPLY',
            val1: num1,
            val2: num2
        }),
        reduxDivide: (num1, num2) => dispatch({
            type: 'DIVIDE',
            val1: num1,
            val2: num2
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
