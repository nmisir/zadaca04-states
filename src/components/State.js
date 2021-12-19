import PropTypes from 'prop-types';

export default function State ({ korisnici }) {
    return (
        <div>
            Korisnici su: {korisnici}
        </div>
    );
}

State.prpoTypes = {
    korisnici: PropTypes.string
}