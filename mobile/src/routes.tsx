import React from 'react'
//Define para nossas rotas como ela devem se comportar
//Responsável por gerenciar o estado do seu aplicativo e vincular seu navegador de nível superior ao ambiente do aplicativo.
import {NavigationContainer} from '@react-navigation/native'
// Navegacao em pilha:  Chamamos as proximas telas no botao e as telas anteriores nao deixam de existir, o usuario consegue retornar
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Points from './pages/Points'

const AppStack = createStackNavigator ()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none" 
                screenOptions={{
                    cardStyle:{
                        backgroundColor:'#f0f0f5'
                    }
                }}>
                <AppStack.Screen name="Home" component= {Home}/>
                <AppStack.Screen name="Points" component= {Points}/>
                <AppStack.Screen name="Detail" component= {Detail}/> 
            </AppStack.Navigator>
        </NavigationContainer>
    )
}


export default Routes