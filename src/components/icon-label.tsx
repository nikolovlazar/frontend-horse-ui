import React from 'react';
import { HStack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  icon: JSX.Element;
  separator?: JSX.Element;
}>;

const IconLabel = ({ icon, separator, children }: Props) => {
  return (
    <HStack spacing={3} alignItems="center">
      {icon}
      <HStack spacing={1} divider={separator}>
        {React.Children.toArray(children).map(
          (child) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              mx: 1,
            })
        )}
      </HStack>
    </HStack>
  );
};

export default IconLabel;
