import React, { Children } from 'react';
import { 
    Keyboard,
    KeyboardAvoidingView, 
    ScrollView, 
    TouchableWithoutFeedback 
} from 'react-native';

import defaultTheme from '../../theme';

const KeyboardAvoidingWrapper = ({children}) => {
    const primary = defaultTheme.colors.primary;
    return (
        <KeyboardAvoidingView style = {{flex: 1, backgroundColor: primary}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingWrapper;
