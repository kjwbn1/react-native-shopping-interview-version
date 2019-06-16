import React from 'react'
import { Button, Image } from 'react-native'



export default class RegisterScreen extends React.Component {
    


    render() {
        return (
            
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}