import { Dropdown, DropdownButton } from 'react-bootstrap';
import * as d from './DropDownElements'

const DropDown = () => {
    return (
        <d.DropDownContainer>
            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Dropdown button"
                className="mt-2"
            >
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </DropdownButton>
        </d.DropDownContainer>
    );
}
 
export default DropDown;
