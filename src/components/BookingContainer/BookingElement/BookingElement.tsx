import React, {ReactNode} from 'react';
import styleBookingElement from "./BookingElement.module.scss";

interface BookingElementElementProps {
    text?: string;
    icon?: ReactNode;
}

class BookingElement extends React.Component<BookingElementElementProps> {
    render() {
        const { text, icon } = this.props;

        return (
            <div className={styleBookingElement.element}>
                <p className={styleBookingElement.element__text}>{text}</p>
                {icon}
            </div>
        );
    }
}

export default BookingElement;
