// ButtonGroupAPI.tsx

import React,{ ReactNode } from 'react';
import { ButtonContext} from 'react-aria-components';
import {LabelProps,LabelContext, useContextProps} from 'react-aria-components';
// import {CalendarStateContext} from 'react-aria-components';
//...
interface ButtonGroupProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export function ButtonGroup({ children, isDisabled }: ButtonGroupProps): JSX.Element {
  return (
      <ButtonContext.Provider value={{ isDisabled }}>
        {children}
      </ButtonContext.Provider>
  );
}
interface ButtonActioProps {
  children: ReactNode;
}
export function ButtonAction({ children }: ButtonActioProps) {
  return (
    <ButtonContext.Provider
      value={{
        slots: {
          Edit: {
            onPress: () => {
              // your custom action code here
              alert("Edit button pressed");
            },
          },
          Delete: {
            onPress: () => {
              // your custom action code here
              alert("Delete button pressed");
          },
          },
          Save: {
            onPress: () => {
              // your custom action code here
              alert("Save button pressed");
            },
          },
          Back: {
            onPress: () => {
              // your custom action code here
              alert("Back button pressed");
            },
          },
          Share: {
            onPress: () => {
              // your custom action code here
              alert("Share button pressed");
            },
          },
          Bookmark: {
            onPress: () => {
              alert("Bookmark button pressed");
            },
          },
        }
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

// export function MyCustomLabel(props: LabelProps, ref: React.ForwardedRef<HTMLLabelElement>) {
//   [props, ref] = useContextProps(props, ref, LabelContext);

//   return <label {...props} ref={ref} />;
// }
import {CalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';
//...
export function CalendarValue() {
  let state = React.useContext(CalendarStateContext)!;
  let date = state.value?.toDate(getLocalTimeZone());
  let formatted = date ? useDateFormatter().format(date) : 'None';
  return <small>Selected date: {formatted}</small>;
}