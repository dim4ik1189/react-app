import React from 'react';
import { FormGroup, Label, Input} from 'reactstrap';

const CheckBox = ({ label, isSelected, onCheckBoxChange, decoration = {textDecoration: 'none'} }) => (
    <FormGroup check>
        <Label style={decoration}>
            <Input
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onCheckBoxChange}/>
            {label}
        </Label>
    </FormGroup>
);

export default CheckBox;