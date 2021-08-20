import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react'
import { Alert } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

export const initValue = {
  manager: null,
  test: 'Test string'
}

export const BLEReducer = (state, action) => {
  switch(action.type) {
    case 'INIT': {
      return {
        ...state,
        manager: new BleManager()
      }
    }
    case 'DESTROY': {
      // if(state.subscription) {
      //   state.subscription.remove();
      // }
      if(state.manager)
        state.manager.destroy();
      return state
    }
    case 'ENABLE': {
      if(!state.manager)
        return state;
      state.manager.state().then(BTState => {
        if(BTState === 'PoweredOff') {
          state.manager.enable();
        }
      });
      return state;
    }
    case 'STATUS_CHANGE': {
      if(!state.manager)
        return state;
        const subscription = state.manager.onStateChange(state => {
        if(state === 'PoweredOn') {
          console.log('Powered on now');
        } else {
          console.log('Powered off now');
          Alert.alert(
            'Bluetooth required',
            'You need enabled bluetooth to use most of app features! Do you want to turn it on?',
            [
              {text: 'Yes'},
              {text: 'No'}
            ]
          );
        }
      });
      return {...state, subscription: subscription};
    }
    default:
      return state;
  }
}

const BLEContext = createContext(initValue);

export function BLEContextProvider({ children }) {
  const [state, dispatch] = useReducer(BLEReducer, initValue);

  useEffect(() => {
    dispatch({ type: 'INIT' });
    dispatch({ type: 'ENABLE' });
    // dispatch({ type: 'STATUS_CHANGE'});

    return () => {
      dispatch({ type: 'DESTROY' });
    }
  }, [])

  // useEffect(() => {
  //     console.log("🚀 ~ file: BLEContext.js ~ line 57 ~ BLEContextProvider ~ state", state)
  // }, [state])


  return (
    <BLEContext.Provider value={{state, dispatch}}>
      { children }
    </BLEContext.Provider>
  )
}

export default BLEContext;