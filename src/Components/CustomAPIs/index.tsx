// ButtonGroupAPI.js

import React from 'react';
import { ButtonContext, Button } from 'react-aria-components';

/**
 * ButtonGroup component.
 * @component
 * @param {object} props - The properties of the ButtonGroup.
 * @param {React.ReactNode} props.children - The child components.
 * @param {boolean} props.isDisabled - Indicates whether the button group is disabled.
 */
export function ButtonGroup({ children, isDisabled }) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ButtonContext.Provider value={{ isDisabled }}>
        {children}
      </ButtonContext.Provider>
    </div>
  );
}

/**
 * MyListBox component.
 * @component
 * @param {object} props - The properties of the MyListBox.
 * @param {string} props.children - The text content of the button.
 */
export function MyListBox({ children, ...props }) {
  return <Button {...props} style={{ color: 'blue' }}>{children}</Button>;
}
