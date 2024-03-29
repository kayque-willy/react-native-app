import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Input';

type Props = {
    control: Control<any>;
    name: string;
}

export function ControlledInput({ control, name, ...rest }: Props) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Input
                    onChangeText={onChange}
                    value={value}
                    {...rest} />
            )}
        />
    );
}